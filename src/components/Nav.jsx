import React from 'react'
import stmlogo from '../assets/images/stthomaskannur.png'

const Nav = () => {
  return (
    <div>
     <nav className="h-20 w-full bg-white flex items-center justify-between px-6">
        <div className=''>
        <img src={stmlogo} alt="St Thomas Kannur" className="h-16 w-auto mt-2" />
        </div>
        <div>
        
        <div className="space-x-6 flex">
          <a href="#" className="text-black">HOME</a>
          <a href="#" className="text-black">SCORE</a>
          <a href="#" className="text-black">EVENTS</a>
          <a href="#" className="text-black">GALLERY</a>
          <a href="#" className="text-black">TEAMS</a>
          <a href="#" className="text-black">STATISTICS</a>
          <a href="#" className="text-black">REGISTER NOW</a>
        </div>
            
        </div>
      </nav>
    </div>
  )
}

export default Nav
