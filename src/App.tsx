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
  RotateCw
} from 'lucide-react';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeAboutTab, setActiveAboutTab] = useState<'skills' | 'tools'>('skills');

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
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

  // Reset visible count when changing filters
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedFilter]);

  // Intersection Observer to update active navigation item
  useEffect(() => {
    if (selectedProjectId) return; // Ignore scroll tracking when inside a project detail page

    const sections = [
      { id: 'home', ref: heroRef },
      { id: 'portfolio', ref: portfolioRef },
      { id: 'about', ref: aboutRef },
      { id: 'process', ref: processRef },
      { id: 'contact', ref: contactRef }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
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
      {/* Dynamic Background Noise / Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#121216] via-[#0A0A0A] to-[#060608] pointer-events-none -z-10" />

      {/* Decorative ambient orange glow in the background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent-orange/3 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        selectedProjectId={selectedProjectId}
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
                    <button
                      onClick={() => handleNavigate('portfolio')}
                      className="group flex items-center gap-2.5 bg-accent-orange hover:bg-brand-orange-hover text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                    >
                      View Portfolio
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="group flex items-center gap-2.5 border border-white/10 hover:border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                    >
                      Contact Me
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
 
                  {/* Horizontal Statistics Banner */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-zinc-900 max-w-2xl">
                    <div className="space-y-2 group">
                      <Box className="w-5 h-5 text-accent-orange transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-3xl font-bold text-white tracking-tight">50+</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 leading-snug">
                        Projects <br /> Completed
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <Star className="w-5 h-5 text-accent-orange transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-3xl font-bold text-white tracking-tight">6+</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 leading-snug">
                        Core <br /> Skills
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <Heart className="w-5 h-5 text-accent-orange transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-3xl font-bold text-white tracking-tight">100%</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 leading-snug">
                        Passion
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <Clock className="w-5 h-5 text-accent-orange transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-3xl font-bold text-white tracking-tight">6+</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 leading-snug">
                        Years <br /> Experience
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

            {/* CLIENTS INFINITE SMOOTH SCROLL MARQUEE */}
            <section className="py-10 border-t border-b border-zinc-900/60 bg-[#040404] overflow-hidden relative flex items-center select-none">
              {/* Fade out edges for premium editorial aesthetic */}
              <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#040404] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#040404] to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee-ltr whitespace-nowrap">
                {Array.from({ length: 6 }).map((_, repeatIdx) => (
                  <div key={repeatIdx} className="flex items-center gap-10 sm:gap-16 px-5 sm:px-8 shrink-0">
                    {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"].map((client, idx) => (
                      <React.Fragment key={idx}>
                        <span className="text-zinc-600 font-sans font-black text-2xl sm:text-[34px] tracking-widest uppercase transition-all duration-300 hover:text-white hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.85)] cursor-default select-none">
                          {client}
                        </span>
                        {/* Orange diamond divider */}
                        <div className="w-1.5 h-1.5 bg-accent-orange/40 rotate-45 shrink-0" />
                      </React.Fragment>
                    ))}
                  </div>
                ))}
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
                    <span className="text-accent-orange text-xs tracking-widest font-mono uppercase font-bold block">
                      PORTFOLIO ARCHIVE
                    </span>
                    <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                      EXPLORE MY WORK
                      <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                    </h2>
                  </div>
                  
                  {/* Showing project count indicator */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                      SHOWING {filteredProjects.length} PROJECTS
                    </span>
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
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 3)}
                      className="group flex items-center gap-2.5 bg-[#0A0A0A] border border-zinc-900 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer hover:border-zinc-800"
                    >
                      LOAD MORE PROJECTS
                      <RotateCw className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover:rotate-180 duration-500" />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* SPOTLIGHT INTERACTIVE SHOWCASE SECTION */}
            <SpotlightShowcase />

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
                    MY WORKFLOW
                    <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                  </h2>
                </div>

                {/* Workflow timeline stepper */}
                <Workflow />
              </div>
            </section>

            {/* UNIFIED 2-COLUMN PREMIUM DASHBOARD GRID */}
            <section className="border-t border-zinc-900 bg-[#070707]">
              <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0">
                  
                  {/* COLUMN 1: ABOUT ME & PHILOSOPHY (col-span-7) */}
                  <div
                    id="about"
                    ref={aboutRef}
                    className="py-16 lg:py-24 lg:pr-16 lg:col-span-7 lg:border-r border-zinc-900/60 flex flex-col justify-between space-y-12"
                  >
                    <div className="space-y-10">
                      {/* Section Title */}
                      <div className="space-y-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                          ARTIST PROFILE
                        </span>
                        <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                          ABOUT ME
                          <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                        </h2>
                      </div>

                      {/* Editorial Layout */}
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
                            {/* Subtle dark overlay */}
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
                        <div className="p-5 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 hover:border-zinc-800 transition-colors">
                          <span className="text-[10px] font-mono font-bold text-accent-orange uppercase tracking-wider block mb-1">
                            01 // PHYSICAL FIDELITY
                          </span>
                          <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wide mb-1.5">
                            Sub-D & Hard-Surface Precision
                          </h4>
                          <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                            Meticulous edge flow, optimized low-poly retopology, perfect curvature bevel transitions, and high-density UDIM layout organization.
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-[#0B0B0B] border border-zinc-900/80 hover:border-zinc-800 transition-colors">
                          <span className="text-[10px] font-mono font-bold text-accent-orange uppercase tracking-wider block mb-1">
                            02 // SURFACING ALCHEMY
                          </span>
                          <h4 className="text-white font-sans text-xs font-bold uppercase tracking-wide mb-1.5">
                            Procedural PBR Weathering
                          </h4>
                          <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                            Multi-layered smart materials reflecting real-world age: organic dust accumulation, physical wear, micro-scratches, and realistic moisture.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900">
                      <div className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300">
                        <Box className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">50+</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Completed Assets</div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300">
                        <Star className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">6+</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Core Engines</div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#090909] border border-zinc-900/60 flex flex-col items-center justify-center text-center group hover:border-accent-orange/20 transition-all duration-300">
                        <Heart className="w-5 h-5 text-accent-orange mb-2 transition-transform group-hover:scale-110" />
                        <div className="text-lg font-bold text-white font-mono leading-none">100%</div>
                        <div className="text-[9px] text-zinc-500 font-sans mt-1.5 leading-tight uppercase tracking-wider font-semibold">Production Quality</div>
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 2: LET'S CONNECT (col-span-5) */}
                  <div
                    id="contact"
                    ref={contactRef}
                    className="py-16 lg:py-24 lg:pl-16 lg:col-span-5 flex flex-col justify-between space-y-12"
                  >
                    <div className="space-y-8">
                      {/* Section Title */}
                      <div className="space-y-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-bold">
                          GET IN TOUCH
                        </span>
                        <h2 className="text-3xl md:text-[38px] font-sans font-bold text-white tracking-tight flex items-center gap-2">
                          LET'S CONNECT
                          <span className="w-2.5 h-2.5 bg-accent-orange rounded-none inline-block"></span>
                        </h2>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                        I am fully available for selective freelance partnerships, design studio collaborations, and high-end cinematic visualization opportunities globally. Let's realize your vision.
                      </p>

                      {/* Connection channels */}
                      <div className="space-y-2.5 pt-2">
                        {/* Email */}
                        <a
                          href="mailto:bp69356@gmail.com"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white hover:border-accent-orange/30 transition-all duration-300 group"
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
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="https://linkedin.com/in/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white hover:border-accent-orange/30 transition-all duration-300 group"
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
                        </a>

                        {/* ArtStation */}
                        <a
                          href="https://artstation.com/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white hover:border-accent-orange/30 transition-all duration-300 group"
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
                        </a>

                        {/* Behance */}
                        <a
                          href="https://behance.net/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-xl bg-[#090909] border border-zinc-900 text-zinc-400 hover:text-white hover:border-accent-orange/30 transition-all duration-300 group"
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
                        </a>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-zinc-950 border border-zinc-900 hover:border-accent-orange/40 hover:bg-accent-orange/5 text-zinc-300 hover:text-white rounded-xl font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer group shadow-lg">
                      <Download className="w-4 h-4 text-accent-orange group-hover:scale-110 transition-transform" />
                      Download Creative Resume
                    </button>
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
    </div>
  );
}
