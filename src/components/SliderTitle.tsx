// SliderTitle.tsx
import React from 'react';

const SliderTitle: React.FC = () => {
  return (
    <div className="text-left max-w-none py-[1px] translate-y-[50px] sm:translate-y-[10px] md:translate-y-[15px] lg:translate-y-[20px]">
      
      <h1
        className="
          font-bold 
          text-[40px] 
          [@media(max-width:639px)]:text-[28px]
        "
        style={{
          fontFamily: 'Neuton, serif',
          lineHeight: '0.9',
          color: 'white',
          whiteSpace: 'nowrap',
        }}
      >
        Forged by machines.
      </h1>

      <h1
        className="
          font-bold 
          text-[40px] 
          mt-1 
          [@media(max-width:639px)]:text-[28px]
        "
        style={{
          fontFamily: 'Neuton, serif',
          lineHeight: '0.9',
          color: 'white',
          whiteSpace: 'nowrap',
        }}
      >
        Favored by fortune.
      </h1>

    </div>
  );
};

export default SliderTitle;
