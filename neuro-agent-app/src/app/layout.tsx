import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NEUROAGENT | Predict the Human Response",
  description:
    "Leverage neural topography simulations to forecast engagement before you hit publish. Tribe V2 integration enables precision targeting at a biological scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} font-inter bg-background text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
