import React, { useState, useRef, useEffect } from 'react';
import BGImage1 from '../assets/BGImage1.png';
import RedDaruma from '../assets/RedDaruma.png';
import NavIcon from '../assets/NavIcon.png';
import BottomLogos from '../assets/BottomLogos.png';
import SliderTitle from '../components/SliderTitle';
import SliderButtons from '../components/SliderButtons';
import { XCircle } from 'lucide-react';

const Slider: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

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
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen h-[720px] md:h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BGImage1})` }}
      />

      {/* Red Daruma — Mobile */}
      {!isDesktop && (
        <img
          src={RedDaruma}
          alt="Red Daruma"
          className="absolute top-[50px] left-[40px] w-[200px] h-[30px] z-10 md:top-[45px] md:left-[40px] md:w-[180px]"
        />
      )}
      {/* Red Daruma — Desktop */}
      {isDesktop && (
        <img
          src={RedDaruma}
          alt="Red Daruma"
          className="fixed top-[20px] left-[40px] w-[250px] h-[40px] z-[51] 2xl:left-[80px]"
        />
      )}

      {/* Mobile menu */}
      {!isDesktop && (
        <div className="absolute top-[35px] right-[30px] md:top-[30px] md:right-[20px] z-50">
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

      {/* Desktop navbar */}
      {isDesktop && (
        <div
          className="fixed top-0 left-0 w-full z-50 h-[80px] 
          bg-[linear-gradient(to_bottom,rgba(210,234,255,0.51),rgba(149,200,244,0.5))] backdrop-blur-[0px]"
        >
          <ul className="flex flex-row justify-end items-start h-full list-none gap-[130px] pt-[8px] pr-[50px] 2xl:pr-[200px] 2xl:gap-[180px]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-[24px] font-bold text-black hover:text-red-600 cursor-pointer transition-all duration-200 transform hover:scale-105 font-['Kalam']"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && !isDesktop && (
        <div
          ref={mobileRef}
          className="fixed top-0 left-0 w-full z-50 h-[350px] bg-[#B5C7EB]"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-[10px] right-[10px] p-1 bg-transparent border-0 flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-200"
          >
            <XCircle className="w-8 h-8" />
          </button>

          <ul className="flex flex-col mt-[40px] list-none space-y-[30px] px-0 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-4 text-[22px] font-bold text-black hover:bg-[#c5e5ff] hover:bg-opacity-50 hover:text-red-600 cursor-pointer transition-colors duration-200 text-center font-['Kalam']"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content: Title & Buttons */}
      {isDesktop ? (
        <div className="z-10 absolute bottom-[30px] left-[40px] flex flex-col items-start gap-[8px] 2xl:bottom-[50px] 2xl:left-[50px] 2xl:gap-[20px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      ) : (
        <div className="z-10 relative top-[350px] flex flex-col items-center justify-center px-[50px] gap-[30px]">
          <SliderTitle />
          <SliderButtons />
        </div>
      )}

      {/* Bottom logos */}
      <img
        src={BottomLogos}
        alt="Bottom Logos"
        className="absolute bottom-[5px] left-0 w-full h-auto animate-scroll-x md:bottom-[100px] 2xl:bottom-[10px]"
      />
    </div>
  );
};

export default Slider;