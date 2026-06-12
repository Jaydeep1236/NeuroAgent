"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/analysis", label: "Analysis" },
  { href: "/workflow", label: "Workflow" },
  { href: "/", label: "Ecosystem" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-surface/80 backdrop-blur-xl sticky top-0 border-b border-primary/20 z-50 flex justify-between items-center px-margin-desktop py-base max-w-full mx-auto w-full">
      <div className="font-sora text-headline-md font-bold tracking-tighter text-primary-fixed-dim">
        NEUROAGENT
      </div>

      <div className="hidden md:flex items-center space-x-lg">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`font-jetbrains text-mono-label transition-colors duration-300 ${
              pathname === link.href
                ? "text-primary-fixed-dim font-bold border-b-2 border-primary-fixed-dim pb-1"
                : "text-on-surface-variant font-medium hover:text-primary-fixed-dim"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-md">
        <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer">
          sensors
        </span>
        <Link href="/dashboard">
          <button className="bg-primary-fixed-dim text-on-primary font-jetbrains text-mono-label px-md py-xs rounded-lg hover:brightness-110 hover:scale-95 transition-all duration-150">
            Launch Agent
          </button>
        </Link>
      </div>
    </nav>
  );
}
