import React, { useState } from 'react';
import AboutUsText from '@/components/AboutUsText';
import MiddleCardsText from '@/components/MiddleCardsText';
import Phase1MiddleCard from '@/components/Phase1MiddleCard';
import Phase2MiddleCard from '@/components/Phase2MiddleCard';
import Phase3MiddleCard from '@/components/Phase3MiddleCard';
import Phase4MiddleCard from '@/components/Phase4MiddleCard';

const MiddleCards: React.FC = () => {
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);

  const swipePages = [
    { component: <Phase1MiddleCard />, title: "Phase 1" },
    { component: <Phase2MiddleCard />, title: "Phase 2" },
    { component: <Phase3MiddleCard />, title: "Phase 3" },
    { component: <Phase4MiddleCard />, title: "Phase 4" }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSwipeIndex((prev) => (prev + 1) % swipePages.length);
    } else {
      setCurrentSwipeIndex((prev) => (prev - 1 + swipePages.length) % swipePages.length);
    }
  };

  return (
    <section className="w-full h-[1700px] [@media(max-width:899px)]:h-[1100px] [@media(max-width:639px)]:h-[1500px] bg-[#FCFAF4] relative overflow-x-hidden">
      
      {/* Desktop view - 900px and above */}
      <div className="[@media(max-width:899px)]:hidden block">
        <MiddleCardsText />
        <div className="absolute top-[300px] left-[15px]">
          <Phase1MiddleCard />
        </div>

        {/*applies only at 1280px+ */}
        <div className="[@media(min-width:1280px)]:right-[15px] [@media(min-width:1280px)]:left-auto absolute top-[630px] [@media(min-width:1280px)]:left-[505px]">
          <Phase2MiddleCard />
        </div>
        <div className="absolute top-[960px] left-[15px]">
          <Phase3MiddleCard />
        </div>

        {/*applies only at 1280px+ */}
        <div className="[@media(min-width:1280px)]:right-[15px] [@media(min-width:1280px)]:left-auto absolute top-[1295px] [@media(min-width:1280px)]:left-[505px]">
          <Phase4MiddleCard />
        </div>
      </div>

      {/* Mobile & tablet view - below 900px */}
      <div className="[@media(min-width:900px)]:hidden block px-[50px] pt-[120px] -mt-[50px]">
        <AboutUsText />
        <div className="relative w-full h-full mt-20">      
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('left')}
          >
            ←
          </button>          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('right')}
          >
            →
          </button>

          <div className="flex justify-center items-center h-full px-4">
            <div className="w-full max-w-[95%]">
              {swipePages[currentSwipeIndex].component}
            </div>
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
      </div>
    </section>
  );
};

export default MiddleCards;