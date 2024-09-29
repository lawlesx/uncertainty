'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import WorkSkeleton from '../../../components/WorkSkeleton'
import Image from 'next/image'
import { BackButton } from '../../../components/SubSkeleton'

interface Works {
  title: string
  github: string
  link: string
  note?: string
  image: string
  rotation: number
}

const projects: Works[] = [
  {
    title: 'Acme',
    github: 'https://github.com/lawlesx/acme',
    link: 'https://acme-note-ruddy.vercel.app/',
    note: 'A landing page designed to capture users attention for a SaaS platform(Concept) to take notes. ',
    image: '/Acme.png',
    rotation: 12,
  },
  {
    title: 'First Leads (Freelance)',
    github: 'https://github.com/lawlesx/first-leads',
    link: 'https://first-leads.vercel.app/',
    note: 'A freelance project for a lead generation company',
    image: '/FirstLeads.png',
    rotation: 6,
  },
  {
    title: 'Slider',
    github: 'https://github.com/lawlesx/playground/slider',
    link: 'https://playground-gamma-seven.vercel.app/slider',
    image: '/Slider.gif',
    rotation: 0,
  },
  {
    title: 'My Portfolio',
    github: 'https://github.com/lawlesx/uncertainty',
    link: 'https://lawlesx.vercel.app/',
    image: '/Portfolio.png',
    rotation: 4,
  },

  {
    title: 'NFT Auction',
    github: 'https://github.com/lawlesx/the-witch-trials-frontend',
    link: 'https://the-witch-trials.vercel.app/',
    note: 'A concept website for a NFT auction',
    image: '/The Witch Trials.png',
    rotation: -10,
  },
  {
    title: 'Hack Club Nmit',
    github: 'https://github.com/lawlesx/hackclubnmit-website',
    link: 'https://lawlesx.github.io/',
    image: '/Homepage.png',
    rotation: 0,
  },
  // {
  //   title: 'Social Eye',
  //   github: 'https://github.com/lawlesx/social-eye',
  //   link: 'https://social-eye.vercel.app/',
  //   note: 'WIP: Social graph based on lens protocol',
  //   image: '/Social Eye.png',
  //   rotation: -15,
  // },
]

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const backdrop = {
  hidden: {
    y: '100vh',
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
}

const Page = () => {
  const [modal, setModal] = useState(false)
  const [hover, setHover] = useState(false)
  const [project, setProject] = useState<Works & { index: number }>()

  return (
    <WorkSkeleton title="Web Dev">
      <AnimatePresence mode="wait">
        <BackButton />
        {project && (
          <motion.div
            variants={imageVariant}
            animate={hover ? 'visible' : 'hidden'}
            className="w-[50vw] h-[60vh] absolute top-40 right-40 hidden lg:block"
            style={{
              rotate: project.rotation,
            }}
          >
            {Images[project.index]}
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="w-full h-full pl-8 pt-40 lg:pt-[50vh] relative overflow-y-auto no-scroll-bar">
        {projects.map((item, i) => (
          <li
            onClick={() => {
              setModal(true)
              setProject({ ...item, index: i })
            }}
            onMouseEnter={() => {
              setHover(true)
              setProject({ ...item, index: i })
            }}
            onMouseLeave={() => setHover(false)}
            key={i}
            className="font-oswald py-2 lg:py-6 text-[2.5rem] lg:text-[9rem] text-lightGray hover:text-fade transition-colors ease-in-out cursor-pointer duration-300 w-max truncate"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {modal && project && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[1] bg-primary grid place-items-center"
          >
            {project.note && <h1 className="workModalNotes">{project.note}</h1>}
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="workModalLinks"
            >
              Github Repo
            </Link>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="workModalLinks"
            >
              Live Link
            </Link>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="absolute w-8 h-8 top-2 right-2 cursor-pointer flex items-center justify-center"
              onClick={() => setModal(false)}
            >
              <div className="h-[3px] w-[25px] bg-background -rotate-45 absolute"></div>
              <div className="h-[3px] w-[25px] bg-background rotate-45 absolute"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </WorkSkeleton>
  )
}

const Images = projects.map((item, i) => (
  <Image
    key={i}
    src={item.image}
    style={{ objectFit: 'contain' }}
    className="filter drop-shadow-lg"
    fill
    alt={item.title}
    priority
  />
))

export default Page
