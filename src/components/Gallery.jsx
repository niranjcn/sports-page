import { useState } from 'react';

function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const panels = [
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL1.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A1.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL2.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/G2.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A2.jpg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/AL4.jpeg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/G1.jpg" },
    { image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/portfolio/A5.jpeg" }
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-full h-screen bg-black overflow-hidden">
      <div
        className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: `url(${panels[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
        <div className="flex w-full max-w-7xl h-[80vh] gap-2 items-center justify-center z-10">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                h-full rounded-2xl bg-white cursor-pointer
                transition-all duration-500 ease-in-out overflow-hidden
                ${expandedIndex === index ? 'w-[60%]' : 'w-[10%] hover:w-[30%] hover:bg-gray-200'}
                min-w-[40px] block
              `}
            >
              <img
                src={panel.image}
                alt=""
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Gallery;
