'use client'
import WorkSkeleton from '../../../components/WorkSkeleton'
import SubSkeleton, { Works } from '../../../components/SubSkeleton'

const projects: Works[] = [
  {
    title: 'Cave',
    link: 'https://www.youtube.com/watch?v=KraBZd5UxW4&ab_channel=WelcomeToHell',
    image: '/Cave.png',
    rotation: 6,
  },
  {
    title: 'Chained',
    link: 'https://www.youtube.com/watch?v=phTeplD1adE&ab_channel=WelcomeToHell',
    image: '/Red_Output.png',
    rotation: -6,
  },
  {
    title: 'Red Room',
    link: 'https://www.instagram.com/reel/Cwb5yp-NMDz/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    image: '/RedRoom.png',
    rotation: 0,
  },
  {
    title: 'Remains',
    link: 'https://www.instagram.com/reel/CnZuIyerDE8/?utm_source=ig_web_copy_link',
    image: '/Remains.png',
    rotation: 7,
  },
  {
    title: 'Penta Pendulum',
    link: 'https://www.instagram.com/p/CMC2qzxg_hG/',
    image: '/PentaPendulum.png',
    rotation: -7,
  },
  {
    title: 'Distorted Museum',
    link: 'https://www.instagram.com/p/CuL1A1Hsz9v/',
    image: '/DistortedMuseum.png',
    rotation: 0,
  },
  {
    title: 'Lost Sword',
    link: 'https://www.youtube.com/watch?v=lEbTlM7AnNI&ab_channel=WelcomeToHell',
    image: '/Lost_Sword.jpg',
    rotation: -10,
  },
  {
    title: 'Arm Cortex',
    link: 'https://www.youtube.com/watch?v=buv4Sngms14&ab_channel=WelcomeToHell',
    image: '/Cortex.png',
    rotation: -15,
  },
]

const Page = () => {

  return (
    <WorkSkeleton title="3D Artwork">
      <SubSkeleton projects={projects} />
    </WorkSkeleton>
  )
}

export default Page
