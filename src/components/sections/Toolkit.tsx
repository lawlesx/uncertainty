'use client'

import { motion } from 'motion/react'
import { toolkit } from '@/lib/data'
import Magnetic from '../ui/Magnetic'
import SectionLabel from '../ui/SectionLabel'
import SplitReveal from '../ui/SplitReveal'

const COLORS = ['#ff3d81', '#22e1ff', '#c6ff3d', '#ff8a3d', '#7b5cff']

export default function Toolkit() {
  return (
    <section id="toolkit" data-theme="0" className="relative px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="06">Toolkit</SectionLabel>
        <SplitReveal
          as="h2"
          text="The stuff in my bag."
          className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl"
        />
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-10 xl:grid-cols-4 xl:gap-8">
          {toolkit.map((group, g) => (
            <div key={group.group}>
              <h3 className="mb-6 flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
                {group.group}
                <span>{String(group.items.length).padStart(2, '0')}</span>
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => {
                  const color = COLORS[(i + g * 2) % COLORS.length]
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: g * 0.1 + i * 0.04 }}
                    >
                      <Magnetic strength={0.25}>
                        <span
                          className="group relative block overflow-hidden rounded-full border border-line px-5 py-2.5 text-sm font-semibold md:text-base"
                          style={{ ['--c' as string]: color }}
                        >
                          <span className="absolute inset-0 translate-y-full rounded-full bg-[var(--c)] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-y-0" />
                          <span className="relative transition-colors duration-300 group-hover:text-ink">{item}</span>
                        </span>
                      </Magnetic>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
