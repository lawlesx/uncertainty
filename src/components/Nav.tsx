'use client'

import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { nav, profile } from '@/lib/data'
import { useApp } from './Providers'
import Magnetic from './ui/Magnetic'

function LocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: profile.timezone,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])
  return <span suppressHydrationWarning>{time || '--:--'} IST</span>
}

export default function Nav() {
  const { ready, scrollTo } = useApp()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const go = (href: string) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-violet via-magenta to-lime"
        style={{ scaleX: progress }}
      />
      <motion.header
        className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-4 md:px-10 md:py-6"
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            go('#top')
          }}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-paper/60 font-display text-sm font-bold transition-colors duration-500 group-hover:bg-paper group-hover:text-ink">
            AS
          </span>
          <span className="hidden font-mono text-[11px] uppercase leading-tight tracking-[0.2em] sm:block">
            Aniruddha Sil
            <br />
            <span className="text-muted">Frontend · 3D</span>
          </span>
        </a>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/80 transition-colors hover:bg-paper hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/80 md:flex">
            <span className="relative h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-lime" />
              <span className="absolute inset-0 rounded-full bg-lime" />
            </span>
            <LocalTime />
          </span>
          <Magnetic className="hidden lg:inline-block">
            <a
              href="#contact"
              className="block rounded-full bg-paper px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-lime"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="glass relative z-[80] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span className="block h-px w-5 bg-paper" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} />
            <motion.span className="block h-px w-5 bg-paper" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-end bg-ink/95 px-5 pb-10 pt-24 backdrop-blur-xl lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 42px) 42px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 42px) 42px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 42px) 42px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      go(item.href)
                    }}
                    className="flex items-baseline gap-4 font-display text-[2.6rem] font-bold leading-tight tracking-tight sm:text-6xl"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.06 }}
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span>{profile.email}</span>
              <LocalTime />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
