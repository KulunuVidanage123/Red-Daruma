import React, { useState, useEffect } from 'react';
import FooterImage from '../assets/FooterImage.png';
import FooterMobileImage from '../assets/FooterMobileImage.png';
import FooterGradient from '../assets/FooterGradient.png';
import FooterContent from '@/components/FooterContent';
import FooterButtons from '@/components/FooterButtons';

const Footer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const backgroundSrc = isMobile ? FooterMobileImage : FooterImage;

  let heightClass = 'h-[800px]';
  if (isTablet) heightClass = 'h-[1000px]';
  if (isMobile) heightClass = 'h-[1600px]';

  return (
    <div id="community" className={`relative w-full overflow-hidden ${heightClass}`}>
      <div className="absolute inset-0 z-[-1] w-full h-full overflow-hidden">
        <img
          src={backgroundSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(255, 255, 255, 1)_0%,rgba(255, 255, 255, 1)_100%)]"
      />

      {/* Footer Gradient */}
      {windowWidth >= 1280 && (
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={FooterGradient}
            alt="Footer Gradient"
            className="w-[1200px] h-[150px]"
          />
        </div>
      )}

      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <FooterContent />
        <div className="mt-6">
          <FooterButtons />
        </div>
      </div>
    </div>
  );
};

export default Footer;