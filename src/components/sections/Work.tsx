'use client'

import { motion, useMotionValue, useSpring, useTransform, useVelocity, type MotionValue } from 'motion/react'
import { useState } from 'react'
import { projects } from '@/lib/data'
import SectionLabel from '../ui/SectionLabel'
import SplitReveal from '../ui/SplitReveal'
import Magnetic from '../ui/Magnetic'
import ProjectCover from '../ui/ProjectCover'

const EASE = [0.16, 1, 0.3, 1] as const

// Preview card that trails the cursor, tilting with horizontal speed.
function FloatingPreview({ active, x, y }: { active: number | null; x: MotionValue<number>; y: MotionValue<number> }) {
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 })
  const vx = useVelocity(sx)
  const rotate = useTransform(vx, [-2500, 2500], [-18, 18], { clamp: true })
  const skew = useTransform(vx, [-2500, 2500], [10, -10], { clamp: true })
  const index = active ?? 0

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[260px] w-[380px] md:block"
      style={{ x: sx, y: sy, rotate, skewX: skew, translateX: '-50%', translateY: '-50%' }}
      initial={false}
      animate={{ scale: active === null ? 0 : 1, opacity: active === null ? 0 : 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <motion.div
          className="absolute inset-x-0 top-0"
          animate={{ y: `${-index * 260}px` }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {projects.map((p) => (
            <div key={p.title} className="relative h-[260px] w-full">
              <ProjectCover project={p} sizes="380px" />
            </div>
          ))}
        </motion.div>
        <div
          className="absolute inset-0 rounded-2xl ring-2 ring-inset transition-colors duration-500"
          style={{ ['--tw-ring-color' as string]: projects[index].color }}
        />
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [active, setActive] = useState<number | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  return (
    <section
      id="work"
      data-theme="3"
      className="relative px-5 py-28 md:px-10 md:py-40"
      onPointerMove={(e) => {
        x.set(e.clientX)
        y.set(e.clientY)
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <SectionLabel index="03">Selected work</SectionLabel>
            <SplitReveal
              as="h2"
              text="Things I've shipped & played with"
              className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl"
            />
          </div>
          <p className="max-w-xs text-base leading-relaxed text-paper/70">
            A few personal and freelance builds. Client work at my jobs lives behind NDAs, so here is the fun stuff.
          </p>
        </div>

        <ul className="border-t border-line" onPointerLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              className="group relative border-b border-line"
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
            >
              <span
                className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-y-100"
                style={{ background: p.color }}
                aria-hidden
              />
              <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 py-6 transition-colors duration-300 group-hover:text-ink md:grid-cols-[4rem_1fr_16rem_5rem_auto] md:py-9">
                <span className="font-mono text-xs text-paper/50 transition-colors group-hover:text-ink/70">0{i + 1}</span>
                <h3 className="font-display text-3xl font-bold tracking-tight transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-3 md:text-5xl xl:text-6xl">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="Visit"
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {p.title}
                  </a>
                </h3>
                <span className="col-span-3 hidden font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 transition-colors group-hover:text-ink/70 md:col-span-1 md:block">
                  {p.kind}
                </span>
                <span className="hidden font-mono text-xs text-paper/60 transition-colors group-hover:text-ink/70 md:block">{p.year}</span>
                <span className="flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 hidden rounded-full border border-current px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100 md:inline-block"
                      data-cursor="Code"
                    >
                      Code
                    </a>
                  )}
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-current transition-transform duration-500 group-hover:-rotate-45 md:h-12 md:w-12">
                    →
                  </span>
                </span>
                <div className="relative col-span-3 aspect-[16/9] overflow-hidden rounded-xl md:hidden">
                  <ProjectCover project={p} sizes="90vw" />
                </div>
                <p className="col-span-3 text-sm text-paper/70 md:hidden">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">{p.kind} · {p.year}</span>
                  <br />
                  {p.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <a
              href="https://github.com/lawlesx"
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-paper hover:text-ink"
            >
              More on GitHub <span aria-hidden>↗</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <FloatingPreview active={active} x={x} y={y} />
    </section>
  )
}
