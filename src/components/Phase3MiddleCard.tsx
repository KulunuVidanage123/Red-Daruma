import React from 'react';
import TopCardsFrame from '@/assets/TopCardsFrame.png';
import MiddleCard3 from '../assets/MiddleCard3.png';

const Phase3MiddleCard: React.FC = () => {
  return (
    <div className="flex justify-center relative">
      {/* Desktop view - 900px and above */}
      <img 
        src={TopCardsFrame} 
        alt="Phase 3 Middle Card"
        className="w-[1000px] h-[300px] object-cover [@media(max-width:899px)]:hidden block"
      />
      <img
        src={MiddleCard3}
        alt="Phase 3 Card"
        className="w-[500px] h-[300px] object-cover absolute top-[0px] left-[500px] rounded-tr-[20px] rounded-br-[20px] [@media(max-width:899px)]:hidden block"
      />
      <h2
        className="absolute top-[-15px] left-[30px] text-[40px] [@media(max-width:899px)]:hidden block"
        style={{
          fontFamily: 'Kalam, cursive',
          color: '#DF4F16',
          fontWeight: 'bold',
        }}
      >
        Phase 3
      </h2>
      <p
        className="absolute top-[100px] left-[30px] text-base text-[15px] max-w-[460px] leading-relaxed [@media(max-width:899px)]:hidden block"
        style={{
          fontFamily: 'Kalam, cursive',
          color: 'black',
          fontWeight: 'normal',
        }}
      >
        Built by machines. Blessed with luck.<br></br> In <span style={{ color: 'red', fontWeight: 'bold' }}>Japanese tradition</span>, 
        a Daruma doll has one eye painted when setting a goal, the other when it's achieved. Buying $D is your first painted eye a cosmic
        wish for health, wealth, and happiness.
      </p>

      {/* Mobile and tablet view - below 900px */}
      <div className="relative top-[150px]">
        <img 
          src={TopCardsFrame} 
          alt="Top Cards Frame" 
          className="w-[600px] h-[400px] rotate-[-90deg] [@media(min-width:900px)]:hidden block" 
        />
        <img 
          src={MiddleCard3} 
          alt="Mobile Top Cards Image 3" 
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
          Phase 3
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
          Built by machines. Blessed with luck.<br></br> In <span style={{ color: 'red', fontWeight: 'bold' }}>Japanese tradition</span>, 
          a Daruma doll has one eye painted when setting a goal, the other when it's achieved. Buying $D is your first painted eye a cosmic
          wish for health, wealth, and happiness.
        </p>
      </div>
    </div>
  );
};

export default Phase3MiddleCard;