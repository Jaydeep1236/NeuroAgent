"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import NeuralIllustration from "@/components/NeuralIllustration";

const TERMINAL_ITEMS = [
  { time: "08:42:11", tag: "[AGENT_LOG]", tagColor: "text-secondary-fixed-dim", text: "Analyzing micro-expression triggers at 00:04:12...", cursor: true },
  { time: "08:42:12", tag: "[NEURAL_PROCESS]", tagColor: "text-primary-fixed-dim", text: "Detected high-intensity contrast peak. Probability of visual fatigue: 0.12%" },
  { time: "08:42:13", tag: "[TRIBE_V2]", tagColor: "text-secondary-fixed-dim", text: "Sentiment convergence detected in 'Tech-Enthusiast' archetype." },
  { time: "08:42:14", tag: "[DECISION]", tagColor: "text-primary-fixed-dim", text: "Adjust color saturation at segment 3 for 12% higher recall.", highlight: true },
];

export default function WorkflowPage() {
  const progressRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (progressRef.current) {
        progressRef.current.style.height = `${scrolled}%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) return;
    const interval = setInterval(() => {
      const log = document.createElement("div");
      log.className =
        "flex gap-4 opacity-0 transition-opacity duration-500 font-jetbrains text-mono-reasoning";
      log.innerHTML = `
        <span class="text-on-surface-variant opacity-30">${new Date().toLocaleTimeString()}</span>
        <span class="text-primary-fixed-dim">[NEURAL_STREAM]</span>
        <span class="text-on-surface-variant">Optimizing weights... Frame stability: 99.82%</span>
      `;
      terminal.appendChild(log);
      setTimeout(() => log.classList.remove("opacity-0"), 100);
      if (terminal.children.length > 8) terminal.removeChild(terminal.firstChild!);
      terminal.scrollTop = terminal.scrollHeight;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen text-on-surface overflow-x-hidden"
      style={{ backgroundColor: "#131313" }}
    >
      {/* Neural Mesh */}
      <div className="fixed inset-0 neural-mesh pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        {/* Hero Header */}
        <header className="mb-xl text-center md:text-left">
          <div className="inline-flex items-center gap-xs px-sm py-1 rounded-full border border-primary/20 bg-primary/5 mb-md">
            <span
              className="material-symbols-outlined text-sm text-primary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <span className="font-jetbrains text-mono-label text-primary-fixed-dim uppercase">
              Cognitive Pipeline v2.1
            </span>
          </div>
          <h1 className="font-sora text-display-lg-mobile md:text-display-lg text-primary mb-sm max-w-3xl">
            From Pixels to{" "}
            <span className="text-primary-fixed-dim">Neural Resonance.</span>
          </h1>
          <p className="font-inter text-body-base text-on-surface-variant max-w-2xl text-lg">
            Our autonomous workflow dissects visual stimuli to predict
            subconscious human behavior with 94.8% biometric accuracy.
          </p>
        </header>

        {/* Workflow Visualizer */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative">
          {/* Timeline Column */}
          <div className="lg:col-span-1 hidden lg:flex flex-col items-center py-lg relative">
            <div className="w-1 h-full bg-surface-container-highest rounded-full relative">
              <div
                ref={progressRef}
                className="absolute top-0 left-0 w-full bg-primary-fixed-dim rounded-full"
                style={{ height: "0%", boxShadow: "0 0 15px 2px rgba(0,219,233,0.15)" }}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between py-lg">
              {[
                { icon: "movie", active: true },
                { icon: "hub" },
                { icon: "analytics" },
                { icon: "terminal" },
                { icon: "check_circle" },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center -ml-5 z-20 transition-colors ${
                    step.active
                      ? "border-primary-fixed-dim"
                      : "border-outline"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${step.active ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}
                  >
                    {step.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Content */}
          <div className="lg:col-span-11 space-y-xl">
            {/* Step 1 */}
            <div className="group">
              <div className="glass-card p-md md:p-lg flex flex-col md:flex-row gap-lg items-center overflow-hidden relative">
                <div className="scanning-line-v" />
                <div className="w-full md:w-1/3 aspect-video bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant relative">
                  <NeuralIllustration
                    type="cinema-studio"
                    className="opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl opacity-80">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs block">
                    PHASE 01 // INPUT
                  </span>
                  <h3 className="font-sora text-headline-md text-primary mb-sm">
                    Visual Stimulus Ingestion
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant mb-md">
                    Raw video data is ingested into our cognitive engine. We
                    analyze frame-by-frame luminance, chromatic shifts, and
                    motion vectors to map potential foveal focus areas before a
                    human ever sees the screen.
                  </p>
                  <div className="flex gap-xs">
                    {["4K RAW", "MOTION VECTORS"].map((tag) => (
                      <span
                        key={tag}
                        className="px-xs py-1 rounded-sm bg-secondary-container/20 border border-secondary/20 font-jetbrains text-[10px] text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="glass-card p-md md:p-lg flex flex-col md:flex-row-reverse gap-lg items-center overflow-hidden">
                <div className="w-full md:w-1/3 h-64 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center justify-center p-md">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-primary/40 animate-ping opacity-20" />
                      <div className="w-32 h-32 rounded-full border border-primary/40 animate-pulse opacity-10" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-full opacity-40">
                      <div className="bg-primary/20 h-full rounded-sm" />
                      <div className="bg-primary/40 h-2/3 mt-auto rounded-sm" />
                      <div className="bg-primary/60 h-3/4 mt-auto rounded-sm" />
                      <div className="bg-primary/30 h-1/2 mt-auto rounded-sm" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">hub</span>
                      <span className="font-jetbrains text-[10px] text-primary mt-2">TRIBE SYNC</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs block">
                    PHASE 02 // AGGREGATION
                  </span>
                  <h3 className="font-sora text-headline-md text-primary mb-sm">
                    TribeV2 Population Mapping
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant mb-md">
                    We overlay your content against our Tribe v2 database—a
                    synthetic population representing 18 distinct neural
                    archetypes. This simulates how different demographics&apos;
                    dopamine and cortisol levels fluctuate during playback.
                  </p>
                  <ul className="space-y-2">
                    {["Synthetic Eye-Tracking (SET)", "Archetype Resonance Scores"].map((item) => (
                      <li key={item} className="flex items-center gap-2 font-inter text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="glass-card p-md md:p-lg flex flex-col md:flex-row gap-lg items-center">
                <div className="w-full md:w-1/3">
                  <div className="p-md rounded-lg bg-surface-container-high border border-primary/20">
                    <div className="flex justify-between items-end mb-sm">
                      <span className="font-jetbrains text-mono-label text-on-surface-variant">
                        RETENTION INDEX
                      </span>
                      <span className="text-primary-fixed-dim font-bold text-2xl">88.4%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-fixed-dim rounded-full"
                        style={{ width: "88%", boxShadow: "0 0 15px 2px rgba(0,219,233,0.15)" }}
                      />
                    </div>
                    <div className="mt-md space-y-2">
                      {[
                        ["Arousal", "HIGH", "text-primary"],
                        ["Cognitive Load", "OPTIMIZED", "text-tertiary-fixed-dim"],
                      ].map(([k, v, c]) => (
                        <div key={k} className="flex justify-between text-[11px] font-jetbrains">
                          <span className="text-on-surface-variant">{k}</span>
                          <span className={c}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs block">
                    PHASE 03 // EVALUATION
                  </span>
                  <h3 className="font-sora text-headline-md text-primary mb-sm">
                    Neuro-ROI Quantitative Scores
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant">
                    The agent translates subconscious reactions into business
                    metrics. We calculate &apos;Attention ROI&apos;—the precise value of
                    each second of viewer engagement based on predicted memory
                    encoding and brand recall.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Terminal */}
            <div>
              <div className="bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden flex flex-col">
                <div className="bg-surface-container-high px-md py-xs flex justify-between items-center border-b border-primary/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/40" />
                    <div className="w-3 h-3 rounded-full bg-tertiary-container/40" />
                    <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/40" />
                  </div>
                  <span className="font-jetbrains text-[10px] text-on-surface-variant uppercase tracking-widest">
                    Agent Reasoning Terminal
                  </span>
                </div>
                <div
                  ref={terminalRef}
                  className="p-md font-jetbrains text-mono-reasoning text-primary-fixed-dim h-48 overflow-y-auto space-y-2 scrollbar-hide"
                >
                  {TERMINAL_ITEMS.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-on-surface-variant opacity-30">{item.time}</span>
                      <span className={item.tagColor}>{item.tag}</span>
                      {item.highlight ? (
                        <span className="bg-primary/20 px-1">{item.text}</span>
                      ) : (
                        <span className={item.cursor ? "writing-effect" : ""}>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Decision */}
            <div>
              <div className="glass-card p-md md:p-lg border-2 border-primary-fixed-dim/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-sm">
                  <span
                    className="material-symbols-outlined text-primary-fixed-dim text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div className="max-w-2xl">
                  <span className="font-jetbrains text-mono-label text-primary-fixed-dim mb-xs block">
                    PHASE 05 // OUTPUT
                  </span>
                  <h3 className="font-sora text-headline-md text-primary mb-sm">
                    Autonomous Optimization Decision
                  </h3>
                  <p className="font-inter text-body-base text-on-surface mb-md">
                    Final report generation including an executive &apos;Deploy or
                    Iterate&apos; recommendation. The agent provides actionable
                    creative directions to maximize the neural impact of your
                    final asset.
                  </p>
                  <div className="flex flex-wrap gap-md">
                    <button className="bg-primary text-on-primary font-bold px-lg py-sm rounded-lg hover:bg-primary-fixed-dim transition-all">
                      Download Report
                    </button>
                    <button className="border border-outline text-on-surface px-lg py-sm rounded-lg hover:bg-surface-variant/20 transition-all">
                      Sync to Creative Suite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="mt-xl grid grid-cols-1 md:grid-cols-4 gap-md">
          <div className="md:col-span-2 glass-card p-md flex flex-col justify-between h-64">
            <div>
              <span className="font-jetbrains text-mono-label text-on-surface-variant mb-base block">
                SENSORY DATA
              </span>
              <h4 className="font-sora text-headline-md text-primary">Biometric Simulation</h4>
            </div>
            <p className="font-inter text-body-sm text-on-surface-variant">
              We simulate pupillary dilation, galvanic skin response, and
              fMRI-grade blood-oxygenation maps using deep neural networks
              trained on 10,000+ clinical studies.
            </p>
          </div>
          <div className="glass-card p-md h-64 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-md">bolt</span>
            <span className="text-2xl font-bold text-primary">0.04ms</span>
            <span className="font-jetbrains text-mono-label text-on-surface-variant">LATENCY PER FRAME</span>
          </div>
          <div className="glass-card p-md h-64 flex flex-col items-center justify-center text-center border-primary/40">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-5xl mb-md">security</span>
            <span className="text-2xl font-bold text-primary">AES-512</span>
            <span className="font-jetbrains text-mono-label text-on-surface-variant">NEURAL PRIVACY</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md mt-xl bg-surface-container-lowest py-lg border-t border-outline-variant/30 font-jetbrains text-mono-label text-primary-fixed-dim">
        <div className="col-span-2 md:col-span-1">
          <div className="text-on-surface font-bold mb-md uppercase">NeuroAgent Systems</div>
          <p className="text-on-surface-variant opacity-70 mb-md max-w-xs">
            Building the bridge between human cognition and autonomous media optimization.
          </p>
        </div>
        <div>
          <div className="font-bold text-on-surface mb-sm">Resources</div>
          <ul className="space-y-xs">
            {["Technical Specs", "Neuro-API"].map((l) => (
              <li key={l}>
                <a className="text-on-surface-variant hover:text-primary-fixed-dim underline transition-colors opacity-80" href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold text-on-surface mb-sm">Legal</div>
          <ul className="space-y-xs">
            {["Privacy Protocol", "Whitepaper"].map((l) => (
              <li key={l}>
                <a className="text-on-surface-variant hover:text-primary-fixed-dim underline transition-colors opacity-80" href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 text-right flex flex-col justify-end">
          <span className="opacity-80">© 2024 NEUROAGENT SYSTEMS | TRIBEV2 INTEGRATED</span>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#131313]/80 backdrop-blur-lg border-t border-primary/10 px-margin-mobile py-xs flex justify-around items-center z-50">
        {[
          { icon: "dashboard", label: "Home" },
          { icon: "account_tree", label: "Flow", active: true },
          { icon: "analytics", label: "Stats" },
          { icon: "settings", label: "Config" },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center ${item.active ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}
          >
            <span
              className="material-symbols-outlined"
              style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-jetbrains">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
