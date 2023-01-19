import { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const WorkSkeleton: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full h-screen bg-primary lg:px-[4.5rem] overflow-hidden">
      <div className='w-[50vw] h-[60vh] lg:flex items-center justify-center top-40 right-40 -rotate-[7.5deg] bg-white absolute px-[5rem] hidden' style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)' }}>
        <h1 className='text-5xl text-lightGray font-quick'>{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default WorkSkeleton