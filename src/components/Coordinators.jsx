import React from "react";

const Coordinators = () => {
  const coordinators = [
    {
      name: "ADARSH MADHU",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919995028016",
      image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/sir.jpeg",
    },
    {
      name: "ADARSH MADHU",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919995028016",
      image: "https://www.stthomaskannur.ac.in/ignite2023/assets/img/sir.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-20 px-4 sm:px-8 flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-5xl font-semibold mb-12">
        Our Coordinators
      </h1>
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {coordinators.map((coordinator, index) => (
          <div
            key={index}
            className="bg-white w-80 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6"
          >
            <div className="flex flex-col items-center">
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className="w-32 h-32 rounded-full mb-6 object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                {coordinator.name}
              </h2>
              <p className="text-gray-600 text-center text-lg mb-2">{coordinator.title}</p>
              <p className="text-gray-600 text-center text-lg mb-2">{coordinator.department}</p>
              <a
                href={`tel:${coordinator.phone}`}
                className="text-blue-600 font-semibold mt-4 text-center block text-lg hover:text-blue-800"
              >
                {coordinator.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinators;

