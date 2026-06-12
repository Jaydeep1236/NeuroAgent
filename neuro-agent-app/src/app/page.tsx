import Link from "next/link";
import NeuralCanvas from "@/components/NeuralCanvas";
import ReasoningFeed from "@/components/ReasoningFeed";
import Navbar from "@/components/Navbar";
import NeuralIllustration from "@/components/NeuralIllustration";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#131313] text-on-surface min-h-screen">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-desktop overflow-hidden">
          {/* Neural Canvas Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <NeuralCanvas />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="mb-sm">
              <span className="font-jetbrains text-mono-label text-primary-fixed-dim border border-primary-fixed-dim/30 px-sm py-1 rounded-full uppercase tracking-widest">
                Autonomous Cognitive Engine
              </span>
            </div>
            <h1 className="font-sora text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
              Predict the{" "}
              <span className="text-primary-fixed-dim">Human Response.</span>
            </h1>
            <p className="font-inter text-body-base text-on-surface-variant mb-xl max-w-2xl mx-auto">
              Leverage neural topography simulations to forecast engagement
              before you hit publish. Tribe V2 integration enables precision
              targeting at a biological scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <button className="bg-primary-fixed-dim text-on-primary font-sora text-headline-md px-xl py-sm rounded-lg neural-glow hover:brightness-110 transition-all">
                Connect your Channel
              </button>
              <button className="border border-primary-fixed-dim text-primary-fixed-dim font-sora text-headline-md px-xl py-sm rounded-lg hover:bg-primary-fixed-dim/10 transition-all">
                Run Neural Simulation
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs text-on-surface-variant/40">
            <span className="font-jetbrains text-mono-label">DATA_STREAM_START</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </div>
        </section>

        {/* ── Workflow Cards ── */}
        <section className="py-xl px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl">
              <div>
                <h2 className="font-sora text-display-lg-mobile md:text-display-lg mb-base text-on-surface">
                  The Neuro-Agent Workflow
                </h2>
                <p className="font-jetbrains text-mono-label text-primary-fixed-dim">
                  SYSTEM_PROCESS: VIDEO_TO_COGNITION
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 mx-xl bg-outline-variant/30 mb-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Step 1 */}
              <div className="glass-card p-lg rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-md font-jetbrains text-mono-label text-on-surface-variant opacity-30">
                  MOD_01
                </div>
                <div className="mb-md">
                  <span
                    className="material-symbols-outlined text-primary-fixed-dim text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    movie
                  </span>
                </div>
                <h3 className="font-sora text-headline-md mb-sm text-on-surface">
                  Video Processing
                </h3>
                <p className="font-inter text-body-sm text-on-surface-variant">
                  Our vision LLM decomposes every frame into semantic markers
                  and emotional triggers, creating a high-fidelity data
                  footprint.
                </p>
                <div className="mt-lg h-24 bg-surface-container-high rounded border border-outline-variant/20 flex items-center justify-center overflow-hidden relative">
                  <NeuralIllustration
                    type="video-processing"
                    className="opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-card p-lg rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-md font-jetbrains text-mono-label text-on-surface-variant opacity-30">
                  MOD_02
                </div>
                <div className="mb-md">
                  <span
                    className="material-symbols-outlined text-primary-fixed-dim text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    hub
                  </span>
                </div>
                <h3 className="font-sora text-headline-md mb-sm text-on-surface">
                  TribeV2 Synthesis
                </h3>
                <p className="font-inter text-body-sm text-on-surface-variant">
                  We map content against the digital personas of millions,
                  predicting resonance within specific demographic clusters
                  using TribeV2 logic.
                </p>
                <div className="mt-lg h-24 bg-surface-container-high rounded border border-outline-variant/20 flex items-center justify-center overflow-hidden relative">
                  <NeuralIllustration
                    type="tribe-synthesis"
                    className="opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-card p-lg rounded-xl relative overflow-hidden group border-primary-fixed-dim/40">
                <div className="absolute top-0 right-0 p-md font-jetbrains text-mono-label text-on-surface-variant opacity-30">
                  MOD_03
                </div>
                <div className="mb-md">
                  <span
                    className="material-symbols-outlined text-primary-fixed-dim text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    psychology
                  </span>
                </div>
                <h3 className="font-sora text-headline-md mb-sm text-on-surface">
                  Brain Activation
                </h3>
                <p className="font-inter text-body-sm text-on-surface-variant">
                  Real-time simulation of dopamine and cortisol response levels.
                  Watch the predicted biological reaction of your audience
                  unfold.
                </p>
                <div className="mt-lg h-24 bg-surface-container-high rounded border border-outline-variant/20 flex items-center justify-center overflow-hidden relative">
                  <NeuralIllustration
                    type="brain-activation"
                    className="opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI Predictive Scores ── */}
        <section className="py-xl px-margin-desktop bg-[#131313]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
              {/* Score Panel */}
              <div className="lg:col-span-8 glass-card rounded-xl p-xl flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="flex items-center gap-xs mb-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                    <span className="font-jetbrains text-mono-label text-primary-fixed-dim uppercase">
                      Live ROI Simulation
                    </span>
                  </div>
                  <h2 className="font-sora text-display-lg-mobile md:text-display-lg max-w-lg text-on-surface">
                    ROI Predictive Scores
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-lg mt-xl">
                  {[
                    { label: "RETENTION_RATE", value: "84%", cyan: true },
                    { label: "DOX_COGNITION", value: "9.2", cyan: false },
                    { label: "SENTIMENT_IDX", value: "+0.8", cyan: true },
                    { label: "CTR_PREDICT", value: "12.5%", cyan: false },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="scanning-line pb-xs border-b border-outline-variant/20"
                    >
                      <span className="font-jetbrains text-mono-label text-on-surface-variant">
                        {stat.label}
                      </span>
                      <div
                        className={`font-sora text-display-lg-mobile mt-base ${
                          stat.cyan ? "text-primary-fixed-dim" : "text-on-surface"
                        }`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reasoning Feed */}
              <ReasoningFeed />
            </div>
          </div>
        </section>

        {/* ── Autonomous Content Optimizer ── */}
        <section className="py-xl px-margin-desktop bg-surface-container-low/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-xl items-center">
            <div className="flex-1">
              <span className="font-jetbrains text-mono-label text-on-surface-variant mb-base block">
                ENHANCEMENT_PROTOCOL
              </span>
              <h2 className="font-sora text-display-lg-mobile md:text-display-lg mb-md text-on-surface">
                Autonomous Content Optimizer
              </h2>
              <p className="font-inter text-body-base text-on-surface-variant mb-lg">
                Our agents don&apos;t just predict; they improve. Identify exactly
                which frames causing cognitive drop-offs and let the AI propose
                neural-aligned edits to maximize retention.
              </p>
              <ul className="space-y-sm">
                {[
                  "Frame-level pacing correction",
                  "Dynamic soundscape adjustment",
                  "Color grade psychological tuning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary-fixed-dim">
                      check_circle
                    </span>
                    <span className="font-inter text-body-base text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card rounded-xl p-md aspect-video relative group overflow-hidden">
                <NeuralIllustration
                  type="content-optimizer"
                  className="rounded-lg border border-primary-fixed-dim/20"
                />
                <div className="absolute inset-0 bg-primary-fixed-dim/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-lg">
                  <div className="bg-primary-fixed-dim text-on-primary p-md rounded-full shadow-lg">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface-container-lowest w-full px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md py-lg border-t border-outline-variant/20">
        <div className="col-span-2 md:col-span-1">
          <div className="font-jetbrains text-mono-label text-on-surface mb-md font-bold">
            NEUROAGENT
          </div>
          <p className="font-jetbrains text-mono-label text-on-surface-variant max-w-[200px]">
            Next-gen cognitive prediction for the digital era.
          </p>
        </div>
        <div>
          <h4 className="font-jetbrains text-mono-label text-on-surface mb-md opacity-50 uppercase">
            Products
          </h4>
          <ul className="space-y-base">
            {["Technical Specs", "Neuro-API"].map((l) => (
              <li key={l}>
                <a className="font-jetbrains text-mono-label text-on-surface-variant hover:text-primary-fixed-dim transition-all" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-jetbrains text-mono-label text-on-surface mb-md opacity-50 uppercase">
            Resources
          </h4>
          <ul className="space-y-base">
            {["Whitepaper", "Privacy Protocol"].map((l) => (
              <li key={l}>
                <a className="font-jetbrains text-mono-label text-on-surface-variant hover:text-primary-fixed-dim transition-all" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 border-l border-outline-variant/20 pl-md">
          <p className="font-jetbrains text-mono-label text-on-surface-variant mb-md">
            © 2024 NEUROAGENT SYSTEMS | TRIBEV2 INTEGRATED
          </p>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-fixed-dim cursor-pointer">share</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-fixed-dim cursor-pointer">public</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
