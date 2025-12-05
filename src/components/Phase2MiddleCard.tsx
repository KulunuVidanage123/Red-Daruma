import React, { useState, useEffect } from 'react';
import TopCardsFrame from '@/assets/TopCardsFrame.png';
import MiddleCard2 from '../assets/MiddleCard2.png';

const Phase2MiddleCard: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1024;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center relative">
      {/* DESKTOP VIEW */}
      {isDesktop && (
        <>
          <img
            src={TopCardsFrame}
            alt="Phase 2 Middle Card"
            className="w-[1000px] h-[300px] object-cover"
          />
          <img
            src={MiddleCard2}
            alt="Phase 2 Card"
            className="w-[500px] h-[300px] object-cover absolute top-[-1px] right-[1px] rounded-tr-[20px] rounded-br-[20px]"
          />
          <h2
            className="absolute top-[-15px] left-[30px] text-[40px]"
            style={{
              fontFamily: 'Kalam, cursive',
              color: '#DF4F16',
              fontWeight: 'bold',
            }}
          >
            Phase 2
          </h2>
          <p
            className="absolute top-[100px] left-[30px] text-[15px] max-w-[450px] leading-relaxed"
            style={{
              fontFamily: 'Kalam, cursive',
              color: 'black',
              fontWeight: 'normal',
            }}
          >
            Your second painted eye, and your wishes too. Hold $D — intelligence and luck live in your wallet on-chain. To earn, the twist? This Daruma was created
            entirely by artificial intelligence, and the spirit of{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>福 (luck)</span>
            {' '}watches over your entire portfolio.
          </p>
        </>
      )}

      {/* MOBILE & TABLET */}
      {!isDesktop && (
        <div className="relative top-[150px]">
          <img
            src={TopCardsFrame}
            alt="Top Cards Frame"
            className="w-[600px] h-[400px] rotate-[-90deg] mx-auto"
          />
          <img
            src={MiddleCard2}
            alt="Mobile Top Cards Image 2"
            className="absolute top-[-80px] left-[293px] transform -translate-x-1/2 w-[350px] max-w-[350px] h-[320px] rounded-[20px] z-10"
          />
          <h2
            className="text-center absolute top-[230px] left-1/2 transform -translate-x-1/2 text-[32px]"
            style={{
              fontFamily: 'Kalam, cursive',
              color: '#DF4F16',
              fontWeight: 'bold',
            }}
          >
            Phase 2
          </h2>
          <p
            className="text-center absolute top-[310px] left-1/2 transform -translate-x-1/2 text-black px-4"
            style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '14px',
              maxWidth: '90%',
              lineHeight: '1.4',
            }}
          >
            Your second painted eye, and your wishes too. Hold $D — intelligence and luck live in your wallet on-chain. To earn, the twist? This Daruma was created
            entirely by artificial intelligence, and the spirit of{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>福 (luck)</span>
            {' '}watches over your entire portfolio.
          </p>
        </div>
      )}
    </div>
  );
};

export default Phase2MiddleCard;