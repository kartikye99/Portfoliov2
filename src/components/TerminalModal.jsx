import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to KartikyeOS [Version 2.4.0-release]' },
    { type: 'system', text: 'Type "help" to list available commands or "sudo hire" to initiate hiring sequence.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    sounds.playPop();

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (rawCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about          Summary of background and engineering mission
  skills         Overview of technical arsenal (C++, React, Node, WebSockets)
  projects       List of key production applications & prototypes
  stats          LeetCode (400+), HackerRank 5★, and CGPA metrics
  contact        Direct transmission links (Email, Phone, LinkedIn)
  sudo hire      Initiate fast-track hiring sequence [Recruiter Favorite]
  clear          Purge terminal history
  exit           Close Kartikye CLI`
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `KARTIKYE SAINI
Role: Full-Stack Developer & Software Engineer
University: Lovely Professional University (B.Tech CSE, CGPA 7.94)
Summary: Specialist in real-time WebSockets, scalable backend APIs (Node/Express), modern reactive frontends, and algorithmic optimization (400+ LeetCode DSA).`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL ARSENAL:
  Languages:   C++, Java, JavaScript (ES6+), SQL
  Frameworks:  React.js, Node.js, Express.js, Tailwind CSS, Socket.io
  Databases:   MongoDB Atlas, MySQL, Key-Value Stores
  Cloud/DevOps:Cloud Computing (NPTEL), Serverless Workers, Git/GitHub
  Design:      Figma (UI/UX, High-Fidelity Prototypes, Wireframes)`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED SYSTEMS:
  1. Roomify – AI-Powered 3D Room Design Web App
     Converts 2D floorplans to 3D models via AI pipelines & Serverless Workers.
  2. Full-Stack Real-Time Chat Platform
     Low-latency WebSockets with Socket.io, JWT authentication & MongoDB.
  3. Algorithmic Solutions Lab (400+ LeetCode)
     High-efficiency Dynamic Programming & Graph implementations in C++.`
        });
        break;

      case 'stats':
      case 'achievements':
        newHistory.push({
          type: 'output',
          text: `VERIFIED MILESTONES:
  • 400+ Problems solved on LeetCode
  • 5 Stars in C++ on HackerRank
  • 5 Stars in SQL on HackerRank
  • 4 Stars in Python on HackerRank
  • 7.94 CGPA in B.Tech Computer Science & Engineering`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `COMMUNICATION CHANNELS:
  Email:    kartikyesaini@gmail.com
  Phone:    +91 7906913880
  LinkedIn: https://www.linkedin.com/in/kartikye-saini
  GitHub:   https://github.com/kartikye99`
        });
        break;

      case 'sudo hire':
      case 'hire':
        sounds.playSuccess();
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        newHistory.push({
          type: 'success',
          text: `🚀 INITIATING CANDIDATE ONBOARDING...
[SUCCESS]: Candidate "Kartikye Saini" matches high-impact criteria:
- Strong algorithmic fundamentals (400+ DSA, 5★ C++)
- Production full-stack execution (React, Node, Socket.io, MongoDB)
- Design thinking & UI/UX prototyping (Figma certified)
Dispatching celebratory payload! Let's schedule an interview: kartikyesaini@gmail.com`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${rawCmd}". Type "help" to see available options.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl bg-[#090d16] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Titlebar */}
        <div className="px-4 py-3 bg-[#0f1523] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>kartikye@production-node: ~</span>
            </div>
          </div>

          <button
            onClick={() => { sounds.playClick(); onClose(); }}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-slate-200 overflow-y-auto space-y-2 bg-[#070a12] cursor-text"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'input' && (
                <div className="text-cyan-400 font-semibold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-slate-400">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono">{item.text}</pre>
              )}
              {item.type === 'success' && (
                <pre className="text-emerald-400 whitespace-pre-wrap font-mono font-semibold">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1 text-cyan-400">
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-[13px] p-0 focus:ring-0"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#0c101c] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Hint: type <strong className="text-cyan-400">sudo hire</strong> or <strong className="text-cyan-400">help</strong></span>
          <span>Press ESC or click X to close</span>
        </div>

      </div>
    </div>
  );
}
