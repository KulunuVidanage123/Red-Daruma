import React, { useState, useEffect } from 'react';
import TopCardsContent from '@/components/TopCardsContent';
import TopCardsContent2 from '@/components/TopCardsContent2';

const TopCards: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full bg-[#FCFAF4] relative overflow-x-hidden transform animate-topcards-tilt">
      <div className={`h-[1500px] ${isDesktop ? 'lg:h-[1600px]' : ''}`}></div>

      {isDesktop ? (
        <>
          {/* Desktop */}
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2">
            <TopCardsContent />
          </div>
          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2">
            <TopCardsContent2 />
          </div>
        </>
      ) : (
        <>
          {/* Mobile */}
          <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2">
            <TopCardsContent />
          </div>
          <div className="absolute top-[820px] left-1/2 transform -translate-x-1/2">
            <TopCardsContent2 />
          </div>
        </>
      )}
    </section>
  );
};

export default TopCards;