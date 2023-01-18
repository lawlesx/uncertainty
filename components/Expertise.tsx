'use client'
import HTMLFlipBook from 'react-pageflip'

const expertises = [
  <div className="pageRight" key={1}>
    <h1>Full Stack Developement</h1>
    <p>Tech stack used by me is NEXTJs/Reactjs and Node/Express.js</p>
    <p>Framer motion is the best animation library</p>
    <p>Have experience in Web 3. Worked with Etherjs.</p>
  </div>,
  <div className="pageLeft" key={2}>
    <h1>App Development</h1>
    <p>
      Learning Tauri to create crossplatform desktop/mobile apps.
    </p>
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
  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="text-[4rem] font-normal text-primary">Expertise</h1>
      <HTMLFlipBook
        width={400}
        height={500}
        maxShadowOpacity={0.5}
        showCover={true}
      >
        {expertises}
      </HTMLFlipBook>
    </div>
  )
}

export default Expertise
