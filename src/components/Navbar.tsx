"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#live-availability", label: "Live availability" },
  { href: "#homes", label: "Homes" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-sand-deep/60 bg-cream/90 backdrop-blur-md"
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-xl font-bold text-teal"
          aria-label="PG Finder home"
        >
          <span className="inline-block w-[24px] h-[28px] bg-terracotta rounded-t-full rounded-b-[5px]" aria-hidden />
          PG Finder
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-soft hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(226,114,91,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-1 text-2xl text-teal md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-4 border-t border-sand-deep bg-cream-bright px-5 py-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-semibold text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center rounded-full bg-terracotta px-6 py-3 text-sm font-bold text-white"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
