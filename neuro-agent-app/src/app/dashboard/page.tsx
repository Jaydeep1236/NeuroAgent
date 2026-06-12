"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NeuralIllustration from "@/components/NeuralIllustration";

const TERMINAL_LOGS = [
  "Re-scanning emotional saliency vectors...",
  "Contextualizing attention nodes within market segment G-4...",
  "Optimization Loop Alpha complete. No critical failures.",
  "Synthesizing new recommendation batch...",
  "Agent Loop Pulse: Stable.",
  "Waiting for user input or auto-execution command...",
];

export default function DashboardPage() {
  const feedRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let i = 0;
    const addLog = () => {
      if (!feedRef.current) return;
      const div = document.createElement("div");
      div.className = "reasoning-line text-primary-fixed-dim animate-pulse font-jetbrains text-mono-reasoning";
      div.innerText = TERMINAL_LOGS[i % TERMINAL_LOGS.length];
      feedRef.current.appendChild(div);
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
      setTimeout(() => {
        div.classList.remove("animate-pulse", "text-primary-fixed-dim");
        div.classList.add("text-on-surface-variant", "opacity-80");
      }, 3000);
      i++;
    };
    const interval = setInterval(addLog, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-on-surface overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 lg:ml-64 p-margin-desktop relative overflow-hidden">
          {/* Neural mesh background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0,219,233,0.05) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary-container/5 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-lg">
            {/* Header */}
            <header className="flex justify-between items-end flex-wrap gap-md">
              <div>
                <p className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs uppercase">
                  Optimization Session #8821
                </p>
                <h1 className="font-sora text-display-lg-mobile md:text-display-lg text-on-surface">
                  Neural Optimization{" "}
                  <span className="text-primary-fixed-dim">Engine</span>
                </h1>
              </div>
              <div className="flex gap-md">
                {[
                  { label: "ATTENTION", value: "94.2%", color: "text-primary-fixed-dim" },
                  { label: "SALIENCE", value: "82.1%", color: "text-secondary-fixed-dim" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-panel p-md rounded-xl luminous-edge text-center min-w-[120px] border border-primary-fixed-dim/20"
                  >
                    <p className="font-jetbrains text-[10px] text-primary-fixed-dim opacity-70">
                      {stat.label}
                    </p>
                    <p className={`font-sora text-headline-md ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </header>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-12 gap-md items-stretch">
              {/* Left: Input Media */}
              <section className="col-span-12 lg:col-span-4 space-y-md">
                <div className="glass-panel rounded-xl overflow-hidden relative luminous-edge aspect-video group border border-primary-fixed-dim/20">
                  <div className="absolute top-4 right-4 z-20 font-jetbrains text-[10px] bg-black/80 px-2 py-1 rounded border border-primary-fixed-dim/20 text-primary-fixed-dim">
                    LIVE_INPUT.RAW
                  </div>
                  <NeuralIllustration
                    type="cyber-portrait"
                    className="opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
                  <div className="scan-line absolute left-0 right-0 z-10" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                    <button className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary shadow-lg">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </button>
                    <div className="flex-1 mx-md h-1 bg-primary-fixed-dim/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-fixed-dim w-1/3"
                        style={{ boxShadow: "0 0 8px #00dbe9" }}
                      />
                    </div>
                    <span className="font-jetbrains text-[10px] text-primary-fixed-dim">
                      02:14 / 06:00
                    </span>
                  </div>
                </div>

                <div className="glass-panel rounded-xl p-md luminous-edge border border-primary-fixed-dim/20">
                  <h3 className="font-jetbrains text-mono-label text-primary-fixed-dim mb-md uppercase border-b border-primary-fixed-dim/10 pb-base">
                    Media Parameters
                  </h3>
                  <div className="space-y-sm">
                    {[
                      ["Resolution", "3840x2160 (4K)"],
                      ["Frame Rate", "60 fps"],
                      ["Encoding", "H.265 / NEURAL"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between font-jetbrains text-mono-reasoning text-on-surface-variant"
                      >
                        <span>{k}</span>
                        <span className="text-primary-fixed-dim">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Center: Reasoning Terminal */}
              <section className="col-span-12 lg:col-span-4 glass-panel rounded-xl luminous-edge flex flex-col min-h-[500px] border border-primary-fixed-dim/20">
                <div className="p-md border-b border-primary-fixed-dim/10 flex justify-between items-center bg-primary-fixed-dim/5">
                  <div className="flex items-center gap-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                    <span className="font-jetbrains text-mono-label uppercase tracking-widest text-primary-fixed-dim">
                      Reasoning Terminal
                    </span>
                  </div>
                  <span className="font-jetbrains text-[10px] text-primary-fixed-dim opacity-50">
                    NODE_0x7FB2
                  </span>
                </div>

                <div
                  ref={feedRef}
                  className="flex-1 p-md font-jetbrains text-mono-reasoning text-on-surface-variant space-y-md overflow-y-auto max-h-[400px] scrollbar-hide"
                >
                  {[
                    { text: "Initializing autonomous cognitive sweep...", opacity: "opacity-60" },
                    { text: "Detecting primary focal vectors in frame sequence.", opacity: "opacity-70" },
                    { text: "Scanning attention nodes: [Human Subject_A, Background Contrast_G].", opacity: "opacity-80" },
                    { text: "Evaluating emotional salience across 120 keyframes.", opacity: "opacity-90" },
                    { text: "Cross-referencing historical engagement benchmarks...", className: "text-primary-fixed-dim" },
                    { text: "Anomaly detected in first 5 seconds. Drop-off risk: High.", opacity: "opacity-90" },
                    { text: "Executing optimization loop alpha...", opacity: "opacity-80" },
                    { text: "Calculating weighted prominence factors...", className: "text-primary-fixed-dim animate-pulse" },
                  ].map((l, i) => (
                    <div
                      key={i}
                      className={`reasoning-line ${l.opacity ?? ""} ${l.className ?? ""}`}
                    >
                      {l.text}
                    </div>
                  ))}
                </div>

                <div className="p-md mt-auto bg-primary-fixed-dim/5 border-t border-primary-fixed-dim/10">
                  <div className="flex items-center gap-sm">
                    <span className="text-primary-fixed-dim font-jetbrains text-mono-label">&gt;</span>
                    <input
                      className="bg-transparent border-none focus:outline-none text-primary-fixed-dim font-jetbrains text-mono-reasoning w-full placeholder:text-primary-fixed-dim placeholder:opacity-30"
                      placeholder="Direct query agent..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
              </section>

              {/* Right: Neural Heatmap */}
              <section className="col-span-12 lg:col-span-4 space-y-md">
                <div className="glass-panel rounded-xl p-md luminous-edge h-full flex flex-col relative overflow-hidden border border-primary-fixed-dim/20">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-fixed-dim/5 rounded-full blur-3xl animate-[pulse-glow_3s_ease-in-out_infinite]" />
                  <div className="flex justify-between items-center mb-md">
                    <h3 className="font-jetbrains text-mono-label text-primary-fixed-dim uppercase">
                      Neural Activation Map
                    </h3>
                    <div className="flex gap-xs">
                      <span className="w-1 h-4 bg-primary-fixed-dim/40 rounded-full" />
                      <span className="w-1 h-6 bg-primary-fixed-dim rounded-full" />
                      <span className="w-1 h-3 bg-primary-fixed-dim/20 rounded-full" />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="relative w-full aspect-square max-w-[280px]">
                      <NeuralIllustration
                        type="neural-heatmap"
                        className="opacity-90"
                      />
                      <div className="absolute inset-0 bg-primary-fixed-dim/5 rounded-full blur-2xl" />
                      <div className="absolute top-[40%] left-[30%] w-8 h-8 bg-primary-fixed-dim/40 rounded-full blur-md animate-pulse" />
                      <div
                        className="absolute top-[20%] right-[40%] w-12 h-12 bg-secondary-fixed-dim/30 rounded-full blur-md animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute bottom-[30%] right-[30%] w-10 h-10 bg-primary-fixed-dim/50 rounded-full blur-lg animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                  </div>

                  <div className="mt-md space-y-xs">
                    <p className="font-jetbrains text-[10px] text-primary-fixed-dim opacity-70 uppercase">
                      Region Saturation
                    </p>
                    <div className="h-1 w-full bg-primary-fixed-dim/10 rounded-full overflow-hidden flex">
                      <div className="h-full bg-primary-fixed-dim w-3/5" />
                      <div className="h-full bg-secondary-fixed-dim w-1/5" />
                      <div className="h-full bg-white/20 w-1/5" />
                    </div>
                    <div className="flex justify-between font-jetbrains text-[10px] pt-1 text-primary-fixed-dim opacity-60">
                      <span>V1 CORTEX</span>
                      <span>PREFRONTAL</span>
                      <span>AMYGDALA</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Recommendations */}
            <section className="space-y-md">
              <div className="flex items-center gap-md">
                <h2 className="font-sora text-headline-md text-on-surface">
                  Neural{" "}
                  <span className="text-primary-fixed-dim">
                    Optimization Strategy
                  </span>
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary-fixed-dim/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                {[
                  {
                    id: "REC_01",
                    icon: "face_retouching_natural",
                    title: "Increase face prominence",
                    desc: "Neural tracking suggests a 15% increase in visual engagement when the subject's face occupies 40% of the upper quadrant.",
                    badge: "Salience +12%",
                  },
                  {
                    id: "REC_02",
                    icon: "speed",
                    title: "Faster first 5 seconds",
                    desc: "Cognitive fatigue detected at frame 240. Recommend increasing jump-cuts or motion vectors to maintain dopamine loop.",
                    badge: "Retention +24%",
                  },
                  {
                    id: "REC_03",
                    icon: "palette",
                    title: "Boost Chromatic Saturation",
                    desc: "V1 visual cortex activation is suboptimal. Enhance cyan/magenta levels to trigger heightened aesthetic appraisal.",
                    badge: "Engagement +8%",
                  },
                ].map((rec) => (
                  <div
                    key={rec.id}
                    className="glass-panel p-md rounded-xl luminous-edge relative group hover:border-primary-fixed-dim/50 transition-all duration-300 border border-primary-fixed-dim/10"
                  >
                    <div className="absolute top-4 right-4 text-primary-fixed-dim/50 font-jetbrains text-[10px]">
                      {rec.id}
                    </div>
                    <span className="material-symbols-outlined text-primary-fixed-dim mb-md text-3xl">
                      {rec.icon}
                    </span>
                    <h4 className="font-sora text-body-base font-bold text-primary-fixed-dim mb-sm">
                      {rec.title}
                    </h4>
                    <p className="font-inter text-body-sm text-on-surface-variant mb-md leading-relaxed">
                      {rec.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-fixed-dim/10 text-primary-fixed-dim text-[10px] px-2 py-0.5 rounded border border-primary-fixed-dim/20 font-jetbrains uppercase">
                        {rec.badge}
                      </span>
                      <button className="text-primary-fixed-dim hover:text-white font-jetbrains text-[12px] flex items-center gap-1 transition-colors">
                        Apply Edit{" "}
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-surface-container-lowest text-primary-fixed-dim/60 font-jetbrains text-mono-label py-lg border-t border-primary-fixed-dim/10 w-full px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md">
        <div className="col-span-2 md:col-span-1">
          <span className="text-primary-fixed-dim font-bold tracking-widest uppercase">
            NEUROAGENT SYSTEMS
          </span>
          <p className="mt-base opacity-40">© 2024 TRIBEV2 INTEGRATED</p>
        </div>
        {[
          ["Technical Specs", "Neuro-API"],
          ["Privacy Protocol", "Whitepaper"],
        ].map((group, i) => (
          <div key={i} className="flex flex-col gap-base">
            {group.map((l) => (
              <a key={l} className="hover:text-primary-fixed-dim transition-colors" href="#">
                {l}
              </a>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-end md:items-start">
          <span className="text-primary-fixed-dim">SYSTEM HEALTH: OPTIMAL</span>
          <span className="opacity-30">v2.1.0-STABLE</span>
        </div>
      </footer>
    </div>
  );
}
