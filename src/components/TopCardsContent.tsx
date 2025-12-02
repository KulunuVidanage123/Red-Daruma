import React, { useState, useEffect } from 'react';
import TopCardsFrame from '../assets/TopCardsFrame.png';
import TopCardsImage1 from '../assets/TopCardsImage1.png';
import MobileTopCardsImage1 from '../assets/MobileTopCardsImage1.png';

const TopCardsContent: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Desktop View */}
      {isDesktop && (
        <div className="absolute left-[10px] top-[300px] transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative animate-oscillate-tilt">
            <img
              src={TopCardsFrame}
              alt="Top Cards Frame"
              className="w-[1200px] h-[600px]"
            />
            <img
              src={TopCardsImage1}
              alt="Top Cards Image 1"
              className="rotate-[5deg] absolute bottom-[4px] left-[575px] w-[640px] h-[620px] rounded-tr-[24px] rounded-br-[24px]"
            />
            <p
              className="absolute top-[220px] left-[60px] text-black"
              style={{
                fontFamily: 'Kalam, cursive',
                fontSize: '16px',
                maxWidth: '500px',
                lineHeight: '1.5',
              }}
            >
              Built by machines. Blessed with luck.
              <br />
              In{' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                Japanese tradition
              </span>
              , a Daruma doll has one eye painted when setting a goal, the other
              when it's achieved. Buying $D is your first painted eye — a cosmic
              wish for health, wealth, and happiness.
            </p>
          </div>
        </div>
      )}

      {/* Mobile & Tablet View */}
      {!isDesktop && (
        <>
          <img
            src={TopCardsFrame}
            alt="Top Cards Frame"
            className="w-[600px] h-[400px] rotate-[-90deg] mx-auto"
          />
          <img
            src={MobileTopCardsImage1}
            alt="Mobile Top Cards Image 1"
            className="absolute bottom-[160px] left-1/2 transform -translate-x-1/2 w-[350px] max-w-[350px] h-[320px]"
          />
          <p
            className="text-center absolute top-[280px] left-1/2 transform -translate-x-1/2 text-black px-4"
            style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '14px',
              maxWidth: '90%',
              lineHeight: '1.4',
            }}
          >
            Built by machines. Blessed with luck.
            <br />
            In{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              Japanese tradition
            </span>
            , a Daruma doll has one eye painted when setting a goal, the other
            when it's achieved. Buying $D is your first painted eye — a cosmic
            wish for health, wealth, and happiness.
          </p>
        </>
      )}
    </div>
  );
};

export default TopCardsContent;