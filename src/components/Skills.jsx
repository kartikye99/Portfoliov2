import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Database, 
  Wrench, 
  Check, 
  Sparkles, 
  Terminal,
  Cpu,
  BrainCircuit,
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('languages');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'languages', label: 'Languages', icon: Code, count: skills.languages.length },
    { id: 'frameworks', label: 'Frameworks & Libs', icon: Layers, count: skills.frameworks.length },
    { id: 'databasesCloud', label: 'Databases & Cloud', icon: Database, count: skills.databasesCloud.length },
    { id: 'toolsDesign', label: 'Tools & UI/UX', icon: Wrench, count: skills.toolsDesign.length },
  ];

  const currentSkillsList = skills[activeCategory] || [];
  const filteredSkills = currentSkillsList.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080b13]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineering &amp; Tooling Arsenal
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested tech stack optimized for performance, clean system design, and responsive user interfaces.
          </p>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveCategory(cat.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'bg-[#111726] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {skill.name}
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141d33] text-indigo-300 border border-indigo-500/30">
                      {skill.badge}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <span className="text-sm font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#0e1322] h-2 rounded-full overflow-hidden p-[1px] border border-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-1000 group-hover:brightness-110"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Problem Solving Strip */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Core Engineering Methodologies &amp; Soft Skills
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Analytical mindset with verified success in fast-paced collaborative development.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {skills.softSkills.map((trait, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b2e] border border-slate-700/80 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
