import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your original images
import A1 from "../assets/images/A1.jpeg";
import A2 from "../assets/images/A2.jpg";
import A4 from "../assets/images/A4.jpg";
import A5 from "../assets/images/A5.jpeg";
import AL1 from "../assets/images/AL1.jpeg";
import AL2 from "../assets/images/AL2.jpeg";
import AL4 from "../assets/images/AL4.jpeg";
import G1 from "../assets/images/G1.jpg";


// Close Icon SVG
const CloseIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Use your imported images in the panels array
  const panels = [
    { image: A1 },
    { image: A2 },
    { image: A4 },
    { image: A5 },
    { image: AL1 },
    { image: AL2 },
    { image: AL4 },
    { image: G1 },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };


  return (
    <main className="relative w-full min-h-screen py-16 px-4">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              GALLERY
            </motion.h1>

            {/* Masonry-style Grid Layout */}
            <motion.div
              className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {panels.map((panel, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedImage(panel.image)}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
                  variants={itemVariants}
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative border-2 border-slate-800 rounded-2xl overflow-hidden">
                        <img
                            src={panel.image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </motion.div>
              ))}
            </motion.div>
        </div>

      {/* Modal for Expanded Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div 
                className="relative max-w-4xl max-h-[90vh] w-full"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the image
            >
              <img
                src={selectedImage}
                alt="Expanded View"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 text-white bg-slate-800/80 rounded-full p-2 transition-all duration-300 hover:bg-cyan-400/50 hover:scale-110"
              >
                <CloseIcon />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Gallery;

