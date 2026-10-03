'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

// Masked line-by-line reveal: each word slides up from behind its own clip.
export default function SplitReveal({
  text,
  as = 'span',
  className,
  wordClassName = '',
  delay = 0,
  stagger = 0.04,
  play,
}: {
  text: string
  as?: 'span' | 'h2' | 'h3' | 'p' | 'div'
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
  play?: boolean
}) {
  const Tag = as as 'span' // one runtime tag; typed as span for the ref
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const show = play ?? inView
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            initial={{ y: '110%', rotate: 6 }}
            animate={show ? { y: '0%', rotate: 0 } : undefined}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
