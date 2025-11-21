// Homepage.tsx 
import React from 'react';
import HomePageImage from '../assets/HomePageImage.png';
import HomePageMobileImage from '../assets/HomePageMobileImage.png';
import SliderTitle from '@/components/SliderTitle';
import SliderButtons from '@/components/SliderButtons'; 

const Homepage: React.FC = () => {
  return (
    <div className="relative w-full h-[670px] [@media(max-width:899px)]:h-[800px]">
      {/* Ultra-large screen */}
      <div
        className="w-full h-[820px] [@media(max-width:1599px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageImage})` }}
      />
      
      {/* Desktop view */}
      <div
        className="w-full h-[720px] [@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageImage})` }}
      />
      
      {/* Mobile & tablet view */}
      <div
        className="w-full h-[720px] [@media(min-width:900px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageMobileImage})` }}
      />
      
      {/* Ultra-large screen content */}
      <div className="[@media(max-width:1599px)]:hidden absolute bottom-[80px] left-[1250px] z-10">
        <div className="flex flex-col gap-[20px]">
          <SliderTitle highlightFirstWord={true} />
          <SliderButtons bgColor="black" textColor="white" />
        </div>
      </div>
      
      {/* Laptop view content - 1281px to 1536px */}
      <div className="[@media(max-width:1280px)]:hidden [@media(min-width:1537px)]:hidden absolute bottom-[100px] left-[1000px] z-10">
        <div className="flex flex-col gap-[20px]">
          <SliderTitle highlightFirstWord={true} />
          <SliderButtons bgColor="black" textColor="white" />
        </div>
      </div>
      
      {/* Mobile & tablet view */}
      <div className="[@media(min-width:900px)]:hidden block px-[60px] pt-[120px] -mt-[50px]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-[30px] top-[-140px]">
          <SliderTitle highlightFirstWord={true} />
          <SliderButtons bgColor="black" textColor="white" />
        </div>
      </div>
      
      {/* Hidden section for 900px to 1280px */}
      <div className="[@media(min-width:900px)]:block [@media(min-width:1281px)]:hidden [@media(max-width:1280px)]:block hidden">
      </div>
    </div>
  );
};

export default Homepage;