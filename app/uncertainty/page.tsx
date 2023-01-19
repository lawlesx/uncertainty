import About from "../../components/About";
import Expertise from "../../components/Expertise";
import GetInTouch from "../../components/GetInTouch";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Socials from "../../components/Socials";

export default function Page() {

  return (
    <div className="w-full min-h-screen lg:pl-16 lg:pr-6" id="home">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full">
          {/* ------------------------------ Get in Touch ------------------------------ */}
          <div className="w-full py-10 lg:flex items-center justify-end px-[5rem] hidden">
            <GetInTouch />
          </div>
          <Intro />
          <p className="text-base text-fade ml-24 my-20" style={{ writingMode: 'vertical-lr' }}>Scroll to Continue</p>
          <About />
          <Expertise />
          <Projects />
        </div>
        <div className="w-full py-4 flex items-center justify-center lg:hidden">
          <GetInTouch />
        </div>
        <Socials />
      </div>
    </div>
  )
}
