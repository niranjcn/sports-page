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
    <div className="scoreboard-container h-screen bg-gray-900 py-20 px-6">
      {/* Scoreboard Heading */}
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-700">SCORE BOARD</h1>

      {/* Grid Layout for Teams */}
      
      <iframe
              src="https://stthomaskannur.ac.in/ignite/statistics/"
              className=" w-full h-full border-0"
              title="Statistics"
              allowFullScreen
            />
      
    </div>
  );
};

export default Scoreboard;



