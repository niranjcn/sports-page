import { useState } from "react";

function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const panels = [
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL1.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A1.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL2.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/G2.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A2.jpg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL4.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/G1.jpg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A5.jpeg" },
  ];

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle the expanded image
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 border-4 border-gray-700`}
            >
              <img
                src={panel.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Gallery;
