'use client'
import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { FC, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expertises = [
  <div className="pageRight" key={1}>
    <h1>Full Stack Developement</h1>
    <p>Tech stack used by me is NEXTJs/Reactjs and Node/Express.js</p>
    <p>Framer motion is the best animation library</p>
    <p>Have experience in Web 3. Worked with Etherjs.</p>
  </div>,
  <div className="pageLeft" key={2}>
    <h1>App Development</h1>
    <p>Learning Tauri to create crossplatform desktop/mobile apps.</p>
  </div>,
  <div className="pageRight" key={3}>
    <h1>UI/UX Designer</h1>
    <p>Use Figma to design web apps and mobile apps template.</p>
    <p>Loves to design.</p>
  </div>,
  <div className="pageLeft" key={4}>
    <h1>3D Modelling and Animation</h1>
    <p>My vivid Imagination are brought to life using blender.</p>
    <p>Loves to reflect my fantasies to the world.</p>
  </div>,
  <div className="pageRight" key={5}>
    <h1>AR Effects</h1>
    <p>Create Simple but artistic Ar effects using Spark AR.</p>
  </div>,
  <div className="pageRight" key={6}>
    <h1>Learning in progress</h1>
    <p className="text-center">Thanks You</p>
  </div>,
]

const Expertise = () => {
  const [index, setIndex] = useState(0)
  const [exitX, setExitX] = useState<string | number>('100%')

  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center pl-[5rem]">
      <h1 className="text-[4rem] font-normal text-primary">Expertise</h1>
      <div className="w-full flex items-center justify-center">
        <motion.div className="w-[25rem] h-[25rem] relative">
          <AnimatePresence initial={false}>
            <Page
              key={index + 1}
              initial={{ scale: 0, y: 105, opacity: 0 }}
              animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
              transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.4 },
              }}
              exitX={exitX}
              setExitX={setExitX}
              index={index}
              setIndex={setIndex}
              drag="x"
            />
            <Page
              key={index}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
              exitX={exitX}
              setExitX={setExitX}
              index={index}
              setIndex={setIndex}
              drag="x"
            />
          </AnimatePresence>
        </motion.div>
      </div >
    </div >
  )
}

interface PageProps {
  index: number
  setIndex: (index: number) => void
  setExitX: (exitX: string | number) => void
  exitX: string | number
  initial?: { [key: string]: number | string | { [key: string]: number | string } }
  animate: { [key: string]: number | string | { [key: string]: number | string } }
  transition: { [key: string]: number | string | { [key: string]: number | string } }
  drag: boolean | "x" | "y" | undefined
}

const Page: FC<PageProps> = ({ index, setExitX, setIndex, exitX, initial, animate, transition, drag }) => {
  const x = useMotionValue(0)
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5])
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  })

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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
      className="w-[25rem] h-[25rem] absolute top-0 left-0 cursor-grab"
      style={{
        x, rotate
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
      <motion.div className='w-[15rem] h-[15rem] mx-auto rounded-3xl bg-primary flex items-center justify-center' style={{ scale }}>
        <h1 className='text-base text-highlight text-center'>Drag me left or right</h1>
      </motion.div>
    </motion.div>
  )
}

export default Expertise
