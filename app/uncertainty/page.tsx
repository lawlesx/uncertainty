import About from "../../components/About";
import Expertise from "../../components/Expertise";
import GetInTouch from "../../components/GetInTouch";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Socials from "../../components/Socials";

export default function Page() {

  return (
    <div className="w-full min-h-screen pl-16 pr-6" id="home">
      <div className="flex">
        <div className="flex flex-col w-full">
          {/* ------------------------------ Get in Touch ------------------------------ */}
          <div className="w-full py-10 flex items-center justify-end px-[5rem]">
            <GetInTouch />
          </div>
          <Intro />
          <p className="text-base text-fade ml-24 my-20" style={{ writingMode: 'vertical-lr' }}>Scroll to Continue</p>
          <About />
          <Expertise />
          <Projects />
        </div>
        <Socials />
      </div>
    </div>
  )
}
