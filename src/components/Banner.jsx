import React from 'react';
import { motion } from "framer-motion";
import BANNERIMAGE from "../assets/images/bannerimage.png";
import Land4 from "../assets/videos/land4.mp4";
import BANIMG from "../assets/images/banimg.jpg";
import Land6 from "../assets/videos/land6.mp4";

const Banner = () => {

  return (
    <div className="relative w-full h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-screen overflow-hidden">
      {/* Background Video - This now uses your 'Land' video import */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster= {BANIMG}
      >
        <source src={Land4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Futuristic Registration Button - Positioned at Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <motion.a
          href="https://stthomaskannur.ac.in/ignite/"
          className="group relative overflow-hidden
                     px-8 py-3 bg-gray-900/80 backdrop-blur-md text-cyan-400 font-bold text-sm
                     border border-cyan-500/50 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]
                     hover:border-cyan-400 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]
                     transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          
          {/* Glowing Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur 
                          opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          {/* Button Text */}
          <span className="relative z-10 tracking-wide">
            REGISTER NOW
          </span>
          
          {/* Futuristic Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                          bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent 
                          transition-transform duration-700 rounded-xl skew-x-12"></div>
          
          {/* Corner Accent Lines */}
          <div className="absolute top-0 left-0 w-3 h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-0.5 h-3 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      </div>
    </div>
  );
};

export default Banner;

