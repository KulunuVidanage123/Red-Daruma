// SliderButtons.tsx (updated)
import React from 'react';

interface SliderButtonsProps {
  bgColor?: string;
  textColor?: string;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ 
  bgColor = 'white', 
  textColor = 'black' 
}) => {
  return (
    <div className="flex gap-[10px] py-[60px] mobile-button-container">
      {/* Buy now button */}
      <button
        className="rounded-[12px] w-[130px] h-[45px] font-inter text-[15px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button"
        style={{ 
          backgroundColor: bgColor,
          color: textColor 
        }}
      >
        Buy now
      </button>

      {/* Tech stack button */}
      <button
        className="rounded-[12px] w-[130px] h-[45px] font-inter text-[15px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105 mobile-button"
        style={{ 
          backgroundColor: bgColor,
          color: textColor 
        }}
      >
        Tech stack
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

export default SliderButtons;