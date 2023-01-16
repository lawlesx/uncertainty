import GetInTouch from "../../components/GetInTouch";
import Intro from "../../components/Intro";

export default function Page() {

  return (
    <div className="w-full bg-background min-h-screen pl-16 pr-10">
      <div className="flex flex-col w-full pr-32">
        {/* ------------------------------ Get in Touch ------------------------------ */}
        <div className="w-full py-10 flex items-center justify-end">
          <GetInTouch />
        </div>
        <Intro />
      </div>
    </div>
  )
}
