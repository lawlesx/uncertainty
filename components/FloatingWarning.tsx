'use client'
import useIsMobile from "../hooks/useIsMobile"

const FloatingWarning = () => {
  const isMobile = useIsMobile()

  if (!isMobile) return null

  return (
    <h1 className='bg-gradient1 rounded-t-2xl p-4 text-base text-primary fixed bottom-0 text-center w-full'>
      View this page on a larger screen for a better experience
    </h1>
  )
}

export default FloatingWarning