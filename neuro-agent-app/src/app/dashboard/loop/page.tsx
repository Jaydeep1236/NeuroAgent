"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const LOOP_STEPS = [
  { id: "STATE_INGEST", name: "Luminance & Frame Scan", desc: "Analyzing video frame vectors for semantic cues and light level spikes.", icon: "movie" },
  { id: "STATE_MODEL", name: "Tribe Persona Mapping", desc: "Synthesizing crowd response matrices across demographic nodes.", icon: "groups" },
  { id: "STATE_SIMULATE", name: "Dopamine Response Forecast", desc: "Predicting chemical release points and foveal focus drops.", icon: "psychology" },
  { id: "STATE_ADJUST", name: "Vector Weight Tweaking", desc: "Calculating frame cuts, grade adjustments, and sound cues.", icon: "tune" },
];

export default function AgentLoopPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % LOOP_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) return;
    const interval = setInterval(() => {
      const step = LOOP_STEPS[activeStep];
      const log = document.createElement("div");
      log.className = "flex gap-4 opacity-0 transition-opacity duration-300 font-jetbrains text-mono-reasoning text-primary-fixed-dim";
      log.innerHTML = `
        <span class="text-on-surface-variant opacity-30">${new Date().toLocaleTimeString()}</span>
        <span>[LOOP_${step.id}]</span>
        <span class="text-on-surface-variant">Executing: ${step.name}... State: OPTIMAL</span>
      `;
      terminal.appendChild(log);
      setTimeout(() => log.classList.remove("opacity-0"), 50);
      if (terminal.children.length > 7) terminal.removeChild(terminal.firstChild!);
      terminal.scrollTop = terminal.scrollHeight;
    }, 2000);
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-on-surface overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />

        <main className="flex-1 lg:ml-64 p-margin-desktop relative overflow-hidden">
          {/* Luminous Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary-container/5 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-secondary-container/5 blur-[100px] rounded-full animate-pulse" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-lg">
            {/* Header */}
            <header className="flex justify-between items-end flex-wrap gap-md">
              <div>
                <p className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs uppercase">
                  Autonomous Optimization Loop
                </p>
                <h1 className="font-sora text-display-lg-mobile md:text-display-lg text-on-surface">
                  Agent Loop <span className="text-primary-fixed-dim">Pulse</span>
                </h1>
              </div>
              <div className="flex gap-md bg-surface-container-low/50 p-xs border border-primary/10 rounded-lg">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`font-jetbrains text-mono-label px-md py-xs rounded flex items-center gap-xs transition-all ${
                    isPlaying ? "bg-primary-fixed-dim text-on-primary" : "text-primary hover:bg-primary/10"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                  {isPlaying ? "ACTIVE" : "PAUSED"}
                </button>
              </div>
            </header>

            {/* Loop Circle Visualization */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-md items-center">
              <div className="lg:col-span-6 glass-panel rounded-xl p-xl flex flex-col items-center justify-center min-h-[450px] border border-primary-fixed-dim/20 relative overflow-hidden">
                <div className="absolute top-sm left-sm font-jetbrains text-[10px] text-outline">
                  STATE_MACHINE_VISUALIZER
                </div>

                {/* Ring Visualizer */}
                <div className="relative w-72 h-72 rounded-full border border-primary-fixed-dim/10 flex items-center justify-center">
                  {/* Rotating Glow Ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-fixed-dim/50 border-r-secondary-fixed-dim/30 animate-spin"
                    style={{ animationDuration: "10s" }}
                  />

                  {/* Central Node */}
                  <div className="w-32 h-32 rounded-full bg-surface-container-lowest border border-primary-fixed-dim/30 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,219,233,0.1)] relative">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim text-4xl animate-pulse"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {LOOP_STEPS[activeStep].icon}
                    </span>
                    <p className="font-jetbrains text-[10px] text-primary-fixed-dim mt-2 tracking-widest uppercase">
                      {LOOP_STEPS[activeStep].id}
                    </p>
                  </div>

                  {/* Outer Step Nodes */}
                  {LOOP_STEPS.map((step, idx) => {
                    const angle = (idx * 360) / LOOP_STEPS.length;
                    const isActive = idx === activeStep;
                    return (
                      <div
                        key={step.id}
                        className="absolute transition-all duration-500"
                        style={{
                          transform: `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`,
                        }}
                      >
                        <div
                          className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-all ${
                            isActive
                              ? "bg-primary-fixed-dim text-on-primary border-primary-fixed-dim scale-110 shadow-[0_0_15px_rgba(0,219,233,0.4)]"
                              : "bg-surface border-outline-variant/30 text-on-surface-variant hover:border-primary-fixed-dim/50"
                          }`}
                          onClick={() => {
                            setActiveStep(idx);
                            setIsPlaying(false);
                          }}
                        >
                          <span className="material-symbols-outlined text-sm">{step.icon}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Loop Details Panel */}
              <div className="lg:col-span-6 space-y-md">
                <div className="glass-panel rounded-xl p-lg border border-primary-fixed-dim/20 min-h-[220px] flex flex-col justify-between">
                  <div>
                    <span className="font-jetbrains text-mono-label text-primary-fixed-dim uppercase tracking-[0.2em] mb-xs block">
                      Active State Details
                    </span>
                    <h3 className="font-sora text-headline-md text-on-surface mb-sm">
                      {LOOP_STEPS[activeStep].name}
                    </h3>
                    <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed">
                      {LOOP_STEPS[activeStep].desc}
                    </p>
                  </div>
                  <div className="flex gap-md border-t border-primary/10 pt-md mt-md">
                    <div className="flex-1">
                      <p className="font-jetbrains text-[10px] text-outline">LATENCY</p>
                      <p className="font-sora text-body-base font-bold text-primary">0.04 ms</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-jetbrains text-[10px] text-outline">SUCCESS_RATE</p>
                      <p className="font-sora text-body-base font-bold text-secondary-fixed-dim">99.98%</p>
                    </div>
                  </div>
                </div>

                {/* State Transition Feed */}
                <div className="glass-panel rounded-xl overflow-hidden border border-primary-fixed-dim/20">
                  <div className="bg-primary/5 px-md py-xs flex justify-between items-center border-b border-primary/10">
                    <span className="font-jetbrains text-mono-label text-primary-fixed-dim uppercase tracking-widest">
                      Loop Output logs
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
                  </div>
                  <div
                    ref={terminalRef}
                    className="p-md font-jetbrains text-mono-reasoning space-y-sm max-h-[160px] overflow-y-auto scrollbar-hide bg-[#0b0b0b]"
                  >
                    <div className="text-on-surface-variant/40">Initializing transition logs...</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
