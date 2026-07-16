/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, SKILLS, TOOLS } from './data';
import { Project } from './types';
import Header from './components/Header';
import ProjectDetail from './components/ProjectDetail';
import Workflow from './components/Workflow';
import SpotlightShowcase from './components/SpotlightShowcase';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  ChevronUp,
  Globe,
  Cpu,
  Tv,
  Box,
  Compass,
  Star,
  Heart,
  Clock,
  Mail,
  Linkedin,
  Gamepad2,
  Briefcase,
  Download,
  Sun,
  Camera,
  Grid3X3,
  Sliders,
  Paintbrush,
  ArrowUp,
  RotateCw,
  Send,
  User,
  Check
} from 'lucide-react';

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeAboutTab, setActiveAboutTab] = useState<'skills' | 'tools'>('skills');

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Dynamic filter lists
  const filterCategories = [
    { id: 'all', label: 'ALL' },
    { id: 'modeling', label: 'MODELING' },
    { id: 'uv_unwrap', label: 'UV UNWRAP' },
    { id: 'texturing', label: 'TEXTURING' },
    { id: 'rendering', label: 'RENDERING' },
    { id: 'environment_design', label: 'ENVIRONMENT DESIGN' },
    { id: 'product_design', label: 'PRODUCT DESIGN' }
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormStatus('sending');
    setFormError('');
    
    // Simulate high-fidelity response feedback
    setTimeout(() => {
      setFormStatus('success');
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 1200);
  };

  // Reset visible count when changing filters
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedFilter]);

  // High-precision scroll tracker to update active navigation item
  useEffect(() => {
    if (selectedProjectId) return; // Ignore scroll tracking when inside a project detail page

    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'portfolio', ref: portfolioRef },
        { id: 'spotlight-showcase', ref: spotlightRef },
        { id: 'process', ref: processRef },
        { id: 'about', ref: aboutRef },
        { id: 'contact', ref: contactRef }
      ];

      // Check if we are near the bottom of the page (user has reached the end)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Define reference line for section trigger point (35% from the top of viewport)
      const triggerLine = window.innerHeight * 0.35;
      let currentActive = 'home';

      sections.forEach((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          
          // If the top of the section has scrolled past the trigger line,
          // and the bottom of the section is still below it, it's the active section
          if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
            currentActive = section.id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount / page state change
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId]);

  // Handle smooth navigation scrolling
  const handleNavigate = (sectionId: string) => {
    setSelectedProjectId(null); // Close case study if navigating
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered projects
  const filteredProjects = PROJECTS.filter((project) => {
    return selectedFilter === 'all' || project.categoryFilter === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 font-sans selection:bg-accent-orange/20 selection:text-accent-orange relative overflow-x-hidden antialiased">
      {/* 3D Preloader Screen */}
      <AnimatePresence mode="wait">
        {isPreloading && (
          <Preloader key="preloader" onComplete={() => setIsPreloading(false)} />
        )}
      </AnimatePresence>

      {/* Dynamic Background Noise / Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#121216] via-[#0A0A0A] to-[#060608] pointer-events-none -z-10" />

      {/* Decorative ambient orange glow in the background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent-orange/3 rounded-full blur-[140px] pointer-events-none -z-10" />

      {!isPreloading && (
        <>
          {/* Header navigation */}
          <Header
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onBackToHome={() => {
              setSelectedProjectId(null);
              scrollToTop();
            }}
          />

          {/* Main Content Layout */}
          <AnimatePresence mode="wait">
        {selectedProjectId && selectedProject ? (
          // Immersive Project Case Study Detail Page
          <main key="detail-page" className="pt-24 pb-20">
            <ProjectDetail
              project={selectedProject}
              onBack={() => {
                setSelectedProjectId(null);
                setTimeout(() => {
                  const portfolioElement = document.getElementById('portfolio');
                  if (portfolioElement) {
                    portfolioElement.scrollIntoView({ behavior: 'auto', block: 'start' });
                  }
                }, 50);
              }}
            />
          </main>
        ) : (
          // Main Landing / Portfolio Layout
          <div key="landing-page">
            {/* HERO SECTION */}
            <section
              id="home"
              ref={heroRef}
              className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 overflow-hidden"
            >
              <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                
                {/* Left Hero Column */}
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange/90 shadow-[0_0_8px_rgba(242,125,38,0.8)] animate-pulse" />
                      <span className="text-[11px] font-mono tracking-wider text-zinc-300">
                        BHANU <span className="text-zinc-500 mx-1">•</span> 3D Artist
                      </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-sans font-bold text-white tracking-tight leading-[1.12]">
                      Creating Production-Ready <br />
                      3D Assets & Cinematic Visuals<span className="text-accent-orange font-bold font-sans">.</span>
                    </h1>
                  </div>
 
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-xl">
                    I craft high quality 3D models, product visualizations and environments with attention to detail, realism and performance.
                  </p>
 
                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.button
                      onClick={() => handleNavigate('portfolio')}
                      className="group flex items-center gap-2.5 bg-accent-orange text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.04, y: -2, boxShadow: "0 10px 25px rgba(242,125,38,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      View More
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleNavigate('contact')}
                      className="group flex items-center gap-2.5 border border-white/10 text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(255, 255, 255, 0.35)", boxShadow: "0 10px 25px rgba(255,255,255,0.06)", textShadow: "0 0 8px rgba(255,255,255,0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      Contact Me
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
 
                  {/* Compact infinite scrolling marquee replacing traditional statistics banner */}
                  <div className="pt-8 border-t border-zinc-900/80 max-w-xl overflow-hidden relative select-none">
                    <div className="text-[9px] font-mono tracking-[0.25em] uppercase text-zinc-500 font-bold mb-3.5">
                      EXPERTISE & CORE PIPELINE TOOLS
                    </div>
                    <div className="relative flex items-center w-full bg-[#070707] py-3 border border-zinc-900/60 rounded-md">
                      {/* Subtle gradient edges for perfect luxury integration */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />
                      
                      <div className="flex animate-marquee-rtl whitespace-nowrap">
                        {Array.from({ length: 4 }).map((_, repeatIdx) => (
                          <div key={repeatIdx} className="flex items-center gap-6 px-3 shrink-0">
                            {[
                              "Blender",
                              "Substance Painter",
                              "Marmoset Toolbag",
                              "Unreal Engine 5",
                              "ZBrush",
                              "Maya",
                              "Photoshop",
                            ].map((tool, idx) => (
                              <React.Fragment key={idx}>
                                <span className="text-zinc-400 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors hover:text-accent-orange cursor-pointer select-none">
                                  {tool}
                                </span>
                                <div className="w-[4px] h-[4px] rounded-full bg-accent-orange/40 shrink-0 self-center" />
                              </React.Fragment>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Hero Column: Large focal 3D render */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[400px] lg:min-h-0">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                    className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[500px] aspect-square flex items-center justify-center z-10"
                  >
                    {/* Subtle warm backlight */}
                    <div className="absolute inset-0 bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

                    {/* High-quality 3D render */}
                    <img
                      src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1000&q=90"
                      alt="Featured 3D Asset Render"
                      className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(242,125,38,0.12)] z-10"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Scroll vertical helper on the far right edge of hero */}
                  <div className="absolute right-[-20px] lg:right-[-32px] bottom-[20px] hidden lg:flex flex-col items-center gap-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-400 rotate-90 origin-right translate-x-1.5 mb-14 whitespace-nowrap">
                      Scroll to explore
                    </span>
                    <div className="w-[1px] h-20 bg-zinc-850 relative">
                      <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-accent-orange" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PORTFOLIO ARCHIVE / EXPLORE MY WORK SECTION */}
            <section
              id="portfolio"
              ref={portfolioRef}
              className="py-24 border-t border-zinc-900/40 bg-[#070707]"
            >
              <div className="container mx-auto px-4 md:px-8 space-y-12">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-900">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                      FEATURED PROJECTS
                      <span className="w-2.5 h-2.5 bg-accent-orange rounded-full inline-block"></span>
                    </h2>
                  </div>
                  
                  {/* View All Projects CTA */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <motion.button
                      onClick={() => {
                        setSelectedFilter('all');
                        handleNavigate('portfolio');
                      }}
                      className="group flex items-center gap-2 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      VIEW ALL PROJECTS
                      <ArrowRight className="w-4 h-4 text-accent-orange transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Filter categories container */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {filterCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFilter(category.id)}
                      className={`font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        selectedFilter === category.id
                          ? 'bg-accent-orange text-white font-bold shadow-[0_0_12px_rgba(242,125,38,0.2)]'
                          : 'bg-[#0E0E0E] border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Projects Grid of 3 Columns */}
                {filteredProjects.length === 0 ? (
                  <div className="py-20 text-center border border-dashed border-zinc-900 rounded-xl bg-zinc-950/40">
                    <p className="font-mono text-zinc-500 text-sm">NO PROJECTS CONFIGURED UNDER THIS CATEGORY</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.slice(0, visibleCount).map((project) => {
                      const displaySoftware = project.software || [];
                      return (
                        <motion.button
                          key={project.id}
                          onClick={() => handleProjectSelect(project.id)}
                          className="group relative text-left block w-full aspect-[4/3] bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden hover:border-zinc-800 transition-all duration-500 focus:outline-none cursor-pointer shadow-lg"
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Card Image */}
                          <div className="absolute inset-0 w-full h-full">
                            <img
                              src={project.images.beauty}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-45 group-hover:opacity-70 transition-all duration-700 group-hover:scale-103"
                              referrerPolicy="no-referrer"
                            />
                            {/* Subtle vignette/gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/85" />
                          </div>

                          {/* Card Overlay Content */}
                          <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                            {/* Top Row: Small Title, Year, Software Badges */}
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                <span className="font-sans font-semibold text-white/95 text-xs tracking-wide truncate block">
                                  {project.title}
                                </span>
                                <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">
                                  2026
                                </span>
                              </div>
                              {/* Software badges */}
                              <div className="flex flex-wrap items-center gap-1.5 justify-end shrink-0 max-w-[60%]">
                                {displaySoftware.map((sw) => (
                                  <span
                                    key={sw}
                                    className="px-2 py-0.5 text-[8px] font-mono font-bold tracking-wider uppercase bg-black/90 border border-zinc-900 text-zinc-400 rounded-sm"
                                  >
                                    {sw}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Bottom Row: Category, Main title, up-right arrow */}
                            <div className="flex items-end justify-between gap-4">
                              <div className="min-w-0">
                                <span className="text-[10px] text-accent-orange font-bold uppercase tracking-widest font-mono block">
                                  {project.category}
                                </span>
                                <h3 className="font-sans font-extrabold text-white text-base md:text-lg group-hover:text-accent-orange transition-colors truncate uppercase tracking-wide mt-1">
                                  {project.title}
                                </h3>
                              </div>
                              {/* Arrow Button */}
                              <div className="w-8 h-8 rounded-full border border-zinc-900/85 bg-black/90 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0 shadow-md">
                                <ArrowUpRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Load More Projects */}
                {filteredProjects.length > visibleCount && (
                  <div className="flex justify-center pt-8">
                    <motion.button
                      onClick={() => setVisibleCount((prev) => prev + 3)}
                      className="group flex items-center gap-2.5 bg-[#0A0A0A] border border-zinc-900 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(242,125,38,0.3)", boxShadow: "0 8px 20px rgba(242,125,38,0.12)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      LOAD MORE PROJECTS
                      <RotateCw className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover:rotate-180 duration-500" />
                    </motion.button>
                  </div>
                )}
              </div>
            </section>

            {/* SPOTLIGHT INTERACTIVE SHOWCASE SECTION */}
            <div id="spotlight-showcase" ref={spotlightRef}>
              <SpotlightShowcase />
            </div>

            {/* CLIENTS INFINITE SMOOTH SCROLL MARQUEE */}
            <section className="py-10 border-t border-b border-zinc-900/60 bg-gradient-to-b from-[#030303] via-[#050505] to-[#030303] overflow-hidden relative flex flex-col justify-center select-none">
              {/* Premium radial glow behind the text track */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,125,38,0.03),transparent_70%)] pointer-events-none" />
              
              {/* Fine technical target marks in corners for luxury 3D viewport look */}
              <div className="absolute top-2 left-4 font-mono text-[7px] text-zinc-800 tracking-widest select-none pointer-events-none">SYS_LNK_08</div>
              <div className="absolute bottom-2 right-4 font-mono text-[7px] text-zinc-800 tracking-widest select-none pointer-events-none">VRTX_GRID_ON</div>

              {/* Central small label with high-end spacing */}
              <div className="text-center mb-7 relative z-10">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.35em] uppercase text-zinc-500 font-bold block">
                  TRUSTED BY INDUSTRY LEADING CLIENTS & BRANDS
                </span>
                <div className="w-6 h-[1px] bg-accent-orange/45 mx-auto mt-2" />
              </div>

              {/* Infinite Track Container */}
              <div className="relative flex items-center w-full relative z-10">
                {/* Fade out edges for premium editorial aesthetic */}
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-56 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-56 bg-gradient-to-l from-[#030303] via-[#030303]/90 to-transparent z-10 pointer-events-none" />
                
                <div className="flex animate-marquee-rtl whitespace-nowrap py-1">
                  {Array.from({ length: 6 }).map((_, repeatIdx) => (
                    <div key={repeatIdx} className="flex items-center gap-8 sm:gap-14 px-4 sm:px-7 shrink-0">
                      {[
                        { name: "Nokia", sub: "TELECOMMUNICATIONS" },
                        { name: "Samsung", sub: "GLOBAL ELECTRONICS" },
                        { name: "Apple", sub: "PREMIUM SILICON" },
                        { name: "Gillax", sub: "ENTERTAINMENT ART" },
                        { name: "Bhanu", sub: "3D VISUALIZATION" },
                        { name: "Dieablo", sub: "CINEMATIC LOOKDEV" }
                      ].map((brand, idx) => (
                        <React.Fragment key={idx}>
                          <div className="flex flex-col items-center justify-center text-center shrink-0 min-w-[140px] sm:min-w-[180px] group/item cursor-pointer">
                            <span className="text-zinc-500 font-sans font-bold text-xs sm:text-[13px] tracking-[0.25em] uppercase transition-all duration-500 group-hover/item:text-accent-orange group-hover/item:scale-[1.03] group-hover/item:drop-shadow-[0_0_12px_rgba(242,125,38,0.45)] select-none">
                              {brand.name}
                            </span>
                            <span className="text-[7.5px] font-mono tracking-[0.2em] text-zinc-600 group-hover/item:text-zinc-300 transition-colors duration-500 uppercase mt-1.5 font-medium">
                              {brand.sub}
                            </span>
                          </div>
                          {/* Elegant golden-orange four-pointed star (✦) custom divider */}
                          <span className="text-[9px] text-accent-orange/35 select-none shrink-0 self-center select-none font-sans font-medium">✦</span>
                        </React.Fragment>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* WORKFLOW TIMELINE SECTION */}
            <section
              id="process"
              ref={processRef}
              className="py-24 border-t border-zinc-900/60 bg-[#0A0A0A]"
            >
              <div className="container mx-auto px-4 md:px-8 space-y-16">
                {/* Section Header */}
                <div className="text-left space-y-2">
                  <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                    TECHNICAL PIPELINE
                  </span>
                  <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                    WORKFLOW
                    <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                  </h2>
                </div>

                {/* Workflow timeline stepper */}
                <Workflow />
              </div>
            </section>

            {/* ABOUT ME & STATS SECTION */}
            <section
              id="about"
              ref={aboutRef}
              className="py-24 border-t border-zinc-900 bg-[#050505] relative overflow-hidden"
            >
              <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  
                  {/* Left Column: Portrait bio & specializations (col-span-7) */}
                  <div className="lg:col-span-7 space-y-10">
                    <div className="space-y-2">
                      <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                        ARTIST PROFILE
                      </span>
                      <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                        ABOUT ME
                        <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                      </h2>
                    </div>

                    {/* Editorial portrait info row */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                      {/* Portrait Frame */}
                      <div className="relative group shrink-0">
                        <div className="absolute -inset-1.5 bg-accent-orange/15 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-32 h-36 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                          <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
                            alt="Bhanu - 3D Artist Profile"
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* Creative Bio Text */}
                      <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-white font-sans text-lg font-extrabold tracking-wide uppercase">
                          Hi, I'm <span className="text-accent-orange">Bhanu</span>
                        </h3>
                        <p className="text-zinc-300 text-sm leading-relaxed font-sans font-medium">
                          A passionate 3D Artist specializing in hard-surface rendering, complex weathering pipelines, and industrial-grade physical realism.
                        </p>
                        <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                          I merge mathematical topology correctness with cinematic storytelling. Every edge weight, procedural micro-abrasion, and volumetric ray of light is directed to transform cold mechanical CAD or complex mesh blueprints into evocative, museum-quality visual experiences.
                        </p>
                      </div>
                    </div>

                    {/* Specialization Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                      <motion.div 
                        className="p-5 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 transition-colors cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ 
                          y: -6, 
                          scale: 1.03, 
                          borderColor: "rgba(242,125,38,0.5)", 
                          boxShadow: "0 12px 30px rgba(242,125,38,0.25)" 
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      >
                        <span className="text-[10px] font-mono font-bold text-accent-orange uppercase tracking-wider block mb-1">
                          01 // PHYSICAL FIDELITY
                        </span>
                        <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wide mb-1.5">
                          Sub-D & Hard-Surface Precision
                        </h4>
                        <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                          Meticulous edge flow, optimized low-poly retopology, perfect curvature bevel transitions, and high-density UDIM layout organization.
                        </p>
                      </motion.div>

                      <motion.div 
                        className="p-5 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 transition-colors cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ 
                          y: -6, 
                          scale: 1.03, 
                          borderColor: "rgba(242,125,38,0.5)", 
                          boxShadow: "0 12px 30px rgba(242,125,38,0.25)" 
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      >
                        <span className="text-[10px] font-mono font-bold text-accent-orange uppercase tracking-wider block mb-1">
                          02 // SURFACING ALCHEMY
                        </span>
                        <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wide mb-1.5">
                          Procedural PBR Weathering
                        </h4>
                        <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                          Multi-layered smart materials reflecting real-world age: organic dust accumulation, physical wear, micro-scratches, and realistic moisture.
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Column: Experience ratings & Stats row (col-span-5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pl-8 lg:border-l lg:border-zinc-900/60">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                          PRODUCTION STATS & RATING
                        </span>
                        <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                          INDUSTRY TRACK RECORD
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                          Delivering assets and scenes optimized to perfection. Tested against complex scene requirements, texel density distributions, and pipeline automation tools.
                        </p>
                      </div>

                      {/* Experience list */}
                      <div className="space-y-4">
                        <motion.div 
                          className="p-4 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 flex justify-between items-center cursor-pointer transition-colors"
                          whileHover={{ 
                            y: -4, 
                            scale: 1.03, 
                            borderColor: "rgba(242,125,38,0.5)", 
                            boxShadow: "0 10px 25px rgba(242,125,38,0.2)" 
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        >
                          <div>
                            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wider">Marmoset Toolbag 4</h4>
                            <p className="text-zinc-500 text-[11px] font-sans">Real-time baking, material authoring & cinematic renders</p>
                          </div>
                          <span className="text-xs font-mono font-bold text-accent-orange">EXPERT</span>
                        </motion.div>

                        <motion.div 
                          className="p-4 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 flex justify-between items-center cursor-pointer transition-colors"
                          whileHover={{ 
                            y: -4, 
                            scale: 1.03, 
                            borderColor: "rgba(242,125,38,0.5)", 
                            boxShadow: "0 10px 25px rgba(242,125,38,0.2)" 
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        >
                          <div>
                            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wider">Substance 3D Painter</h4>
                            <p className="text-zinc-500 text-[11px] font-sans">Advanced procedural weathering & material scripting</p>
                          </div>
                          <span className="text-xs font-mono font-bold text-accent-orange">EXPERT</span>
                        </motion.div>

                        <motion.div 
                          className="p-4 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 flex justify-between items-center cursor-pointer transition-colors"
                          whileHover={{ 
                            y: -4, 
                            scale: 1.03, 
                            borderColor: "rgba(242,125,38,0.5)", 
                            boxShadow: "0 10px 25px rgba(242,125,38,0.2)" 
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        >
                          <div>
                            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wider">Autodesk Maya / Blender</h4>
                            <p className="text-zinc-500 text-[11px] font-sans">Strict subd layout, topological optimization, UDIM mapping</p>
                          </div>
                          <span className="text-xs font-mono font-bold text-accent-orange">EXPERT</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900">
                      <motion.div 
                        className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                      >
                        <Box className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">50+</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Completed Assets</div>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                      >
                        <Star className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">6+</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Core Engines</div>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                      >
                        <Heart className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">100%</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Production Quality</div>
                      </motion.div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* INTERACTIVE CONTACT & MESSAGING SECTION */}
            <section
              id="contact"
              ref={contactRef}
              className="py-24 border-t border-zinc-900 bg-[#070707] relative overflow-hidden"
            >
              {/* Subtle design detail */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/2.5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  
                  {/* Left Column: Interactive Messaging Form (col-span-7) */}
                  <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-2">
                      <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                        SECURE INBOX
                      </span>
                      <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                        SEND A MESSAGE
                        <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                      </h2>
                      <p className="text-zinc-500 text-xs font-sans max-w-xl">
                        Have a project, a job inquiry, or want to collaborate on realistic lookdev assets? Drop a secure message directly to my console below.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {formStatus === 'success' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="p-8 rounded-xl border border-emerald-900/40 bg-emerald-950/10 flex flex-col items-center justify-center text-center space-y-4"
                        >
                          <div className="w-12 h-12 rounded-full border border-emerald-800/40 bg-emerald-950/30 flex items-center justify-center text-emerald-400">
                            <Check className="w-5 h-5 animate-bounce" />
                          </div>
                          <div className="space-y-1.5">
                            <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wider">
                              MESSAGE SENT SUCCESSFULLY
                            </h3>
                            <p className="text-zinc-400 text-xs font-sans leading-relaxed max-w-sm">
                              Thank you for connecting! I have received your request and will review the details. Expect a direct reply within 24 hours.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setFormStatus('idle')}
                            className="mt-2 text-[10px] font-mono uppercase tracking-widest text-accent-orange hover:text-white transition-colors cursor-pointer"
                          >
                            Send another message // RESET
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form
                          onSubmit={handleFormSubmit}
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-5"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name input */}
                            <div className="space-y-1.5">
                              <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                                Your Name <span className="text-accent-orange">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                                  <User className="w-3.5 h-3.5" />
                                </span>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. Alexander Wright"
                                  value={formName}
                                  onChange={(e) => setFormName(e.target.value)}
                                  className="w-full bg-[#0A0A0C] border border-zinc-900 focus:border-accent-orange/50 rounded-lg py-3 pl-10 pr-4 text-xs font-sans text-white placeholder-zinc-700 outline-none transition-all focus:ring-1 focus:ring-accent-orange/20"
                                />
                              </div>
                            </div>

                            {/* Email input */}
                            <div className="space-y-1.5">
                              <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                                Email Address <span className="text-accent-orange">*</span>
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                                  <Mail className="w-3.5 h-3.5" />
                                </span>
                                <input
                                  type="email"
                                  required
                                  placeholder="e.g. alex@studio.com"
                                  value={formEmail}
                                  onChange={(e) => setFormEmail(e.target.value)}
                                  className="w-full bg-[#0A0A0C] border border-zinc-900 focus:border-accent-orange/50 rounded-lg py-3 pl-10 pr-4 text-xs font-sans text-white placeholder-zinc-700 outline-none transition-all focus:ring-1 focus:ring-accent-orange/20"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Subject input */}
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                              Subject / Project Type
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Custom 3D Character or LookDev Collaboration"
                              value={formSubject}
                              onChange={(e) => setFormSubject(e.target.value)}
                              className="w-full bg-[#0A0A0C] border border-zinc-900 focus:border-accent-orange/50 rounded-lg py-3 px-4 text-xs font-sans text-white placeholder-zinc-700 outline-none transition-all focus:ring-1 focus:ring-accent-orange/20"
                            />
                          </div>

                          {/* Message input */}
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                              Project Details <span className="text-accent-orange">*</span>
                            </label>
                            <textarea
                              rows={5}
                              required
                              placeholder="Describe your project, production requirements, asset polycounts, or general inquiry..."
                              value={formMessage}
                              onChange={(e) => setFormMessage(e.target.value)}
                              className="w-full bg-[#0A0A0C] border border-zinc-900 focus:border-accent-orange/50 rounded-lg p-4 text-xs font-sans text-white placeholder-zinc-700 outline-none transition-all focus:ring-1 focus:ring-accent-orange/20 resize-none"
                            />
                          </div>

                          {formError && (
                            <p className="text-xs text-red-400 font-mono font-bold">
                              // Error: {formError}
                            </p>
                          )}

                          <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="w-full sm:w-auto px-8 py-3.5 bg-accent-orange text-black font-mono text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(242,125,38,0.25)] disabled:opacity-50"
                          >
                            {formStatus === 'sending' ? (
                              <>
                                <RotateCw className="w-4 h-4 animate-spin" />
                                SECURING TRANSMISSION...
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                SEND DIRECT MESSAGE
                              </>
                            )}
                          </button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column: Connection Channels (col-span-5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pl-8 lg:border-l lg:border-zinc-900/60">
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                          COMMUNICATION CHANNELS
                        </span>
                        <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                          LET'S TALK DIRECTLY
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                          Available for selective freelance partnerships, design studio contracts, and cinematic visualization opportunities globally.
                        </p>
                      </div>

                      {/* Connection channels */}
                      <div className="space-y-2.5">
                        {/* Email */}
                        <motion.a
                          href="mailto:bp69356@gmail.com"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white transition-all duration-300 group cursor-pointer"
                          whileHover={{ y: -3, scale: 1.01, borderColor: "rgba(242,125,38,0.35)", boxShadow: "0 10px 25px rgba(242,125,38,0.04)" }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-lg bg-black border border-zinc-900 flex items-center justify-center text-accent-orange shrink-0">
                              <Mail className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block font-bold">Email Channel</span>
                              <span className="text-zinc-200 font-sans font-bold text-xs truncate block">bp69356@gmail.com</span>
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-zinc-900 bg-black flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                          href="https://linkedin.com/in/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white transition-all duration-300 group cursor-pointer"
                          whileHover={{ y: -3, scale: 1.01, borderColor: "rgba(242,125,38,0.35)", boxShadow: "0 10px 25px rgba(242,125,38,0.04)" }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-lg bg-black border border-zinc-900 flex items-center justify-center text-accent-orange shrink-0">
                              <Linkedin className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block font-bold">LinkedIn Network</span>
                              <span className="text-zinc-200 font-sans font-bold text-xs truncate block">linkedin.com/in/bhanu</span>
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-zinc-900 bg-black flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.a>

                        {/* ArtStation */}
                        <motion.a
                          href="https://artstation.com/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white transition-all duration-300 group cursor-pointer"
                          whileHover={{ y: -3, scale: 1.01, borderColor: "rgba(242,125,38,0.35)", boxShadow: "0 10px 25px rgba(242,125,38,0.04)" }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-lg bg-black border border-zinc-900 flex items-center justify-center text-accent-orange shrink-0">
                              <Gamepad2 className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block font-bold">ArtStation Portfolio</span>
                              <span className="text-zinc-200 font-sans font-bold text-xs truncate block">artstation.com/bhanu</span>
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-zinc-900 bg-black flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.a>

                        {/* Behance */}
                        <motion.a
                          href="https://behance.net/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white transition-all duration-300 group cursor-pointer"
                          whileHover={{ y: -3, scale: 1.01, borderColor: "rgba(242,125,38,0.35)", boxShadow: "0 10px 25px rgba(242,125,38,0.04)" }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-lg bg-black border border-zinc-900 flex items-center justify-center text-accent-orange shrink-0">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block font-bold">Behance Gallery</span>
                              <span className="text-zinc-200 font-sans font-bold text-xs truncate block">behance.net/bhanu</span>
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-zinc-900 bg-black flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.a>
                      </div>
                    </div>

                    <motion.button
                      className="w-full py-4 bg-zinc-950 border border-zinc-900 text-zinc-300 hover:text-white rounded-xl font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer group shadow-lg"
                      whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(242,125,38,0.45)", backgroundColor: "rgba(242,125,38,0.04)", boxShadow: "0 12px 30px rgba(242,125,38,0.12)" }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <Download className="w-4 h-4 text-accent-orange group-hover:scale-110 transition-transform" />
                      Download Creative Resume
                    </motion.button>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}
      </AnimatePresence>

          {/* FOOTER SECTION */}
          <footer className="border-t border-zinc-900/60 py-12 bg-black">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-left">
                <span className="font-sans font-bold text-base tracking-wider text-white">
                  BHANU.
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                  3D Artist
                </span>
              </div>

              <div className="text-center md:text-left text-xs font-mono text-zinc-500">
                © 2026 Bhanu. All rights reserved.
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
              >
                Back to top
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-accent-orange" />
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
