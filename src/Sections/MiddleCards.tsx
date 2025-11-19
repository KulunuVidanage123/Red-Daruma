import React from 'react';
import MiddleCardsText from '@/components/MiddleCardsText';
import Phase1MiddleCard from '@/components/Phase1MiddleCard'; 

const MiddleCards: React.FC = () => {
  return (
    <section className="w-full h-[2000px] bg-[#FCFAF4] relative">
      <MiddleCardsText />
      <div className="absolute top-[300px] left-[20px]">
        <Phase1MiddleCard />
      </div>
      {/* Additional content will go here */}
    </section>
  );
};

export default MiddleCards;