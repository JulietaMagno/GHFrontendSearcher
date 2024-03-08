import React from 'react'
import SunIcon from '@/components/icons/SunIcon'

const Navbar = () => {
  return (
    <header className='flex items-center px-2 mb-8'>
      <h1 className='text-white text-3xl font-bold flex-grow'>devfinder</h1>
      <div className='flex gap-2'>
        <span className='uppercase text-white'>Light</span>
        <button>
          <SunIcon 
          className='fill-white'
          width={20}
          />
        </button>
      </div>
    </header>
  )
}

export default Navbar