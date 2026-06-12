"use client";

import { useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import NeuralIllustration from "@/components/NeuralIllustration";

interface GaugeProps {
  value: number;
  color: string;
  label: string;
  sublabel: string;
  percentClass: string;
  titleClass: string;
  metricId: string;
}

function RadialGauge({ value, color, label, sublabel, percentClass, titleClass, metricId }: GaugeProps) {
  const gaugeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gaugeRef.current;
    if (!el) return;
    el.style.setProperty("--value", "0");
    el.style.setProperty("--color", color);
    const timer = setTimeout(() => {
      el.style.transition = "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.setProperty("--value", String(value));
    }, 300);
    return () => clearTimeout(timer);
  }, [value, color]);

  return (
    <div className="glass p-md rounded-xl relative overflow-hidden flex flex-col items-center justify-center glow-cyan group">
      <div className="absolute top-sm right-sm font-jetbrains text-mono-label text-outline">
        {metricId}
      </div>
      <div className="scanning-line-v opacity-0 group-hover:opacity-100 transition-opacity" />
      <div ref={gaugeRef} className="radial-progress my-md">
        <span className={`font-display text-display-lg-mobile font-bold leading-none ${percentClass}`}>{value}%</span>
      </div>
      <h3 className={`font-sora text-headline-md mt-sm ${titleClass}`}>{label}</h3>
      <p className="font-inter text-body-sm text-on-surface-variant text-center max-w-[200px]">
        {sublabel}
      </p>
    </div>
  );
}

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-[#131313] text-on-surface overflow-x-hidden">
      <div className="flex">
        <Sidebar />

        <main className="lg:ml-64 min-h-screen flex-1">
          {/* Top Nav */}
          <header className="bg-[#131313]/80 backdrop-blur-xl sticky top-0 z-40 border-b border-primary/20 px-margin-mobile md:px-margin-desktop py-base flex justify-between items-center w-full">
            <div className="flex flex-col">
              <h1 className="font-sora text-display-lg-mobile md:text-display-lg font-bold tracking-tighter text-primary-fixed-dim">
                Analysis Report
              </h1>
              <p className="font-jetbrains text-mono-label text-outline uppercase tracking-[0.2em]">
                Session ID: 4492-X-DELTA
              </p>
            </div>
            <div className="flex items-center gap-md">
              <div className="hidden md:flex gap-md">
                {[
                  { href: "/dashboard", label: "Dashboard", active: false },
                  { href: "/analysis", label: "Analysis", active: true },
                  { href: "/workflow", label: "Workflow", active: false },
                ].map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`font-jetbrains text-mono-label transition-colors ${
                      n.active
                        ? "text-primary-fixed-dim font-bold border-b-2 border-primary-fixed-dim pb-1"
                        : "text-on-surface-variant hover:text-primary-fixed-dim"
                    }`}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
              <button className="bg-primary-container text-on-primary-container px-sm py-xs rounded-full flex items-center gap-xs hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all font-jetbrains text-mono-label">
                <span className="material-symbols-outlined text-[18px]">sensors</span>
                Launch Agent
              </button>
            </div>
          </header>

          <div className="p-margin-mobile md:p-margin-desktop space-y-xl">
            {/* Gauges */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <RadialGauge
                value={82}
                color="#00dbe9"
                label="Predicted Attention"
                sublabel="High-probability cognitive lock-in identified in visual sector 4."
                percentClass="text-primary-fixed-dim"
                titleClass="text-primary"
                metricId="METRIC_01"
              />
              <RadialGauge
                value={76}
                color="#dcb8ff"
                label="Visual Engagement"
                sublabel="Sustained neural resonance detected across primary display nodes."
                percentClass="text-secondary-fixed-dim"
                titleClass="text-secondary"
                metricId="METRIC_02"
              />

              {/* Emotional Salience */}
              <div className="glass p-md rounded-xl relative">
                <div className="absolute top-sm right-sm font-jetbrains text-mono-label text-outline">
                  SAL_BREAKDOWN
                </div>
                <h3 className="font-sora text-headline-md text-primary mb-md">
                  Emotional Salience
                </h3>
                <div className="space-y-md">
                  {[
                    { label: "DOPAMINE TRIGGER", pct: 94, color: "bg-primary-fixed-dim", textColor: "text-primary-fixed-dim", glow: "rgba(0,219,233,0.5)" },
                    { label: "COGNITIVE LOAD", pct: 42, color: "bg-secondary-fixed-dim", textColor: "text-secondary-fixed-dim", glow: "rgba(220,184,255,0.5)" },
                    { label: "RETENTION INDEX", pct: 88, color: "bg-tertiary-fixed-dim", textColor: "text-tertiary-fixed-dim", glow: "rgba(234,195,36,0.5)" },
                  ].map((bar) => (
                    <div key={bar.label} className="space-y-base">
                      <div className="flex justify-between font-jetbrains text-mono-label">
                        <span>{bar.label}</span>
                        <span className={bar.textColor}>{bar.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className={`${bar.color} h-full rounded-full`}
                          style={{
                            width: `${bar.pct}%`,
                            boxShadow: `0 0 8px ${bar.glow}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ROI + Strategic Summary */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="glass rounded-xl overflow-hidden flex flex-col h-full">
                <div className="p-md border-b border-primary/10 flex justify-between items-center">
                  <h3 className="font-sora text-headline-md text-primary">
                    ROI Response Predictions
                  </h3>
                  <span className="material-symbols-outlined text-outline">trending_up</span>
                </div>
                <div className="flex-1 min-h-[300px] relative">
                  <NeuralIllustration
                    type="roi-graph"
                    className="opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent" />
                  <div className="absolute bottom-md left-md right-md flex justify-around">
                    <div className="text-center">
                      <p className="font-jetbrains text-mono-label text-outline">Q1 EST.</p>
                      <p className="font-sora text-headline-md text-primary-fixed-dim">+$2.4M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-jetbrains text-mono-label text-outline">CONV. LIFT</p>
                      <p className="font-sora text-headline-md text-secondary-fixed-dim">+14.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-md rounded-xl flex flex-col">
                <div className="flex items-center gap-sm mb-md">
                  <span className="px-xs py-1 bg-primary-container/20 border border-primary/30 rounded font-jetbrains text-[10px] text-primary-fixed-dim">
                    STRATEGIC_AI
                  </span>
                  <h3 className="font-sora text-headline-md">Optimization Core</h3>
                </div>
                <div className="space-y-sm flex-1">
                  <div className="p-sm bg-surface-container-high/40 border-l-2 border-primary-fixed-dim rounded-r-lg">
                    <p className="font-inter text-body-sm italic">
                      &ldquo;The agent has identified a critical bottleneck in visual processing at the 3.4s mark. Recommend shifting the primary CTA to the high-salience &apos;focal point alpha&apos; for maximum neural impact.&rdquo;
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-sm">
                    {[
                      ["ADAPTATION RATE", "Fast-Track (0.4ms)"],
                      ["CONFIDENCE", "99.82%"],
                    ].map(([k, v]) => (
                      <div key={k} className="p-sm border border-outline-variant/30 rounded-lg">
                        <p className="font-jetbrains text-mono-label text-outline mb-xs">{k}</p>
                        <p className="font-inter text-body-base font-bold">{v}</p>
                      </div>
                    ))}
                  </div>
                  <p className="font-inter text-body-sm text-on-surface-variant">
                    Predicted market penetration increases by{" "}
                    <span className="text-primary-fixed-dim font-bold">12.5%</span> if
                    semantic architecture is restructured following the &apos;Tribe-V2&apos;
                    cognitive protocol.
                  </p>
                </div>
              </div>
            </section>

            {/* Decision Log */}
            <section className="glass rounded-xl border-primary/20 overflow-hidden">
              <div className="px-md py-sm bg-surface-container-highest/30 flex justify-between items-center border-b border-outline-variant/30">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim animate-pulse">terminal</span>
                  <h3 className="font-jetbrains text-mono-label uppercase tracking-widest text-on-surface">
                    Agent Decision Log
                  </h3>
                </div>
                <div className="flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-error animate-ping" />
                  <span className="font-jetbrains text-[10px] text-on-surface-variant">REAL-TIME MONITORING</span>
                </div>
              </div>
              <div className="p-md font-jetbrains text-mono-reasoning max-h-[400px] overflow-y-auto space-y-md relative">
                <div className="absolute left-md top-0 bottom-0 w-[1px] bg-primary/20" />
                {[
                  { dot: "bg-primary-fixed-dim", shadow: "#00dbe9", ts: "[2024-11-20T14:22:01.034Z]", label: "SCANNING INPUT_VECTOR_DELTA", color: "text-primary-fixed-dim", body: "Cognitive mesh initialized. Analyzing semantic resonance across multi-modal data streams. Eye-tracking coordinates mapping to attention-density-map v4.2.0." },
                  { dot: "bg-secondary-fixed-dim", shadow: "#dcb8ff", ts: "[2024-11-20T14:22:01.089Z]", label: "HEURISTIC OVERRIDE TRIGGERED", color: "text-secondary-fixed-dim", body: "Detected anomaly in 'Visual Engagement' sector. Probability of user fatigue exceeds threshold (0.42). Switching to 'High-Contrast-Mode' for stimulus recovery. Adjusting luminosity to +15%." },
                  { dot: "bg-tertiary-fixed-dim", shadow: "#eac324", ts: "[2024-11-20T14:22:02.001Z]", label: "OPTIMIZATION_PROTOCOL_SYNC", color: "text-tertiary-fixed-dim", body: "Recalculating ROI Response. Cross-referencing current engagement with historical 'Tribe' datasets. Result: Strategic move toward 'Neuro-Prime' positioning will yield 3.4x higher salience." },
                  { dot: "bg-primary-fixed-dim", shadow: "#00dbe9", ts: "[2024-11-20T14:22:02.455Z]", label: "AGENT_IDLE_WAITING_FOR_INTERACTION...", color: "text-primary-fixed-dim", body: null, pulse: true },
                ].map((entry, i) => (
                  <div key={i} className={`pl-lg relative ${entry.pulse ? "animate-pulse" : ""}`}>
                    <div
                      className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${entry.dot}`}
                      style={{ boxShadow: `0 0 8px ${entry.shadow}` }}
                    />
                    <p className="text-outline text-[10px] mb-1">{entry.ts}</p>
                    <p className={`${entry.color} font-bold mb-1`}>{entry.label}</p>
                    {entry.body && (
                      <p className="text-on-surface-variant leading-relaxed">{entry.body}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="w-full px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md mt-xl py-lg bg-surface-container-lowest border-t border-outline-variant/30 font-jetbrains text-mono-label text-primary-fixed-dim">
              <div className="col-span-2">
                <span className="font-sora text-on-surface font-bold tracking-tighter text-mono-label uppercase">
                  NEUROAGENT SYSTEMS
                </span>
                <p className="font-jetbrains text-[10px] text-on-surface-variant mt-xs">
                  © 2024 NEUROAGENT SYSTEMS | TRIBEV2 INTEGRATED
                </p>
                <div className="mt-md flex gap-md">
                  <a
                    className="font-jetbrains text-mono-label text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                    href="#"
                  >
                    Privacy Protocol
                  </a>
                  <a
                    className="font-jetbrains text-mono-label text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                    href="#"
                  >
                    Neuro-API
                  </a>
                </div>
              </div>
              <div>
                <p className="font-jetbrains text-mono-label text-primary mb-sm">Technical Specs</p>
                <ul className="space-y-xs font-jetbrains text-[10px] text-on-surface-variant">
                  <li>
                    <span className="hover:text-primary-fixed-dim underline decoration-primary/30 cursor-pointer">
                      Latency: 0.2ms
                    </span>
                  </li>
                  <li>
                    <span className="hover:text-primary-fixed-dim underline decoration-primary/30 cursor-pointer">
                      Neural Engine v4
                    </span>
                  </li>
                  <li>
                    <span className="hover:text-primary-fixed-dim underline decoration-primary/30 cursor-pointer">
                      Quantized Core
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-jetbrains text-mono-label text-primary mb-sm">Resources</p>
                <ul className="space-y-xs font-jetbrains text-[10px] text-on-surface-variant">
                  <li>
                    <a
                      className="hover:text-primary-fixed-dim underline decoration-primary/30"
                      href="#"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary-fixed-dim underline decoration-primary/30"
                      href="#"
                    >
                      SDK Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary-fixed-dim underline decoration-primary/30"
                      href="#"
                    >
                      Security Layers
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* FAB */}
      <button className="fixed bottom-md right-md w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95 transition-all z-50 lg:mr-md">
        <span
          className="material-symbols-outlined text-[28px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          psychology
        </span>
      </button>
    </div>
  );
}
