'use client'
import AboutEffect from './AboutEffect'
import { motion } from 'framer-motion'
import useAppearOnView from '../hooks/useAppearOnView'

const p_style = 'text-lg tracking-widest text-primary'

const About = () => {
  const { ref, animate, transition } = useAppearOnView()

  return (
    <motion.div
      animate={animate}
      transition={transition}
      className="w-full lg:pl-24 py-20 flex flex-col lg:flex-row items-center justify-between lg:h-screen gap-8 lg:gap-0"
      id="about"
      ref={ref}
    >
      <div className="flex flex-col gap-2 lg:w-1/2 px-4 lg:px-0">
        <h1 className="text-primary text-[2rem] lg:text-[4.5rem] font-semibold">About Me</h1>
        <p className={p_style}>
          I am a developer and designer (for fun) from India. The uncertainty in
          design fascinates me.
        </p>
        <p className={p_style}>
          Currently Frontend Developer (SDE - 2) at <strong>ZopSmart</strong>.
        </p>
        <p className={p_style}>
          Previously worked as a Frontend Developer at <strong>Coinvise</strong> for 2 years and 9 months.
        </p>
        <p className={p_style}>
          I love technology and loves to explore different domains of
          technology.
        </p>
        <p className={p_style}>
          I was the lead designer for the Hack Club at Nitte Meenakshi Institute
          of Technology. Well experienced in full stack web development using
          NEXTjs & Nodejs. Sometimes I like to do graphics designing. Also a
          creator of 3D models and animation using blender.
        </p>
        <p className="text-lg tracking-widest text-highlight hover:text-focus transition-colors ease-in-out">
          Would love to work with someone having a passion for design.
        </p>
      </div>
      <AboutEffect />
    </motion.div>
  )
}

export default About
