import GetInTouch from "../../components/GetInTouch";

export default function Page() {

  return (
    <div className="w-full bg-background min-h-screen pl-16 pr-10">
      <div className="flex flex-col w-full">
        <div className="w-full py-10 flex items-center justify-end pr-14">
          <GetInTouch />
        </div>
      </div>
    </div>
  )
}
