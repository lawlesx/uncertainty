'use client'

import { AnimatePresence, motion, useInView, useScroll, useSpring } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { experience, type Job } from '@/lib/data'
import SectionLabel from '../ui/SectionLabel'
import SplitReveal from '../ui/SplitReveal'

const EASE = [0.16, 1, 0.3, 1] as const

function JobItem({ job, index, onActive }: { job: Job; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null)
  const centered = useInView(ref, { margin: '-45% 0px -45% 0px' })
  const seen = useInView(ref, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    if (centered) onActive(index)
  }, [centered, index, onActive])

  return (
    <li ref={ref} className="group relative pb-20 pl-10 last:pb-0 md:pl-16">
      <span
        className="absolute left-0 top-3 -translate-x-1/2 rounded-full transition-all duration-700"
        style={{
          width: centered ? 18 : 10,
          height: centered ? 18 : 10,
          background: centered ? job.color : 'rgb(245 242 255 / 0.4)',
          boxShadow: centered ? `0 0 0 6px ${job.color}33, 0 0 40px ${job.color}` : 'none',
          marginLeft: 1,
        }}
      />
      <motion.div
        className="@container"
        initial={{ opacity: 0, y: 60 }}
        animate={seen ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">{job.period}</p>
        <h3
          className="mt-3 bg-clip-text font-display text-[min(3.5rem,8cqw)] font-extrabold leading-[0.95] tracking-tight transition-[color] duration-500"
          style={{
            backgroundImage: `linear-gradient(100deg, ${job.color}, #f5f2ff 70%)`,
            color: centered ? 'transparent' : '#f5f2ff',
            WebkitBackgroundClip: 'text',
          }}
        >
          {job.company}
        </h3>
        <p className="mt-4 font-display text-xl font-semibold md:text-2xl">{job.role}</p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-paper/75">{job.summary}</p>
        <ul className="mt-5 space-y-2 text-sm text-paper/70">
          {job.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span style={{ color: job.color }}>→</span>
              {p}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {job.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80 transition-colors duration-300 group-hover:border-paper/40"
            >
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const list = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 0.6', 'end 0.6'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const job = experience[active]

  return (
    <section id="experience" data-theme="2" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionLabel index="02">Experience</SectionLabel>
          <SplitReveal
            as="h2"
            text="Three teams, one obsession: interfaces that feel good."
            className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl"
          />
          <div className="mt-12 hidden items-end gap-6 lg:flex">
            <div className="relative h-[7.5rem] overflow-hidden font-display text-[7.5rem] font-extrabold leading-none tabular-nums">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  className="block"
                  style={{ color: job.color }}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  0{active + 1}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
              / 0{experience.length}
              <br />
              <span className="text-paper">{job.company}</span>
            </div>
          </div>
        </div>

        <ol ref={list} className="relative">
          <span className="absolute bottom-0 left-0 top-3 w-px bg-line" aria-hidden />
          <motion.span
            className="absolute left-0 top-3 h-full w-px origin-top bg-gradient-to-b from-magenta via-cyan to-lime"
            style={{ scaleY: fill }}
            aria-hidden
          />
          {experience.map((j, i) => (
            <JobItem key={j.company} job={j} index={i} onActive={setActive} />
          ))}
        </ol>
      </div>
    </section>
  )
}
