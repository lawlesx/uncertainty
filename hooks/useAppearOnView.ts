import { useInView } from 'framer-motion'
import { useRef } from 'react'

const useAppearOnView = (amount?: number) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    amount: amount ?? 0.7,
  })

  return {
    ref,
    animate: { opacity: inView ? 1 : 0 },
    transition: {
      duration: 0.5,
    },
  }
}

export default useAppearOnView
