import BottomBar from "@/components/common/BottomBar"
import LeftBar from "@/components/common/LeftBar"
import TopBar from "@/components/common/TopBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftBar />

      <section className="flex flex-1 h-full">
      <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout
