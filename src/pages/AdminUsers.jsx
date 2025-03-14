import React from 'react'
import { useUsers } from '../context/UserContext'

const AdminUsers = () => {
  const { adminUsers } = useUsers();
  return (
    <div>
      <div className='flex justify-end mb-4'>
        <button className="bg-blue-800 text-white px-4 py-2 h-10 rounded hover:cursor-pointer hover:bg-blue-900">Create User Admin</button>
      </div>
      <table className="min-w-full border border-neutral-600/50 overflow-hidden px-4">
        <thead className="bg-neutral-300/70">
          <tr>
            <th className="p-2"></th>
            <th className="p-2">ID</th>
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.map((user) => (
            <tr key={user.id} className="border-t border-neutral-600/50">
              <td className="p-2 text-center">
                <button type="button" className="flex items-center justify-center w-7 h-7 bg-transparent border rounded-sm border-gray-600 hover:cursor-pointer hover:bg-gray-300 ">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </button>
              </td>
              <td className="p-2 text-center">{user.id}</td>
              <td className="p-2 text-center">{user.firstName}</td>
              <td className="p-2 text-center">{user.lastName}</td>
              <td className="p-2 text-center">{user.email}</td>
              <td className="p-2 text-center">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers
