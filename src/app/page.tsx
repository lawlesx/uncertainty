import About from '@/components/sections/About'
import AfterDark from '@/components/sections/AfterDark'
import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import NowBuilding from '@/components/sections/NowBuilding'
import Toolkit from '@/components/sections/Toolkit'
import Work from '@/components/sections/Work'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <AfterDark />
      <NowBuilding />
      <Toolkit />
      <Contact />
    </main>
  )
}
