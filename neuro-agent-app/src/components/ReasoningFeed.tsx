"use client";

import { useEffect, useRef } from "react";

const INITIAL_LOGS = [
  "> Initializing segment analysis...",
  "> Detecting high-contrast visual transitions at 0:42",
  "> Cognitive load spiking in Persona_Cluster_A",
  "> Correlating dopamine release with hook phrasing",
  "> Adjusting confidence interval to 98.4%",
  "> Predicting peak engagement at 1:15 mark",
  "> WARNING: Saturation levels exceeding optimal...",
  "> Normalizing neural patterns...",
];

const LIVE_LOGS = [
  "Re-scanning emotional saliency vectors...",
  "Contextualizing attention nodes within market segment G-4...",
  "Optimization Loop Alpha complete. No critical failures.",
  "Synthesizing new recommendation batch...",
  "Agent Loop Pulse: Stable.",
  "Waiting for user input or auto-execution command...",
];

export default function ReasoningFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const linePos = useRef(0);

  useEffect(() => {
    let logIdx = 0;
    let animId: number;

    // Animate the vertical active line
    const animateLine = () => {
      linePos.current = (linePos.current + 0.3) % 100;
      if (lineRef.current) {
        lineRef.current.style.top = `${linePos.current}%`;
      }
      animId = requestAnimationFrame(animateLine);
    };
    animateLine();

    // Add live logs at intervals
    const addLog = () => {
      if (!containerRef.current) return;
      const log = document.createElement("p");
      log.textContent = `> ${LIVE_LOGS[logIdx % LIVE_LOGS.length]}`;
      log.className = "text-primary-fixed-dim";
      containerRef.current.appendChild(log);
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      setTimeout(() => {
        if (log) log.className = "text-on-surface-variant/70";
      }, 3000);
      logIdx++;
    };

    const interval = setInterval(addLog, 2500 + Math.random() * 2000);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="lg:col-span-4 bg-surface-container-high/30 p-lg rounded-xl border border-outline-variant/30 flex flex-col">
      <div className="font-jetbrains text-mono-label text-on-surface-variant mb-md border-b border-outline-variant/30 pb-base">
        REASONING_ENGINE_FEED
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-[1px] h-full bg-primary-fixed-dim/20">
          <div
            ref={lineRef}
            className="w-[2px] h-12 bg-primary-fixed-dim absolute top-0"
            style={{ boxShadow: "0 0 10px #00dbe9" }}
          />
        </div>
        <div
          ref={containerRef}
          className="pl-md font-jetbrains text-mono-reasoning text-on-surface-variant/80 space-y-md max-h-[300px] overflow-y-auto scrollbar-hide"
        >
          {INITIAL_LOGS.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
