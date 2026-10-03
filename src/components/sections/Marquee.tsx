'use client'

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'
import { useRef } from 'react'

const wrap = (min: number, max: number, v: number) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

function Tape({
  items,
  baseVelocity,
  className,
  rotate,
}: {
  items: string[]
  baseVelocity: number
  className: string
  rotate: number
}) {
  const base = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [-2000, 0, 2000], [-5, 0, 5], { clamp: false })
  const skew = useTransform(smooth, [-3000, 3000], [-12, 12])
  const x = useTransform(base, (v) => `${wrap(-25, 0, v)}%`)
  const direction = useRef(1)

  useAnimationFrame((_, delta) => {
    let move = direction.current * baseVelocity * (delta / 1000)
    const f = factor.get()
    if (f < 0) direction.current = -1
    else if (f > 0) direction.current = 1
    move += direction.current * move * Math.abs(f)
    base.set(base.get() + move)
  })

  const content = items.map((t, i) => (
    <span key={i} className="flex items-center gap-[0.35em] pr-[0.35em]">
      {t}
      <svg viewBox="0 0 24 24" className="h-[0.5em] w-[0.5em] fill-current" aria-hidden>
        <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
      </svg>
    </span>
  ))

  return (
    <div className={`-ml-[5vw] w-[110vw] overflow-hidden py-3 md:py-4 ${className}`} style={{ rotate: `${rotate}deg` }}>
      <motion.div
        className="flex whitespace-nowrap font-display text-[9vw] font-extrabold uppercase leading-none tracking-tight md:text-[6vw]"
        style={{ x, skewX: skew }}
      >
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="flex" aria-hidden={k > 0}>
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section aria-label="What I do" data-theme="0" className="relative z-10 -my-4 overflow-hidden py-16 md:py-24">
      <Tape
        items={['Frontend', 'Creative Dev', 'WebGL', 'React', 'Motion']}
        baseVelocity={-2}
        rotate={-3}
        className="bg-lime text-ink shadow-[0_20px_80px_-20px_rgba(198,255,61,0.6)]"
      />
      <Tape
        items={['Blender', 'Unreal Engine', 'Shaders', '3D Art', 'Game Dev']}
        baseVelocity={2}
        rotate={2.5}
        className="-mt-6 bg-magenta text-paper shadow-[0_20px_80px_-20px_rgba(255,61,129,0.7)] md:-mt-10"
      />
    </section>
  )
}
