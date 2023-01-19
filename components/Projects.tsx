'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import useAppearOnView from '../hooks/useAppearOnView'

const domains = [
  {
    name: 'Web Dev',
    image: '/projectsImages/Webdev.png',
    link: '/uncertainty/web',
  },
  {
    name: '3D Artwork',
    image: '/projectsImages/3D.png',
    link: '/uncertainty/artwork',
  },
  {
    name: 'UI/UX',
    image: '/projectsImages/UI.png',
    link: '/uncertainty/uiux',
  },
  {
    name: 'AR Effects',
    image: '/projectsImages/AR.png',
    link: '/uncertainty/ar',
  },
  {
    name: 'Blogs',
    image: '/projectsImages/Blog.png',
    link: '/uncertainty/blog',
  },
]

const Projects = () => {
  const { ref, animate, transition } = useAppearOnView(0.5)
  return (
    <motion.div
      animate={animate}
      transition={transition}
      ref={ref}
      className="w-full pl-[5rem] flex items-center py-20"
      id="projects"
    >
      <div className="flex flex-col w-2/5">
        <h1 className="text-[5rem] font-medium text-primary">My Projects</h1>
        <p className="text-lg tracking-widest text-primary">
          Here are some of my recent works. Feel free to check them out
        </p>
      </div>
      <div className="flex flex-col gap-5 w-3/5 pl-20">
        {domains.map((domain, index) => (
          <Link
            href={domain.link}
            className="w-full h-40 overflow-hidden"
            key={index}
          >
            <motion.div
              whileHover={{
                x: '100%',
                transition: {
                  type: 'spring',
                  damping: 10,
                  stiffness: 50,
                },
              }}
              className="w-full h-full flex relative"
            >
              <Image
                src={domain.image}
                fill
                style={{ objectFit: 'cover' }}
                alt={domain.name}
              />
              <h1 className="w-full h-full bg-primary text-background text-4xl font-medium flex items-center justify-center absolute -translate-x-[100%]">
                {domain.name}
              </h1>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
