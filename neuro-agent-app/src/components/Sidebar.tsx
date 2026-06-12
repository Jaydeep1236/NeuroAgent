"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: "psychology", label: "Neural Pulse" },
  { href: "/analysis", icon: "analytics", label: "Cognitive Reports" },
  { href: "/dashboard/loop", icon: "loop", label: "Agent Loop" },
  { href: "/workflow", icon: "account_tree", label: "Tribe Flow" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-surface-container-lowest/50 backdrop-blur-2xl text-primary-fixed-dim h-screen w-64 fixed left-0 top-0 border-r border-primary-fixed-dim/10 hidden lg:flex flex-col z-40 pt-[80px]">
      {/* Agent Info */}
      <div className="px-md py-lg mb-md">
        <div className="flex items-center gap-sm mb-xs">
          <div className="w-8 h-8 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center border border-primary-fixed-dim/30">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
          <div>
            <p className="font-sora text-body-sm font-bold text-primary-fixed-dim">
              NeuroAgent v2.1
            </p>
            <div className="flex items-center gap-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
              <p className="font-jetbrains text-[10px] text-on-surface-variant uppercase tracking-widest">
                Status: Active
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-base px-xs">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-sm p-md transition-all duration-200 ${
                isActive
                  ? "bg-primary-fixed-dim/10 text-primary-fixed-dim border-l-4 border-primary-fixed-dim"
                  : "text-on-surface-variant hover:bg-primary-fixed-dim/10"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-jetbrains text-mono-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-md space-y-md">
        <button className="w-full py-sm bg-primary-fixed-dim/5 border border-primary-fixed-dim/20 rounded-lg font-jetbrains text-mono-label text-primary-fixed-dim hover:bg-primary-fixed-dim/10 transition-colors">
          Sync Neural Data
        </button>
        <div className="flex flex-col gap-sm border-t border-primary-fixed-dim/10 pt-md">
          <a
            href="#"
            className="flex items-center gap-sm text-on-surface-variant font-jetbrains text-mono-label hover:text-primary-fixed-dim transition-colors"
          >
            <span className="material-symbols-outlined text-sm">settings</span>
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-sm text-on-surface-variant font-jetbrains text-mono-label hover:text-primary-fixed-dim transition-colors"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>Terminal</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
