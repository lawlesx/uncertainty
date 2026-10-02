'use client'

import Lenis from 'lenis'
import { MotionConfig } from 'motion/react'
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { scene, trackPointer } from '@/lib/store'

type AppState = {
  ready: boolean
  setReady: (ready: boolean) => void
  scrollTo: (target: string | number) => void
}

const AppContext = createContext<AppState>({
  ready: false,
  setReady: () => {},
  scrollTo: () => {},
})

export const useApp = () => useContext(AppContext)

export default function Providers({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const lenis = useRef<Lenis | null>(null)

  // pointer + reduced motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => (scene.reducedMotion = media.matches)
    syncMotion()
    media.addEventListener('change', syncMotion)

    const onMove = (e: PointerEvent) => trackPointer(e.clientX, e.clientY)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      media.removeEventListener('change', syncMotion)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  // smooth scroll + scroll-derived scene state
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const contact = () => document.getElementById('contact')

    const update = (scrollY: number, velocity: number) => {
      const h = window.innerHeight
      const max = Math.max(1, document.documentElement.scrollHeight - h)
      scene.scrollY = scrollY
      scene.scroll = scrollY / max
      scene.velocity = velocity
      scene.heroProgress = Math.min(1, Math.max(0, scrollY / (h * 0.9)))
      const el = contact()
      if (el) {
        const top = el.getBoundingClientRect().top
        scene.contactProgress = Math.min(1, Math.max(0, (h - top) / h))
      }
    }

    if (reduce) {
      const onScroll = () => update(window.scrollY, 0)
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => window.removeEventListener('scroll', onScroll)
    }

    const instance = new Lenis({ autoRaf: true, lerp: 0.09, anchors: true })
    lenis.current = instance
    instance.on('scroll', (l: Lenis) => update(l.scroll, l.velocity))
    update(window.scrollY, 0)
    return () => {
      instance.destroy()
      lenis.current = null
    }
  }, [])

  // hold scrolling while the preloader runs
  useEffect(() => {
    if (ready) lenis.current?.start()
    else lenis.current?.stop()
    document.documentElement.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  // background palette follows the section crossing the middle of the screen
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-theme]'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) scene.theme = Number(entry.target.getAttribute('data-theme')) || 0
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const scrollTo = (target: string | number) => {
    if (lenis.current) lenis.current.scrollTo(target, { duration: 1.6 })
    else if (typeof target === 'number') window.scrollTo({ top: target })
    else document.querySelector(target)?.scrollIntoView()
  }

  return (
    <AppContext.Provider value={{ ready, setReady, scrollTo }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </AppContext.Provider>
  )
}
