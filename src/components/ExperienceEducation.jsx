import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ExternalLink, 
  Palette, 
  BookOpen, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ExperienceEducation() {
  const { education, certifications, training } = portfolioData;
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'certs'

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#090d16]">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Foundations &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education, Training &amp; Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured computer science education backed by specialized industry certifications and UI/UX design thinking immersion.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2.5 mt-8">
            {[
              { id: 'all', label: 'Complete Timeline' },
              { id: 'education', label: 'University & Schooling' },
              { id: 'certs', label: 'Certifications & Training' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-[#111726] border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summer Training Spotlight Banner */}
        {(activeTab === 'all' || activeTab === 'certs') && (
          <div className="mb-14 glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/30 relative overflow-hidden bg-gradient-to-r from-purple-950/20 via-indigo-950/10 to-transparent">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 mt-1">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-500/30">
                      Summer Immersion
                    </span>
                    <span className="text-xs font-mono text-slate-400">July 2025</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Think Design Prototype – Summer Training on Design Thinking &amp; Figma
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                    Underwent rigorous training at Lovely Professional University focusing on core UI/UX heuristics, 
                    wireframing, typography, color harmony, and interactive prototypes for responsive web systems.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {training[0].skillsGained.map((sk, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#141b2c] border border-slate-700 text-slate-300">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dual Column Layout: Education Timeline vs Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Track */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`${activeTab === 'education' ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
              <div className="flex items-center gap-2.5 mb-8">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">Education Milestones</h3>
              </div>

              <div className="relative pl-6 space-y-10 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500 before:to-slate-800">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing Node Dot */}
                    <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-[#0a0d14] border-2 border-indigo-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all"></div>

                    <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-500/20">
                          {edu.grade}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.timeline}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                        {edu.degree}
                      </h4>

                      <div className="text-xs font-medium text-slate-300 mb-3 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.institution} &bull; {edu.location}</span>
                      </div>

                      <ul className="space-y-1 text-xs text-slate-400">
                        {edu.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-400 mt-0.5">&bull;</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Track */}
          {(activeTab === 'all' || activeTab === 'certs') && (
            <div className={`${activeTab === 'certs' ? 'lg:col-span-12' : 'lg:col-span-6'}`}>
              <div className="flex items-center gap-2.5 mb-8">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/20">
                          {cert.badge}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {cert.title}
                      </h4>

                      <div className="text-xs font-semibold text-slate-300 mb-2">
                        Issuer: {cert.issuer}
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {cert.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified
                      </span>
                      <span className="text-slate-500">Cred ID: KS-2025</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
