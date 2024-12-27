import React from "react";

const Teams = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 px-8">
      <h1 className="text-4xl font-bold text-white mb-20">OUR TEAMS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://example.com/team1"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_4px_60px_rgba(0,255,255,1),0_0_80px_rgba(0,255,255,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 255, 255, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)"
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/team1.png')",
              borderRadius: "inherit"
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold">Title 1</h2>
        </a>

        <a
          href="https://example.com/team2"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_4px_60px_rgba(255,69,0,1),0_0_80px_rgba(255,165,0,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(255, 69, 0, 0.7), 0 0 40px rgba(255, 165, 0, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)"
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.stthomaskannur.ac.in/ignite2023/assets/img/VANGUARDIANZ.jpg')",
              borderRadius: "inherit"
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold">VANGUARDIANZ</h2>
        </a>

        <a
          href="https://example.com/team3"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_4px_60px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)"
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.stthomaskannur.ac.in/ignite2023/assets/img/CRUSADERS.png')",
              borderRadius: "inherit"
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold">CRUSADERS</h2>
        </a>

        <a
          href="https://example.com/team4"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_4px_60px_rgba(138,43,226,1),0_0_80px_rgba(147,112,219,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(138, 43, 226, 0.7), 0 0 40px rgba(147, 112, 219, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)"
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.stthomaskannur.ac.in/ignite/statistics/img/cyborgs.jpg')",
              borderRadius: "inherit"
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold">CYBORGS</h2>
        </a>
      </div>
    </div>
  );
};

export default Teams;
