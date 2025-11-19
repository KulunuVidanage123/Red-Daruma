import React from 'react';

const MiddleCardsText: React.FC = () => {
  return (
    <div className="w-full pt-[80px]">
      <h1 
        className="text-center text-[40px] mb-4"
        style={{ 
          fontFamily: 'Neuton, serif',
          fontWeight: 400,
          color: 'black',
          lineHeight: '0.9',
        }}
      >
        Backed by Auron Labs
      </h1>
      <p
        className="text-center text-base text-[14px] mx-auto max-w-2xl"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: 'black',
        }}
      >
        Red Daruma was built entirely by AI agents, made possible through a<br></br>
        partnership with Auron Labs, a multi-agent tech accelerator.
      </p>
    </div>
  );
};

export default MiddleCardsText;