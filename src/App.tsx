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
  ArrowUp
} from 'lucide-react';

// Maps filter IDs to project IDs
const FILTER_MAP: Record<string, string[]> = {
  all: ['cyberpunk_helmet', 'aegis_drone', 'vintage_camera', 'abandoned_station', 'mechanical_keyboard'],
  hard_surface: ['cyberpunk_helmet', 'aegis_drone'],
  environment: ['abandoned_station'],
  product: ['vintage_camera', 'mechanical_keyboard'],
  props: ['cyberpunk_helmet', 'vintage_camera', 'mechanical_keyboard'],
  vehicles: ['aegis_drone'],
  stylized: ['vintage_camera', 'mechanical_keyboard'],
  realistic: ['cyberpunk_helmet', 'aegis_drone', 'vintage_camera', 'abandoned_station', 'mechanical_keyboard']
};

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
    { id: 'all', label: 'All Projects' },
    { id: 'hard_surface', label: 'Hard Surface' },
    { id: 'environment', label: 'Environment' },
    { id: 'product', label: 'Product Visualization' },
    { id: 'props', label: 'Props' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'stylized', label: 'Stylized' },
    { id: 'realistic', label: 'Realistic' }
  ];

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
    const allowedIds = FILTER_MAP[selectedFilter] || [];
    return allowedIds.includes(project.id);
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

            {/* FEATURED PROJECTS / GRID SECTION */}
            <section
              id="portfolio"
              ref={portfolioRef}
              className="py-20 border-t border-zinc-900/40 bg-black"
            >
              <div className="container mx-auto px-4 md:px-8 space-y-10">
                {/* Section header */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                  <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-sans">
                    Featured Projects
                    <span className="w-2 h-2 rounded-full bg-accent-orange inline-block animate-pulse"></span>
                  </h2>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="flex items-center gap-2 font-mono text-xs text-white hover:text-accent-orange uppercase tracking-widest font-semibold transition-colors duration-300 cursor-pointer"
                  >
                    View All Projects
                    <ArrowRight className="w-4 h-4 text-accent-orange" />
                  </button>
                </div>

                {/* Projects Grid of 5 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  {PROJECTS.map((project) => (
                    <motion.button
                      key={project.id}
                      onClick={() => handleProjectSelect(project.id)}
                      className="group text-left block w-full bg-[#080808] border border-zinc-900 rounded-lg overflow-hidden hover:border-zinc-800 transition-all duration-300 focus:outline-none cursor-pointer"
                    >
                      {/* Card Image */}
                      <div className="aspect-[4/3] w-full bg-zinc-950 relative overflow-hidden">
                        <img
                          src={project.images.beauty}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Card Meta Content */}
                      <div className="p-4 flex items-center justify-between gap-3 bg-[#050505] border-t border-zinc-900">
                        <div className="min-w-0">
                          <h3 className="font-sans font-bold text-white text-sm group-hover:text-accent-orange transition-colors truncate">
                            {project.title}
                          </h3>
                          <p className="text-zinc-500 text-[11px] font-sans mt-0.5 truncate">
                            {project.category}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-zinc-800/80 flex items-center justify-center bg-zinc-950/40 text-zinc-400 group-hover:text-black group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
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
                <div className="text-left space-y-3 max-w-xl">
                  <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block font-medium">
                    Workflow Pipeline
                  </span>
                  <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white uppercase">
                    My Process<span className="text-accent-orange">.</span>
                  </h2>
                </div>

                {/* Workflow timeline stepper */}
                <Workflow />
              </div>
            </section>

            {/* UNIFIED 3-COLUMN DASHBOARD GRID */}
            <section className="border-t border-zinc-900 bg-black">
              <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  
                  {/* COLUMN 1: ABOUT ME */}
                  <div
                    id="about"
                    ref={aboutRef}
                    className="py-16 lg:py-20 lg:pr-10 lg:border-r border-zinc-900/60 flex flex-col justify-between"
                  >
                    <div className="space-y-8">
                      <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        About Me
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange inline-block"></span>
                      </h2>

                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Portrait image */}
                        <div className="w-24 h-28 rounded-lg overflow-hidden border border-zinc-900 bg-zinc-950 shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
                            alt="Bhanu - 3D Artist Profile"
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Biography text */}
                        <div className="space-y-3 text-center sm:text-left">
                          <h3 className="text-white font-sans text-sm font-semibold">
                            Hi, I'm <span className="text-accent-orange">Bhanu</span>,
                          </h3>
                          <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                            a passionate 3D Artist specializing in transforming complex concepts into stunning production-ready high-end visuals.
                          </p>
                          <p className="text-zinc-500 text-[11px] leading-relaxed font-sans">
                            I combine technical mastery of topology and texturing with a deep cinematic appreciation for lighting, atmospheric composition, and physical realism.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats row below bio */}
                    <div className="grid grid-cols-3 gap-2.5 pt-8 border-t border-zinc-950 mt-8">
                      <div className="p-3.5 rounded-lg bg-[#060606] border border-zinc-900/60 flex flex-col items-center justify-center text-center">
                        <Box className="w-4 h-4 text-accent-orange mb-1.5" />
                        <div className="text-xs font-bold text-white font-mono leading-none">50+</div>
                        <div className="text-[8px] text-zinc-500 font-sans mt-1 leading-tight uppercase tracking-wider">Completed</div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#060606] border border-zinc-900/60 flex flex-col items-center justify-center text-center">
                        <Star className="w-4 h-4 text-accent-orange mb-1.5" />
                        <div className="text-xs font-bold text-white font-mono leading-none">6+</div>
                        <div className="text-[8px] text-zinc-500 font-sans mt-1 leading-tight uppercase tracking-wider">Core Skills</div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#060606] border border-zinc-900/60 flex flex-col items-center justify-center text-center">
                        <Heart className="w-4 h-4 text-accent-orange mb-1.5" />
                        <div className="text-xs font-bold text-white font-mono leading-none">100%</div>
                        <div className="text-[8px] text-zinc-500 font-sans mt-1 leading-tight uppercase tracking-wider">Passion</div>
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 2: SKILLS */}
                  <div className="py-16 lg:py-20 lg:px-10 lg:border-r border-zinc-900/60 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-sans mb-8">
                        Skills
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange inline-block"></span>
                      </h2>

                      {/* Animated/Styled Progress Bars */}
                      <div className="space-y-4">
                        {[
                          { name: 'Modeling', percentage: 95, icon: Box },
                          { name: 'Texturing', percentage: 95, icon: Paintbrush },
                          { name: 'UV Unwrap', percentage: 90, icon: Grid3X3 },
                          { name: 'Rendering', percentage: 90, icon: Camera },
                          { name: 'Lighting', percentage: 85, icon: Sun },
                          { name: 'Environment Design', percentage: 80, icon: Compass },
                          { name: 'Product Design', percentage: 80, icon: Layers }
                        ].map((skill) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={skill.name} className="space-y-1.5">
                              <div className="flex justify-between items-center text-xs font-mono">
                                <span className="text-zinc-300 flex items-center gap-2">
                                  <SkillIcon className="w-3.5 h-3.5 text-accent-orange/80" />
                                  {skill.name}
                                </span>
                                <span className="text-zinc-400 font-semibold">{skill.percentage}%</span>
                              </div>
                              <div className="h-1 w-full bg-zinc-950 border border-zinc-900/40 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-accent-orange rounded-full transition-all duration-1000"
                                  style={{ width: `${skill.percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tools I Use Grid */}
                    <div className="mt-8 pt-6 border-t border-zinc-950">
                      <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-3">
                        Tools I Use
                      </span>
                      <div className="flex items-center gap-3">
                        {/* Blender */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Blender">
                          <svg className="w-5 h-5 text-[#E87D0D]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm3.8 6a2.2 2.2 0 1 1-2.2 2.2c0-1.2 1-2.2 2.2-2.2zM12 18.2c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2a6.2 6.2 0 0 1 5.4 3.1l-2.2 1.3A3.7 3.7 0 0 0 12 8.3a3.7 3.7 0 1 0 3.1 5.7l2.2 1.3a6.2 6.2 0 0 1-5.3 2.9z" />
                          </svg>
                        </div>
                        {/* Substance Painter */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Substance Painter">
                          <div className="w-6 h-6 rounded-md bg-[#D4202C]/10 border border-[#D4202C]/40 flex items-center justify-center text-[#D4202C] font-mono text-xs font-bold">
                            S
                          </div>
                        </div>
                        {/* Marmoset */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Marmoset Toolbag">
                          <svg className="w-5 h-5 text-accent-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                            <line x1="12" y1="22" x2="12" y2="12" />
                            <line x1="12" y1="12" x2="22" y2="8.5" />
                            <line x1="12" y1="12" x2="2" y2="8.5" />
                          </svg>
                        </div>
                        {/* Photoshop */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Adobe Photoshop">
                          <div className="w-6 h-6 rounded-md bg-[#001E36] border border-[#00C8FF]/40 flex items-center justify-center text-[#00C8FF] font-sans text-[11px] font-bold">
                            Ps
                          </div>
                        </div>
                        {/* Unreal Engine */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Unreal Engine">
                          <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white font-sans text-xs font-bold font-serif italic">
                            U
                          </div>
                        </div>
                        {/* After Effects */}
                        <div className="w-10 h-10 rounded-lg bg-[#080808] border border-zinc-900/60 flex items-center justify-center hover:border-zinc-700 transition-colors cursor-pointer" title="Adobe After Effects">
                          <div className="w-6 h-6 rounded-md bg-[#1D002C] border border-[#D12BFF]/40 flex items-center justify-center text-[#D12BFF] font-sans text-[11px] font-bold">
                            Ae
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 3: LET'S CONNECT */}
                  <div
                    id="contact"
                    ref={contactRef}
                    className="py-16 lg:py-20 lg:pl-10 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        Let's Connect
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange inline-block"></span>
                      </h2>

                      <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                        I'm available for freelance work, collaborations and full-time opportunities.
                      </p>

                      <div className="space-y-0.5 font-sans text-xs pt-2">
                        {/* Email */}
                        <a
                          href="mailto:bp69356@gmail.com"
                          className="flex items-center justify-between py-3.5 border-b border-zinc-900/80 text-zinc-400 hover:text-white transition-colors duration-300 group"
                        >
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-accent-orange" />
                            <div>
                              <div className="text-[9px] text-zinc-500 font-mono">Email</div>
                              <div className="text-zinc-300 font-medium">bp69356@gmail.com</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-orange transition-colors" />
                        </a>

                        {/* LinkedIn */}
                        <a
                          href="https://linkedin.com/in/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-3.5 border-b border-zinc-900/80 text-zinc-400 hover:text-white transition-colors duration-300 group"
                        >
                          <div className="flex items-center gap-3">
                            <Linkedin className="w-4 h-4 text-accent-orange" />
                            <div>
                              <div className="text-[9px] text-zinc-500 font-mono">LinkedIn</div>
                              <div className="text-zinc-300 font-medium">linkedin.com/in/bhanu</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-orange transition-colors" />
                        </a>

                        {/* ArtStation */}
                        <a
                          href="https://artstation.com/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-3.5 border-b border-zinc-900/80 text-zinc-400 hover:text-white transition-colors duration-300 group"
                        >
                          <div className="flex items-center gap-3">
                            <Gamepad2 className="w-4 h-4 text-accent-orange" />
                            <div>
                              <div className="text-[9px] text-zinc-500 font-mono">ArtStation</div>
                              <div className="text-zinc-300 font-medium">artstation.com/bhanu</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-orange transition-colors" />
                        </a>

                        {/* Behance */}
                        <a
                          href="https://behance.net/bhanu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-3.5 border-b border-zinc-900/80 text-zinc-400 hover:text-white transition-colors duration-300 group"
                        >
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-4 h-4 text-accent-orange" />
                            <div>
                              <div className="text-[9px] text-zinc-500 font-mono">Behance</div>
                              <div className="text-zinc-300 font-medium">behance.net/bhanu</div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent-orange transition-colors" />
                        </a>
                      </div>
                    </div>

                    <button className="w-full mt-6 py-3 border border-zinc-900 hover:border-accent-orange/60 hover:bg-accent-orange/5 text-zinc-300 hover:text-white rounded-lg font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group">
                      <Download className="w-4 h-4 text-accent-orange group-hover:scale-110 transition-transform" />
                      Download Resume
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
