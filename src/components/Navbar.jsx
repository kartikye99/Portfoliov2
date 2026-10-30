import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  FileText, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Navbar({ onOpenTerminal, onOpenResume, soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'skills', 'dsa', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
    if (newState) sounds.playPop();
  };

  const navLinks = [
    { id: 'hero', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'dsa', label: 'DSA & Badges' },
    { id: 'education', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0d16]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0d121f] rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-sm">
                &lt;KS/&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Kartikye Saini
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Full-Stack &amp; DSA</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#111726]/70 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-indigo-600/30 border border-indigo-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px]"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Terminal Button */}
            <button
              onClick={() => {
                sounds.playPop();
                onOpenTerminal();
              }}
              title="Open Kartikye CLI Terminal"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-[#141a29] border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-200"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-1 py-0.5 rounded border border-slate-700">`</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                soundEnabled 
                  ? 'border-indigo-500/40 bg-indigo-950/30 text-indigo-400' 
                  : 'border-slate-800 bg-[#121724] text-slate-500 hover:text-slate-300'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                sounds.playSuccess();
                onOpenResume();
              }}
              className="relative group overflow-hidden flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-medium text-xs shadow-md shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700"></div>
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <Sparkles className="w-3 h-3 text-cyan-200" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                sounds.playPop();
                onOpenTerminal();
              }}
              className="p-2 rounded-lg bg-surface border border-slate-700 text-cyan-400"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-[#141a29] border border-slate-700 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#0c101c] border-b border-slate-800 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-600/20 text-cyan-400 border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  sounds.playSuccess();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-xs shadow-md"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>
              <button
                onClick={toggleSound}
                className="p-2.5 rounded-lg bg-[#161e31] border border-slate-700 text-slate-300"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
