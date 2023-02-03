import { AnimatePresence, motion } from 'framer-motion'
import { FC, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface Works {
  title: string
  link: string
  image: string
  rotation: number
}

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

const SubSkeleton: FC<{ projects: Works[] }> = ({ projects }) => {
  const [hover, setHover] = useState(false)
  const [project, setProject] = useState<Works & { index: number }>()

  const images = useMemo(() => projects.map((item, i) => <Image key={i} src={item.image} style={{ objectFit: 'contain' }} fill alt={item.title} priority />), [projects])

  return (
    <>
      <AnimatePresence mode="wait">
        <BackButton />
        {project && (
          <motion.div
            variants={imageVariant}
            animate={hover ? 'visible' : 'hidden'}
            className="w-[50vw] h-[60vh] absolute top-40 right-40"
            style={{
              rotate: project.rotation,
            }}
          >
            {images[project.index]}
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="w-full h-full pl-8 pt-40 lg:pt-[50vh] relative overflow-y-auto no-scroll-bar">
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
                setProject({ ...item, index: i })
              }}
              onMouseLeave={() => setHover(false)}
              className="font-oswald py-2 lg:py-6 text-[2.5rem] lg:text-[9rem] text-lightGray hover:text-fade transition-colors ease-in-out cursor-pointer duration-300 w-max truncate"
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

/**
 * 
 * @returns Back Button with absolute position
 */
export const BackButton = () => {
  const router = useRouter()
  return (
    <button
      className="text-fade text-base absolute top-4 left-4 lg:hidden flex items-center justify-center gap-2 z-[1]"
      onClick={() => router.back()}
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 35 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 22.5L2 12M2 12L12.5 1.5M2 12H33.5"
          stroke="#626262"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  )
}

export default SubSkeleton
