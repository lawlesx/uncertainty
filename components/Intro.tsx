'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const introVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 2,
    },
  },
}

const helloVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
}

const Intro = () => {
  return (
    <motion.div
      variants={introVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 lg:pl-[5.5rem] py-8 lg:pr-[5rem]"
    >
      <div className="flex flex-col px-4 lg:px-0">
        <motion.h1
          variants={helloVariants}
          className="text-primary text-[4rem] lg:text-[8rem] lg:leading-[8rem]"
        >
          Hello
        </motion.h1>
        <motion.h1
          variants={helloVariants}
          className="text-primary text-[1.5rem] lg:text-[3rem] pt-2 pl-2"
        >
          I am Aniruddha Sil
        </motion.h1>
        <motion.p
          variants={helloVariants}
          className="text-primary text-[1.5rem] lg:text-[2.3rem] font-quick pl-2"
        >
          And welcome to my Portfolio Website
        </motion.p>
      </div>
      <motion.div variants={helloVariants}>
        <Image
          src="/Profile.png"
          alt="Picture of the author"
          width={414}
          height={500}
        />
      </motion.div>
    </motion.div>
  )
}

export default Intro
