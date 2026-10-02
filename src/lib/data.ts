// All site content lives here. Search for "TODO" to find placeholders.

const CAREER_START = new Date('2022-07-01')
const yearsShipping = Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000))

export const profile = {
  name: 'Aniruddha Sil',
  firstName: 'Aniruddha',
  lastName: 'Sil',
  handle: 'lawlesx',
  role: 'Frontend Engineer',
  location: 'India',
  timezone: 'Asia/Kolkata',
  email: 'aniruddhasil109@gmail.com',
  photo: '/images/me/profile.png',
  tagline: 'Frontend engineer by day. 3D artist after dark.',
  intro:
    'I build fast, expressive interfaces for the web — and when the laptop lid should be closed, I am in Blender or Unreal Engine making strange little worlds.',
  about: [
    'I am a frontend developer from India who cares about the part of software people actually touch — motion, feel, and the tiny details that make an interface feel alive.',
    'Over the years I have shipped products at Coinvise, ZopSmart and now Thoughtworks, mostly with React, Next.js and TypeScript.',
    'Outside of work I model, light and animate in Blender, and I am currently teaching myself game development in Unreal Engine.',
  ],
  stats: [
    { value: `${yearsShipping}+`, label: 'Years shipping for the web' },
    { value: '3', label: 'Companies' },
    { value: '10+', label: 'Blender renders' },
  ],
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/lawlesx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniruddhasil' },
  // TODO: replace with your profile URLs
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
]

export type Job = {
  company: string
  role: string
  period: string
  summary: string
  points: string[]
  stack: string[]
  color: string
}

// TODO: exact Thoughtworks title and highlights (send the resume!)
export const experience: Job[] = [
  {
    company: 'Thoughtworks',
    role: 'Frontend Developer', // TODO: exact title
    period: 'Oct 2025 — Now',
    summary: 'Global technology consultancy. Building frontend for client products.',
    points: ['TODO: highlight one', 'TODO: highlight two'],
    stack: ['React', 'TypeScript', 'Next.js'],
    color: '#ff3d81',
  },
  {
    company: 'ZopSmart',
    role: 'Frontend Developer · SDE 2',
    period: 'Aug 2024 — Oct 2025',
    summary: 'Retail-tech product company. Shipped frontend features as an SDE 2.',
    points: ['TODO: highlight one', 'TODO: highlight two'],
    stack: ['React', 'Next.js', 'TypeScript'],
    color: '#22e1ff',
  },
  {
    company: 'Coinvise',
    role: 'Frontend Developer',
    period: 'Jul 2022 — Apr 2024',
    summary: 'Web3 tools for creators and communities. My first frontend role.',
    points: ['TODO: highlight one', 'TODO: highlight two'],
    stack: ['Next.js', 'Tailwind', 'React Query', 'Framer Motion'],
    color: '#c6ff3d',
  },
]

export type Project = {
  title: string
  kind: string
  year: string
  link: string
  github?: string
  image?: string // without one, a generated cover is shown
  note: string
  color: string
}

// Years are when each project was added to the old portfolio.
export const projects: Project[] = [
  {
    title: 'Clairvoyance',
    kind: 'AI · Data analysis',
    year: '2026',
    link: 'https://github.com/lawlesx/clairvoyance', // TODO: live URL
    github: 'https://github.com/lawlesx/clairvoyance',
    note: 'Ask questions about any dataset in plain English. Upload a CSV or connect Postgres/MySQL — an AI agent writes the SQL, runs it and picks the right chart.',
    color: '#22e1ff',
  },
  {
    title: 'Fern',
    kind: 'AI · Voice expense tracker',
    year: '2026',
    link: 'https://fern-five.vercel.app/',
    github: 'https://github.com/lawlesx/fern',
    note: 'Speak your expenses in English, Hindi, Bengali, Marathi or Hinglish and Fern turns them into structured, categorised logs in seconds.',
    color: '#c6ff3d',
  },
  {
    title: 'Mad Playground',
    kind: 'Creative dev · WebGL',
    year: '2025',
    link: 'https://mad-playground.vercel.app/',
    github: 'https://github.com/lawlesx/playground',
    image: '/images/work/MadPlayground.png',
    note: 'A playground of experiments with motion, shaders and odd interactions.',
    color: '#ff3d81',
  },
  {
    title: 'Acme',
    kind: 'Landing page',
    year: '2024',
    link: 'https://acme-note-ruddy.vercel.app/',
    github: 'https://github.com/lawlesx/acme',
    image: '/images/work/Acme.png',
    note: 'A concept landing page for a note-taking SaaS, built to grab attention.',
    color: '#ff8a3d',
  },
  {
    title: 'First Leads',
    kind: 'Freelance · Marketing site',
    year: '2023',
    link: 'https://first-leads.vercel.app/',
    github: 'https://github.com/lawlesx/first-leads',
    image: '/images/work/FirstLeads.png',
    note: 'Marketing site for a lead-generation company.',
    color: '#7b5cff',
  },
  {
    title: 'The Witch Trials',
    kind: 'Web3 · NFT auction',
    year: '2023',
    link: 'https://the-witch-trials.vercel.app/',
    github: 'https://github.com/lawlesx/the-witch-trials-frontend',
    image: '/images/work/WitchTrials.png',
    note: 'A concept NFT live-auction experience.',
    color: '#ff3d81',
  },
  {
    title: 'Hack Club NMIT',
    kind: 'Community site',
    year: '2022', // TODO: verify year
    link: 'https://lawlesx.github.io/',
    github: 'https://github.com/lawlesx/hackclubnmit-website',
    image: '/images/work/Homepage.png',
    note: 'Website for the Hack Club chapter where I was lead designer.',
    color: '#22e1ff',
  },
]

export type Render = {
  title: string
  medium: string
  link: string
  image: string
  tall?: boolean
}

export const renders: Render[] = [
  {
    title: 'Cave',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=KraBZd5UxW4',
    image: '/images/renders/Cave.png',
  },
  {
    title: 'Chained',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=phTeplD1adE',
    image: '/images/renders/Red_Output.png',
  },
  {
    title: 'Arm Cortex',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=buv4Sngms14',
    image: '/images/renders/Cortex.png',
  },
  {
    title: 'Red Room',
    medium: 'Blender · Reel',
    link: 'https://www.instagram.com/reel/Cwb5yp-NMDz/',
    image: '/images/renders/RedRoom.png',
    tall: true,
  },
  {
    title: 'Lost Sword',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=lEbTlM7AnNI',
    image: '/images/renders/LostSword.jpg',
  },
  {
    title: 'Distorted Museum',
    medium: 'Blender · Still',
    link: 'https://www.instagram.com/p/CuL1A1Hsz9v/',
    image: '/images/renders/DistortedMuseum.png',
    tall: true,
  },
  {
    title: 'Remains',
    medium: 'Blender · Reel',
    link: 'https://www.instagram.com/reel/CnZuIyerDE8/',
    image: '/images/renders/Remains.png',
  },
  {
    title: 'Penta Pendulum',
    medium: 'Blender · Still',
    link: 'https://www.instagram.com/p/CMC2qzxg_hG/',
    image: '/images/renders/PentaPendulum.png',
    tall: true,
  },
]

// TODO: game name, pitch, screenshots and trailer
export const game = {
  codename: 'Project ????',
  engine: 'Unreal Engine 5',
  status: 'In development',
  pitch:
    'My first game, built in Unreal Engine with assets modelled in Blender. Details are under wraps for now — screenshots and a trailer will land here soon.',
  log: [
    { label: 'Engine', value: 'Unreal Engine 5' },
    { label: 'Assets', value: 'Blender' },
    { label: 'Genre', value: 'TODO' },
    { label: 'Status', value: 'Prototyping' },
  ],
}

export const toolkit = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'Tailwind CSS',
      'Zod',
      'Motion',
      'Node.js',
    ],
  },
  {
    group: 'Creative',
    items: ['Three.js', 'React Three Fiber', 'GLSL', 'Figma', 'Spark AR'],
  },
  {
    group: '3D & Games',
    items: ['Blender', 'Unreal Engine', 'Cycles', 'Eevee'],
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'After Dark', href: '#after-dark' },
  { label: 'Contact', href: '#contact' },
]
