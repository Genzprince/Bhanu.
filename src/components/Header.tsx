import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  selectedProjectId: string | null;
  onBackToHome: () => void;
}

export default function Header({
  activeSection,
  onNavigate,
  selectedProjectId,
  onBackToHome
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={onBackToHome}
          className="group flex items-center gap-0.5 font-sans font-bold text-lg tracking-wider text-white hover:text-accent-orange transition-colors duration-200 cursor-pointer"
        >
          BHANU
          <span className="text-accent-orange font-bold text-xl">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && !selectedProjectId;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative font-mono text-xs uppercase tracking-widest py-2 pb-4 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-orange" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA let's talk button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleLinkClick('contact')}
            className="group flex items-center gap-2 border border-accent-orange/80 hover:border-accent-orange text-white hover:bg-accent-orange/5 font-mono text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition-all duration-300 cursor-pointer"
          >
            Let's Talk
            <ArrowRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#0A0A0A]/98 backdrop-blur-lg flex flex-col justify-between py-12 px-6 md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && !selectedProjectId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left font-mono text-sm uppercase tracking-widest py-3 border-b border-zinc-900 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-accent-orange' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 border border-accent-orange hover:bg-accent-orange/10 text-white font-mono text-xs uppercase tracking-widest py-4 rounded-sm transition-all duration-300"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 text-accent-orange" />
            </button>
            <p className="text-zinc-600 text-center font-mono text-[10px]">
              © 2026 Bhanu. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
