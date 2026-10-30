import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RotateCcw, 
  Key, 
  Check, 
  ChevronDown, 
  FileText, 
  Mail, 
  Phone,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { sendChatMessage } from '../services/geminiService';
import { sounds } from '../utils/soundEffects';

export default function AIChatWidget({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [keySavedToast, setKeySavedToast] = useState(false);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: `Hi there! 👋 I'm **Kartikye's AI Twin**, powered by Google Gemini.

I know everything about Kartikye's **7.94 CGPA at LPU**, **400+ LeetCode DSA achievements**, **Roomify AI 3D Web App**, and real-time WebSockets architecture.

What would you like to know about Kartikye?`,
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const key = localStorage.getItem('kartikye_gemini_api_key') || '';
    setSavedKey(key);
    setApiKeyInput(key);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasOpenedBefore(true);
      setTimeout(() => inputRef.current?.focus(), 150);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSaveApiKey = (e) => {
    e.preventDefault();
    sounds.playPop();
    localStorage.setItem('kartikye_gemini_api_key', apiKeyInput.trim());
    setSavedKey(apiKeyInput.trim());
    setKeySavedToast(true);
    setTimeout(() => {
      setKeySavedToast(false);
      setShowSettings(false);
    }, 1500);
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isTyping) return;

    sounds.playPop();
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await sendChatMessage([...messages, userMsg], savedKey);
      sounds.playSuccess();
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          content: response.text,
          isFallback: response.isFallback,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          content: "I'm having a brief connection hitch. You can also view Kartikye's verified resume or reach out directly at **kartikyesaini@gmail.com**!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    sounds.playClick();
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        content: `Chat memory refreshed! Ask me anything about Kartikye's **7.94 CGPA**, **400+ DSA solutions**, **Roomify AI project**, or technical skills.`,
        timestamp: 'Just now'
      }
    ]);
  };

  const quickPrompts = [
    { label: "🎓 CGPA & College", prompt: "What is Kartikye's CGPA and college degree?" },
    { label: "🤖 Roomify AI App", prompt: "Tell me about Kartikye's Roomify AI 3D project" },
    { label: "⚡ Real-Time Chat App", prompt: "Explain the architecture of Kartikye's real-time chat platform" },
    { label: "🏆 LeetCode 400+ & DSA", prompt: "What are Kartikye's competitive coding achievements on LeetCode and HackerRank?" },
    { label: "📬 Contact & Hire", prompt: "How can I contact or hire Kartikye?" },
    { label: "📄 View Resume", prompt: "Can I review Kartikye's resume and certifications?" }
  ];

  // Helper to render formatted text with bolding and bullet points
  const renderMessageContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Check if line contains bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <div key={idx} className={line.trim() === '' ? 'h-2' : 'my-0.5'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button (Bottom Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center">
          
          {/* Attention Badge for first-time visitors */}
          {!hasOpenedBefore && (
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141b2e] border border-cyan-500/40 text-cyan-300 text-xs font-mono mr-3 shadow-lg shadow-black/40 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ask Kartikye AI</span>
            </div>
          )}

          <button
            onClick={() => {
              sounds.playPop();
              setIsOpen(true);
            }}
            aria-label="Open Kartikye AI Assistant"
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-indigo-500/40 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0b0e17] animate-pulse"></span>
            </div>
            <span className="tracking-wide font-mono">Kartikye AI</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">Gemini</span>
          </button>
        </div>
      )}

      {/* Main Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] bg-[#0c101c] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-fadeIn">
          
          {/* Header */}
          <div className="px-4 py-3 bg-[#111728] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white">Kartikye AI Assistant</h3>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <span>Gemini 1.5 Flash</span>
                  <span>&bull;</span>
                  <span className="text-emerald-400">Knowledge: LPU 7.94 CGPA</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  sounds.playClick();
                  setShowSettings(!showSettings);
                }}
                title="Configure Gemini API Key"
                className={`p-1.5 rounded-lg transition-colors ${
                  showSettings ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collapsible API Key Drawer */}
          {showSettings && (
            <div className="p-3.5 bg-[#141b2c] border-b border-slate-700/80 text-xs animate-fadeIn">
              <form onSubmit={handleSaveApiKey} className="space-y-2">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Gemini API Key (Optional)</span>
                  </span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-cyan-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>Get free key</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    placeholder="AIzaSy... (leave blank for local verified engine)"
                    className="flex-1 bg-[#0c101c] border border-slate-700 focus:border-cyan-400 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1"
                  >
                    {keySavedToast ? <Check className="w-3.5 h-3.5" /> : "Save"}
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {savedKey 
                    ? "✓ Active key saved in your browser! Responses will use live Gemini." 
                    : "⚡ No key entered? The assistant uses Kartikye's verified offline knowledge engine with 100% accuracy."}
                </p>
              </form>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 font-sans text-xs bg-[#090d16]">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAi ? 'items-start' : 'items-end'} animate-fadeIn`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-slate-500">
                    <span>{isAi ? "Kartikye AI" : "You"}</span>
                    <span>&bull;</span>
                    <span>{msg.timestamp}</span>
                    {isAi && msg.isFallback && (
                      <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-1 rounded border border-emerald-500/20">
                        Verified Facts
                      </span>
                    )}
                  </div>

                  <div
                    className={`max-w-[90%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      isAi
                        ? 'bg-[#131929] text-slate-200 border border-slate-700/80 rounded-tl-none shadow-md'
                        : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-tr-none shadow-md shadow-indigo-600/20'
                    }`}
                  >
                    {renderMessageContent(msg.content)}

                    {/* Quick interactive action buttons if resume or contact is mentioned */}
                    {isAi && (msg.content.toLowerCase().includes('resume') || msg.content.toLowerCase().includes('cv')) && (
                      <div className="mt-2.5 pt-2 border-t border-slate-700/80 flex items-center gap-2">
                        <button
                          onClick={() => {
                            sounds.playSuccess();
                            onOpenResume();
                          }}
                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-600/40 hover:bg-indigo-600 text-cyan-300 hover:text-white border border-indigo-500/40 text-[11px] font-mono transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          <span>Open Printable Resume</span>
                        </button>
                      </div>
                    )}

                    {isAi && (msg.content.toLowerCase().includes('kartikyesaini@gmail.com') || msg.content.toLowerCase().includes('hire')) && (
                      <div className="mt-2.5 pt-2 border-t border-slate-700/80 flex flex-wrap items-center gap-1.5">
                        <a
                          href="mailto:kartikyesaini@gmail.com"
                          className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email</span>
                        </a>
                        <a
                          href="tel:+917906913880"
                          className="flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 border border-indigo-500/30 text-[10px] font-mono transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs pl-2 py-1">
                <div className="w-6 h-6 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 bg-[#131929] px-3 py-1.5 rounded-full border border-slate-800">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-slate-400 ml-1">Consulting Gemini...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#0c101c] border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(item.prompt)}
                disabled={isTyping}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#141b2c] hover:bg-[#1d263d] border border-slate-700/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-[11px] font-medium transition-all shrink-0 active:scale-95 disabled:opacity-50"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#101524] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything (e.g. CGPA, Roomify, LeetCode)..."
              disabled={isTyping}
              className="flex-1 bg-[#0c101c] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-600/30 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
