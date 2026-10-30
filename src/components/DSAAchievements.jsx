import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Star, 
  Code2, 
  Play, 
  RotateCcw, 
  Flame, 
  CheckCircle2, 
  TrendingUp, 
  Zap,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function DSAAchievements() {
  const { achievements } = portfolioData;

  // Interactive Algorithm Visualizer State
  const initialArray = [14, 38, 7, 52, 23, 61, 4];
  const [array, setArray] = useState([...initialArray]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [solvedIndices, setSolvedIndices] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [stepLogs, setStepLogs] = useState("Click 'Run Algorithm' to trace C++ sorting execution.");
  const [selectedAlgo, setSelectedAlgo] = useState('bubble');

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const runSorting = async () => {
    if (isRunning) return;
    sounds.playPop();
    setIsRunning(true);
    setSolvedIndices([]);

    const arr = [...initialArray];
    setArray([...arr]);

    if (selectedAlgo === 'bubble') {
      setStepLogs("Starting Bubble Sort: Time O(N²), Space O(1)");
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          setActiveIndices([j, j + 1]);
          setStepLogs(`Comparing arr[${j}]=${arr[j]} and arr[${j+1}]=${arr[j+1]}`);
          await sleep(400);

          if (arr[j] > arr[j + 1]) {
            sounds.playClick();
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setArray([...arr]);
            setStepLogs(`Swapped: ${arr[j]} <-> ${arr[j+1]}`);
            await sleep(350);
          }
        }
        setSolvedIndices(prev => [...prev, arr.length - i - 1]);
      }
      setSolvedIndices(arr.map((_, idx) => idx));
      setStepLogs("Sorted Successfully! All elements in non-decreasing order.");
      sounds.playSuccess();
    } else {
      // Two Pointer Search
      setStepLogs("Two Pointer Search for target pair sum = 27 in sorted array");
      const sorted = [4, 7, 14, 20, 23, 38, 61];
      setArray(sorted);
      let left = 0;
      let right = sorted.length - 1;
      const target = 27;

      while (left < right) {
        setActiveIndices([left, right]);
        const currentSum = sorted[left] + sorted[right];
        setStepLogs(`Left=${sorted[left]}, Right=${sorted[right]} => Sum=${currentSum} (Target: ${target})`);
        await sleep(700);

        if (currentSum === target) {
          setStepLogs(`Target sum matched: ${sorted[left]} + ${sorted[right]} = 27! Time O(N).`);
          sounds.playSuccess();
          setSolvedIndices([left, right]);
          setIsRunning(false);
          return;
        } else if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    setActiveIndices([]);
    setIsRunning(false);
  };

  const handleReset = () => {
    sounds.playClick();
    setArray([...initialArray]);
    setActiveIndices([]);
    setSolvedIndices([]);
    setIsRunning(false);
    setStepLogs("Ready to simulate. Select an algorithm and click Run.");
  };

  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-[#07090f]">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Problem Solving &amp; Algorithmic Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Competitive Coding &amp; LeetCode
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A track record of solving 400+ algorithmic challenges with optimal asymptotic bounds and clean C++ implementation.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border bg-gradient-to-b ${item.color} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-300 bg-black/40 px-2.5 py-1 rounded-md border border-white/10">
                  {item.platform}
                </span>
                <span className="text-xs font-mono text-slate-400">{item.date}</span>
              </div>

              <div className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
                <span>{item.highlight}</span>
              </div>

              <h4 className="text-sm font-semibold text-slate-200 mb-2">
                {item.title}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Algorithm Sandbox Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Explanatory summary */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Zap className="w-4 h-4" />
                <span>Interactive Algorithm Simulator</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Algorithmic Execution Sandbox
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Watch how asymptotic algorithmic steps process data structures in real-time. 
                Illustrates pointer manipulation, element swapping, and condition checking as coded in C++.
              </p>

              {/* Selector */}
              <div className="space-y-3 mb-6">
                <label className="text-xs font-mono text-slate-400 block">Select Algorithm Simulation:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => { sounds.playClick(); setSelectedAlgo('bubble'); }}
                    className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all ${
                      selectedAlgo === 'bubble'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                        : 'bg-[#121726] text-slate-400 border-slate-700'
                    }`}
                  >
                    Bubble Sort (Swaps)
                  </button>
                  <button
                    onClick={() => { sounds.playClick(); setSelectedAlgo('twopointer'); }}
                    className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all ${
                      selectedAlgo === 'twopointer'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                        : 'bg-[#121726] text-slate-400 border-slate-700'
                    }`}
                  >
                    Two-Pointer Pair Sum
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={runSorting}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? "Running..." : "Run Algorithm"}</span>
                </button>
                <button
                  onClick={handleReset}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141b2c] hover:bg-[#1a233a] border border-slate-700 text-slate-300 text-xs font-mono transition-colors disabled:opacity-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Right: Visual Array Bars & Execution Terminal */}
            <div className="lg:col-span-7 bg-[#0b0e17] border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Code2 className="w-4 h-4" />
                  <span>Array Memory Buffer (C++ Vector)</span>
                </span>
                <span>Size: {array.length} elements</span>
              </div>

              {/* Bar Visualizer */}
              <div className="h-44 flex items-end justify-center gap-3 sm:gap-4 px-2 pb-2">
                {array.map((val, idx) => {
                  const isActive = activeIndices.includes(idx);
                  const isSolved = solvedIndices.includes(idx);
                  const heightPercent = Math.max(15, (val / 65) * 100);

                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                      <span className={`text-[10px] sm:text-xs font-mono font-bold ${
                        isActive ? 'text-amber-400' : isSolved ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        {val}
                      </span>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-t from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/40'
                            : isSolved
                            ? 'bg-gradient-to-t from-emerald-600 to-teal-400 shadow-sm shadow-emerald-500/30'
                            : 'bg-gradient-to-t from-indigo-900 to-indigo-600/70'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      ></div>
                      <span className="text-[9px] font-mono text-slate-600">[{idx}]</span>
                    </div>
                  );
                })}
              </div>

              {/* Live Execution Log Output */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="text-slate-300 truncate max-w-[85%]">
                  <span className="text-indigo-400 mr-2">&gt;</span>
                  {stepLogs}
                </div>
                <span className="text-[10px] text-slate-500">O(1) Memory</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
