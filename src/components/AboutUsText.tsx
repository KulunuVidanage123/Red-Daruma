import React from 'react';

const AboutUsText: React.FC = () => {
  return (
    <div className="space-y-4">

      {/* H1 Title */}
      <h1
        className="
          text-[38px]
          [@media(max-width:639px)]:text-[24px]
          text-center font-normal text-black leading-[0.1]
        "
        style={{ fontFamily: 'Neuton, serif' }}
      >
        What is the story
      </h1>

      {/* H2 Title */}
      <h2
        className="
          text-[38px]
          [@media(max-width:639px)]:text-[24px]
          text-center font-normal text-black leading-[0.5]
        "
        style={{ fontFamily: 'Neuton, serif' }}
      >
        behind <span className="italic">Daruma</span>?
      </h2>

      {/* Paragraph */}
      <p 
        className="
          text-[15px]
          [@media(max-width:639px)]:text-[12px]
          text-center text-black font-normal
        "
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Inspired by the legendary Daruma doll, Japan's symbol of resilience<br />
        and fortune, Daruma is bringing ancient blessings into the modern<br />
        world. Just like the doll that always bounces back, this project is<br />
        built for believers who never give up
      </p>

    </div>
  );
};

export default AboutUsText;
