import React, { useState, useEffect } from 'react';
import HomePageImage from '../assets/HomePageImage.png';
import HomePageMobileImage from '../assets/HomePageMobileImage.png';
import DarumaEye1 from '../assets/darumaeye.png';
import DarumaEye2 from '../assets/darumaeye2.png';
import SliderTitle from '@/components/SliderTitle';
import SliderButtons from '@/components/SliderButtons';

const Homepage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 1024;
  const is2Xl = windowWidth >= 1536;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full" style={{ height: isMobile ? '820px' : isDesktop ? '720px' : '800px' }}>
      {/* Unified Background */}
      {isDesktop ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HomePageImage})` }}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HomePageMobileImage})` }}
        />
      )}

      {/* DESKTOP VIEW */}
      {isDesktop && (
        <>
          {/* Daruma Eyes */}
          <div
            className={`absolute z-10 flex flex-row gap-[70px] ${
              is2Xl
                ? 'top-[305px] right-[1040px]'
                : 'top-[300px] left-[262px]'
            }`}
          >
            <div className={`relative ${is2Xl ? 'w-[80px] h-[80px]' : 'w-[60px] h-[60px]'}`}>
              <img
                src={DarumaEye1}
                alt="Daruma Eye 1"
                className="w-full h-full object-contain animate-continuous-fade"
              />
            </div>
            <div className={`relative ${is2Xl ? 'w-[80px] h-[80px]' : 'w-[60px] h-[60px]'}`}>
              <img
                src={DarumaEye2}
                alt="Daruma Eye 2"
                className="w-full h-full object-contain animate-continuous-fade"
              />
            </div>
          </div>

          {/* Title & Buttons */}
          <div className="absolute bottom-[100px] right-[80px] z-10 flex flex-col gap-[20px] 2xl:bottom-[120px] 2xl:right-[120px]">
            <SliderTitle highlightFirstWord={true} />
            <SliderButtons bgColor="black" textColor="white" />
          </div>
        </>
      )}

      {/* MOBILE & TABLET VIEW */}
      {!isDesktop && (
        <div className="px-[60px] pt-[120px] -mt-[50px]">
          <div className="relative flex flex-col items-center justify-center gap-[30px]" style={{ top: '-140px' }}>
            <SliderTitle highlightFirstWord={true} />
            <SliderButtons bgColor="black" textColor="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;