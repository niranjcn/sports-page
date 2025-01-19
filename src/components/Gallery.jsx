import { useState } from "react";
import { motion } from "framer-motion";

// Import images
import A1 from "../assets/images/A1.jpeg";
import A2 from "../assets/images/A2.jpg";
import A4 from "../assets/images/A4.jpg";
import A5 from "../assets/images/A5.jpeg";
import AL1 from "../assets/images/AL1.jpeg";
import AL2 from "../assets/images/AL2.jpeg";
import AL4 from "../assets/images/AL4.jpeg";
import G1 from "../assets/images/G1.jpg";


function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Use imported images in the panels array
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

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle the expanded image
  };

  const handleClose = () => {
    setExpandedIndex(null); // Close the expanded image
  };

  return (
    
    <main className="w-full h-auto bg-gray-900 py-16">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-cyan-700">GALLERY</h1>
      </div>

      

      {/* Main Gallery */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4"
        style={{
          backgroundColor: expandedIndex !== null ? "rgba(0,0,0,0.7)" : "transparent",
        }}
      >
        {/* Large Image Preview */}
        {expandedIndex !== null && (
          <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
            <div className="relative w-3/4 md:w-1/2 h-3/4 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={panels[expandedIndex].image}
                alt="Expanded"
                className="w-full h-full object-contain"
              />
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.25 }}
         >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 border-4 border-gray-700`}
            >
              <img
                src={panel.image}
                alt="Gallery Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Gallery;


