import About from "../../components/About";
import GetInTouch from "../../components/GetInTouch";
import Intro from "../../components/Intro";
import Socials from "../../components/Socials";

export default function Page() {

  return (
    <div className="w-full min-h-screen pl-16 pr-6">
      <div className="flex">
        <div className="flex flex-col w-full pr-24">
          {/* ------------------------------ Get in Touch ------------------------------ */}
          <div className="w-full py-10 flex items-center justify-end">
            <GetInTouch />
          </div>
          <Intro />
          <p className="text-base text-fade ml-24 my-20" style={{ writingMode: 'vertical-lr' }}>Scroll to Continue</p>
          <About />
        </div>
        <Socials />
      </div>
    </div>
  )
}
