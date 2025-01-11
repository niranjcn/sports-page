import React from "react";
import "./Scoreboard.css"; // Import custom CSS for advanced animations

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
            className="team-card group bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative flex flex-col items-center"
          >
            {/* Inverted Triangle Shape with Logo */}
            <div
              className="triangle w-36 h-36 bg-gray-800 shadow-lg flex items-center justify-center mb-4 relative group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ease-in-out"
              style={{
                clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              }}
            >
              {team.logo ? (
                <img
                  src={team.logo}
                  alt={`${team.name} Logo`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-600 text-gray-300 text-lg">
                  No Logo
                </div>
              )}

              {/* Neon light effect below the triangle */}
              <div
                className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[170%] h-[80px] bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:h-[40px] group-hover:shadow-[0_0_80px_cyan] transition-all duration-300 ease-in-out"
              />
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



