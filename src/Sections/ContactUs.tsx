import React, { useState, useEffect } from 'react';
import ContactUsText from '@/components/ContactUsText';
import ContactUsButtons from '@/components/ContactUsButtons';
import ContactUsImage from '../assets/ContactUsImage.png';
import ContactUsImage2 from '../assets/ContactUsImage2.png';
import ContactUsImage3 from '../assets/ContactUsImage3.png';
import ContactUsLogoMobile from '../assets/ContactUsLogoMobile.png';

const ContactUs: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1024;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="contact-us"
      className="w-full relative"
      style={{ height: isDesktop ? '450px' : '800px' }}
    >
      <div className="flex flex-col items-center h-full pt-6">
        <ContactUsText />

        {/* DESKTOP */}
        {isDesktop && (
          <div className="h-[220px] mt-[20px] flex flex-col items-center">
            <div className="relative">
              <img
                src={ContactUsImage}
                alt="Contact Us"
                className="w-[600px] h-[100px] object-contain"
              />
              <img
                src={ContactUsImage2}
                alt="Contact Us Overlay"
                className="absolute top-[15px] left-[272px] transform -translate-x-1/2 transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{ width: '385px', height: '70px', objectFit: 'contain' }}
              />
              <img
                src={ContactUsImage3}
                alt="Contact Us Small Icon"
                className="absolute top-[58px] left-[505px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{ width: '65px', height: '65px', objectFit: 'contain' }}
              />
            </div>
            <div className="mt-4">
              <ContactUsButtons />
            </div>
          </div>
        )}

        {/* MOBILE & TABLET */}
        {!isDesktop && (
          <div className="flex flex-col items-center mt-[30px] px-[20px]">
            <img
              src={ContactUsLogoMobile}
              alt="Contact Us Mobile Logo"
              className="mb-4 w-full max-w-full h-auto"
            />
            <ContactUsButtons />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;