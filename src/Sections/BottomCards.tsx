import React, { useState, useEffect } from 'react';
import BottomCardsText from '@/components/BottomCardsText';
import BottomCardImage1 from '../assets/BottomCardImage1.png';
import BottomCardImage2 from '../assets/BottomCardImage2.png';
import BottomCardImage3 from '../assets/BottomCardImage3.png';
import BottomCardImage4 from '../assets/BottomCardImage4.png';

const BottomCards: React.FC = () => {
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 640;
  const isDesktop = windowWidth >= 1024;

  const swipePages = [
    { image: BottomCardImage1, alt: 'Bottom Card 1', rotate: 5 },
    { image: BottomCardImage2, alt: 'Bottom Card 2', rotate: -5 },
    { image: BottomCardImage3, alt: 'Bottom Card 3', rotate: 5 },
    { image: BottomCardImage4, alt: 'Bottom Card 4', rotate: -5 },
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
    <div id="how-to-buy" className="w-full relative">
      {/* DESKTOP */}
      {isDesktop && (
        <div style={{ height: '1650px', backgroundColor: '#FCFAF4' }} className="relative">
          {[
            { image: BottomCardImage1, alt: "Bottom Card 1", top: 300 },
            { image: BottomCardImage2, alt: "Bottom Card 2", top: 450 },
            { image: BottomCardImage3, alt: "Bottom Card 3", top: 850 },
            { image: BottomCardImage4, alt: "Bottom Card 4", top: 1000 },
          ].map((card, index) => {
            const isLeftColumn = index % 2 === 0;

            let leftOffset = '100px'; 
            if (windowWidth >= 1280) {
              leftOffset = isLeftColumn ? '300px' : '750px';
            } else {
              leftOffset = isLeftColumn ? '100px' : '400px';
            }
            return (
              <img
                key={index}
                src={card.image}
                alt={card.alt}
                className={`tilt-animation absolute h-[600px] w-[500px] object-contain top-[${card.top}px] left-[${leftOffset}]`}
              />
            );
          })}

          <div className="relative z-10">
            <BottomCardsText />
          </div>
        </div>
      )}

      {/* MOBILE & TABLET */}
      {!isDesktop && (
        <div className="bg-[#FCFAF4] relative w-full min-h-[700px] px-4 pt-8 pb-20">
          <div className="mb-10">
            <BottomCardsText />
          </div>

          <div className="relative w-full" style={{ height: isMobile ? '450px' : '500px' }}>
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 sm:p-3 shadow-md"
              onClick={() => handleSwipe('left')}
              aria-label="Previous card"
            >
              ←
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 sm:p-3 shadow-md"
              onClick={() => handleSwipe('right')}
              aria-label="Next card"
            >
              →
            </button>

            <div className="flex justify-center items-center h-full px-2 sm:px-4">
              <img
                src={swipePages[currentSwipeIndex].image}
                alt={swipePages[currentSwipeIndex].alt}
                className={`tilt-animation w-full max-w-[90%] sm:max-w-[80%] object-contain rounded-xl ${
                  swipePages[currentSwipeIndex].rotate === 5
                    ? 'rotate-5'
                    : swipePages[currentSwipeIndex].rotate === -5
                    ? 'rotate-[-5deg]'
                    : ''
                }`}
                style={{ height: isMobile ? '350px' : '400px' }}
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
              {swipePages.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSwipeIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSwipeIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomCards;