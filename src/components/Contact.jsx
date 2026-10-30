import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  CheckCircle2, 
  ArrowUp, 
  Sparkles, 
  MessageSquare,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function Contact({ onOpenResume }) {
  const { personal } = portfolioData;

  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    sounds.playPop();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sounds.playPop();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sounds.playSuccess();

      // Confetti burst!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative overflow-hidden bg-[#06080e] border-t border-slate-800/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I'm currently seeking high-impact software engineering roles, full-stack internships, and technical collaborations. 
            Drop a message or reach out directly!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="p-2 rounded-lg bg-[#141b2c] border border-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone &amp; WhatsApp</div>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="p-2 rounded-lg bg-[#141b2c] border border-slate-700 text-slate-400 hover:text-indigo-400 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location</div>
                <div className="text-sm font-semibold text-white">{personal.location}</div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#131a2b] hover:bg-[#1a233b] border border-slate-700 text-slate-200 hover:text-cyan-400 text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#131a2b] hover:bg-[#1a233b] border border-slate-700 text-slate-200 hover:text-indigo-400 text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4 text-indigo-400" />
                <span>GitHub @kartikye99</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Send Direct Dispatch</h3>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Dispatched!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you! Your note has been received. Kartikye will get back to you shortly at your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0d121f] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#0d121f] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration / Inquiry"
                      className="w-full bg-[#0d121f] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kartikye, I came across your portfolio and wanted to discuss..."
                      className="w-full bg-[#0d121f] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-60 active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kartikye Saini. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              Architected with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> &amp; React 18
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
