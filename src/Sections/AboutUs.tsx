import React from 'react';
import AboutUsDoll from '../assets/AboutUsDoll.png';
import AboutUsText from '../components/AboutUsText';

const AboutUs: React.FC = () => {
  return (
    <section className="w-full h-[500px] bg-white relative">
      <img
        src={AboutUsDoll}
        alt="About Us Doll"
        className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[130px] h-[140px]"
      />
      <div className="absolute top-[210px] left-1/2 transform -translate-x-1/2">
        <AboutUsText />
      </div>
    </section>
  );
};

export default AboutUs;