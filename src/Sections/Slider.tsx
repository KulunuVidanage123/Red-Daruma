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
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Navigation items with mapping to section IDs
  const navItems = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Description', id: 'description' },
    { label: 'How To Buy', id: 'how-to-buy' },
    { label: 'Contact Us', id: 'contact-us' },
    { label: 'Community', id: 'community' },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
        className="absolute top-[55px] left-[40px] w-[250px] h-[40px]
                   [@media(max-width:899px)]:top-[45px] [@media(max-width:899px)]:left-[40px]
                   [@media(max-width:899px)]:w-[180px] [@media(max-width:899px)]:h-[30px]
                   [@media(min-width:1600px)]:left-[80px]"
      />

      {/* Nav Icon */}
      <div className="absolute top-[50px] right-[40px] [@media(max-width:899px)]:top-[30px] [@media(max-width:899px)]:right-[20px] [@media(min-width:1600px)]:right-[80px]">
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

      {/* Sidebar */}
      {menuOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-[1px] h-[450px] w-[210px] shadow-xl z-50
                    rounded-l-[20px]  overflow-hidden 
                    transition-transform duration-300 ease-out
                    [@media(max-width:899px)]:w-screen
                    [@media(max-width:899px)]:rounded-none
                    [@media(max-width:899px)]:h-[350px]" 
          style={{
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            background: 'linear-gradient(to bottom, rgba(139, 179, 214, 0.95), rgba(151, 180, 206, 0.85))',
            backdropFilter: 'blur(0px)', 
            WebkitBackdropFilter: 'blur(4px)', 
          }}
      >

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-[20px] right-[25px] p-1 
                      bg-transparent border-0 flex items-center justify-center 
                      text-gray-700 hover:text-red-600 transition-all duration-200"
          >
            <XCircle className="w-8 h-8" />
          </button>

          {/* Menu Items */}
          <ul
            className="flex flex-col mt-[60px] list-none space-y-[40px] px-[50px]
                      [@media(max-width:899px)]:items-center [@media(max-width:899px)]:px-0"
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-6 text-[20px] font-bold text-black hover:bg-[#c5e5ff] hover:bg-opacity-50 hover:text-red-600 cursor-pointer transition-colors duration-200"
                style={{ fontFamily: "'Kalam', cursive" }}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content Sections */}
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
        className="absolute bottom-[5px] left-0 w-full h-auto animate-scroll-x
                   [@media(max-width:899px)]:bottom-[100px] [@media(min-width:1600px)]:bottom-[10px]"
      />
    </div>
  );
};

export default Slider;