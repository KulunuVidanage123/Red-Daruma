// Footer.tsx
import React from 'react';
import FooterImage from '../assets/FooterImage.png';
import FooterMobileImage from '../assets/FooterMobileImage.png';
import FooterGradient from '../assets/FooterGradient.png';
import FooterContent from '@/components/FooterContent';
import FooterButtons from '@/components/FooterButtons'; 

const Footer: React.FC = () => {
  return (
    <div 
     id="community"
     className="relative w-full h-[800px] [@media(max-width:899px)]:h-[1000px]">
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <FooterContent />
        <div className="mt-6">
          <FooterButtons />
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-[0px] z-0"
        style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      
      {/* Ultra-large screen */}
      <div
        className="w-full h-[1000px] [@media(max-width:1599px)]:hidden bg-cover bg-center absolute inset-0 z-[-1]"
        style={{ backgroundImage: `url(${FooterImage})` }}
      />
      
      {/* Desktop view */}
      <div
        className="w-full h-[800px] [@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden bg-cover bg-center absolute inset-0 z-[-1]"
        style={{ backgroundImage: `url(${FooterImage})` }}
      />

      {/* Tablet: 640px – 899px */}
      <div
        className="w-full h-[1000px] [@media(max-width:640px)]:hidden [@media(min-width:900px)]:hidden bg-cover bg-center absolute inset-0 z-[-1]"
        style={{ backgroundImage: `url(${FooterImage})` }}
      />
      
      {/* Mobile & tablet view */}
      <div
        className="w-full h-[1600px] [@media(min-width:640px)]:hidden bg-cover bg-center absolute inset-0 z-[-1]"
        style={{ backgroundImage: `url(${FooterMobileImage})` }}
      />
      
      <div className="[@media(max-width:1280px)]:hidden absolute top-[100px] left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src={FooterGradient} 
          alt="Footer Gradient" 
          className="w-[1200px] h-[150px]" 
        />
      </div>
    </div>
  );
};

export default Footer;