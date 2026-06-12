"use client";

import React from "react";

interface IllustrationProps {
  type:
    | "video-processing"
    | "tribe-synthesis"
    | "brain-activation"
    | "content-optimizer"
    | "cyber-portrait"
    | "neural-heatmap"
    | "roi-graph"
    | "cinema-studio";
  className?: string;
}

export default function NeuralIllustration({ type, className = "" }: IllustrationProps) {
  switch (type) {
    case "video-processing":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#1c1b1b] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="grid-vp" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 219, 233, 0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="cyan-grad-vp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(0,219,233,0)" />
              <stop offset="50%" stopColor="rgba(0,219,233,0.8)" />
              <stop offset="100%" stopColor="rgba(0,219,233,0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="#131313" />
          <rect width="100%" height="100%" fill="url(#grid-vp)" />

          {/* Crosshairs & Target Brackets */}
          <path d="M 20 40 L 20 20 L 40 20" stroke="#00dbe9" strokeWidth="2" strokeLinecap="round" />
          <path d="M 380 40 L 380 20 L 360 20" stroke="#00dbe9" strokeWidth="2" strokeLinecap="round" />
          <path d="M 20 185 L 20 205 L 40 205" stroke="#00dbe9" strokeWidth="2" strokeLinecap="round" />
          <path d="M 380 185 L 380 205 L 360 205" stroke="#00dbe9" strokeWidth="2" strokeLinecap="round" />

          {/* Central Target Circle */}
          <circle cx="200" cy="112.5" r="40" stroke="rgba(0,219,233,0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="112.5" r="5" fill="#00dbe9" />

          {/* Scanning Bar (Animated) */}
          <rect x="0" y="0" width="400" height="4" fill="url(#cyan-grad-vp)" className="animate-[scan-vertical_4s_linear_infinite]" />

          {/* UI Text */}
          <text x="30" y="45" fill="#00dbe9" fontFamily="monospace" fontSize="10" letterSpacing="1">
            CAM_01 // REC_ACTIVE
          </text>
          <text x="30" y="190" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="9">
            FPS: 60.0 // RES: 4K_RAW
          </text>
          <text x="270" y="45" fill="#dcb8ff" fontFamily="monospace" fontSize="9">
            COGNITIVE_SEGMENT: A
          </text>
        </svg>
      );

    case "tribe-synthesis":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#131313] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="glow-ts" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(220, 184, 255, 0.15)" />
              <stop offset="100%" stopColor="rgba(220, 184, 255, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#131313" />

          {/* Global Ambient Glow */}
          <circle cx="200" cy="112.5" r="120" fill="url(#glow-ts)" />

          {/* Interconnected Persona Nodes */}
          <g stroke="rgba(0, 219, 233, 0.3)" strokeWidth="1" strokeDasharray="3 3">
            <line x1="80" y1="60" x2="200" y2="40" />
            <line x1="200" y1="40" x2="320" y2="70" />
            <line x1="320" y1="70" x2="290" y2="160" />
            <line x1="290" y1="160" x2="180" y2="180" />
            <line x1="180" y1="180" x2="90" y2="140" />
            <line x1="90" y1="140" x2="80" y2="60" />

            <line x1="200" y1="40" x2="200" y2="112" />
            <line x1="90" y1="140" x2="200" y2="112" />
            <line x1="320" y1="70" x2="200" y2="112" />
            <line x1="290" y1="160" x2="200" y2="112" />
          </g>

          {/* Persona Circles */}
          <circle cx="80" cy="60" r="10" fill="#1c1b1b" stroke="#00dbe9" strokeWidth="2" />
          <circle cx="200" cy="40" r="14" fill="#1c1b1b" stroke="#dcb8ff" strokeWidth="2" />
          <circle cx="320" cy="70" r="12" fill="#1c1b1b" stroke="#00dbe9" strokeWidth="2" />
          <circle cx="290" cy="160" r="16" fill="#1c1b1b" stroke="#fed639" strokeWidth="2" />
          <circle cx="180" cy="180" r="10" fill="#1c1b1b" stroke="#00dbe9" strokeWidth="2" />
          <circle cx="90" cy="140" r="15" fill="#1c1b1b" stroke="#dcb8ff" strokeWidth="2" />
          <circle cx="200" cy="112.5" r="22" fill="#0e0e0e" stroke="#00dbe9" strokeWidth="3" className="animate-pulse" />

          {/* Text labels inside major nodes */}
          <text x="194" y="116" fill="#00dbe9" fontFamily="monospace" fontSize="10" fontWeight="bold">
            G-4
          </text>
          <text x="282" y="164" fill="#fed639" fontFamily="monospace" fontSize="9">
            T2
          </text>
        </svg>
      );

    case "brain-activation":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#131313] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="brain-glow" cx="50%" cy="40%" r="40%">
              <stop offset="0%" stopColor="rgba(0, 219, 233, 0.2)" />
              <stop offset="60%" stopColor="rgba(220, 184, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#131313" />

          {/* Brain Contour Glow */}
          <circle cx="200" cy="100" r="90" fill="url(#brain-glow)" />

          {/* Styled Side-View Brain Path */}
          <path
            d="M 120,110 
               C 110,80  130,50  170,45 
               C 185,45  195,50  210,40
               C 235,25  280,45  290,80
               C 295,95  285,110 280,120
               C 270,140 250,150 230,150
               C 220,150 215,160 210,170
               C 205,180 195,190 185,190
               C 175,190 170,180 170,170
               C 170,155 160,150 150,150
               C 130,150 120,130 120,110 Z"
            stroke="rgba(0,219,233,0.3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="0"
          />

          {/* Active Synaptic Highlight Paths */}
          <path
            d="M 140,90 C 160,70 190,80 210,60"
            stroke="#00dbe9"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M 230,70 C 250,80 260,110 275,115"
            stroke="#dcb8ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Micro Nodes */}
          <circle cx="140" cy="90" r="4" fill="#00dbe9" />
          <circle cx="210" cy="60" r="5" fill="#00dbe9" className="animate-ping" />
          <circle cx="230" cy="70" r="4" fill="#dcb8ff" />
          <circle cx="275" cy="115" r="5" fill="#dcb8ff" />

          {/* Signal Indicator Text */}
          <text x="30" y="45" fill="#00dbe9" fontFamily="monospace" fontSize="9">
            SIGNAL: DOPAMINE_BURST
          </text>
          <text x="30" y="195" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8">
            V1 Visual Saliency Level: Optimum
          </text>
        </svg>
      );

    case "content-optimizer":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#1c1b1b] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="#131313" />

          {/* Timeline Grid */}
          <line x1="20" y1="40" x2="380" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

          {/* Video Frames Timeline track */}
          <rect x="30" y="55" width="80" height="40" fill="rgba(0, 219, 233, 0.05)" stroke="rgba(0, 219, 233, 0.2)" strokeWidth="1" />
          <rect x="120" y="55" width="80" height="40" fill="rgba(220, 184, 255, 0.05)" stroke="rgba(220, 184, 255, 0.2)" strokeWidth="1" />
          <rect x="210" y="55" width="80" height="40" fill="rgba(0, 219, 233, 0.05)" stroke="#00dbe9" strokeWidth="1.5" />
          <rect x="300" y="55" width="70" height="40" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Waveforms (Audio Track) */}
          <path
            d="M 30,130 L 40,110 L 50,140 L 60,120 L 70,135 L 80,110 L 90,130 L 100,125 L 110,130
               L 120,145 L 130,110 L 140,105 L 150,150 L 160,110 L 170,120 L 180,135 L 190,120
               L 200,125 L 210,105 L 220,95 L 230,155 L 240,90 L 250,105 L 260,140 L 270,110
               L 280,130 L 290,125 L 300,130 L 310,125 L 320,130 L 330,135 L 340,115 L 350,130"
            stroke="rgba(0,219,233,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* High Salience Marker Flag */}
          <line x1="250" y1="50" x2="250" y2="160" stroke="#00dbe9" strokeWidth="2" />
          <polygon points="250,50 290,60 250,70" fill="#00dbe9" />
          <text x="256" y="62" fill="#0e0e0e" fontFamily="monospace" fontSize="8" fontWeight="bold">
            EDIT
          </text>

          {/* UI overlays */}
          <text x="30" y="25" fill="#00dbe9" fontFamily="monospace" fontSize="10">
            AUTO_OPTIMIZE_LOOP: PASE_04
          </text>
          <text x="30" y="205" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="9">
            Action: Inject motion vectors at [03.4s] (+24% Retention)
          </text>
        </svg>
      );

    case "cyber-portrait":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#0e0e0e] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diagnostic Grid overlay */}
          <defs>
            <pattern id="grid-cp" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(0, 219, 233, 0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="#0e0e0e" />
          <rect width="100%" height="100%" fill="url(#grid-cp)" />

          {/* Futuristic Face Silhouette Scan */}
          <g transform="translate(140, 25)">
            {/* Holographic face contour */}
            <path
              d="M 60,20 C 40,20 20,40 20,80 C 20,120 40,150 60,160 C 80,165 90,165 95,160 C 100,155 100,145 105,145 C 110,145 115,155 120,150 C 125,140 120,110 120,80 C 120,40 100,20 60,20 Z"
              stroke="rgba(0, 219, 233, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* High Salience Focus Brackets on Eyes */}
            <rect x="40" y="60" width="15" height="10" stroke="#00dbe9" strokeWidth="1" />
            <rect x="75" y="60" width="15" height="10" stroke="#00dbe9" strokeWidth="1" />
            {/* Eye Gaze Direction lines */}
            <line x1="47" y1="65" x2="180" y2="40" stroke="rgba(220,184,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="82" y1="65" x2="180" y2="40" stroke="rgba(220,184,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
            {/* Gaze Target */}
            <circle cx="180" cy="40" r="3" fill="#dcb8ff" />
          </g>

          {/* Diagnostic Terminal Details */}
          <text x="20" y="30" fill="#00dbe9" fontFamily="monospace" fontSize="9" letterSpacing="1">
            TELEMETRY: TARGET_LOCKED
          </text>
          <text x="20" y="200" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8">
            FOCUS_NODE: LEFT_EYE_OCTAVE // CONVERGENCE: 98.7%
          </text>
          <rect x="280" y="20" width="100" height="40" fill="rgba(0,219,233,0.05)" stroke="rgba(0,219,233,0.2)" />
          <text x="288" y="35" fill="#00dbe9" fontFamily="monospace" fontSize="8">
            ATTENTION: STABLE
          </text>
          <text x="288" y="50" fill="#dcb8ff" fontFamily="monospace" fontSize="10" fontWeight="bold">
            94.20% RES
          </text>
        </svg>
      );

    case "neural-heatmap":
      return (
        <svg
          viewBox="0 0 300 300"
          className={`w-full h-full bg-[#0e0e0e] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="heat-cyan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,219,233,0.8)" />
              <stop offset="50%" stopColor="rgba(0,219,233,0.3)" />
              <stop offset="100%" stopColor="rgba(0,219,233,0)" />
            </radialGradient>
            <radialGradient id="heat-purple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(220,184,255,0.7)" />
              <stop offset="60%" stopColor="rgba(220,184,255,0.2)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <radialGradient id="heat-yellow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(254,214,57,0.7)" />
              <stop offset="50%" stopColor="rgba(254,214,57,0.15)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#0e0e0e" />

          {/* Brain Side View Silhouette */}
          <path
            d="M 50,150 
               C 40,110  60,70  110,60 
               C 130,60  150,70  170,50
               C 200,30  260,50  270,110
               C 275,130 265,150 255,170
               C 240,200 210,210 190,210
               C 180,210 170,225 160,240
               C 150,250 140,260 120,260
               C 105,260 95,250 95,235
               C 95,215  80,210  70,210
               C 50,210  50,180  50,150 Z"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Heat spots (Pulsing glowing gradients) */}
          <circle cx="110" cy="110" r="50" fill="url(#heat-cyan)" className="animate-pulse" />
          <circle cx="190" cy="90" r="45" fill="url(#heat-purple)" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="210" cy="150" r="35" fill="url(#heat-yellow)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />

          {/* Target points */}
          <circle cx="110" cy="110" r="3" fill="#00dbe9" />
          <circle cx="190" cy="90" r="3" fill="#dcb8ff" />
          <circle cx="210" cy="150" r="3" fill="#fed639" />
        </svg>
      );

    case "roi-graph":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#131313] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="area-cyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0, 219, 233, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 219, 233, 0)" />
            </linearGradient>
            <linearGradient id="area-purple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(220, 184, 255, 0.15)" />
              <stop offset="100%" stopColor="rgba(220, 184, 255, 0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="#131313" />

          {/* Graph Grid */}
          <line x1="40" y1="30" x2="40" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="40" y1="180" x2="370" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="40" y1="80" x2="370" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="40" y1="130" x2="370" y2="130" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Path 1: Cyan Curve (Attention ROI) */}
          <path
            d="M 40,160 Q 120,150 180,110 T 300,70 T 370,45"
            stroke="#00dbe9"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Fill under Path 1 */}
          <path
            d="M 40,160 Q 120,150 180,110 T 300,70 T 370,45 L 370,180 L 40,180 Z"
            fill="url(#area-cyan)"
          />

          {/* Path 2: Purple Curve (Base Baseline) */}
          <path
            d="M 40,170 Q 120,165 180,140 T 300,120 T 370,105"
            stroke="#dcb8ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* Fill under Path 2 */}
          <path
            d="M 40,170 Q 120,165 180,140 T 300,120 T 370,105 L 370,180 L 40,180 Z"
            fill="url(#area-purple)"
          />

          {/* High points markers */}
          <circle cx="300" cy="70" r="5" fill="#00dbe9" stroke="#131313" strokeWidth="1.5" />
          <circle cx="370" cy="45" r="5" fill="#00dbe9" className="animate-ping" />

          {/* Y Axis text labels */}
          <text x="10" y="83" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="8">
            100k
          </text>
          <text x="10" y="133" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="8">
            50k
          </text>

          {/* Legend */}
          <rect x="50" y="40" width="8" height="8" fill="#00dbe9" />
          <text x="63" y="47" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="9">
            TRIBE_V2_RESONANCE
          </text>
        </svg>
      );

    case "cinema-studio":
      return (
        <svg
          viewBox="0 0 400 225"
          className={`w-full h-full bg-[#131313] ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="light-beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0, 219, 233, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 219, 233, 0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="#131313" />

          {/* Theater Screen Outline */}
          <polygon points="60,40 340,40 310,130 90,130" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(0, 219, 233, 0.3)" strokeWidth="1.5" />

          {/* Screen Content Graphic */}
          <circle cx="200" cy="85" r="25" stroke="#00dbe9" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: "12s" }} />
          <polygon points="195,75 212,85 195,95" fill="#00dbe9" />

          {/* Light cone projecting from screen downwards */}
          <polygon points="90,130 310,130 360,225 40,225" fill="url(#light-beam)" opacity="0.3" />

          {/* Seating Row outlines (Perspective lines) */}
          <line x1="20" y1="210" x2="380" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <line x1="40" y1="190" x2="360" y2="190" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="60" y1="170" x2="340" y2="170" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Camera projection rays */}
          <line x1="200" y1="10" x2="60" y2="40" stroke="rgba(0,219,233,0.1)" strokeWidth="1" />
          <line x1="200" y1="10" x2="340" y2="40" stroke="rgba(0,219,233,0.1)" strokeWidth="1" />

          {/* Text watermark */}
          <text x="145" y="150" fill="#00dbe9" fontFamily="monospace" fontSize="8" letterSpacing="2" opacity="0.7">
            PROJECTION: CALIBRATED
          </text>
        </svg>
      );

    default:
      return null;
  }
}
