import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Download, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  Flame
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { personal, stats } = portfolioData;

  const roles = [
    "Full-Stack Web Architect",
    "Real-Time Systems & WebSockets",
    "400+ LeetCode Problem Solver",
    "AI Integration & 3D Web Experiences",
    "Creative UI/UX & Figma Enthusiast"
  ];

  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('profile');
  const [copiedCode, setCopiedCode] = useState(false);

  // Dynamic typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIdx];
    let timer;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIdx]);

  const codeSnippets = {
    profile: `// Developer Profile
const developer = {
  name: "Kartikye Saini",
  role: "Full-Stack Software Engineer",
  education: "B.Tech CSE @ Lovely Professional Univ",
  gpa: 7.94,
  coreSkills: ["React.js", "Node.js", "C++", "WebSockets"],
  dsaMilestone: "400+ LeetCode problems solved",
  achievements: ["5★ HackerRank C++", "5★ HackerRank SQL"],
  readyToBuild: true
};`,
    stack: `// System Architecture Stack
export const TechStack = {
  frontend: ["React 18", "Tailwind CSS", "Figma UI/UX"],
  backend: ["Node.js", "Express.js", "Socket.io"],
  database: ["MongoDB Atlas", "MySQL", "Key-Value Stores"],
  languages: ["C++", "Java", "JavaScript (ES6+)", "SQL"],
  specialties: ["AI Prompt Workflows", "Real-Time Sync", "High Concurrency"]
};`,
    mission: `// Engineering Philosophy
function engineeringGoal() {
  return {
    focus: "Ultra-responsive, accessible web systems",
    algorithmicRigor: "Optimal time/space bounds O(N log N)",
    designPhilosophy: "Fluid motion, intuitive ergonomics",
    status: "Looking for impactful SWE roles & internships"
  };
}`
  };

  const handleCopyCode = () => {
    sounds.playPop();
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b2d] border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 shadow-sm hover:border-indigo-400/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                {personal.name}
              </span>
            </h1>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center">
                <span className="text-indigo-400 mr-2">&gt;</span>
                {displayText}
                <span className="w-2 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block"></span>
              </span>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              B.Tech Computer Science student at <span className="text-slate-200 font-semibold">Lovely Professional University</span>. 
              Bridging the gap between robust algorithmic thinking (<span className="text-amber-400 font-medium">400+ LeetCode problems</span>) 
              and fluid, high-performance web applications with React, Node.js, and real-time WebSockets.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  sounds.playPop();
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#131929] hover:bg-[#1a233a] border border-slate-700/70 hover:border-cyan-500/40 text-slate-200 font-mono text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>kartikye@cli:~$</span>
              </button>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Skills Floating Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> Core Tech:
              </span>
              {["React", "Node.js", "C++", "Socket.io", "MongoDB", "Tailwind CSS", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#111726] border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Tech Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              
              {/* Outer decorative glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Code Frame Box */}
              <div className="relative bg-[#0d121f] border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header bar */}
                <div className="px-4 py-3 bg-[#111728] border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">kartikye-system.ts</span>
                  </div>

                  {/* Copy snippet button */}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-400 px-2 py-1 rounded hover:bg-slate-800/60 transition-colors"
                    title="Copy snippet"
                  >
                    {copiedCode ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-800/80 px-2 pt-1 bg-[#0f1424]">
                  {[
                    { id: 'profile', label: 'Profile.ts', icon: Code2 },
                    { id: 'stack', label: 'Stack.json', icon: Layers },
                    { id: 'mission', label: 'Mission.ts', icon: Zap }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          sounds.playPop();
                          setActiveCodeTab(tab.id);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all border-b-2 ${
                          activeCodeTab === tab.id
                            ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
                            : 'text-slate-400 border-transparent hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto max-h-[340px] bg-[#0c101c]">
                  <pre className="text-slate-300">
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>

                {/* Footer status bar */}
                <div className="px-4 py-2 bg-[#090d17] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Compiled: 0 errors
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-slate-400">Kartikye Saini v2026.1</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1 tracking-tight group-hover:scale-105 transition-transform duration-200`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
