import React from 'react';
import LOGOM from "../assets/images/logomain.png";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import Land from "../assets/videos/land1.mp4";
import Land2 from "../assets/videos/land2.mp4";
import Land3 from "../assets/videos/land3.mp4";

const Banner = () => {
  // Animation variants for framer-motion
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-screen overflow-hidden">
      {/* Background Video - This now uses your 'Land' video import */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Land3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* All Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        
        {/* Event Logo Animation - Using your 'LOGOM' import */}
        <motion.img
          src={LOGOM}
          alt="Event Logo"
          className="w-28 sm:w-32 md:w-48 lg:w-56 h-auto mb-6 object-contain"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        />

        {/* Event Name with Gradient Text */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          IGNITE 2025
        </motion.h1>

        {/* Subheading Text */}
        <motion.h3
          className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-gray-200 mb-8"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          St. Thomas College of Engineering & Technology
        </motion.h3>

        {/* Revamped Register Now Button */}
        <motion.a
          href="https://stthomaskannur.ac.in/ignite/"
          className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base md:text-xl transition-all duration-300 mb-12
                     bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/50
                     hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/80"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          REGISTER NOW
        </motion.a>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className="text-white text-center flex flex-col items-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <span className="text-xs sm:text-sm md:text-base font-medium mb-2">
            Scroll Down
          </span>
          <div className="animate-bounce">
            <BsMouse size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

