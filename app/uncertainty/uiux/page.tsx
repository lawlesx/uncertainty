'use client'
import WorkSkeleton from '../../../components/WorkSkeleton'
import SubSkeleton, { Works } from '../../../components/SubSkeleton'

const projects: Works[] = [
  {
    title: 'MarveloUnit',
    link: 'https://dribbble.com/shots/15978545-MarveloUnit',
    image: '/MarveloUnit.png',
    rotation: 6,
  },
  {
    title: 'Lastro Club',
    link: 'https://dribbble.com/shots/15978558-LastroClub',
    image: '/LastroClub.png',
    rotation: -6,
  },
  {
    title: 'Verifyble',
    link: 'https://dribbble.com/shots/15978486-Verifyble',
    image: '/VerificationUi.png',
    rotation: 0,
  },
  {
    title: 'Chat App',
    link: 'https://dribbble.com/shots/15978533-Gossips',
    image: '/ChatUi.png',
    rotation: -15,
  }
]

const Page = () => {
  return (
    <WorkSkeleton title="UI/UX">
      <SubSkeleton projects={projects} />
    </WorkSkeleton>
  )
}

export default Page
