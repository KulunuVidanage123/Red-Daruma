import React from 'react';
import BGImage1 from '../assets/BGImage1.png';
import MobileBGImage1 from '../assets/MobileBGImage1.png';
import RedDaruma from '../assets/RedDaruma.png';
import NavIcon from '../assets/NavIcon.png';
import BottomLogos from '../assets/BottomLogos.png';
import SliderTitle from '../components/SliderTitle';
import SliderButtons from '../components/SliderButtons';

const Slider: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* Mobile background - only visible below 640px */}
      <div
        className="mobile-bg w-full h-full absolute inset-0"
        style={{ backgroundImage: `url(${MobileBGImage1})` }}
      />
      
      {/* Desktop background - only visible at 640px and above */}
      <div
        className="desktop-bg w-full h-full absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />

      <style>{`
        .mobile-bg {
          background-size: cover;
          background-position: center;
          display: block;
        }
        .desktop-bg {
          background-size: cover;
          background-position: center;
          display: none;
        }
        @media (min-width: 640px) {
          .mobile-bg {
            display: none;
          }
          .desktop-bg {
            display: block;
          }
        }
      `}</style>

      {/* RedDaruma at top-left with full responsiveness */}
      <img
        src={RedDaruma}
        alt="Red Daruma"
        className="
          absolute
          top-[50px] left-[40px] w-[250px] h-[40px]
          sm:top-[30px] sm:left-[30px] sm:w-[40px] sm:h-[0px]
          md:top-[40px] md:left-[40px] md:w-[120px] md:h-[120px]
          lg:top-[45px] lg:left-[45px] lg:w-[200px] lg:h-[200px]
          xl:top-[50px] xl:left-[50px] xl:w-[240px] xl:h-[240px]
          2xl:top-[55px] 2xl:left-[55px] 2xl:w-[300px] 2xl:h-[300px]
        "
      />

      {/* NavIcon at top-right with full responsiveness */}
      <img
        src={NavIcon}
        alt="Navigation Icon"
        className="
          absolute
          top-[50px] right-[40px] w-[60px] h-[60px]
          sm:top-[30px] sm:right-[30px] sm:w-[50px] sm:h-[50px]
          md:top-[40px] md:right-[40px] md:w-[60px] md:h-[60px]
          lg:top-[45px] lg:right-[45px] lg:w-[65px] lg:h-[65px]
          xl:top-[50px] xl:right-[50px] xl:w-[70px] xl:h-[70px]
          2xl:top-[55px] 2xl:right-[55px] 2xl:w-[75px] 2xl:h-[75px]
        "
      />

      {/* Slider content (title + buttons) at bottom-left with full responsiveness */}
      <div className="
        absolute
        bottom-[15px] left-[20px] flex flex-col items-start gap-[8px]
        sm:bottom-[20px] sm:left-[30px] sm:gap-[10px]
        md:bottom-[25px] md:left-[40px] md:gap-[12px]
        lg:bottom-[30px] lg:left-[45px] lg:gap-[14px]
        xl:bottom-[40px] xl:left-[50px] xl:gap-[16px]
        2xl:bottom-[50px] 2xl:left-[60px] 2xl:gap-[20px]
        mobile-full-width-container
      ">
        <SliderTitle />
        <SliderButtons />
      </div>

      {/* Bottom logos at full width with responsive positioning */}
      <img
        src={BottomLogos}
        alt="Bottom Logos"
        className="
          absolute
          bottom-[5px] left-0 w-full h-auto
          sm:bottom-[8px]
          md:bottom-[10px]
          lg:bottom-[12px]
          xl:bottom-[15px]
          2xl:bottom-[20px]
          animate-scroll-x
        "
      />
    </div>
  );
};

export default Slider;