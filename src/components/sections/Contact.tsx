'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { profile, socials } from '@/lib/data'
import { useApp } from '../Providers'
import Magnetic from '../ui/Magnetic'
import Icon from '../ui/Icon'
import SplitReveal from '../ui/SplitReveal'

function EmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Magnetic strength={0.2}>
        <a
          href={`mailto:${profile.email}`}
          className="group relative inline-flex max-w-full items-center gap-3 overflow-hidden rounded-full bg-paper py-3.5 pl-5 pr-3 text-ink sm:gap-4 sm:pl-7 sm:pr-4 md:py-5 md:pl-9"
          data-cursor="Say hi"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-lime via-cyan to-magenta transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-x-0" />
          <span className="relative font-display text-[clamp(0.9rem,4.1vw,1.5rem)] font-bold">{profile.email}</span>
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:rotate-45 md:h-12 md:w-12">
            <Icon name="up-right" className="h-4 w-4 md:h-5 md:w-5" />
          </span>
        </a>
      </Magnetic>
      <button
        type="button"
        onClick={copy}
        className="glass relative h-14 min-w-28 overflow-hidden rounded-full px-6 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-paper/10 md:h-[4.5rem]"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? 'done' : 'copy'}
            className={`block ${copied ? 'text-lime' : ''}`}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}

export default function Contact() {
  const { scrollTo } = useApp()
  const year = new Date().getFullYear()

  return (
    <section id="contact" data-theme="6" className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
          <span className="relative h-2 w-2">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-lime" />
            <span className="absolute inset-0 rounded-full bg-lime" />
          </span>
          Open to interesting work & collabs
        </div>
        <h2 className="font-display text-[14vw] font-extrabold leading-[0.88] tracking-[-0.04em] md:text-[10vw]">
          <SplitReveal text="Let's make" className="block" stagger={0.08} />
          <SplitReveal text="it loud." className="block" wordClassName="text-gradient animate-hue" delay={0.15} stagger={0.08} />
        </h2>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-paper/80 md:text-xl">
          Got a product that needs a sharp frontend, a launch that needs some motion, or a weird 3D idea? My inbox is
          open.
        </p>
        <div className="mt-10">
          <EmailButton />
        </div>
      </div>

      <footer className="mx-auto mt-24 w-full max-w-[1400px] border-t border-line pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-xl font-semibold md:text-2xl"
                >
                  <span className="relative">
                    {s.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  <Icon name="up-right" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="self-start font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70 transition-colors hover:text-lime md:self-auto"
          >
            Back to top ↑
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 md:flex-row md:justify-between">
          <span>© {year} {profile.name}</span>
          <span>Built with Next.js · React Three Fiber · Motion</span>
          <span>v3 — previous: v1 madness, v2 uncertainty</span>
        </div>
      </footer>
    </section>
  )
}
