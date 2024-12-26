import React from "react";

const Scoreboard = () => {
  // Hardcoded team data
  const teams = [
    { id: 1, name: "Name1", logo: null, score: 0 },
    { id: 2, name: "Assassins", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/ASSASSINS.jpg", score: 0 },
    { id: 3, name: "Crusaders", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/CRUSADERS.png", score: 0 },
    { id: 4, name: "Cyborgs", logo: "https://www.stthomaskannur.ac.in/ignite/statistics/img/cyborgs.jpg", score: 0 },
  ];

  const handleDetails = (teamName) => {
    alert(`Showing details for ${teamName}`);
  };

  return (
    <div className="scoreboard-container flex flex-col items-center p-10 ">
      {/* Scoreboard Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">SCORE BOARD</h1>

      <div className="grid grid-cols-4 gap-16 mt-8">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card bg-white p-12 rounded-xl shadow-xl text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Logo Section */}
            <div className="logo mb-6">
              {team.logo ? (
                <img
                  src={team.logo}
                  alt={`${team.name} Logo`}
                  className="mx-auto w-40 h-40 object-cover rounded-full shadow-lg"
                />
              ) : (
                <div className="w-40 h-40 mx-auto bg-gray-300 flex items-center justify-center text-gray-600 text-lg rounded-full shadow-lg">
                  No Logo Yet!
                </div>
              )}
            </div>

            {/* Team Name */}
            <h2 className="team-name text-3xl font-bold text-gray-800 mb-4">{team.name}</h2>

            {/* Score */}
            <p className="score text-5xl font-bold text-gray-800 mb-6">{team.score}</p>

            {/* Details Button */}
            <button
              className="details-btn bg-blue-600 text-white px-8 py-4 rounded-full mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => handleDetails(team.name)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;



