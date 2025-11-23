// MiddleCardsText.tsx
import React from 'react';

const MiddleCardsText: React.FC = () => {
  return (
    <div className="w-full pt-[80px]">
      <h1 
        className="
          text-center text-[40px] mb-12
          [@media(max-width:899px)]:text-[28px]
        "
        style={{ 
          fontFamily: 'Neuton, serif',
          fontWeight: 400,
          color: 'black',
          lineHeight: '0.9',
        }}
      >
        How to Buy
      </h1>
      <p
        className="
          text-center text-base text-[14px] mx-auto max-w-2xl
          [@media(max-width:899px)]:text-[12px]
        "
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: 'black',
        }}
      >
        Getting $D is simple. Follow these four easy steps to join our community
      </p>
    </div>
  );
};

export default MiddleCardsText;