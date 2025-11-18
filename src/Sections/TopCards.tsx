import React from 'react';
import TopCardsContent from '@/components/TopCardsContent';
import TopCardsContent2 from '@/components/TopCardsContent2';

const TopCards: React.FC = () => {
  return (
    <section className="w-full h-[1600px] bg-[#FCFAF4] relative overflow-x-hidden [@media(max-width:899px)]:overflow-x-hidden">
        <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2">
            <TopCardsContent />
        </div>

        <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 lg:bottom-[70px] [@media(max-width:899px)]:top-[820px]">
            <TopCardsContent2 />
        </div>
    </section>

  );
};

export default TopCards;