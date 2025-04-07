import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Waitlo - Launch Your Waitlist in Minutes for Free",
  description:
    "Launch Your Waitlist in Minutes for Free. The easiest way to collect interest in your product. No backend, no mailers. Just plug in your unique API key and you're live.",
  keywords: [
    "free waitlist api",
    "waitlist tool",
    "waitlist builder",
    "launch waitlist",
    "no code waitlist",
    "saas waitlist",
    "api waitlist",
    "waitlist signup form",
    "collect signups",
    "prelaunch waitlist",
    "early access form",
    "waitlist for startup",
    "free waitlist tool",
    "waitlist form generator",
    "frontend waitlist integration",
    "indie hacker tools",
    "developer waitlist tool",
    "startup launch tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
