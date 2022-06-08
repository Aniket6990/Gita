import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="p-4 flex flex-col items-center justify-between max-w-full max-h-fit sm:flex sm:flex-row sm:items-center sm:justify-between">
      <div className='text-white text-2xl'><Link to='/'>Sri Bhagavad Gita</Link></div>
      <div className="px-6 py-2 rounded-lg bg-purple-600 text-white mt-4 sm:mt-0 hover:bg-purple-500"><Link to="chapters">Chapters</Link></div>
    </div>
    </>
  )
}

export default Nav