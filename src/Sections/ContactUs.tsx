// ContactUs.tsx
import React from 'react';
import ContactUsText from '@/components/ContactUsText';
import ContactUsButtons from '@/components/ContactUsButtons';
import ContactUsImage from '../assets/ContactUsImage.png';
import ContactUsImage2 from '../assets/ContactUsImage2.png'; 
import ContactUsImage3 from '../assets/ContactUsImage3.png';
import ContactUsLogoMobile from '../assets/ContactUsLogoMobile.png'; 

const ContactUs: React.FC = () => {
  return (
    <div 
      className="w-full relative" 
      style={{ 
        height: '400px [@media(max-width:899px)]:h-[800px]', 
      }}
    >
      <div className="flex flex-col items-center h-full">
        <ContactUsText />
        
        {/* Desktop */}
        <div className="[@media(max-width:899px)]:hidden h-[220px] mt-[20px] flex flex-col items-center">
          <div className="relative">
            {/* Bottom image */}
            <img 
              src={ContactUsImage} 
              alt="Contact Us" 
              style={{ 
                width: '600px',
                height: '100px',
                objectFit: 'contain'
              }}
            />
            <img 
              src={ContactUsImage2} 
              alt="Contact Us Overlay" 
              className="absolute top-[15px] left-[272px] transform -translate-x-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ 
                width: '385px',
                height: '70px',
                objectFit: 'contain'
              }}
            />
            <img 
              src={ContactUsImage3} 
              alt="Contact Us Small Icon" 
              className="absolute top-[58px] left-[505px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{ 
                width: '65px',
                height: '65px',
                objectFit: 'contain'
              }}
            />
          </div>
          <div className="mt-4">
            <ContactUsButtons />
          </div>
        </div>

        {/* Mobile/Tablet: Logo + buttons */}
        <div className="[@media(min-width:900px)]:hidden flex flex-col items-center mt-4 px-[20px]">
          <img 
            src={ContactUsLogoMobile} 
            alt="Contact Us Mobile Logo" 
            className="mb-4"
            style={{ 
              width: 'full', 
              height: 'full',
              maxWidth: '100%'
            }}
          />
          <ContactUsButtons />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;