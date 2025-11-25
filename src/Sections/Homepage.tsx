// Homepage.tsx 
import React from 'react';
import HomePageImage from '../assets/HomePageImage.png';
import HomePageMobileImage from '../assets/HomePageMobileImage.png';
import DarumaEye1 from '../assets/darumaeye.png';     
import DarumaEye2 from '../assets/darumaeye2.png';     
import SliderTitle from '@/components/SliderTitle';
import SliderButtons from '@/components/SliderButtons'; 

const Homepage: React.FC = () => {
  return (
    <div className="relative w-full h-[720px] [@media(max-width:899px)]:h-[800px]">
      {/* Backgrounds */}
      <div
        className="w-full h-[720px] [@media(max-width:1599px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageImage})` }}
      />
      <div
        className="w-full h-[720px] [@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageImage})` }}
      />
      <div
        className="w-full h-[850px] [@media(min-width:900px)]:hidden [@media(max-width:767px)]:h-[820px] bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${HomePageMobileImage})` }}
      />

      {/* Daruma Eyes - left on desktop (900–1599px), right on extra-large (≥1600px) */}
      <div className="absolute top-[320px] z-10 hidden [@media(min-width:900px)]:block
                      left-[262px] [@media(min-width:1600px)]:left-auto 
                      [@media(min-width:1600px)]:top-[305px] [@media(min-width:1600px)]:right-[262px]">
        <div className="flex flex-row gap-[85px] [@media(min-width:1600px)]:gap-[110px]">
          {/* Eye 1 */}
          <div className="relative w-[60px] h-[60px] [@media(min-width:1600px)]:w-[80px] [@media(min-width:1600px)]:h-[80px] overflow-hidden">
            <img src={DarumaEye1} alt="Daruma Eye 1" className="w-full h-full object-contain" />
            <div className="absolute inset-0 animate-eye-blink"></div>
          </div>

          {/* Eye 2 */}
          <div className="relative w-[60px] h-[60px] [@media(min-width:1600px)]:w-[80px] [@media(min-width:1600px)]:h-[80px] overflow-hidden">
            <img src={DarumaEye2} alt="Daruma Eye 2" className="w-full h-full object-contain" />
            <div className="absolute inset-0 animate-eye-blink"></div>
          </div>
        </div>
      </div>

      {/* Ultra-large screen content */}
      <div className="[@media(max-width:1599px)]:hidden absolute bottom-[80px] left-[1250px] z-10">
        <div className="flex flex-col gap-[20px]">
          <SliderTitle highlightFirstWord={true} />
          <SliderButtons bgColor="black" textColor="white" />
        </div>
      </div>
      
      {/* Laptop view content */}
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
      
      {/* Hidden section (can be removed if unused) */}
      <div className="[@media(min-width:900px)]:block [@media(min-width:1281px)]:hidden [@media(max-width:1280px)]:block hidden">
      </div>
    </div>
  );
};

export default Homepage;