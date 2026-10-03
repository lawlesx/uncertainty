// All site content lives here. Search for "TODO" to find placeholders.

const CAREER_START = new Date('2021-08-01') // Coinvise internship
const yearsShipping = Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000))

export const profile = {
  name: 'Aniruddha Sil',
  firstName: 'Aniruddha',
  lastName: 'Sil',
  handle: 'lawlesx',
  role: 'Frontend Engineer',
  location: 'Bangalore, India',
  timezone: 'Asia/Kolkata',
  email: 'aniruddhasil109@gmail.com',
  photo: '/images/me/profile.webp',
  tagline: 'Frontend engineer by day. 3D artist after dark.',
  intro:
    'I build fast, expressive interfaces for the web — and when the laptop lid should be closed, I am in Blender or Unreal Engine making strange little worlds.',
  about: [
    'I am a frontend developer from Bangalore who cares about the part of software people actually touch — motion, feel, and the tiny details that make an interface feel alive. Static websites bore me; my goal is to inject life into them.',
    'I studied Computer Science at NMIT Bangalore, where I led design for Hack Club. Since then I have shipped products at Coinvise, ZopSmart and now Thoughtworks — mostly React, Next.js and TypeScript, with Motion as my playground.',
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
]

export type Job = {
  company: string
  role: string
  period: string
  summary: string
  points: string[]
  stack: string[]
  color: string
  stints?: { role: string; period: string }[] // progression within one company, newest first
}

// Highlights from the resume and chat.
export const experience: Job[] = [
  {
    company: 'Thoughtworks',
    role: 'Frontend Developer',
    period: 'Oct 2025 — Now',
    summary: 'Global technology consultancy. On the National Grid account, building the frontend of a platform for gas-pipeline operations in the US.',
    points: [
      'Work mainly on the frontend of a Next.js app with a .NET backend, shipping features as they roll out.',
      'Features I owned along the way include the OpenTelemetry setup for observability and accessibility improvements.',
    ],
    stack: ['Next.js', 'React', '.NET', 'OpenTelemetry'],
    color: '#ff3d81',
  },
  {
    company: 'ZopSmart',
    role: 'Frontend Developer · SDE 2',
    period: 'Aug 2024 — Oct 2025',
    summary: 'Retail-tech product company. Worked on Zopping, an in-house Shopify-like platform, and on client work for Kroger (US).',
    points: [
      'Designed a frontend architecture for Zopping that scaled themes 10 → 1000 with zero impact on bundle size.',
      'Lifted Lighthouse scores by 40% by reworking dynamic imports and code structure.',
      'Built collaborative dashboards for Kroger’s Item Watchtower team, cutting task identification time by 30%.',
      'Replaced native fetch with React Query, cutting redundant API calls by 40%.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'React Query'],
    color: '#22e1ff',
  },
  {
    company: 'Coinvise',
    role: 'Frontend Developer',
    period: 'Aug 2021 — Apr 2024',
    summary: 'Web3 tools for creators and communities. Joined as an intern in my third year of college, then went full-time.',
    stints: [
      { role: 'Frontend Developer', period: 'Jul 2022 — Apr 2024' },
      { role: 'Frontend Intern', period: 'Aug 2021 — Jun 2022' },
    ],
    points: [
      'Improved Time to Interactive by 45% with Next.js SSR and aggressive route-based code splitting.',
      'Cut redundant API calls by 60% with React Query.',
      'Built responsive, animated UIs with Tailwind, Chakra UI and Framer Motion.',
      'Used Google Analytics behaviour data to steer UI/UX decisions.',
    ],
    stack: ['Next.js', 'React Query', 'Tailwind', 'Chakra UI', 'Framer Motion'],
    color: '#c6ff3d',
  },
]

export type Project = {
  title: string
  kind: string
  year: string
  link?: string // live site; without one the row opens the GitHub repo
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
    github: 'https://github.com/lawlesx/clairvoyance', // not deployed (hosting costs)
    image: '/images/work/Clairvoyance.webp',
    note: 'Ask questions about any dataset in plain English. Upload a CSV or connect Postgres/MySQL — an AI agent writes the SQL, runs it and picks the right chart. Not deployed; the code is on GitHub.',
    color: '#22e1ff',
  },
  {
    title: 'Fern',
    kind: 'AI · Voice expense tracker',
    year: '2026',
    link: 'https://fern-five.vercel.app/',
    github: 'https://github.com/lawlesx/fern',
    image: '/images/work/Fern.webp',
    note: 'Speak your expenses in English, Hindi, Bengali, Marathi or Hinglish and Fern turns them into structured, categorised logs in seconds.',
    color: '#c6ff3d',
  },
  {
    title: 'Mad Playground',
    kind: 'Creative dev · WebGL',
    year: '2025',
    link: 'https://mad-playground.vercel.app/',
    github: 'https://github.com/lawlesx/playground',
    image: '/images/work/MadPlayground.webp',
    note: 'A playground of experiments with motion, shaders and odd interactions.',
    color: '#ff3d81',
  },
  {
    title: 'Acme',
    kind: 'Landing page',
    year: '2024',
    link: 'https://acme-note-ruddy.vercel.app/',
    github: 'https://github.com/lawlesx/acme',
    image: '/images/work/Acme.webp',
    note: 'A concept landing page for a note-taking SaaS, built to grab attention.',
    color: '#ff8a3d',
  },
  {
    title: 'First Leads',
    kind: 'Freelance · Marketing site',
    year: '2023',
    link: 'https://first-leads.vercel.app/',
    github: 'https://github.com/lawlesx/first-leads',
    image: '/images/work/FirstLeads.webp',
    note: 'Freelance: a lead-generation platform built from scratch in Next.js, TypeScript and React Query. Average session duration went up 25%.',
    color: '#7b5cff',
  },
  {
    title: 'The Witch Trials',
    kind: 'Web3 · NFT auction',
    year: '2023',
    link: 'https://the-witch-trials.vercel.app/',
    github: 'https://github.com/lawlesx/the-witch-trials-frontend',
    image: '/images/work/WitchTrials.webp',
    note: 'A concept NFT live-auction experience.',
    color: '#ff3d81',
  },
  {
    title: 'Hack Club NMIT',
    kind: 'Community site',
    year: '2021',
    link: 'https://lawlesx.github.io/',
    github: 'https://github.com/lawlesx/hackclubnmit-website',
    image: '/images/work/Homepage.webp',
    note: 'Website for the Hack Club chapter where I was lead designer.',
    color: '#22e1ff',
  },
]

export type Render = {
  title: string
  medium: string
  link?: string
  image?: string // local still; defaults to the YouTube thumbnail when `youtube` is set
  youtube?: string // video id
  tall?: boolean
}

const yt = (id: string) => ({ youtube: id, link: `https://www.youtube.com/watch?v=${id}` })

// Newest first.
export const renders: Render[] = [
  { title: 'The Silent Throne', medium: 'Unreal Engine · Animation', ...yt('jbqC7HRmse4') },
  { title: 'Rift of the Fractured Light', medium: 'Unreal Engine · Animation', ...yt('w2-84Xhq85A') },
  { title: 'The Ruined Throne', medium: 'Unreal Engine · Animation', ...yt('Pis-viimY9U') },
  { title: 'The Highway', medium: 'Unreal Engine · Animation', ...yt('5NsJ_MCaXSA') },
  {
    title: 'Cave',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=KraBZd5UxW4',
    image: '/images/renders/Cave.webp',
  },
  {
    title: 'Chained',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=phTeplD1adE',
    image: '/images/renders/Red_Output.webp',
  },
  {
    title: 'Arm Cortex',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=buv4Sngms14',
    image: '/images/renders/Cortex.webp',
  },
  {
    title: 'Red Room',
    medium: 'Blender · Reel',
    link: 'https://www.instagram.com/reel/Cwb5yp-NMDz/',
    image: '/images/renders/RedRoom.webp',
    tall: true,
  },
  {
    title: 'Lost Sword',
    medium: 'Blender · Animation',
    link: 'https://www.youtube.com/watch?v=lEbTlM7AnNI',
    image: '/images/renders/LostSword.webp',
  },
  {
    title: 'Distorted Museum',
    medium: 'Blender · Still',
    link: 'https://www.instagram.com/p/CuL1A1Hsz9v/',
    image: '/images/renders/DistortedMuseum.webp',
    tall: true,
  },
  {
    title: 'Remains',
    medium: 'Blender · Reel',
    link: 'https://www.instagram.com/reel/CnZuIyerDE8/',
    image: '/images/renders/Remains.webp',
  },
  {
    title: 'Penta Pendulum',
    medium: 'Blender · Still',
    link: 'https://www.instagram.com/p/CMC2qzxg_hG/',
    image: '/images/renders/PentaPendulum.webp',
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
    { label: 'Genre', value: 'Under wraps' },
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
      'React Query',
      'Redux',
      'GraphQL',
      'Tailwind CSS',
      'Chakra UI',
      'Zod',
      'Motion',
      'Jest',
      'Testing Library',
    ],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Bun', 'Hono', 'Elysia', 'PostgreSQL', 'MySQL', 'Prisma', 'Drizzle ORM'],
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
