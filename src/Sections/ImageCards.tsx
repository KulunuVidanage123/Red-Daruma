import React, { useState, useEffect } from 'react';
import BGImageCard from '../assets/BGImageCard.png';
import ImageCard1 from '../assets/ImageCard1.png';
import ImageCard2 from '../assets/ImageCard2.png';
import ImageCard3 from '../assets/ImageCard3.png';
import ImageCard4 from '../assets/ImageCard4.png';
import ImageCard5 from '../assets/ImageCard5.png';
import ImageCard6 from '../assets/ImageCard6.png';
import ImageCard7 from '../assets/ImageCard7.png';

const ImageCards: React.FC = () => {
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const swipePages = [
    { topImage: ImageCard4, bottomImage: ImageCard1, topAlt: "Image Card 4", bottomAlt: "Image Card 1" },
    { topImage: ImageCard2, bottomImage: ImageCard3, topAlt: "Image Card 2", bottomAlt: "Image Card 3" },
    { topImage: ImageCard3, bottomImage: ImageCard6, topAlt: "Image Card 3", bottomAlt: "Image Card 6" },
    { topImage: ImageCard4, bottomImage: ImageCard1, topAlt: "Image Card 4", bottomAlt: "Image Card 1" },
    { topImage: ImageCard3, bottomImage: ImageCard4, topAlt: "Image Card 3", bottomAlt: "Image Card 4" },
    { topImage: ImageCard5, bottomImage: ImageCard7, topAlt: "Image Card 5", bottomAlt: "Image Card 7" }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSwipeIndex((prev) => (prev + 1) % swipePages.length);
    } else {
      setCurrentSwipeIndex((prev) => (prev - 1 + swipePages.length) % swipePages.length);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`w-full bg-[#FCFAF4] relative overflow-hidden ${ 
        isMobile ? 'h-[900px]' : 'h-[650px]'
      }`}
    >
      {/* Desktop */}
      {isDesktop && (
        <img
          src={BGImageCard}
          alt="Background Image Card"
          className="w-full h-[600px] object-cover"
        />
      )}

      {/* Mobile */}
      {isMobile && (
        <div className="relative w-full h-full">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('left')}
            aria-label="Swipe left"
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('right')}
            aria-label="Swipe right"
          >
            →
          </button>

          <div className="flex flex-col items-center justify-center h-full px-4 space-y-6 relative">
            <img
              src={swipePages[currentSwipeIndex].topImage}
              alt={swipePages[currentSwipeIndex].topAlt}
              className="absolute top-[10px] w-full max-w-[90%] h-[400px] object-cover rounded-[15px]"
            />
            <img
              src={swipePages[currentSwipeIndex].bottomImage}
              alt={swipePages[currentSwipeIndex].bottomAlt}
              className="absolute bottom-[70px] w-full max-w-[90%] h-[400px] object-cover rounded-[15px]"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
            {swipePages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSwipeIndex(index)}
                className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSwipeIndex ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tablet */}
      {isTablet && (
        <div className="relative w-full h-[1000px]">
          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-3 shadow-md"
            onClick={() => handleSwipe('left')}
            aria-label="Swipe left"
          >
            ←
          </button>
          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-3 shadow-md"
            onClick={() => handleSwipe('right')}
            aria-label="Swipe right"
          >
            →
          </button>

          <div className="flex flex-col items-center justify-center h-full px-6 space-y-10 relative">
            <img
              src={swipePages[currentSwipeIndex].topImage}
              alt={swipePages[currentSwipeIndex].topAlt}
              className="absolute top-[10px] w-full max-w-[75%] h-[550px] object-cover rounded-[20px]"
            />
            <img
              src={swipePages[currentSwipeIndex].bottomImage}
              alt={swipePages[currentSwipeIndex].bottomAlt}
              className="absolute bottom-[-500px] w-full max-w-[75%] h-[500px] object-cover rounded-[20px]"
            />
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
            {swipePages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSwipeIndex(index)}
                className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSwipeIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCards;