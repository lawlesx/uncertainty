'use client'
import WorkSkeleton from '../../../components/WorkSkeleton'
import SubSkeleton, { Works } from '../../../components/SubSkeleton'

const projects: Works[] = [
  {
    title: 'ExCalibur',
    link: 'https://www.instagram.com/ar/770292486994019/',
    image: '/ExCalibur.png',
    rotation: 6,
  },
  {
    title: 'Scary Mask',
    link: 'https://www.instagram.com/ar/265495934638851/',
    image: '/Scary_Mask.png',
    rotation: -15,
  },
]

const Page = () => {
  return (
    <WorkSkeleton title="UI/UX">
      <SubSkeleton projects={projects} />
    </WorkSkeleton>
  )
}

export default Page
