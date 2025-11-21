// Slider.tsx
import React from 'react';
import BGImage1 from '../assets/BGImage1.png';
import RedDaruma from '../assets/RedDaruma.png';
import NavIcon from '../assets/NavIcon.png';
import BottomLogos from '../assets/BottomLogos.png';
import SliderTitle from '../components/SliderTitle';
import SliderButtons from '../components/SliderButtons';

const Slider: React.FC = () => {
  return (
    <div className="relative w-screen h-[720px] [@media(max-width:899px)]:h-[800px]">
      {/* Extra large screen view - 1600px and above */}
      <div
        className="w-full h-[750px] [@media(max-width:1599px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />
      
      {/* Desktop view - 900px to 1599px */}
      <div
        className="w-full h-[720px] [@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />
      
      {/* Mobile & tablet view - below 900px */}
      <div
        className="w-full h-[720px] [@media(min-width:900px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />

      {/* RedDaruma - visible on all screens with responsive positioning */}
      <img
        src={RedDaruma}
        alt="Red Daruma"
        className="absolute top-[50px] left-[40px] w-[250px] h-[40px] 
                   [@media(max-width:899px)]:top-[30px] [@media(max-width:899px)]:left-[20px] 
                   [@media(max-width:899px)]:w-[180px] [@media(max-width:899px)]:h-[30px]
                   [@media(min-width:1600px)]:left-[80px]"
      />

      {/* NavIcon - visible on all screens with responsive positioning */}
      <img
        src={NavIcon}
        alt="Navigation Icon"
        className="absolute top-[50px] right-[40px] w-[60px] h-[60px]
                   [@media(max-width:899px)]:top-[30px] [@media(max-width:899px)]:right-[20px]
                   [@media(min-width:1600px)]:right-[80px]"
      />

      {/* Extra large screen content - 1600px and above */}
      <div className="[@media(max-width:1599px)]:hidden absolute bottom-[50px] left-[50px] z-10">
        <div className="flex flex-col gap-[20px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      </div>
      
      {/* Desktop view content - 900px to 1599px */}
      <div className="[@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden absolute bottom-[15px] left-[20px] flex flex-col items-start gap-[8px] z-10">
        <SliderTitle />
        <SliderButtons />
      </div>

      {/* Mobile & tablet view - below 900px */}
      <div className="[@media(min-width:900px)]:hidden block px-[50px] pt-[120px] -mt-[1px] z-10">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-[30px] top-[250px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      </div>

      {/* Bottom logos - visible on all screens with responsive positioning */}
      <img
        src={BottomLogos}
        alt="Bottom Logos"
        className="absolute bottom-[5px] left-0 w-full h-auto animate-scroll-x
                   [@media(max-width:899px)]:bottom-[100px]
                   [@media(min-width:1600px)]:bottom-[10px]"
      />
    </div>
  );
};

export default Slider;