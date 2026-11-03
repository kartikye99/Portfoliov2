import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Send, 
  Box, 
  Eye, 
  Sparkles, 
  Code2, 
  MessageSquare, 
  Monitor, 
  Cpu, 
  CheckCircle,
  Play,
  RotateCcw,
  Sun,
  Moon,
  Compass
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  // Roomify Simulator State
  const [roomifyMode, setRoomifyMode] = useState('3d'); // '2d' or '3d'
  const [roomTheme, setRoomTheme] = useState('scandinavian'); // 'scandinavian', 'cyberpunk', 'minimalist'
  const [roomLighting, setRoomLighting] = useState('sunset'); // 'day', 'sunset', 'neon'

  // Chat Simulator State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Alex (Backend Lead)', text: 'Hey Kartikye! How is the WebSocket sync holding up under 50+ users?', time: '12:04 PM', isMe: false },
    { id: 2, sender: 'Kartikye Saini', text: 'Socket.io event throttling and JWT auth middleware are stable! Latency is under 18ms.', time: '12:05 PM', isMe: true },
    { id: 3, sender: 'Priya (QA Engineer)', text: 'Verified the multi-room broadcast test. Zero packet drops observed! 🚀', time: '12:06 PM', isMe: false }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Filtered projects
  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.id === 'chat-app' || p.id === 'roomify';
    if (filter === 'ai') return p.id === 'roomify';
    if (filter === 'dsa') return p.id === 'dsa-engine';
    return true;
  });

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    sounds.playPop();
    const newMsg = {
      id: Date.now(),
      sender: 'You (Visitor)',
      text: inputMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setChatMessages(prev => [...prev, newMsg]);
    setInputMsg('');
    setIsTyping(true);

    // Simulated WebSocket reply from Kartikye's bot
    setTimeout(() => {
      sounds.playSuccess();
      setIsTyping(false);
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'Kartikye (Bot)',
          text: `Thanks for testing! Socket event emitted: "message_ack" with MongoDB document persist. Feel free to connect via LinkedIn! ✨`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        }
      ]);
    }, 1200);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Crafted with Precision &amp; Scalability
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world systems spanning real-time WebSockets, AI 3D visualization, and algorithmic rigor.
            Test the live interactive prototypes below!
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack Systems' },
              { id: 'ai', label: 'AI & 3D Web' },
              { id: 'dsa', label: 'Algorithms & DSA' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setFilter(tab.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-[#111726] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project 1: Roomify Feature Spotlight */}
        {(filter === 'all' || filter === 'ai' || filter === 'fullstack') && (
          <div className="mb-20 glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                      AI &amp; 3D Web App
                    </span>
                    <span className="text-xs font-mono text-slate-400">January 2026</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Roomify – AI-Powered 3D Room Design
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Architected an AI-powered application that transforms 2D room layouts into structured 3D architectural spaces. 
                    Eliminates manual spatial modeling time by chaining prompt engineering with serverless image processing pipelines.
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-3 mb-6 text-sm text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Engineered responsive React interface with drag-and-drop floorplan uploads, dynamic state management, and asynchronous request queues.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Developed automated AI prompt pipelines to convert layout vectors into high-fidelity 3D structural visual assets.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Validated high resilience under load with 100+ architectural layout submissions during stress benchmarks.</span>
                    </li>
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["React.js", "JavaScript", "AI Integration", "Serverless Workers", "Key-Value Storage", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#141c30] text-indigo-300 border border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href="https://github.com/kartikye99"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141b2d] hover:bg-[#1c253d] border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="https://roomify-ashen.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playPop()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/30 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Showcase</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive 3D Room Simulator Widget */}
              <div className="lg:col-span-6 w-full">
                <div className="bg-[#0b0f19] border border-slate-700/80 rounded-2xl p-5 shadow-2xl relative">
                  
                  {/* Simulator Control Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-2">
                      <Box className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-bold text-slate-200">Interactive 3D Engine Preview</span>
                    </div>

                    {/* 2D vs 3D Mode Toggle */}
                    <div className="flex items-center bg-[#141a29] p-1 rounded-lg border border-slate-700">
                      <button
                        onClick={() => { sounds.playClick(); setRoomifyMode('2d'); }}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                          roomifyMode === '2d' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        2D Plan
                      </button>
                      <button
                        onClick={() => { sounds.playClick(); setRoomifyMode('3d'); }}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                          roomifyMode === '3d' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        3D Render
                      </button>
                    </div>
                  </div>

                  {/* Simulator Canvas / Visualizer */}
                  <div className={`relative h-72 sm:h-80 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center transition-all duration-500 ${
                    roomTheme === 'cyberpunk' ? 'bg-[#08091a]' : roomTheme === 'minimalist' ? 'bg-[#12161f]' : 'bg-[#0e1422]'
                  }`}>
                    
                    {roomifyMode === '2d' ? (
                      /* 2D Blueprint Schematic */
                      <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-grid-pattern relative">
                        <div className="w-56 h-44 border-2 border-dashed border-cyan-400/60 rounded-lg p-3 relative flex flex-col justify-between bg-[#0b101d]/80 backdrop-blur-sm">
                          <span className="text-[10px] font-mono text-cyan-400 absolute -top-3 left-2 bg-[#0c101c] px-2 rounded border border-cyan-500/30">
                            2D Vector Architectural Plan
                          </span>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-14 border border-indigo-400/50 bg-indigo-500/10 rounded flex flex-col items-center justify-center text-[10px] font-mono text-indigo-300">
                              <span>Bed 01</span>
                              <span className="text-[8px] text-slate-400">14' x 12'</span>
                            </div>
                            <div className="h-14 border border-cyan-400/50 bg-cyan-500/10 rounded flex flex-col items-center justify-center text-[10px] font-mono text-cyan-300">
                              <span>Bath &amp; Suite</span>
                              <span className="text-[8px] text-slate-400">10' x 8'</span>
                            </div>
                          </div>

                          <div className="w-full h-14 border border-emerald-400/50 bg-emerald-500/10 rounded-md flex items-center justify-center text-[11px] font-mono text-emerald-300">
                            Open Kitchen &amp; Living Lounge
                          </div>

                          <div className="w-full flex justify-between text-[9px] font-mono text-slate-400 border-t border-slate-700/80 pt-1">
                            <span>Patio Deck: 16'</span>
                            <span>Driveway Car Port</span>
                          </div>
                        </div>

                        <span className="text-xs font-mono text-cyan-300 mt-4 flex items-center gap-1.5 bg-[#111728] px-3 py-1 rounded-full border border-cyan-500/30 shadow-md">
                          <Eye className="w-3.5 h-3.5 text-cyan-400" /> Switch to "3D Render" to view AI synthesized architecture
                        </span>
                      </div>
                    ) : (
                      /* Photorealistic 3D Architectural Floorplan Render */
                      <div className="w-full h-full relative group/render overflow-hidden flex items-center justify-center bg-[#070a13]">
                        
                        {/* 3D Architectural Image Render */}
                        <img
                          src="/images/roomify-3d-render.jpg"
                          alt="Roomify AI 3D Architectural Floorplan Render"
                          className={`w-full h-full object-cover object-center transition-all duration-700 group-hover/render:scale-105 ${
                            roomLighting === 'sunset' ? 'brightness-95 contrast-105 saturate-110' :
                            roomLighting === 'neon' ? 'brightness-90 contrast-125 hue-rotate-15' :
                            'brightness-100 contrast-100'
                          }`}
                        />

                        {/* Dynamic Lighting Tint Overlay */}
                        <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                          roomLighting === 'sunset' ? 'bg-gradient-to-tr from-amber-600/20 via-orange-500/15 to-transparent mix-blend-color-burn' :
                          roomLighting === 'neon' ? 'bg-gradient-to-tr from-cyan-600/30 via-purple-700/20 to-transparent mix-blend-overlay' :
                          'bg-transparent'
                        }`}></div>

                        {/* Subtle Vignette Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none"></div>

                        {/* Top-Left Floating Metadata Pill */}
                        <div className="absolute top-3 left-3 bg-[#0d121f]/90 border border-slate-700/90 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-200 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                          <span>AI Depth Synthesis: 99.4%</span>
                        </div>

                        {/* Top-Right Preset Tag */}
                        <div className="absolute top-3 right-3 bg-[#0d121f]/90 border border-slate-700/90 rounded-lg px-2 py-1 text-[10px] font-mono text-indigo-300 backdrop-blur-md uppercase tracking-wider">
                          {roomTheme}
                        </div>

                        {/* Bottom-Left Room Blueprint Labels */}
                        <div className="absolute bottom-3 left-3 bg-[#0d121f]/85 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[10px] font-mono text-slate-300 backdrop-blur-md hidden sm:flex items-center gap-2">
                          <span className="text-emerald-400 font-semibold">Master Suite</span>
                          <span>&bull;</span>
                          <span className="text-cyan-400 font-semibold">Living Lounge</span>
                          <span>&bull;</span>
                          <span className="text-amber-400 font-semibold">Deck &amp; Car Port</span>
                        </div>

                        {/* Bottom-Right Engine Tag */}
                        <div className="absolute bottom-3 right-3 bg-[#0d121f]/90 border border-slate-700/90 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-400 backdrop-blur-md">
                          Engine: WebGL &bull; Serverless Worker
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Simulator Customization Controls */}
                  <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Theme:</span>
                      {['scandinavian', 'cyberpunk', 'minimalist'].map(t => (
                        <button
                          key={t}
                          onClick={() => { sounds.playPop(); setRoomTheme(t); }}
                          className={`capitalize px-2 py-0.5 rounded text-[11px] transition-colors ${
                            roomTheme === t ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Lighting:</span>
                      {['sunset', 'neon', 'day'].map(l => (
                        <button
                          key={l}
                          onClick={() => { sounds.playClick(); setRoomLighting(l); }}
                          className={`capitalize px-2 py-0.5 rounded text-[11px] transition-colors ${
                            roomLighting === l ? 'bg-cyan-500 text-black font-semibold' : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* Project 2: Full-Stack Real-Time Chat Platform Feature Spotlight */}
        {(filter === 'all' || filter === 'fullstack') && (
          <div className="mb-20 glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Interactive Chat Live Simulator */}
              <div className="lg:col-span-6 w-full order-2 lg:order-1">
                <div className="bg-[#0b0f1a] border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl">
                  
                  {/* Chat Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          #general-chat (Socket.io Cluster)
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">4 active members &bull; 0 packet drops</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-[#141b2c] px-2.5 py-1 rounded text-[11px] font-mono text-cyan-400 border border-cyan-500/30">
                      <span>Live WebSocket</span>
                    </div>
                  </div>

                  {/* Messages Feed Window */}
                  <div className="h-64 sm:h-72 overflow-y-auto space-y-3 pr-1 py-1 font-sans text-xs">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-slate-400">
                          <span className={msg.isMe ? 'text-cyan-400 font-semibold' : 'text-indigo-300 font-semibold'}>
                            {msg.sender}
                          </span>
                          <span>&bull;</span>
                          <span>{msg.time}</span>
                        </div>
                        <div
                          className={`max-w-[85%] px-3.5 py-2 rounded-2xl leading-relaxed text-xs ${
                            msg.isMe
                              ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-tr-none shadow-md shadow-indigo-600/20'
                              : 'bg-[#151c2e] text-slate-200 border border-slate-700/80 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 pl-2 py-1 font-mono">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        <span className="text-[11px]">Kartikye is typing response...</span>
                      </div>
                    )}
                  </div>

                  {/* Message Input Box */}
                  <form onSubmit={handleSendChat} className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                    <input
                      type="text"
                      value={inputMsg}
                      onChange={(e) => setInputMsg(e.target.value)}
                      placeholder="Type a real test message to emit WebSocket..."
                      className="flex-1 bg-[#121828] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none transition-colors font-sans"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-transform active:scale-95"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>

                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/80 text-indigo-400 border border-indigo-500/30">
                      Real-Time &amp; Cloud Backend
                    </span>
                    <span className="text-xs font-mono text-slate-400">February 2026</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Full-Stack Real-Time Chat Platform
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Engineered a scalable full-stack real-time messaging application supporting multi-room collaboration, instant presence indicators, and JWT authenticated sessions. 
                    Built to maintain low-latency message ordering across distributed client sessions.
                  </p>

                  <ul className="space-y-3 mb-6 text-sm text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Designed WebSocket-based messaging pipeline with Socket.io to achieve sub-20ms latency and synchronized delivery.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Developed modular RESTful APIs with Node.js and Express.js for token auth, message indexing, and user routing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>Simulated 50+ concurrent multi-user load sessions with automated scripts to validate zero dropped packets.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {["React", "JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Socket.io"].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#141c30] text-cyan-300 border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href="https://github.com/kartikye99"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141b2d] hover:bg-[#1c253d] border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="https://vibechat-golf.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playPop()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/30 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Deployment</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Project 3: DSA Lab & Figma Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: DSA & LeetCode 400+ */}
          {(filter === 'all' || filter === 'dsa') && (
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-950/60 text-amber-400 border border-amber-500/30">
                    Algorithms &amp; Core CS
                  </span>
                  <span className="text-xs font-mono text-slate-400">2024 – 2026</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Algorithmic Solutions &amp; 400+ DSA Engine
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Comprehensive mastery of high-performance algorithm design in C++ and Java. 
                  Extensive problem solving across Dynamic Programming, Graph Theory (Dijkstra, Bellman-Ford), 
                  Binary Search, and Tree traversals.
                </p>

                <div className="p-4 rounded-xl bg-[#0e1322] border border-slate-800 font-mono text-xs text-slate-300 mb-6">
                  <div className="flex items-center justify-between text-slate-500 mb-2 border-b border-slate-800 pb-1.5">
                    <span>LeetCode Benchmark</span>
                    <span className="text-amber-400 font-bold">400+ Solved</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-[#141b2c] p-2 rounded border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold block">150+</span>
                      <span className="text-slate-400">Easy</span>
                    </div>
                    <div className="bg-[#141b2c] p-2 rounded border border-amber-500/20">
                      <span className="text-amber-400 font-bold block">210+</span>
                      <span className="text-slate-400">Medium</span>
                    </div>
                    <div className="bg-[#141b2c] p-2 rounded border border-rose-500/20">
                      <span className="text-rose-400 font-bold block">40+</span>
                      <span className="text-slate-400">Hard</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["C++", "Java", "Dynamic Programming", "Graph Algorithms", "Memory Optimization"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded bg-[#121828] text-amber-300 border border-amber-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href="https://github.com/kartikye99"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href="#dsa"
                  onClick={() => sounds.playPop()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Interactive Runner</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Card: Think Design & Figma */}
          {(filter === 'all' || filter === 'ai') && (
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/60 text-purple-400 border border-purple-500/30">
                    Figma &amp; UI/UX
                  </span>
                  <span className="text-xs font-mono text-slate-400">July 2025</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  Think Design Prototype System (LPU)
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Intensive summer training in user-centric design heuristics, high-fidelity responsive wireframing, 
                  color theory, and interactive prototyping in Figma at Lovely Professional University.
                </p>

                <div className="p-4 rounded-xl bg-[#0e1322] border border-slate-800 font-mono text-xs text-slate-300 mb-6 space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Design Thinking Heuristics</span>
                    <span className="text-purple-400">Certified</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Component Library &amp; Tokens</span>
                    <span className="text-purple-400">100% Reusable</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Accessibility (WCAG AA)</span>
                    <span className="text-emerald-400">Compliant</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Figma", "UI/UX", "Wireframing", "Color Systems", "Design Thinking"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded bg-[#121828] text-purple-300 border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Issued by LPU</span>
                <a
                  href="#education"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>View Training Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
