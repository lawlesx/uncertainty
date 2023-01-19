import { useEffect, useState } from 'react'

type Size = [number, number]

/**
 * @returns {Size} [height, width]
 */
const useWindowSize = (): Size => {
  const [size, setSize] = useState<Size>([0, 0])

  const handleResize = (): void =>
    setSize([window.innerHeight, window.innerWidth])

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return size
}

export default useWindowSize
