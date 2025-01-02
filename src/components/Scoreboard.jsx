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
    <div className="scoreboard-container bg-gray-50 py-20 px-6">
      {/* Scoreboard Heading */}
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12 tracking-tight">
        Scoreboard
      </h1>

      {/* Grid Layout for Teams */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            {/* Logo Section */}
            <div className="logo mb-6 flex justify-center">
              {team.logo ? (
                <img
                  src={team.logo}
                  alt={`${team.name} Logo`}
                  className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 shadow-xl transition-all transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-blue-700"
                />
              ) : (
                <div className="w-36 h-36 flex items-center justify-center bg-gray-200 text-gray-600 text-lg rounded-full border-4 border-gray-300 shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-blue-700">
                  No Logo
                </div>
              )}
            </div>

            {/* Team Name */}
            <h2 className="team-name text-2xl font-semibold text-gray-800 mb-4 text-center">{team.name}</h2>

            {/* Score */}
            <p className="score text-4xl font-extrabold text-blue-600 mb-6 text-center">{team.score}</p>

            {/* Details Button */}
            <button
              className="details-btn bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
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








