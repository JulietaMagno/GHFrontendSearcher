import React from 'react'
import SearchIcon from './icons/SearchIcon'

const Searchbar = () => {
  return (
    <form className='flex flex-wrap items-center gap-2 rounded-xl bg-white bg-opacity-5 px-1 py-2'> 
        <span className='px-4'>
            <SearchIcon 
                width={30} 
                className='fill-blue-500 '
            />
        </span>
        <input 
            type="text" 
            placeholder="Search GitHub username..." 
            className='bg-transparent rounded-lg p-2 flex-1 h-14 text-white placeholder:text-white-500 font-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        />
        <button 
            type="submit" 
            className='bg-blue-500 rounded-lg py-4 px-4 text-white font-semibold'
            >
                Search
        </button>
    </form>
  )
}

export default Searchbar