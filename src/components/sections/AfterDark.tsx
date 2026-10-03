'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { renders, socials, type Render } from '@/lib/data'
import SectionLabel from '../ui/SectionLabel'
import Icon from '../ui/Icon'

const EASE = [0.16, 1, 0.3, 1] as const
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

function RenderCard({ item, index, active }: { item: Render; index: number; active: boolean }) {
  const isVideo = /youtube|reel/.test(item.link)
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      data-cursor={isVideo ? 'Watch' : 'View'}
      className={`group relative block shrink-0 overflow-hidden rounded-2xl border border-paper/10 transition-[filter,opacity] duration-700 ${
        item.tall ? 'aspect-[9/16]' : 'aspect-[16/10]'
      } h-[48svh] md:h-[58svh] ${active ? 'opacity-100' : 'opacity-60 saturate-50'}`}
    >
      <Image
        src={item.image}
        alt={`${item.title} — ${item.medium}`}
        fill
        sizes={item.tall ? '(max-width: 768px) 40vw, 30vh' : '(max-width: 768px) 80vw, 60vw'}
        className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-none tracking-tight md:text-4xl">{item.title}</h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/70">{item.medium}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 translate-y-3 place-items-center rounded-full bg-blood text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon name={isVideo ? 'play' : 'up-right'} className="h-4 w-4" />
        </span>
      </div>
    </a>
  )
}

export default function AfterDark() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [active, setActive] = useState(0)

  useIsoLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  // Lenis already smooths the scroll, so map progress straight to the track
  const x = useTransform(scrollYProgress, (v) => -v * distance)
  const titleX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const cards = useRef<(HTMLDivElement | null)[]>([])
  // the card closest to the middle of the screen is the active one
  const pick = () => {
    const mid = window.innerWidth / 2
    let best = 0
    let bestDist = Infinity
    cards.current.forEach((el, i) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const d = Math.abs(r.left + r.width / 2 - mid)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }
  // measure after motion has applied this frame's transform
  useMotionValueEvent(scrollYProgress, 'change', () => requestAnimationFrame(pick))

  const instagram = socials.find((s) => s.label === 'Instagram')?.href
  const youtube = socials.find((s) => s.label === 'YouTube')?.href

  return (
    <section
      id="after-dark"
      ref={section}
      data-theme="4"
      className="relative"
      style={{ height: distance ? `calc(${distance}px + 100svh)` : '400svh' }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* the render nearest the centre becomes the room's ambient light */}
        <div className="absolute inset-0" aria-hidden>
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 0.4, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              <Image src={renders[active].image} alt="" fill sizes="50vw" quality={40} className="object-cover blur-3xl" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
        </div>

        <motion.p
          className="pointer-events-none absolute -bottom-[0.18em] left-0 whitespace-nowrap font-display text-[24vw] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:1.5px_rgb(245_242_255/0.12)]"
          style={{ x: titleX }}
          aria-hidden
        >
          After Dark · Blender · Unreal ·
        </motion.p>

        <motion.div ref={track} className="relative flex h-full w-max items-center gap-6 px-5 md:gap-10 md:px-10" style={{ x }}>
          <div className="flex w-[82vw] shrink-0 flex-col justify-center md:w-[42vw] md:pr-10">
            <SectionLabel index="04">After dark</SectionLabel>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Worlds I build at <span className="italic text-blood">3am</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
              When the editor closes, Blender opens. Short films, moody stills and odd little loops — modelled, lit and
              rendered for fun. Scroll sideways through the night shift.
            </p>
            <div className="mt-8 flex gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
              {youtube && (
                <a href={youtube} target="_blank" rel="noreferrer" className="rounded-full bg-blood px-5 py-3 transition-colors hover:bg-paper hover:text-ink">
                  YouTube ↗
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noreferrer" className="glass rounded-full px-5 py-3 transition-colors hover:bg-paper hover:text-ink">
                  Instagram ↗
                </a>
              )}
            </div>
          </div>

          {renders.map((r, i) => (
            <div
              key={r.title}
              ref={(el) => {
                cards.current[i] = el
              }}
              className={i % 2 ? 'md:translate-y-10' : 'md:-translate-y-8'}
            >
              <RenderCard item={r} index={i} active={i === active} />
            </div>
          ))}

          <div className="flex w-[60vw] shrink-0 flex-col items-start justify-center md:w-[28vw]">
            <p className="font-display text-4xl font-bold leading-tight md:text-5xl">More renders, reels & breakdowns on my socials.</p>
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-blood underline decoration-1 underline-offset-8"
              >
                Follow along ↗
              </a>
            )}
          </div>
        </motion.div>

        <div className="absolute inset-x-5 bottom-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70 md:inset-x-10 md:bottom-10">
          <span className="tabular-nums">{String(active + 1).padStart(2, '0')}</span>
          <div className="relative h-px flex-1 bg-line">
            <motion.div className="absolute inset-0 origin-left bg-blood" style={{ scaleX: scrollYProgress }} />
          </div>
          <span>{String(renders.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
