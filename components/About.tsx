const p_style = 'text-lg tracking-widest text-primary'

const About = () => {
  return (
    <div className="w-full px-24 py-20">
      <div className="flex flex-col gap-2 w-3/5">
        <h1 className="text-primary text-[4.5rem] font-semibold">About Me</h1>
        <p className={p_style}>I am a developer and designer (for fun) from India. The uncertainty in design fascinates me.</p>
        <p className={p_style}>Currently Frontend Developer at <strong>Coinvise</strong>.</p>
        <p className={p_style}>I love technology and loves to explore different domains of technology.</p>
        <p className={p_style}>I was the lead designer for the Hack Club at Nitte Meenakshi Institute of Technology. Well experienced in full stack web development using NEXTjs & Nodejs. Sometimes I like to do graphics designing. Also a creator of 3D models and animation using blender.</p>
        <p className="text-lg tracking-widest text-highlight hover:text-focus transition-colors ease-in-out">Would love to work with someone having a passion for design.</p>
      </div>
    </div>
  )
}

export default About