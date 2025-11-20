import React from 'react';
import TopCardsFrame from '@/assets/TopCardsFrame.png';
import MiddleCard4 from '../assets/MiddleCard4.png';  

const Phase4MiddleCard: React.FC = () => {
  return (
    <div className="flex justify-center relative">
      {/* Desktop view - 900px and above */}
      <img 
        src={TopCardsFrame} 
        alt="Phase 4 Middle Card"
        className="w-[1000px] h-[300px] object-cover [@media(max-width:899px)]:hidden block"
      />
      <img
        src={MiddleCard4}
        alt="Phase 4 Card"
        className="w-[500px] h-[300px] object-cover absolute top-[-1px] right-[1px] rounded-tr-[20px] rounded-br-[20px] [@media(max-width:899px)]:hidden block"
      />
      <h2
        className="absolute top-[-15px] left-[30px] text-[40px] [@media(max-width:899px)]:hidden block"
        style={{
          fontFamily: 'Kalam, cursive',
          color: '#DF4F16',
          fontWeight: 'bold',
        }}
      >
        Phase 4
      </h2>
      <p
        className="absolute top-[100px] left-[30px] text-base text-[15px] max-w-[450px] leading-relaxed [@media(max-width:899px)]:hidden block"
        style={{
          fontFamily: 'Kalam, cursive',
          color: 'black',
          fontWeight: 'normal',
        }}
      >
        Your second painted eye, and your wishes too. Hold $D intelligence and luck live in your wallet on-chain. To earn, the twist? This Daruma was created 
        entirely by artificial intelligence, and the spirit of <span style={{ color: 'red', fontWeight: 'bold' }}>福 (luck)</span>
        watches over your entire portfolio.
      </p>

      {/* Mobile and tablet view - below 900px */}
      <div className="relative top-[150px]">
        <img 
          src={TopCardsFrame} 
          alt="Top Cards Frame" 
          className="w-[600px] h-[400px] rotate-[-90deg] [@media(min-width:900px)]:hidden block" 
        />
        <img 
          src={MiddleCard4} 
          alt="Mobile Top Cards Image 4" 
          className="absolute top-[-80px] left-[295px] transform -translate-x-1/2 w-[350px] max-w-[350px] h-[320px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] [@media(min-width:900px)]:hidden block z-10" 
        />
        <h2
          className="text-center absolute top-[230px] left-1/2 transform -translate-x-1/2 text-[32px] [@media(min-width:900px)]:hidden block"
          style={{
            fontFamily: 'Kalam, cursive',
            color: '#DF4F16',
            fontWeight: 'bold',
          }}
        >
          Phase 4
        </h2>
        <p 
          className="text-center absolute top-[310px] left-1/2 transform -translate-x-1/2 text-black px-4 [@media(min-width:900px)]:hidden block"
          style={{ 
            fontFamily: 'Kalam, cursive',
            fontSize: '14px',
            maxWidth: '90%',
            lineHeight: '1.4'
          }}
        >
          Your second painted eye, and your wishes too. Hold $D intelligence and luck live in your wallet on-chain. To earn, the twist? This Daruma was created 
          entirely by artificial intelligence, and the spirit of <span style={{ color: 'red', fontWeight: 'bold' }}>福 (luck)</span>
          watches over your entire portfolio.
        </p>
      </div>
    </div>
  );
};

export default Phase4MiddleCard;