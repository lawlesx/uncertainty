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
    title: 'ExCalibur',
    link: 'https://www.instagram.com/ar/770292486994019/',
    image: '/ExCalibur.png',
    rotation: 6,
  },
  {
    title: 'Scary Mask',
    link: 'https://www.instagram.com/ar/265495934638851/',
    image: '/Scary_Mask.png',
    rotation: -15,
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
    <WorkSkeleton title="UI/UX">
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
