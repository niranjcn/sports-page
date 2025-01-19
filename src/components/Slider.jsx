import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import BAN1 from "../assets/images/ban1.jpg"
import BAN2 from "../assets/images/ban2.jpg"
import BAN3 from "../assets/images/ban3.jpg"





function Slider() {
  const slides = [
    {
      url: BAN1,
    },
    {
      url: BAN2,
    },
    {
      url: BAN3,
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change the slide every 3 seconds (3000ms)

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, [currentIndex]); // Re-run this effect whenever `currentIndex` changes

  return (
    <div className="max-w-full h-auto w-full m-auto  pb-16  relative group bg-gray-900">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[30vh] sm:h-[40vh]  md:h-[80vh] lg:h-[100vh] bg-no-repeat bg-center bg-cover overflow-hidden  transition-all transform duration-1000 ease-in-out"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute  top-[50%] lg:top-[50%] sm:top-[20%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%]  right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-3xl cursor-pointer mx-1 ${
              slideIndex === currentIndex ? 'text-white' : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
