'use client'
import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { FC, ReactNode, useState } from 'react'
import useAppearOnView from '../hooks/useAppearOnView'

const expertises = [
  <div className="floatingCard" key={1}>
    <h1>Full Stack Developement</h1>
    <p>Frontend Specialization using the Tech stacks - NEXTJs/Reactjs, Tailwind CSS, React Query, Zod</p>
    <p>Animation library - Framer Motion</p>
    <p>Backend Tech stacks - Nodejs/Express, MongoDB and Postgresql</p>
  </div>,
  <div className="floatingCard" key={4}>
    <h1>3D Modelling and Animation</h1>
    <p>My vivid Imagination are brought to life using <strong>blender</strong>.</p>
    <p>Loves to reflect my fantasies to the world.</p>
  </div>,
  <div className="floatingCard" key={5}>
    <h1>AR Effects</h1>
    <p>Create Simple but artistic Ar effects using Spark AR.</p>
  </div>,
  <div className="floatingCard" key={3}>
    <h1>UI/UX Designer</h1>
    <p>Use Figma to design web apps and mobile apps template.</p>
    <p>Loves to design.</p>
  </div>,
  <div className="floatingCard" key={2}>
    <h1>App Development</h1>
    <p>Learning Tauri to create crossplatform desktop/mobile apps.</p>
  </div>,
  <div className="floatingCard" key={6}>
    <h1>Learning in progress</h1>
    <p className="text-center">Thanks You</p>
  </div>,
]

const Expertise = () => {
  const [index, setIndex] = useState(0)
  const [exitX, setExitX] = useState<string | number>('100%')
  const { ref, animate, transition } = useAppearOnView()

  return (
    <motion.div
      animate={animate}
      transition={transition}
      ref={ref}
      className="w-full h-screen flex flex-col gap-10 items-center justify-center lg:pl-[5rem]"
      id="expertise"
    >
      <h1 className="text-[4rem] font-normal text-primary">Expertise</h1>
      <div className="w-full flex lg:gap-20 items-center justify-center">
        <div className="hidden lg:flex flex-col items-start gap-2">
          <motion.svg
            className="w-40 rotate-180"
            viewBox="0 0 112 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              d="M1.5 1.5C19 14.3333 65.3 35.1 110.5 15.5M110.5 15.5L84.5 6.5M110.5 15.5V38"
              stroke="#626262"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          <p className="text-sm text-fade tracking-widest">Drag this way</p>
        </div>
        <motion.div className="w-[25rem] h-[25rem] scale-75 lg:scale-100 relative">
          <AnimatePresence initial={false}>
            <Page
              key={index + 1}
              initial={{ scale: 0, y: 105, opacity: 0 }}
              animate={{ scale: 0.75, y: 80, opacity: 0.5 }}
              transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.4 },
              }}
              exitX={exitX}
              setExitX={setExitX}
              index={index}
              setIndex={setIndex}
              drag="x"
            >
              {expertises[(index + 1) % expertises.length]}
            </Page>
            <Page
              key={index}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
              exitX={exitX}
              setExitX={setExitX}
              index={index}
              setIndex={setIndex}
              drag="x"
            >
              {expertises[index % expertises.length]}
            </Page>
          </AnimatePresence>
        </motion.div>
        <div className="hidden lg:flex flex-col items-end gap-2">
          <motion.svg
            className="w-40"
            viewBox="0 0 112 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              d="M1.5 1.5C19 14.3333 65.3 35.1 110.5 15.5M110.5 15.5L84.5 6.5M110.5 15.5V38"
              stroke="#626262"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          <p className="text-sm text-fade tracking-widest">Drag this way</p>
        </div>
      </div>
    </motion.div>
  )
}

interface PageProps {
  index: number
  setIndex: (index: number) => void
  setExitX: (exitX: string | number) => void
  exitX: string | number
  initial?: {
    [key: string]: number | string | { [key: string]: number | string }
  }
  animate: {
    [key: string]: number | string | { [key: string]: number | string }
  }
  transition: {
    [key: string]: number | string | { [key: string]: number | string }
  }
  drag: boolean | 'x' | 'y' | undefined
  children: ReactNode
}

const Page: FC<PageProps> = ({
  index,
  setExitX,
  setIndex,
  exitX,
  initial,
  animate,
  transition,
  drag,
  children,
}) => {
  const x = useMotionValue(0)
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5])
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  })

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -100) {
      setExitX(-250)
      setIndex(index + 1)
    }
    if (info.offset.x > 100) {
      setExitX(250)
      setIndex(index + 1)
    }
  }

  return (
    <motion.div
      className="w-[25rem] h-[25rem] scale-75 lg:scale-100 absolute top-0 left-0 cursor-grab"
      style={{
        x,
        rotate,
      }}
      whileTap={{ cursor: 'grabbing' }}
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      initial={initial}
      animate={animate}
      transition={transition}
      exit={{
        x: exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="w-[25rem] h-[25rem] scale-75 lg:scale-100 mx-auto rounded-3xl bg-gradient1 flex items-center justify-center p-4"
        style={{
          scale,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Expertise
