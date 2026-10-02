'use client'

import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { useEffect, useId, useRef } from 'react'
import { profile } from '@/lib/data'
import ScrollWords from '../ui/ScrollWords'
import SectionLabel from '../ui/SectionLabel'
import SplitReveal from '../ui/SplitReveal'

function Badge() {
  const text = 'FRONTEND ✦ MOTION ✦ 3D ✦ GAMES ✦ '
  return (
    <div className="absolute -right-6 -top-6 z-20 h-28 w-28 md:-right-10 md:-top-10 md:h-36 md:w-36">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-lime" />
        <text className="fill-ink font-mono text-[9.2px] font-bold tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl font-extrabold text-ink">✦</span>
    </div>
  )
}

// Photo with a cursor-driven liquid warp (SVG displacement) and 3D tilt.
function Portrait() {
  const id = useId().replace(/:/g, '')
  const card = useRef<HTMLDivElement>(null)
  const warp = useRef<HTMLDivElement>(null)
  const disp = useRef<SVGFEDisplacementMapElement>(null)
  const turb = useRef<SVGFETurbulenceElement>(null)
  const energy = useRef(0)
  const last = useRef({ x: 0, y: 0, t: 0 })

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 120, damping: 14 })
  const sry = useSpring(ry, { stiffness: 120, damping: 14 })
  const glareX = useTransform(sry, [-12, 12], ['0%', '100%'])
  const glare = useTransform(glareX, (x) => `radial-gradient(circle at ${x} 30%, rgba(255,255,255,0.35), transparent 55%)`)

  useEffect(() => {
    let raf = 0
    let t = 0
    let active = false
    // only run the (expensive) filter while there is energy to show
    const loop = () => {
      energy.current *= 0.93
      if (energy.current < 0.2) {
        if (active && warp.current) warp.current.style.filter = 'none'
        active = false
      } else {
        if (!active && warp.current) warp.current.style.filter = `url(#liquid-${id})`
        active = true
        t += 0.02
        disp.current?.setAttribute('scale', Math.min(energy.current, 60).toFixed(2))
        turb.current?.setAttribute('baseFrequency', `${(0.008 + Math.sin(t) * 0.002).toFixed(4)} ${(0.016 + Math.cos(t) * 0.003).toFixed(4)}`)
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [id])

  const onMove = (e: React.PointerEvent) => {
    const el = card.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 22)
    rx.set(-py * 22)
    const now = performance.now()
    const dist = Math.hypot(e.clientX - last.current.x, e.clientY - last.current.y)
    if (now - last.current.t < 100) energy.current += dist * 0.6
    last.current = { x: e.clientX, y: e.clientY, t: now }
  }

  return (
    <div className="relative mx-auto w-full max-w-md [perspective:1200px] lg:mx-0">
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id={`liquid-${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence ref={turb} type="fractalNoise" baseFrequency="0.008 0.016" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap ref={disp} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <motion.div
        ref={card}
        className="group relative aspect-[4/5] w-full"
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        onPointerMove={onMove}
        onPointerLeave={() => {
          rx.set(0)
          ry.set(0)
        }}
        data-cursor="Hello!"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-magenta via-violet to-cyan opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-paper/20">
          <div ref={warp} className="absolute inset-0">
            <Image
              src={profile.photo}
              alt="Portrait of Aniruddha Sil looking out of a train window"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="scale-110 object-cover object-[30%_center] transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-100"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-violet/70 via-magenta/30 to-transparent mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
          <motion.div className="absolute inset-0 mix-blend-overlay" style={{ background: glare }} />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10px] uppercase tracking-[0.25em]">
            <span>Somewhere, India</span>
            <span>Fig. 01</span>
          </div>
        </div>
        <div style={{ transform: 'translateZ(60px)' }}>
          <Badge />
        </div>
      </motion.div>
    </div>
  )
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(value, 10)
  const suffix = value.replace(String(num), '')
  useEffect(() => {
    if (!inView || Number.isNaN(num)) return
    const c = animate(0, num, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => ref.current && (ref.current.textContent = `${Math.round(v)}${suffix}`),
    })
    return () => c.stop()
  }, [inView, num, suffix])
  return <span ref={ref}>{Number.isNaN(num) ? value : `0${suffix}`}</span>
}

export default function About() {
  return (
    <section id="about" data-theme="1" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <Portrait />
        <div>
          <SectionLabel index="01">About</SectionLabel>
          <SplitReveal
            as="h2"
            text="Hi, I'm Aniruddha. I make the web feel alive."
            className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl"
          />
          <ScrollWords text={profile.about[0]} className="mt-10 text-xl leading-relaxed md:text-2xl" />
          <div className="mt-8 grid gap-5 text-base leading-relaxed text-paper/75 md:grid-cols-2">
            {profile.about.slice(1).map((p) => (
              <motion.p
                key={p}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {profile.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-extrabold md:text-6xl">
                  <span className="text-gradient animate-hue">
                    <Counter value={s.value} />
                  </span>
                </dd>
                <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 md:text-[11px]">{s.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
