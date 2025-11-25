import React, { useState, useRef, useEffect } from 'react';
import BGImage1 from '../assets/BGImage1.png';
import RedDaruma from '../assets/RedDaruma.png';
import NavIcon from '../assets/NavIcon.png';
import BottomLogos from '../assets/BottomLogos.png';
import SliderTitle from '../components/SliderTitle';
import SliderButtons from '../components/SliderButtons';
import { XCircle } from "lucide-react";

const Slider: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  const navItems = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Description', id: 'description' },
    { label: 'How To Buy', id: 'how-to-buy' },
    { label: 'Contact Us', id: 'contact-us' },
    { label: 'Community', id: 'community' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = isDesktop ? 80 : 120;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen && !isDesktop) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, isDesktop]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen h-[720px] [@media(max-width:899px)]:h-[800px] overflow-hidden">
      {/* Background Images */}
      <div
        className="w-full h-[750px] [@media(max-width:1599px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />
      <div
        className="w-full h-[720px] [@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />
      <div
        className="w-full h-[720px] [@media(min-width:900px)]:hidden bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />

      {/* Red Daruma */}
      <img
        src={RedDaruma}
        alt="Red Daruma"
        className="absolute top-[20px] left-[50px] w-[250px] h-[40px] [@media(max-width:899px)]:top-[45px] [@media(max-width:899px)]:left-[40px] [@media(max-width:899px)]:w-[180px] [@media(max-width:899px)]:h-[30px] [@media(min-width:900px)]:fixed [@media(min-width:900px)]:z-60 [@media(min-width:1600px)]:left-[80px]"
      />

      {/* Nav Icon mobile */}
      {!isDesktop && (
        <div className="absolute top-[100px] right-[40px] [@media(max-width:899px)]:top-[30px] [@media(max-width:899px)]:right-[20px]">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="focus:outline-none bg-transparent border-0 cursor-pointer"
          >
            <img 
              src={NavIcon} 
              alt="Navigation Icon" 
              className="w-[50px] h-[60px] pointer-events-none"
            />
          </button>
        </div>
      )}

      {/* DESKTOP NAVBAR */}
      {isDesktop && (
        <div
          className="fixed top-0 left-0 w-full z-50"
          style={{
            background: 'linear-gradient(to bottom, rgba(210, 234, 255, 0.51), rgba(149, 200, 244, 0.5))',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
            height: '80px',
          }}
        >
          <ul className="flex flex-row justify-end items-start h-full list-none gap-[130px] pt-[8px] pr-[50px]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-[24px] font-bold text-black hover:text-red-600 cursor-pointer transition-all duration-200 transform hover:scale-105"
                style={{ fontFamily: "'Kalam', cursive" }}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && !isDesktop && (
        <div
          ref={mobileRef}
          className="fixed top-0 right-0 h-[350px] w-screen shadow-xl z-50 rounded-none overflow-hidden transition-transform duration-300 ease-out"
          style={{
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            background: 'linear-gradient(to bottom, rgba(139, 179, 214, 0.95), rgba(151, 180, 206, 0.85))',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-[20px] right-[25px] p-1 bg-transparent border-0 flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-200"
          >
            <XCircle className="w-8 h-8" />
          </button>

          <ul className="flex flex-col mt-[50px] list-none space-y-[40px] px-0 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-4 text-[20px] font-bold text-black hover:bg-[#c5e5ff] hover:bg-opacity-50 hover:text-red-600 cursor-pointer transition-colors duration-200 text-center"
                style={{ fontFamily: "'Kalam', cursive" }}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="[@media(max-width:1599px)]:hidden absolute bottom-[50px] left-[50px] z-10">
        <div className="flex flex-col gap-[20px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      </div>

      <div className="[@media(max-width:899px)]:hidden [@media(min-width:1600px)]:hidden absolute bottom-[15px] left-[40px] flex flex-col items-start gap-[8px] z-10">
        <SliderTitle />
        <SliderButtons />
      </div>

      <div className="[@media(min-width:900px)]:hidden block px-[50px] pt-[120px] -mt-[1px] z-10">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-[30px] top-[250px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      </div>

      {/* Bottom logos */}
      <img
        src={BottomLogos}
        alt="Bottom Logos"
        className="absolute bottom-[5px] left-0 w-full h-auto animate-scroll-x [@media(max-width:899px)]:bottom-[100px] [@media(min-width:1600px)]:bottom-[10px]"
      />
    </div>
  );
};

export default Slider;