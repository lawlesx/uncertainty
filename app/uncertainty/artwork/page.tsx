'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import WorkSkeleton from '../../../components/WorkSkeleton'
import Image from 'next/image'

interface Works {
  title: string
  link: string
  image: string
  rotation: number
}

const projects: Works[] = [
  {
    title: 'Cave',
    link: 'https://www.youtube.com/watch?v=KraBZd5UxW4&ab_channel=WelcomeToHell',
    image: '/Cave.png',
    rotation: 6,
  },
  {
    title: 'Chained',
    link: 'https://www.youtube.com/watch?v=phTeplD1adE&ab_channel=WelcomeToHell',
    image: '/Red_Output.png',
    rotation: -6,
  },
  {
    title: 'Penta Pendulum',
    link: 'https://www.instagram.com/p/CMC2qzxg_hG/',
    image: '/PentaPendulum.png',
    rotation: 0,
  },
  {
    title: 'Arm Cortex',
    link: 'https://www.youtube.com/watch?v=buv4Sngms14&ab_channel=WelcomeToHell',
    image: '/Cortex.png',
    rotation: -15,
  },
  {
    title: 'Remains',
    link: 'https://www.instagram.com/reel/CnZuIyerDE8/?utm_source=ig_web_copy_link',
    image: '/Remains.png',
    rotation: 7,
  },
  {
    title: 'Lost Sword',
    link: 'https://www.youtube.com/watch?v=lEbTlM7AnNI&ab_channel=WelcomeToHell',
    image: '/Lost_Sword.jpg',
    rotation: -10,
  },
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

const Page = () => {
  const [hover, setHover] = useState(false)
  const [project, setProject] = useState<Works>()

  return (
    <WorkSkeleton title="3D Artwork">
      <AnimatePresence mode="wait">
        {project && (
          <motion.div
            variants={imageVariant}
            animate={hover ? 'visible' : 'hidden'}
            className="w-[50vw] h-[60vh] absolute top-40 right-40"
            style={{
              rotate: project.rotation,
            }}
          >
            <Image
              src={project.image}
              style={{ objectFit: 'contain' }}
              fill
              alt={project.title || ''}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="w-full h-full pl-8 pt-[50vh] relative overflow-y-auto no-scroll-bar">
        {projects.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li
              onMouseEnter={() => {
                setHover(true)
                setProject(item)
              }}
              onMouseLeave={() => setHover(false)}
              className="font-oswald py-6 text-[9rem] text-lightGray hover:text-fade transition-colors ease-in-out cursor-pointer duration-300 w-max truncate"
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </WorkSkeleton>
  )
}

export default Page
