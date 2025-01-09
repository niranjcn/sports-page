import React from "react";
import "./Scoreboard.css"; // Import custom CSS for the inverted triangle

const Scoreboard = () => {
  // Hardcoded team data
  const teams = [
    { id: 1, name: "Name1", logo: null, score: 42 },
    { id: 2, name: "Assassins", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/ASSASSINS.jpg", score: 78 },
    { id: 3, name: "Crusaders", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/CRUSADERS.png", score: 56 },
    { id: 4, name: "Cyborgs", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/cyborgs.jpg", score: 64 },
  ];

  return (
    <div className="scoreboard-container bg-gray-900 py-20 px-6">
      {/* Scoreboard Heading */}
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-700">SCORE BOARD</h1>

      {/* Grid Layout for Teams */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative flex flex-col items-center"
          >
            {/* Inverted Triangle Shape with Logo */}
            <div className="triangle w-36 h-36 bg-gray-800 shadow-lg flex items-center justify-center mb-4">
              {team.logo ? (
                <img
                  src={team.logo}
                  alt={`${team.name} Logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-600 text-gray-300 text-lg">
                  No Logo
                </div>
              )}
            </div>

            {/* Score */}
            <p className="score text-4xl font-extrabold text-cyan-700 text-center">{team.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
