import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import stmlogo from '../assets/images/stthomaskannur.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu on mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when an option is clicked
  };

  return (
    <div>
      <nav className="h-28 w-full bg-white flex items-center justify-between px-6 border-b border-gray-200 shadow-md">
        {/* Main logo with adjusted margin to move it left in mobile view */}
        <div className="ml-3 mr-3 sm:ml-0"> {/* Added sm:ml-0 to reset margin on larger screens */}
          <img src={stmlogo} alt="St Thomas Kannur" className="h-20 w-auto mt-2" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-cyan-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex space-x-6 mr-14 text-sm font-semibold text-cyan-700">
          <Link to="slider" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            HOME
          </Link>
          <Link to="gallery" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            GALLERY
          </Link>
          <Link to="coordinators" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            COORDINATORS
          </Link>
          <Link to="scoreboard" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            SCORES
          </Link>
          <Link to="events" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            EVENTS
          </Link>
          <Link to="teams" smooth={true} duration={500} className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">
            TEAMS
          </Link>
          <a href="#statistics" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">STATISTICS</a>
          <a href="#register" className="hover:text-emerald-800 transition-colors duration-300 cursor-pointer">REGISTER NOW</a>
        </div>

        {/* Mobile Menu (Modal Popup) */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50`}>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 max-w-xl p-8 rounded-lg shadow-lg space-y-6">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl text-gray-700"
            >
              &times;
            </button>
            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-6">
              <Link
                to="slider"
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer font-semibold text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                HOME
              </Link>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                GALLERY
              </Link>
              <Link
                to="coordinators"
                smooth={true}
                duration={500}
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                COORDINATORS
              </Link>
              <Link
                to="scoreboard"
                smooth={true}
                duration={500}
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                SCORES
              </Link>
              <Link
                to="events"
                smooth={true}
                duration={500}
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                EVENTS
              </Link>
              <Link
                to="teams"
                smooth={true}
                duration={500}
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                TEAMS
              </Link>
              <a
                href="#statistics"
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                STATISTICS
              </a>
              <a
                href="#register"
                className="text-lg font-semibold cursor-pointer text-cyan-700 hover:text-emerald-800 w-full text-center"
                onClick={closeMenu}
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;






