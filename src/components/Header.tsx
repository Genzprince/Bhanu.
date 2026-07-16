import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Cpu, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onBackToHome: () => void;
}

export default function Header({
  activeSection,
  onNavigate,
  onBackToHome
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'spotlight-showcase', label: 'EFFECT BREAKDOWN' },
    { id: 'process', label: 'WORKFLOW' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavItemClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#060608]/90 backdrop-blur-md border-b border-zinc-900/50 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBackToHome();
            }}
            className="group flex items-center gap-0.5 font-sans font-extrabold text-lg tracking-[0.2em] text-white hover:text-accent-orange transition-colors duration-300 cursor-pointer relative z-50"
          >
            BHANU
            <span className="text-accent-orange font-extrabold text-xl animate-pulse">.</span>
          </button>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-black/40 border border-zinc-900/80 px-2 py-1.5 rounded-full backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`relative px-4 py-1.5 text-[10px] font-mono font-bold tracking-[0.25em] transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {/* Subtle hover pill background */}
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#121215] border border-zinc-800 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{ originY: '0px' }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavAccent"
                      className="absolute bottom-[-1.5px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent-orange rounded-full shadow-[0_0_8px_rgba(242,125,38,0.8)] z-20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Contact CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Let's Talk CTA (Desktop) */}
            <div className="hidden sm:block">
              <motion.button
                onClick={() => handleNavItemClick('contact')}
                className="group flex items-center gap-2 border border-accent-orange/60 text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-sm transition-all duration-300 cursor-pointer bg-accent-orange/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                whileHover={{ 
                  scale: 1.05, 
                  y: -1, 
                  borderColor: "rgba(242,125,38,1)", 
                  backgroundColor: "rgba(242,125,38,0.1)", 
                  boxShadow: "0 6px 20px rgba(242,125,38,0.3)" 
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Let's Talk
                <ArrowRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-zinc-900 bg-zinc-950/60 rounded-md text-zinc-400 hover:text-white transition-colors duration-300 md:hidden cursor-pointer relative z-50 flex items-center justify-center focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-accent-orange" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#060608]/98 backdrop-blur-xl z-40 flex flex-col justify-between pt-28 pb-12 px-6 md:hidden select-none"
          >
            {/* Geometric Tech Grid Lines Background */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(242,125,38,0.5) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(242,125,38,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />

            {/* Corner Bracket Details */}
            <div className="absolute top-24 left-6 w-4 h-4 border-t border-l border-zinc-800/40 pointer-events-none" />
            <div className="absolute top-24 right-6 w-4 h-4 border-t border-r border-zinc-800/40 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-zinc-800/40 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-zinc-800/40 pointer-events-none" />

            {/* Main Menu Links Grid */}
            <div className="flex flex-col gap-6 my-auto max-w-sm mx-auto w-full">
              <div className="text-[8px] font-mono tracking-[0.3em] text-zinc-600 font-bold uppercase mb-2 text-center sm:text-left">
                WORKSPACE NAVIGATION
              </div>
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavItemClick(item.id)}
                      className="w-full text-left py-3.5 px-5 border border-zinc-900/60 rounded-lg flex items-center justify-between group cursor-pointer bg-zinc-950/20 hover:bg-zinc-950/50 hover:border-accent-orange/45 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className={`font-sans font-bold text-sm tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? 'text-accent-orange' : 'text-zinc-400 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_8px_rgba(242,125,38,1)]" />
                        )}
                        <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Status Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900/80 pt-6 gap-4 text-center sm:text-left max-w-md mx-auto w-full relative z-10">
              <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3 text-accent-orange/60" /> VIEWPORT_READY</span>
                <span className="flex items-center gap-1.5"><Compass className="w-3 h-3 text-accent-orange/60" /> LATENCY_0_MS</span>
              </div>
              
              <button 
                onClick={() => handleNavItemClick('contact')}
                className="text-[9px] font-mono tracking-widest text-accent-orange uppercase font-bold hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                REQUEST DESIGN CALL <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
