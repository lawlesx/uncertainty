import Image from "next/image"

const Intro = () => {
  return (
    <div className="w-full flex items-center justify-between pl-[5.5rem] py-8">
      <div className="flex flex-col">
        <h1 className="text-primary text-[8rem] leading-[8rem]">Hello</h1>
        <h1 className="text-primary text-[3rem] pt-2 pl-2">I am Aniruddha Sil</h1>
        <p className="text-primary text-[2.3rem] font-quick pl-2">And welcome to my Portfolio Website</p>
      </div>
      <div>
        <Image src="/Profile.png" alt="Picture of the author" width={414} height={500} />
      </div>
    </div>
  )
}

export default Intro