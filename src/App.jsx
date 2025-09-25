import React from 'react';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider.jsx';
import Gallery from './components/Gallery.jsx';
import Coordinators from './components/Coordinators.jsx';
import Banner from './components/Banner.jsx'
import Events from './components/Events.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Scoreboard from './components/Scoreboard.jsx';
import Teams from './components/Teams.jsx';


import './App.css';
function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Global Seamless Background Animations - Coordinators Style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Primary animated orbs with coordinators-style positioning and animation */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-20 animate-coordinators-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-20 animate-coordinators-pulse animation-delay-2000"></div>
        
        {/* Additional flowing orbs for seamless coverage */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-[140px] opacity-15 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full filter blur-[140px] opacity-15 animate-coordinators-pulse animation-delay-6000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-emerald-500 rounded-full filter blur-[130px] opacity-12 animate-pulse animation-delay-8000"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-yellow-500 rounded-full filter blur-[130px] opacity-12 animate-coordinators-pulse animation-delay-3000"></div>
        
        {/* Subtle middle layer orbs */}
        <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-indigo-500 rounded-full filter blur-[120px] opacity-10 animate-pulse animation-delay-5000"></div>
        <div className="absolute bottom-1/3 right-1/2 w-60 h-60 bg-teal-500 rounded-full filter blur-[120px] opacity-10 animate-coordinators-pulse animation-delay-7000"></div>
        
        {/* Additional subtle background layer for enhanced depth */}
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-rose-500 rounded-full filter blur-[100px] opacity-8 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/6 left-1/6 w-48 h-48 bg-violet-500 rounded-full filter blur-[100px] opacity-8 animate-coordinators-pulse animation-delay-5000"></div>
      </div>

      <Banner />
      <Nav />

      <div className="content relative z-10 bg-gradient-to-b from-black via-transparent to-black">
        <section id="slider" className="relative">
          <Slider />
        </section>

        <section id="teams" className="relative">
          <Teams />
        </section>

        <section id="events" className="relative">
          <Events />
        </section>

        <section id="scoreboard" className="relative">
          <Scoreboard />
        </section>

        <section id="gallery" className="relative">
          <Gallery />
        </section>
       
        <section id="coordinators" className="relative">
          <Coordinators />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;


