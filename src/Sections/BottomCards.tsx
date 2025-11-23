// BottomCards.tsx
import React, { useState } from 'react';
import BottomCardsText from '@/components/BottomCardsText';
import BottomCardImage1 from '../assets/BottomCardImage1.png';
import BottomCardImage2 from '../assets/BottomCardImage2.png';
import BottomCardImage3 from '../assets/BottomCardImage3.png';
import BottomCardImage4 from '../assets/BottomCardImage4.png';

const BottomCards: React.FC = () => {
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);

  const swipePages = [
    { image: BottomCardImage1, alt: "Bottom Card 1", rotate: 5 },
    { image: BottomCardImage2, alt: "Bottom Card 2", rotate: -5 },
    { image: BottomCardImage3, alt: "Bottom Card 3", rotate: 5 },
    { image: BottomCardImage4, alt: "Bottom Card 4", rotate: -5 }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSwipeIndex((prev) => (prev + 1) % swipePages.length);
    } else {
      setCurrentSwipeIndex((prev) => (prev - 1 + swipePages.length) % swipePages.length);
    }
  };

  return (
    <div className="w-full relative">
      {/* Desktop & Extra Large Screens */}
      <div className="hidden [@media(min-width:900px)]:block">
        <div 
          style={{ 
            height: '1650px', 
            backgroundColor: '#FCFAF4' 
          }}
          className="relative"
        >
          {/* Image 1 */}
          <img 
            src={BottomCardImage1} 
            alt="Bottom Card 1" 
            className="
              absolute top-[300px] h-[600px] w-[500px] object-contain
              left-[300px] [@media(min-width:1600px)]:left-[500px]
            "
            style={{ maxHeight: '100%' }}
          />
          {/* Image 2 */}
          <img 
            src={BottomCardImage2} 
            alt="Bottom Card 2" 
            className="
              absolute top-[450px] h-[600px] w-[500px] object-contain
              [@media(min-width:1280px)]:left-[750px] [@media(min-width:1600px)]:left-[950px]
              [@media(max-width:1279px)]:right-[15px] [@media(max-width:1279px)]:left-auto
            "
            style={{ maxHeight: '100%' }}
          />
          {/* Image 3 */}
          <img 
            src={BottomCardImage3} 
            alt="Bottom Card 3" 
            className="
              absolute top-[850px] h-[600px] w-[500px] object-contain
              left-[290px] [@media(min-width:1600px)]:left-[490px]
            "
            style={{ maxHeight: '100%' }}
          />
          {/* Image 4 */}
          <img 
            src={BottomCardImage4} 
            alt="Bottom Card 4" 
            className="
              absolute top-[1000px] h-[600px] w-[500px] object-contain
              [@media(min-width:1280px)]:left-[740px] [@media(min-width:1600px)]:left-[940px]
              [@media(max-width:1279px)]:right-[15px] [@media(max-width:1279px)]:left-auto
            "
            style={{ maxHeight: '100%' }}
          />
          
          <div className="relative z-10">
            <BottomCardsText />
          </div>
        </div>
      </div>

      {/* Tablet & Mobile View) */}
      <div className="[@media(min-width:900px)]:hidden block bg-[#FCFAF4] relative">
        <div className="w-full h-full px-4 pt-8 pb-20">
          <div className="mb-10">
            <BottomCardsText />
          </div>
          
          {/* Swipeable gallery for images */}
          <div className="relative w-full h-[500px] [@media(max-width:639px)]:h-[450px]">
            {/* Navigation buttons */}
            <button 
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 sm:p-3 shadow-md"
              onClick={() => handleSwipe('left')}
            >
              ←
            </button>
            <button 
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 sm:p-3 shadow-md"
              onClick={() => handleSwipe('right')}
            >
              →
            </button>

            {/* Swipable image */}
            <div className="flex justify-center items-center h-full px-2 sm:px-4">
              <img
                src={swipePages[currentSwipeIndex].image}
                alt={swipePages[currentSwipeIndex].alt}
                className={`w-full max-w-[90%] sm:max-w-[80%] h-[400px] [@media(max-width:639px)]:h-[350px] object-contain rounded-xl ${
                  swipePages[currentSwipeIndex].rotate === 5 ? 'rotate-5' : 
                  swipePages[currentSwipeIndex].rotate === -5 ? 'rotate-[-5deg]' : ''
                }`}
              />
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
              {swipePages.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSwipeIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSwipeIndex ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;