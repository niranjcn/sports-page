import React from "react";
import RETREOS from "../assets/images/retreos.jpg";
import ASSA from "../assets/images/Assa.jpg";
import CRUS from "../assets/images/crus2.jpg";
import CYB from "../assets/images/cyborgs.jpg";

const Teams = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 px-8 py-12">
      <h1 className="text-4xl font-bold mb-20 text-center text-cyan-700">
        OUR TEAMS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Team 1 */}
        <a
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/green.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:shadow-[0_4px_60px_rgba(0,255,255,1),0_0_80px_rgba(0,255,255,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(0, 13, 255, 0.7), 0 0 40px rgba(8, 0, 255, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${RETREOS})`,
              borderRadius: "inherit",
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </a>

        {/* Team 2 */}
        <a
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/red.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:shadow-[0_4px_60px_rgba(255,69,0,1),0_0_80px_rgba(255,165,0,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(255, 69, 0, 0.7), 0 0 40px rgba(255, 165, 0, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${ASSA})`,
              borderRadius: "inherit",
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </a>

        {/* Team 3 */}
        <a
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/blue.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:shadow-[0_4px_60px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${CRUS})`,
              borderRadius: "inherit",
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </a>

        {/* Team 4 */}
        <a
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/yellow.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:shadow-[0_4px_60px_rgba(138,43,226,1),0_0_80px_rgba(147,112,219,1)]"
          style={{
            boxShadow: `0 4px 30px rgba(138, 43, 226, 0.7), 0 0 40px rgba(147, 112, 219, 0.8)`,
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 1.0s ease, transform 0.7s ease",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${CYB})`,
              borderRadius: "inherit",
            }}
          ></div>
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </a>
      </div>
    </div>
  );
};

export default Teams;

