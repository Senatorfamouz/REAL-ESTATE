import SideBar from "../../Dashboards/SuperAdmins/SideBar"
import Header from "../../Dashboards/SuperAdmins/Header"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar - 20% width */}
      <div className="w-1/5 min-w-[30px] bg-white border-r border-gray-200 flex-shrink-0">
        <SideBar />
      </div>

      {/* Main Content Area - 80% width */}
      <div className="flex-1 flex flex-col sticky top-0 w-full">
        {/* Header spanning the 80% area */}
        <div className="bg-white border-b border-gray-200 flex-shrink-0 mb-10">
          <Header />
        </div>

        {/* Main content with Outlet */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
