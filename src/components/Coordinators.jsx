import React from "react";
import { motion } from "framer-motion";
import ADARSH from "../assets/images/adharshsir.jpeg";
import VARUN from "../assets/images/varunsir.jpg";

// Inline SVG for Phone Icon
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547c.52-.13 1.071-.008 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
  </svg>
);


const Coordinators = () => {
  const coordinators = [
    {
      name: "ADARSH MADHU",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919995028016",
      image: ADARSH,
    },
    {
      name: "VARUN P V",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919495124062",
      image: VARUN,
    },
    {
      name: "MURALIDHARAN P T",
      title: "Assistant Professor",
      department: "ASH Department",
      
    },
  ];

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-4 py-16">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR COORDINATORS
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 group transition-all duration-300 hover:border-cyan-400/50"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img
                      src={coordinator.image}
                      alt={coordinator.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-800"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {coordinator.name}
                  </h2>
                  <p className="text-cyan-300/80 font-medium mb-1">
                    {coordinator.title}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {coordinator.department}
                  </p>
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="inline-flex items-center justify-center text-sm font-semibold text-gray-300 bg-slate-800/70 px-4 py-2 rounded-full transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-300"
                  >
                    <PhoneIcon />
                    {coordinator.phone}
                  </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Coordinators;
