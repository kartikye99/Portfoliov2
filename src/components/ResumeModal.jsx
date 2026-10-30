import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playPop();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-300">
        
        {/* Top Control Header Bar (Dark in modal, hidden when printed) */}
        <div className="print:hidden px-5 py-3.5 bg-[#0f172a] text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-sm">Kartikye_Saini_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => { sounds.playClick(); onClose(); }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 font-sans text-slate-800 text-[13px] leading-relaxed">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-300 mb-6">
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight mb-2">
              Kartikye Saini
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-600 font-medium">
              <a href="https://www.linkedin.com/in/kartikye-saini" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                linkedin.com/in/kartikye-saini
              </a>
              <a href="https://github.com/kartikye99" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                github.com/kartikye99
              </a>
              <a href="mailto:kartikyesaini@gmail.com" className="text-slate-700 hover:underline">
                kartikyesaini@gmail.com
              </a>
              <span className="text-slate-700">Mobile: +91 7906913880</span>
            </div>
          </div>

          {/* Section: SKILLS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs">
              <p><strong className="text-slate-900">Languages:</strong> C++, Java, JavaScript</p>
              <p><strong className="text-slate-900">Framework:</strong> HTML5 and CSS3, Node.JS, React, Tailwind CSS</p>
              <p><strong className="text-slate-900">Tools/Platforms:</strong> MongoDB, MySQL, Git, GitHub, Visual Studio Code</p>
              <p><strong className="text-slate-900">Soft Skills:</strong> Problem-Solving, Adaptability, Critical Thinking</p>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-4">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Full-Stack-Real-Time Chat Application <span className="font-normal text-indigo-600">| GitHub | Live</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">February 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                <li>Built a scalable full-stack real-time chat platform supporting secure user authentication, instant messaging, and dynamic conversation management for multiple users.</li>
                <li>Designed WebSocket-based messaging using Socket.io to enable low-latency communication and synchronized message delivery across active user sessions.</li>
                <li>Developed modular RESTful APIs with Node.js and Express.js for authentication, message routing, and request handling, establishing a scalable backend architecture for real-time chat operations.</li>
                <li>Validated application reliability through 50+ simulated multi-user messaging interactions.</li>
                <li><strong>Technologies:</strong> React, JavaScript, Node.js, Express.js, MongoDB Atlas, JWT, Web Sockets (Socket.io)</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-3">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Roomify – AI-Powered 3D Room Design Web App <span className="font-normal text-indigo-600">| GitHub | Live</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">January 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                <li>Architected an AI-powered web application that converts 2D room layouts into structured 3D architectural concepts, automating layout visualization and reducing manual design conceptualization time.</li>
                <li>Engineered a responsive React.js interface with drag-and-drop image uploads, dynamic state management, and asynchronous request handling, enabling seamless user interaction.</li>
                <li>Developed automated AI prompt workflows and client-side image processing pipelines to efficiently convert dynamic layout inputs into structured visual design outputs for architectural visualization.</li>
                <li>Validated system scalability by processing 100+ layout submissions during testing.</li>
                <li><strong>Technologies:</strong> React.js, JavaScript, AI Integration, Serverless Workers, Key-Value Storage</li>
              </ul>
            </div>
          </div>

          {/* Section: TRAINING */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Training
            </h2>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-bold text-slate-900 text-xs">
                Summer Training | Figma | LPU | Link
              </h3>
              <span className="text-xs text-slate-500 font-medium">July 2025</span>
            </div>
            <p className="text-xs text-slate-800 font-semibold mb-1">
              Think Design Prototype - Summer Training on Design Thinking &amp; Figma
            </p>
            <ul className="list-disc list-inside text-xs space-y-0.5 text-slate-700">
              <li>Strengthened design thinking and problem-solving skills by practicing core UI/UX principles.</li>
              <li>Gained conceptual and practical understanding of user interface design, layouts, typography, and color use.</li>
              <li>Designed wireframes and high-fidelity UI screens for web applications using Figma.</li>
              <li>Improved collaboration and time management skills through guided training exercises.</li>
            </ul>
          </div>

          {/* Section: CERTIFICATES */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certificates / Certification
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>&bull; Cloud Computing | NPTEL</span>
                <span className="text-slate-500 font-medium">November 2025</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Java programming | Neo Colab</span>
                <span className="text-slate-500 font-medium">May 2025</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Data Structures and Algorithm (C++) | Neo Colab</span>
                <span className="text-slate-500 font-medium">December 2024</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Responsive Web Design | FreeCodeCamp</span>
                <span className="text-slate-500 font-medium">October 2023</span>
              </div>
            </div>
          </div>

          {/* Section: ACHIEVEMENTS */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Achievements
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>&bull; Solved 400+ Data Structures &amp; Algorithms problems on LeetCode</span>
                <span className="text-slate-500 font-medium">February 2026</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Earned 5 stars in C++, 5 stars in SQL, 4 stars in Python on HackerRank</span>
                <span className="text-slate-500 font-medium">January 2026</span>
              </div>
            </div>
          </div>

          {/* Section: EDUCATION */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            
            <div className="mb-2">
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-slate-900 text-xs">Lovely Professional University</span>
                <span className="text-xs text-slate-600">Phagwara, Punjab</span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-slate-700">
                <span>Bachelor of Technology in Computer Science and Engineering; <strong>CGPA: 7.94</strong></span>
                <span className="text-slate-500">August 2023 – Present</span>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-slate-900 text-xs">Asha Modern International</span>
                <span className="text-xs text-slate-600">U.P, Saharanpur</span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-slate-700">
                <span>Intermediate (Class XII) PCM; <strong>Percentage: 75%</strong></span>
                <span className="text-slate-500">March 2022 – May 2023</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-slate-900 text-xs">Asha Modern International</span>
                <span className="text-xs text-slate-600">U.P, Saharanpur</span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-slate-700">
                <span>Matriculation (Class X); <strong>Percentage: 75%</strong></span>
                <span className="text-slate-500">March 2020 – May 2021</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
