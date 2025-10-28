'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
          <Image
            src="/logo2.svg"
            alt="ESRA Impex"
            width={130}    
            height={10}
            className="object-contain"
            priority
          />
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-[#AF6641] transition-all duration-300 ease-out font-medium relative py-2 transform hover:scale-105 ${
                    isActive ? 'text-[#AF6641]' : ''
                  }`}
                >
                  {item.label}
                  <div className={`absolute -bottom-3 left-0 right-0 h-0.5 bg-[#AF6641] rounded-full transition-all duration-300 ease-out transform ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}></div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden mt-4 transition-all duration-300 ease-out ${isMenuOpen ? 'block opacity-100 transform translate-y-0' : 'hidden opacity-0 transform -translate-y-2'}`}>
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-[#AF6641] transition-all duration-300 ease-out font-medium py-2 px-4 rounded-md hover:bg-gray-50 relative transform hover:translate-x-2 hover:scale-105 ${
                    isActive ? 'text-[#AF6641] bg-[#AF6641]/10 translate-x-1' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#AF6641] rounded-r-full transition-all duration-300 ease-out ${
                    isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}></div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;