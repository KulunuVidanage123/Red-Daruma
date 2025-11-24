// FooterButtons.tsx (updated)
import React from 'react';
import FooterLogo1 from '../assets/FooterLogo1.png';
import FooterLogo2 from '../assets/FooterLogo2.png';

interface FooterButtonsProps {
  bgColor?: string;
  textColor?: string;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ 
  bgColor = 'white', 
  textColor = 'black' 
}) => {
  return (
    <div className="flex gap-[15px] py-[20px] mobile-button-container">
      {/* Twitter button with logo */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-[20px] w-[120px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] flex items-center justify-center no-underline"
        style={{ 
          backgroundColor: bgColor,
          color: textColor,
          textDecoration: 'none',
          display: 'flex'
        }}
      >
        <div className="flex items-center">
          <img 
            src={FooterLogo1} 
            alt="Twitter Logo" 
            className="w-[15px] h-[15px] mr-[5px]"
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          Twitter
        </div>
      </a>

      {/* Telegram button with logo */}
      <a
        href="https://telegram.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-[20px] w-[120px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] flex items-center justify-center no-underline"
        style={{ 
          backgroundColor: bgColor,
          color: textColor,
          textDecoration: 'none',
          display: 'flex'
        }}
      >
        <div className="flex items-center">
          <img 
            src={FooterLogo2} 
            alt="Telegram Logo" 
            className="w-[15px] h-[15px] mr-[5px]"
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          Telegram
        </div>
      </a>

      <style>{`
        @media (max-width: 639px) {
          .mobile-button-container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 300px;
          }

          .mobile-button {
            width: calc(100% - 40px) !important;
            max-width: 350px;
            margin: 5px 0 !important;
          }

          @media (max-width: 375px) {
            .mobile-button {
              width: calc(100% - 30px) !important;
            }
          }

          @media (max-width: 320px) {
            .mobile-button {
              width: calc(100% - 20px) !important;
            }
          }
        }
        .no-underline {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default FooterButtons;