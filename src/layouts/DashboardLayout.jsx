import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../components/SideBar'
import DashboardHeader from '../components/Header'
import { UsersProvider } from '../context/UserContext'


const DashboardLayout = () => {
  const location = useLocation();

  const pageTitle = location.pathname === "/enrolled-users" ? "Enrolled Users" : "Admin Users";
  return (
    <div className='flex h-screen w-screen overflow-hidden'>

      <SideBar />

      <div className='flex-1 flex flex-col w-full overflow-auto'>

        <DashboardHeader title={pageTitle} />

        <div className='p-10'>
          <UsersProvider>
            <Outlet />
          </UsersProvider>
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout
