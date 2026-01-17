'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Rocket } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine navbar style based on page theme (Dark Green vs Teal themes)
  const isTealTheme = pathname?.includes('/products') || pathname?.includes('/services');
  
  const navLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'LMS Detail', href: '/products/lms-pro' },
  ];

  const primaryColorClass = isTealTheme ? 'text-[#12edb6]' : 'text-[#07503d]';
  const buttonBgClass = isTealTheme ? 'bg-[#12edb6] text-[#111816]' : 'bg-[#07503d] text-white';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f4f3] bg-white/90 backdrop-blur-md px-6 lg:px-10 py-4 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className={`size-8 ${primaryColorClass}`}>
            <Rocket size={32} strokeWidth={2.5} />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight uppercase text-[#111816]">TEDU</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? `font-bold ${isTealTheme ? 'text-[#12edb6]' : 'text-[#07503d]'}` 
                    : 'text-[#111816] hover:opacity-70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className={`flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 text-sm font-bold hover:opacity-90 transition-all ${buttonBgClass}`}>
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <button className={`w-full py-3 rounded-xl font-bold mt-2 ${buttonBgClass}`}>
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
