import React from 'react';
import TopCardsFrame from '../assets/TopCardsFrame.png';
import TopCardsImage2 from '../assets/TopCardsImage2.png';
import MobileTopCardsImage2 from '../assets/MobileTopCardsImage2.png';

const TopCardsContent2: React.FC = () => {
  return (
    <div className="relative">
      {/* Desktop view - original layout */}
      <img 
        src={TopCardsFrame} 
        alt="Top Cards Frame" 
        className="rotate-[5deg] w-[1200px] h-[600px] xl:w-[1000px] xl:h-[500px] lg:w-[800px] lg:h-[400px] hidden [@media(min-width:900px)]:block" 
      />
      <img 
        src={TopCardsImage2} 
        alt="Top Cards Image 2" 
        className="absolute top-[5px] left-[575px] lg:left-[475px] rotate-[-0deg] w-[640px] h-[620px] rounded-tr-[24px] rounded-br-[24px] hidden [@media(min-width:900px)]:block" 
      />
      <p 
        className="absolute top-[200px] left-[60px] lg:left-[40px] rotate-[5deg] text-black hidden [@media(min-width:900px)]:block"
        style={{ 
          fontFamily: 'Kalam, cursive',
          fontSize: '16px',
          maxWidth: '500px',
          lineHeight: '1.5'
        }}
      >
        Your second painted eye, and your wishes too. Hold $D intelligence and luck live in your wallet on-chain. 
        To earn, the twist? This Daruma was created entirely by artificial intelligence, 
        and the spirit of <span style={{ color: 'red', fontFamily: 'Kalam, cursive' }}>福 (luck)</span> watches over your entire portfolio.
      </p>

      {/* Mobile and tablet view - below 900px */}
      <img 
        src={TopCardsFrame} 
        alt="Top Cards Frame" 
        className="w-[600px] h-[400px] rotate-[-90deg] top-[-00px] [@media(max-width:899px)]:block hidden" 
      />
      <img 
        src={MobileTopCardsImage2} 
        alt="Mobile Top Cards Image 2" 
        className="absolute bottom-[160px] left-[295px] transform -translate-x-1/2 w-[350px] max-w-[350px] h-[320px] [@media(max-width:899px)]:block hidden" 
      />
      <p 
        className="text-center absolute top-[280px] left-1/2 transform -translate-x-1/2 text-black px-4 [@media(max-width:899px)]:block hidden"
        style={{ 
          fontFamily: 'Kalam, cursive',
          fontSize: '14px',
          maxWidth: '90%',
          lineHeight: '1.4'
        }}
      >
        Your second painted eye, and your wishes too. Hold $D intelligence and luck live in your wallet on-chain. 
        To earn, the twist? This Daruma was created entirely by artificial intelligence, 
        and the spirit of <span style={{ color: 'red', fontFamily: 'Kalam, cursive' }}>福 (luck)</span> watches over your entire portfolio.
      </p>
    </div>    
  );
  
};

export default TopCardsContent2;