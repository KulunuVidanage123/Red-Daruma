// ContactUsText.tsx
import React from 'react';

const ContactUsText: React.FC = () => {
  return (
    <div className="w-full pt-[30px]">
      <h1 
        className="
          text-center text-[40px] mb-4
          [@media(max-width:899px)]:text-[28px]
        "
        style={{ 
          fontFamily: 'Neuton, serif',
          fontWeight: 400,
          color: 'black',
          lineHeight: '0.9',
        }}
      >
        Contract Address
      </h1>
      <p
        className="
          text-center text-base text-[14px] mx-auto max-w-2xl
          [@media(max-width:899px)]:text-[12px] px-[20px] py-[20px]
        "
        style={{ 
          fontFamily: 'Inter, sans-serif',
          color: 'black',
        }}
      >
        The contract address is the unique identifier for the Red Daruma token on the blockchain. Use this address to send or receive<br></br>
        $D securely. Always ensure you’re using the correct contract address to avoid any risks
      </p>
    </div>
  );
};

export default ContactUsText;