import React from "react";
import KALHAAR from "../assets/images/Kalhaar.png";
import ASSA from "../assets/images/Assa.jpg";
import CRUS from "../assets/images/crus2.jpg";
import ADH from "../assets/images/adhera.jpg";
import { motion } from "framer-motion";

const Teams = () => {
  const teams = [
    {
      name: "ADHERA",
      image: ADH,
      url: "https://stthomaskannur.ac.in/ignite/dpoints/team/green.php",
      gradient: "from-emerald-500 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      hoverGlow: "shadow-[0_0_80px_rgba(16,185,129,0.6)]",
      icon: "🌿"
    },
    {
      name: "KALHAAR",
      image: KALHAAR,
      url: "https://stthomaskannur.ac.in/ignite/dpoints/team/red.php",
      gradient: "from-red-500 to-orange-600",
      glowColor: "rgba(239, 68, 68, 0.4)",
      hoverGlow: "shadow-[0_0_80px_rgba(239,68,68,0.6)]",
      icon: "🔥"
    },
    {
      name: "ASSASSINS",
      image: ASSA,
      url: "https://stthomaskannur.ac.in/ignite/dpoints/team/blue.php",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      hoverGlow: "shadow-[0_0_80px_rgba(59,130,246,0.6)]",
      icon: "⚡"
    },
    {
      name: "CRUSADERS",
      image: CRUS,
      url: "https://stthomaskannur.ac.in/ignite/dpoints/team/yellow.php",
      gradient: "from-purple-500 to-indigo-600",
      glowColor: "rgba(147, 51, 234, 0.4)",
      hoverGlow: "shadow-[0_0_80px_rgba(147,51,234,0.6)]",
      icon: "⚔️"
    }
  ];

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-6 py-20">
      <div className="relative z-10 w-full max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, rotateY: -30 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              OUR TEAMS
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Meet the four powerhouse teams ready to compete in IGNITE 2K25
          </motion.p>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <a
                href={team.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                {/* Card Container */}
                <div className={`relative bg-gray-900/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 transition-all duration-500 group-hover:border-transparent group-hover:${team.hoverGlow} h-96`}>
                  {/* Gradient Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${team.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  
                  {/* Background Image */}
                  <div className="relative h-full">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradients */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${team.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      {/* Team Icon */}
                      <motion.div
                        className="text-4xl mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {team.icon}
                      </motion.div>
                      
                      {/* Team Name - Hidden by default, shown on hover */}
                      <motion.h3 
                        className="text-2xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.05 }}
                      >
                        {team.name}
                      </motion.h3>
                      
                      {/* Team Color */}
                      <motion.p 
                        className={`text-sm font-semibold bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0`}
                      >
                        {team.color}
                      </motion.p>
                      
                      {/* Hover Indicator */}
                      <motion.div
                        className="mt-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <span className="text-xs text-gray-300">View Team Details</span>
                        <motion.div
                          className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <span className="text-xs">→</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg mb-6">Click on any team to view their detailed statistics and progress</p>
          <motion.div
            className="inline-flex items-center space-x-2 text-cyan-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span>🏆</span>
            <span className="font-medium">May the best team win!</span>
            <span>🏆</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;

