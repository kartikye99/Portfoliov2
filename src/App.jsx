import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DSAAchievements from './components/DSAAchievements';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import TerminalModal from './components/TerminalModal';
import ResumeModal from './components/ResumeModal';
import AIChatWidget from './components/AIChatWidget';
import { Terminal } from 'lucide-react';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Keyboard shortcut listener: backtick ` or ~ toggles terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        // Only if not currently typing in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        e.preventDefault();
        setTerminalOpen(prev => !prev);
        sounds.playPop();
      }
      if (e.key === 'Escape') {
        setTerminalOpen(false);
        setResumeOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Interactive Particle Starfield / Constellation Web Background */}
      <ParticleBackground />

      {/* Top Glass Navigation Bar */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <Projects />
        <Skills />
        <DSAAchievements />
        <ExperienceEducation />
        <Contact 
          onOpenResume={() => setResumeOpen(true)}
        />
      </main>

      {/* Floating Action Button for Terminal CLI (Bottom Left) */}
      <button
        onClick={() => {
          sounds.playPop();
          setTerminalOpen(true);
        }}
        title="Open Kartikye Terminal CLI (Press `)"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0e1424]/90 border border-cyan-500/40 text-cyan-400 font-mono text-xs shadow-xl backdrop-blur-md hover:bg-cyan-950/40 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
        <span className="hidden sm:inline">Press ` for CLI</span>
      </button>

      {/* Modals */}
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* Kartikye AI Chatbot (Gemini Powered) */}
      <AIChatWidget 
        onOpenResume={() => setResumeOpen(true)} 
      />

    </div>
  );
}
