import React, { useEffect, useState } from "react";
import RETREOS from "../assets/images/retreos.jpg"
import ASSA from "../assets/images/Assa.jpg"
import CRUS from "../assets/images/crus2.jpg"
import CYB from "../assets/images/cyborgs.jpg"

const Scoreboard = () => {

 
  const teams = [
    { id: 1, name: "Name1", logo: RETREOS, score: 42 },
    { id: 2, name: "Assassins", logo: ASSA, score: 78 },
    { id: 3, name: "Crusaders", logo: CRUS, score: 56 },
    { id: 4, name: "Cyborgs", logo: CYB, score: 64 },
  ];

  return (
    <div className="relative scoreboard-container min-h-screen py-20 px-6">
      {/* Background Animation Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-pink-500/10 rounded-full blur-md animate-pulse animation-delay-6000"></div>
      
      <div className="relative z-10">
        {/* Scoreboard Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]">SCORE BOARD</h1>

        {/* Enhanced iframe container */}
        <div className="relative bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur"></div>
          <iframe
            src="https://stthomaskannur.ac.in/ignite/statistics/"
            className="relative w-full h-[70vh] border-0 rounded-2xl"
            title="Statistics"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;



