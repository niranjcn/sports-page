import React from 'react';
import SOC from "../assets/images/soc.png";
import LOGOM from "../assets/images/logomain.png";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${SOC})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Event Logo Animation */}
        <motion.img
          src={LOGOM}
          alt="Event Logo"
          className="w-32 md:w-48 lg:w-56 h-auto mb-6 object-contain"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        />

        {/* Event Name Animation */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          IGNITE 2024
        </motion.h1>

        <motion.h3
          className="text-sm md:text-lg lg:text-xl font-medium text-gray-300 mb-6"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          St. Thomas College of Engineering & Technology
        </motion.h3>

        {/* Register Now Button Animation */}
        <motion.a
          href="https://stthomaskannur.ac.in/ignite/"
          className="px-8 py-3 rounded-full text-white font-semibold text-sm md:text-lg transition-all duration-300 mb-12
                     bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border-2 border-transparent 
                     hover:border-white shadow-lg hover:shadow-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          REGISTER NOW
        </motion.a>
      </div>

      {/* Scroll Down Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="text-white text-center flex flex-col items-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <span className="text-sm md:text-base font-medium mb-2">
            Scroll Down
          </span>
          <BsMouse size={30} className="animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

