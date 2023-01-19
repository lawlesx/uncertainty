import WorkSkeleton from "../../../components/WorkSkeleton"

interface Works {
  title: string
  github: string
  link: string
  note?: string
}

const projects: Works[] = [
  {
    title: 'Hack Club Nmit',
    github: 'https://github.com/lawlesx/hackclubnmit-website',
    link: 'https://lawlesx.github.io/',
  },
  {
    title: 'My Portfolio',
    github: 'https://github.com/lawlesx/uncertainty',
    link: 'https://lawlesx.vercel.app/',
  },
  {
    title: 'NFT Auction',
    github: 'https://github.com/lawlesx/the-witch-trials-frontend',
    link: 'https://the-witch-trials.vercel.app/',
    note: 'A concept website for a NFT auction'
  },
  {
    title: 'Social Eye',
    github: 'https://github.com/lawlesx/social-eye',
    link: 'https://social-eye.vercel.app/',
    note: 'WIP: Social graph based on lens protocol'
  },
]

const Page = () => {
  return (
    <WorkSkeleton title="Web Dev">
      <ul className="w-full h-full pl-8 pt-[50vh] relative overflow-y-auto no-scroll-bar">
        {
          projects.map((item, i) => <li key={i} className="font-oswald py-6 text-[9rem] text-lightGray hover:text-fade transition-colors ease-in-out cursor-pointer duration-300 w-max truncate">{item.title}</li>)
        }
      </ul>
    </WorkSkeleton>
  )
}

export default Page