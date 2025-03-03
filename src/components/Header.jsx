import React from 'react'

const DashboardHeader = ({ title }) => {
  return (
    <div className='p-6 bg-neutral-300/60 w-full border-b border-neutral-300 overflow-hidden'>

      <p className='text-xl font-semibold '>{title}</p>
    </div>

  )
}

export default DashboardHeader
