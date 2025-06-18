import React from 'react'
import SideBar from '../Dashboards/SuperAdmins/SideBar'
import Header from '../Dashboards/SuperAdmins/Header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <SideBar />
          <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout