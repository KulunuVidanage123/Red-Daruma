import React from 'react';
import HeroTitleImage from '../assets/HeroTitleImage.png';

const HeroTitleContent: React.FC = () => {
  return (
    <div className="relative h-full">
      <img
        src={HeroTitleImage}
        alt="Hero Title Background"
        className="absolute top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] object-cover z-0 [@media(max-width:639px)]:top-[40px]"
      />

      <div className="flex flex-col items-center justify-center h-full space-y-2 z-10 [@media(max-width:639px)]:mt-[-70px]">
        <h1 
          className="
            text-[40px]
            [@media(max-width:639px)]:text-[28px]
            text-center
          "
          style={{
            fontFamily: 'Neuton, serif',
            color: 'black',
            fontWeight: '100',
          }}
        >
          What if all your fortune<br></br> needed was a
        </h1>
        <h2
          className="
            text-[36px]
            [@media(max-width:639px)]:text-[24px]
            text-center relative top-[-50px] [@media(max-width:639px)]:top-[-30px]
          "
          style={{
            fontFamily: 'Kalam, cursive',
            color: '#DF4F16',
            fontWeight: 'bold',
          }}
        >
          little faith?
        </h2>
      </div>
    </div>
  );
};

export default HeroTitleContent;