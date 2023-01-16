'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const GetInTouch = () => {
  const [hover, setHover] = useState(false)
  return (
    <Link href='mailto:aniruddhasil109@gmail.com'>
      <motion.button
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="relative h-16 w-48 grid place-items-center p-1 overflow-hidden"
      >
        <div className="absolute h-[1px] w-2/5 bg-primary top-0 left-0" />
        <div className="absolute h-[1px] w-2/5 bg-primary bottom-0 right-0" />
        <div className="absolute h-4/5 w-[1px] bg-primary top-0 left-0" />
        <div className="absolute h-4/5 w-[1px] bg-primary bottom-0 right-0" />
        <motion.h1
          animate={{ x: hover ? 200 : 0 }}
          className="w-full h-full flex items-center justify-center bg-focus font-bold text-primary font-montserrat"
        >
          GET IN TOUCH
        </motion.h1>
        <div className="absolute w-full h-full p-1">
          <motion.h1
            animate={{ x: hover ? 0 : -200 }}
            className="w-full h-full flex items-center justify-center bg-primary text-black font-bold font-montserrat"
          >
            Would love to!
          </motion.h1>
        </div>
      </motion.button>
    </Link>
  )
}

export default GetInTouch
