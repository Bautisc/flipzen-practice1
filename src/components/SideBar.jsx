import { Link, useLocation } from "react-router-dom"
import logo from '../assets/mymc.png'

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col w-72 h-screen p-6 bg-blue-800">
      <div className='flex justify-center mb-6'>
        <img className='w-full max-w-[130px]' src={logo} alt='logo' />
      </div>

      <div className="border-b border-white/80 mb-6"></div>

      <div className="flex flex-col space-y-2">
        <Link to='/enrolled-users'>
          <button type="button" className={`flex items-center w-full h-full p-2 gap-3 text-white transition-colors rounded-md font-medium ${isActive('/enrolled-users') ? "bg-gray-800/75" : "bg-transparent hover:bg-gray-800/50"}`}>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Enrolled Users</button>
        </Link>
        <Link to='/users'>
          <button type="button" className={`flex items-center w-full h-full p-2 gap-3 text-white transition-colors rounded-md font-medium ${isActive('/users') ? "bg-gray-800/75" : "bg-transparent hover:bg-gray-800/50"}`}>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
              <circle cx="10" cy="8" r="5"></circle>
              <circle cx="18" cy="18" r="3"></circle>
              <path d="m19.5 14.3-.4.9"></path>
              <path d="m16.9 20.8-.4.9"></path>
              <path d="m21.7 19.5-.9-.4"></path>
              <path d="m15.2 16.9-.9-.4"></path>
              <path d="m21.7 16.5-.9.4"></path>
              <path d="m15.2 19.1-.9.4"></path>
              <path d="m19.5 21.7-.4-.9"></path>
              <path d="m16.9 15.2-.4-.9"></path>
            </svg>
            Admin Users</button>
        </Link>
      </div>
    </div >
  )
}

export default SideBar
