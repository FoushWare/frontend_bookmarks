'use client';
import { useState } from 'react';

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const navLinks = document.getElementById('nav-links-mobile');
    if (navLinks) {
      navLinks.classList.toggle('translate-y-0');
      navLinks.classList.toggle('opacity-100');
      navLinks.classList.toggle('visible');
      navLinks.classList.toggle('-translate-y-full');
      navLinks.classList.toggle('opacity-0');
    }
  };

  return (
    <button
      className="md:hidden flex flex-col justify-around w-[30px] h-[25px] bg-transparent border-0 cursor-pointer p-0 z-[1002]"
      aria-label="Toggle menu"
      onClick={toggleMenu}
    >
      <span className={`w-[30px] h-[3px] bg-text-primary rounded-[3px] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`w-[30px] h-[3px] bg-text-primary rounded-[3px] transition-all duration-300 origin-center ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`w-[30px] h-[3px] bg-text-primary rounded-[3px] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>
  );
}

export default MobileMenuToggle;
