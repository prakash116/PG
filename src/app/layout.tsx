import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PG Finder — Find your room. Fill your rooms.",
  description:
    "India's warmest PG marketplace. Seekers find rooms with live availability and talk directly to owners — owners fill rooms with one tap. No brokers, no stale listings.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-body bg-cream text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
