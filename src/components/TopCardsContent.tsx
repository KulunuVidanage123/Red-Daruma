import React from 'react';
import TopCardsFrame from '../assets/TopCardsFrame.png';
import TopCardsImage1 from '../assets/TopCardsImage1.png';
import MobileTopCardsImage1 from '../assets/MobileTopCardsImage1.png';

const TopCardsContent: React.FC = () => {
  return (
    <div className="relative">
      {/* Desktop view - original layout */}
      <img 
        src={TopCardsFrame} 
        alt="Top Cards Frame" 
        className="rotate-[-5deg] w-[1200px] h-[600px] hidden [@media(min-width:900px)]:block" 
      />
      <img 
        src={TopCardsImage1} 
        alt="Top Cards Image 1" 
        className="absolute bottom-[30px] left-[575px] rotate-[-0deg] w-[640px] h-[620px] rounded-tr-[24px] rounded-br-[24px] hidden [@media(min-width:900px)]:block" 
      />

      <p 
        className="absolute top-[250px] left-[60px] rotate-[-5deg] text-black hidden [@media(min-width:900px)]:block"
        style={{ 
          fontFamily: 'Kalam, cursive',
          fontSize: '16px',
          maxWidth: '500px',
          lineHeight: '1.5'
        }}
      >
        Built by machines. Blessed with luck.
        <br />
        In <span style={{ color: 'red', fontWeight: 'bold' }}>Japanese tradition</span>, a Daruma doll has 
        one eye painted when setting a goal, the other when it's achieved. Buying $D is your first
        painted eye a cosmic wish for health, wealth, and happiness.
      </p>


      {/* Mobile and tablet view - below 900px */}
      <img 
        src={TopCardsFrame} 
        alt="Top Cards Frame" 
        className="w-[600px] h-[400px] rotate-[-90deg] [@media(max-width:899px)]:block hidden" 
        />
      <img 
        src={MobileTopCardsImage1} 
        alt="Mobile Top Cards Image 1" 
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
        Built by machines. Blessed with luck.
        <br />
        In <span style={{ color: 'red', fontWeight: 'bold' }}>Japanese tradition</span>, a Daruma doll has 
        one eye painted when setting a goal, the other when it's achieved. Buying $D is your first
        painted eye a cosmic wish for health, wealth, and happiness.
      </p>
    </div>    
  );

};

export default TopCardsContent;