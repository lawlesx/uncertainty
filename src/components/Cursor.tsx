'use client'

import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

// Dot + ring cursor. Elements with data-cursor="Label" grow the ring and show the label.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [hovering, setHovering] = useState(false)
  const [down, setDown] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const sync = (el: Element | null) => {
      const target = el?.closest<HTMLElement>('[data-cursor], a, button')
      setHovering(!!target)
      setLabel(target?.dataset.cursor ?? null)
    }
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      sync(e.target as Element | null)
    }
    // scrolling moves content under a still pointer: re-check what it's over
    let raf = 0
    const scroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => sync(document.elementFromPoint(x.get(), y.get())))
    }
    const leave = () => setVisible(false)
    const press = () => setDown(true)
    const release = () => setDown(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    document.addEventListener('pointerleave', leave)
    window.addEventListener('pointerdown', press)
    window.addEventListener('pointerup', release)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('scroll', scroll)
      document.removeEventListener('pointerleave', leave)
      window.removeEventListener('pointerdown', press)
      window.removeEventListener('pointerup', release)
    }
  }, [x, y])

  if (!enabled) return null

  const size = label ? 96 : hovering ? 56 : 34

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden>
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-paper mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible && !label ? 1 : 0 }}
      />
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          scale: down ? 0.8 : 1,
          backgroundColor: label ? 'rgba(245,242,255,1)' : 'rgba(245,242,255,0)',
          borderColor: label ? 'rgba(7,6,13,0.15)' : 'rgba(245,242,255,0.7)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        initial={false}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              className="relative font-mono text-[11px] font-semibold uppercase tracking-widest text-ink"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
