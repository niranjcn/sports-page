import React from 'react'
import stmlogo from '../assets/images/stthomaskannur.png'

const Nav = () => {
  return (
    <div>
     <nav className="h-20 w-full bg-white flex items-center justify-between px-6">
        <div className='ml-5'>
        <img src={stmlogo} alt="St Thomas Kannur" className="h-16 w-auto mt-2" />
        </div>
        <div>
        
        <div className="space-x-6 flex mr-14 text-sm font-semibold text-cyan-700">
          <a href="#" className=" hover:text-emerald-800">HOME</a>
          <a href="#" className=" hover:text-emerald-800">SCORE</a>
          <a href="#" className=" hover:text-emerald-800">EVENTS</a>
          <a href="#" className=" hover:text-emerald-800">GALLERY</a>
          <a href="#" className=" hover:text-emerald-800">TEAMS</a>
          <a href="#" className=" hover:text-emerald-800">STATISTICS</a>
          <a href="#" className=" hover:text-emerald-800">REGISTER NOW</a>
        </div>
            
        </div>
      </nav>
    </div>
  )
}

export default Nav
