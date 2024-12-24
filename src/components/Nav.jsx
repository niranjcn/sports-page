import React from 'react';
import { Link } from 'react-scroll'; 
import stmlogo from '../assets/images/stthomaskannur.png';

const Nav = () => {
  return (
    <div>
      <nav className="h-28 w-full bg-white flex items-center justify-between px-6 border-b border-gray-200 shadow-md">
        <div className="ml-5">
          <img src={stmlogo} alt="St Thomas Kannur" className="h-20 w-auto mt-2" />
        </div>
        <div>
          <div className="space-x-6 flex mr-14 text-sm font-semibold text-cyan-700">
            <Link to="slider" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
              HOME
            </Link>
            <Link to="gallery" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
              GALLERY
            </Link>
            <Link to="coordinators" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
              COORDINATORS
            </Link>
            <a href="#score" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">SCORE</a>
            <a href="#events" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">EVENTS</a>
            <a href="#teams" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">TEAMS</a>
            <a href="#statistics" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">STATISTICS</a>
            <a href="#register" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">REGISTER NOW</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;




