"use client";

import { useState, useEffect } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const linkKeys = ["about", "projects", "experience", "certifications", "contact"];
const linkHrefs = ["#about", "#projects", "#experience", "#certifications", "#contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const t = translations[lang]?.nav || translations.es.nav;

  const closeMenu = () => setOpen(false);
  const links = linkKeys.map((key, i) => ({ href: linkHrefs[i], label: t[key] }));

  return (
    <header
      className={`sticky top-0 z-50 border-b border-zinc-800 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-xl" : "bg-zinc-950/70 backdrop-blur"
      }`}
    >
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="font-semibold tracking-tight">
            {site.name}
          </a>
          <span className="hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300 sm:inline-flex">
            {(translations[lang] || translations.es).available} · {(translations[lang] || translations.es).contact.responseTimeShort}
          </span>
        </div>

        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-300 transition hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50 sm:flex"
          >
            <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50 sm:flex"
          >
            <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100 focus:outline focus:ring-2 focus:ring-cyan-500/50 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-zinc-800 bg-zinc-950/95 px-4 py-4 backdrop-blur">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800/50 hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2 border-t border-zinc-800 pt-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 py-2.5 text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-700 py-2.5 text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
