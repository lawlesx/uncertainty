'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '@/lib/data'
import { useApp } from '../Providers'

// Web apps lead (fixed); the rest of the craft rotates underneath
const ROLES = ['interfaces', 'experiences', '3D worlds', 'games']
const HOVER_COLORS = ['#ff3d81', '#22e1ff', '#c6ff3d', '#ff8a3d', '#7b5cff']
const EASE = [0.16, 1, 0.3, 1] as const

function BigWord({ word, play, delay, className }: { word: string; play: boolean; delay: number; className?: string }) {
  return (
    <span className={`flex w-fit overflow-hidden ${className ?? ''}`} aria-hidden>
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ y: '105%' }}
          animate={play ? { y: '0%' } : undefined}
          transition={{ duration: 1.3, ease: EASE, delay: delay + i * 0.045 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              y: '-12%',
              skewX: -8,
              color: HOVER_COLORS[i % HOVER_COLORS.length],
              transition: { type: 'spring', stiffness: 400, damping: 12 },
            }}
          >
            {ch}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}

function RotatingRole({ play }: { play: boolean }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!play) return
    const id = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [play])
  return (
    <span className="relative inline-flex h-[1.35em] items-end overflow-hidden align-baseline">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ROLES[i]}
          className="text-gradient animate-hue inline-block whitespace-nowrap font-semibold italic"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Sizes the heading so its widest line spans the container edge to edge.
function useFitText(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      el.style.fontSize = '100px'
      const widest = Math.max(...Array.from(el.children).map((c) => (c as HTMLElement).scrollWidth))
      const available = el.parentElement?.clientWidth ?? el.clientWidth
      if (widest > 0) el.style.fontSize = `${Math.floor((available / widest) * 100 * 0.995)}px`
    }
    fit()
    document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    if (el.parentElement) ro.observe(el.parentElement)
    return () => ro.disconnect()
  }, [ref])
}

export default function Hero() {
  const { ready } = useApp()
  const ref = useRef<HTMLElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  useFitText(title)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const metaY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, ease: EASE, delay },
  })

  return (
    <section
      id="top"
      ref={ref}
      data-theme="0"
      className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-6 pt-28 md:px-10 md:pb-10"
    >
      <motion.div style={{ y: metaY }} className="pointer-events-none absolute left-5 top-28 md:left-10 md:top-32">
        <motion.p {...fade(0.9)} className="max-w-[16rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-paper/70">
          ( Portfolio — 2026 )
          <br />
          Websites, motion
          <br />& tiny 3D worlds
        </motion.p>
      </motion.div>

      <motion.div style={{ y: nameY, opacity: nameOpacity }}>
        <motion.div {...fade(0.5)} className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/80 md:mb-6">
          <span className="h-px w-10 bg-paper/60" />
          {profile.role} @ Thoughtworks
        </motion.div>

        <div className="relative">
          <h1
            ref={title}
            className="font-display text-[10vw] font-extrabold uppercase leading-[0.82] tracking-[-0.04em]"
            aria-label={profile.name}
          >
            <BigWord word={profile.firstName} play={ready} delay={0.15} />
            <BigWord word={profile.lastName} play={ready} delay={0.5} />
          </h1>
          <motion.p
            {...fade(1.1)}
            className="absolute bottom-[1.4vw] right-0 hidden max-w-[22rem] text-base leading-snug text-paper/85 md:block lg:max-w-[26rem] lg:text-lg"
          >
            {profile.intro}
          </motion.p>
        </div>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 items-end gap-6 md:mt-10 md:grid-cols-3">
        <motion.p {...fade(1.2)} className="font-display text-2xl leading-tight md:text-3xl">
          I design &amp; build <span className="font-semibold">web apps</span>
          <span className="mt-1 block text-lg text-paper/70 md:text-xl">
            along with <RotatingRole play={ready} />
          </span>
        </motion.p>
        <motion.p {...fade(1.25)} className="text-sm leading-relaxed text-paper/80 md:hidden">
          {profile.intro}
        </motion.p>

        <motion.a
          {...fade(1.35)}
          href="#about"
          className="group hidden items-center justify-center gap-3 justify-self-center font-mono text-[11px] uppercase tracking-[0.25em] text-paper/80 md:flex"
          data-cursor="Scroll"
        >
          <span className="relative block h-12 w-7 rounded-full border border-paper/50">
            <motion.span
              className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-lime"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
          Scroll to explore
        </motion.a>

        <motion.ul
          {...fade(1.45)}
          className="hidden justify-self-end text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-paper/70 md:block"
        >
          <li>Based in {profile.location}</li>
          <li>Frontend · WebGL · Blender</li>
          <li className="text-lime">Building a game in UE5</li>
        </motion.ul>
      </div>
    </section>
  )
}
