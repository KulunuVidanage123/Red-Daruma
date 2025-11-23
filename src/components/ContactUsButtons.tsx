// SliderButtons.tsx (updated)
import React from 'react';
import ContactUsLogo1 from '../assets/ContactUsLogo1.png';
import ContactUsLogo2 from '../assets/ContactUsLogo2.png';
import ContactUsLogo3 from '../assets/ContactUsLogo3.png';

interface ContactUsButtonsProps {
  bgColor?: string;
  textColor?: string;
}

const ContactUsButtons: React.FC<ContactUsButtonsProps> = ({ 
  bgColor = 'white', 
  textColor = 'black' 
}) => {
  return (
    <div className="flex gap-[20px] py-[20px] mobile-button-container">
      {/* DEXTools button with logo */}
      <button
        className="rounded-[20px] w-[100px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] relative flex items-center justify-center"
        style={{ 
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <div className="flex items-center">
          <img 
            src={ContactUsLogo1} 
            alt="DEXTools Logo" 
            className="w-[15px] h-[15px] mr-[5px]"
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          DEXTools
        </div>
      </button>

      {/* DEXScreener button with logo */}
      <button
        className="rounded-[20px] w-[120px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] relative flex items-center justify-center"
        style={{ 
          backgroundColor: bgColor,
          color: textColor 
        }}
      >
        <div className="flex items-center">
          <img 
            src={ContactUsLogo2} 
            alt="DEXScreener Logo" 
            className="w-[15px] h-[15px] mr-[5px]"
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          DEXScreener
        </div>
      </button>

      {/* PancakeSwap button with logo */}
      <button
        className="rounded-[20px] w-[130px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] relative flex items-center justify-center"
        style={{ 
          backgroundColor: bgColor,
          color: textColor 
        }}
      >
        <div className="flex items-center">
          <img 
            src={ContactUsLogo3} 
            alt="PancakeSwap Logo" 
            className="w-[15px] h-[15px] mr-[5px]"
            style={{ 
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          PancakeSwap
        </div>
      </button>

      <style>{`
        @media (max-width: 639px) {
          .mobile-button-container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
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
      `}</style>
    </div>
  );
};

export default ContactUsButtons;