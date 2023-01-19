import WorkSkeleton from "../../../components/WorkSkeleton"

const Page = () => {
  return (
    <WorkSkeleton title="Web Dev">
      <ul className="w-full h-full pl-8 pt-[50vh] relative overflow-y-auto no-scroll-bar">
        {
          [1, 2, 3, 4, 5].map(i => <li key={i} className="font-oswald text-[9rem] text-lightGray hover:text-fade transition-colors ease-in-out cursor-pointer duration-300 w-max truncate">My Portfolio</li>)
        }
      </ul>
    </WorkSkeleton>
  )
}

export default Page