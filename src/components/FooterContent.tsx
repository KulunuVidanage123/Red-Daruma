// FooterContent.tsx
import React from 'react';

const FooterContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <button
        className="rounded-[20px] w-[100px] h-[35px] font-inter text-[12px] focus:outline-none border-0
                   transform transition-transform duration-300 hover:scale-105
                   shadow-[0_4px_8px_rgba(0,0,0,0.25)] relative flex items-center justify-center mb-6"
        style={{ 
          backgroundColor: '#DF4F16',
          color: 'white',
          fontFamily: 'Kalam, cursive',
          fontSize: '16px'
        }}
      >
        Community
      </button>
      
      <p
        className="
          text-center text-[18px] mb-[-15px]
          [@media(max-width:899px)]:text-[14px]
        "
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: 'black',
          fontWeight: 400,
        }}
      >
        たくさんの心、ひとつの旅
      </p>
      
      <h2 
        className="
          text-center text-[40px] mb-[10px]
          [@media(max-width:899px)]:text-[30px]
        "
        style={{ 
          fontFamily: 'Neuton, serif',
          fontWeight: 400,
          color: 'black',
          lineHeight: '1.2',
        }}
      >
        Many hearts, one journey
      </h2>
      
      <p
        className="
          text-center text-base text-[16px] mx-auto max-w-2xl
          [@media(max-width:899px)]:text-[14px]
        "
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: 'black',
        }}
      >
        Join us on our journey by following us on
      </p>
    </div>
  );
};

export default FooterContent;