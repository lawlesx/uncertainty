'use client'

import { animate, AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useApp } from './Providers'

const WORDS = ['Interfaces', 'Motion', 'Shaders', 'Worlds']

export default function Preloader() {
  const { setReady } = useApp()
  const [done, setDone] = useState(false)
  const [word, setWord] = useState(0)
  const count = useRef<HTMLSpanElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduce ? 0.4 : 2
    const fonts = document.fonts?.ready ?? Promise.resolve()
    let finished = false

    const controls = animate(0, 100, {
      duration,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (count.current) count.current.textContent = String(Math.round(v)).padStart(3, '0')
        if (bar.current) bar.current.style.transform = `scaleX(${v / 100})`
        setWord(Math.min(WORDS.length - 1, Math.floor((v / 100) * WORDS.length)))
      },
      onComplete: () => {
        fonts.then(() => {
          if (finished) return
          finished = true
          setDone(true)
          setTimeout(() => setReady(true), reduce ? 0 : 350)
        })
      },
    })
    return () => {
      finished = true
      controls.stop()
    }
  }, [setReady])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-5 md:p-10"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            <span>Aniruddha Sil</span>
            <span>Portfolio — v3</span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="h-[1.1em] overflow-hidden font-display text-3xl font-bold md:text-5xl">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={word}
                  className="block text-gradient animate-hue"
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {WORDS[word]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span
              ref={count}
              className="font-display text-[22vw] font-extrabold leading-[0.8] tracking-tighter tabular-nums md:text-[14vw]"
            >
              000
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-line">
            <div
              ref={bar}
              className="h-full origin-left bg-gradient-to-r from-violet via-magenta to-lime"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
