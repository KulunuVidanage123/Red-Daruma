import React from 'react';
import HeroTitleContent from '@/components/HeroTitleContent';

const HeroTitle: React.FC = () => {
  return (
    <section className="w-full h-[400px] [@media(max-width:639px)]:h-[200px] bg-[#FCFAF4] flex items-center justify-center">
      <HeroTitleContent />
    </section>
  );
};

export default HeroTitle;