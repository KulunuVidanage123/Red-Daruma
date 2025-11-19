import React from 'react';
import TopCardsFrame from '@/assets/TopCardsFrame.png';
import MiddleCard1 from '../assets/MiddleCard1.png';

const Phase1MiddleCard: React.FC = () => {
  return (
    <div className="flex justify-center relative">
      <img 
        src={TopCardsFrame} 
        alt="Phase 1 Middle Card"
        className="w-[1000px] h-[300px] object-cover"
      />
      <img
        src={MiddleCard1}
        alt="Phase 1 Card"
        className="w-[500px] h-[300px] object-cover absolute top-0 left-[500px] rounded-tr-[20px] rounded-br-[20px]"
      />
      <h2
        className="absolute top-6 left-[30px] text-[40px]"
        style={{
          fontFamily: 'Kalam, cursive',
          color: '#DF4F16',
          fontWeight: 'bold',
        }}
      >
        Phase 1
      </h2>
      <p
        className="absolute top-[100px] left-[30px] text-base text-[15px] max-w-[460px] leading-relaxed"
        style={{
          fontFamily: 'Kalam, cursive',
          color: 'black',
          fontWeight: 'normal',
        }}
      >
        Built by machines. Blessed with luck.<br></br> In <span style={{ color: 'red', fontWeight: 'bold' }}>Japanese tradition</span>, a Daruma doll has one eye painted when setting a goal, the other when it’s achieved. Buying $D is your first painted eye a cosmic wish for health, wealth, and happiness.
      </p>
    </div>
  );
};

export default Phase1MiddleCard;