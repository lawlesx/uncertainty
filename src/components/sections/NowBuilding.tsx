'use client'

import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { game } from '@/lib/data'
import SectionLabel from '../ui/SectionLabel'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

// Decodes text from random glyphs when it scrolls into view.
function Scramble({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let raf = 0
    const total = text.length * 3 + 18
    const tick = () => {
      frame++
      setOut(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (frame > i * 3 + 12) return ch
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join(''),
      )
      if (frame < total) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, text])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  )
}

function Screen() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-lime/30 bg-black shadow-[0_0_120px_-30px_rgba(198,255,61,0.6)]">
      {/* static noise */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-screen" aria-hidden>
        <filter id="tv-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch">
            <animate attributeName="seed" from="1" to="40" dur="1.2s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix values="0 0 0 0 0.78  0 0 0 0 1  0 0 0 0 0.24  0 0 0 1.2 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#tv-noise)" />
      </svg>
      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0 1px, transparent 1px 3px)' }}
        aria-hidden
      />
      <div className="absolute inset-x-0 h-1/3 animate-scanline bg-gradient-to-b from-transparent via-lime/10 to-transparent" aria-hidden />

      {/* corner brackets */}
      {['left-4 top-4 border-l border-t', 'right-4 top-4 border-r border-t', 'left-4 bottom-4 border-l border-b', 'right-4 bottom-4 border-r border-b'].map((c) => (
        <span key={c} className={`absolute h-6 w-6 border-lime ${c}`} aria-hidden />
      ))}

      <div className="absolute left-8 top-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-lime">
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-blood" /> Rec · UE5 viewport
      </div>
      <div className="absolute right-8 top-7 font-mono text-[10px] uppercase tracking-[0.25em] text-lime/70">FPS 60</div>

      <div className="absolute inset-0 grid place-items-center p-8 text-center">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-lime md:text-4xl">Signal incoming</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-lime/70 md:text-xs">
            Trailer & screenshots — coming soon
          </p>
        </div>
      </div>
    </div>
  )
}

export default function NowBuilding() {
  return (
    <section id="now-building" data-theme="5" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionLabel index="05">Now building</SectionLabel>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight">
            <Scramble text={game.codename} className="block text-5xl text-lime md:text-7xl xl:text-8xl" />
            <span className="mt-2 block text-3xl md:text-5xl">A game, finally.</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/80">{game.pitch}</p>

          <div className="mt-10 max-w-lg overflow-hidden rounded-xl border border-lime/25 bg-black/40 font-mono text-xs backdrop-blur">
            <div className="flex items-center gap-2 border-b border-lime/20 px-4 py-2.5 text-[10px] uppercase tracking-[0.25em] text-lime/70">
              <span className="h-2 w-2 rounded-full bg-blood" />
              <span className="h-2 w-2 rounded-full bg-orange" />
              <span className="h-2 w-2 rounded-full bg-lime" />
              <span className="ml-2">devlog.txt</span>
            </div>
            <dl className="divide-y divide-lime/10">
              {game.log.map((row, i) => (
                <motion.div
                  key={row.label}
                  className="flex justify-between px-4 py-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                >
                  <dt className="uppercase tracking-[0.2em] text-paper/50">{row.label}</dt>
                  <dd className="text-lime">{row.value}</dd>
                </motion.div>
              ))}
            </dl>
            <p className="px-4 py-3 text-paper/60">
              &gt; status: {game.status.toLowerCase()}
              <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-lime" />
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 60 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          <Screen />
        </motion.div>
      </div>
    </section>
  )
}
