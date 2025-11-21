import React from 'react';
import HeroTitleContent from '@/components/HeroTitleContent';

const HeroTitle: React.FC = () => {
  return (
    <section className="w-full h-[400px] [@media(max-width:639px)]:h-[200px] [@media(max-width:899px)]:h-[300px] [@media(max-width:1280px)]:[@media(min-width:900px)]:!-mt-[150px] bg-[#FCFAF4] flex items-center justify-center">
      <HeroTitleContent />
    </section>
  );
};

export default HeroTitle;