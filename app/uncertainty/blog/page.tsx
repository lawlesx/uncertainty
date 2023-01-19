'use client'
import WorkSkeleton from '../../../components/WorkSkeleton'
import SubSkeleton, { Works } from '../../../components/SubSkeleton'

const projects: Works[] = [
  {
    title: 'Animated Modal',
    link: 'https://lawlesx.hashnode.dev/modal-transition-with-framer-motion-and-next',
    image: '/AnimatedModal.webp',
    rotation: 7,
  }
]

const Page = () => {
  return (
    <WorkSkeleton title="Blog">
      <SubSkeleton projects={projects} />
    </WorkSkeleton>
  )
}

export default Page
