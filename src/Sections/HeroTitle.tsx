import React from 'react';
import HeroTitleContent from '@/components/HeroTitleContent';

const HeroTitle: React.FC = () => {
  return (
    <section className="w-full h-[400px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:mt-[-150px] bg-[#FCFAF4] flex items-center justify-center">
      <HeroTitleContent />
    </section>
  );
};

export default HeroTitle;