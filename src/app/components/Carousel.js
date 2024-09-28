// components/Carousel.js
"use client";
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/assets/1.png",
      text: "Slide 1",
    },
    {
      image: "/assets/2.png",
      text: "Slide 2",
    },
    {
      image: "/assets/3.png",
      text: "Slide 3",
    },
    {
      image: "/assets/4.png",
      text: "Slide 4",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full transition-transform duration-500 ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img src={slide.image} alt={slide.text} className="h-64 w-full object-cover" />
            <div className="text-center text-xl mt-2">{slide.text}</div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
