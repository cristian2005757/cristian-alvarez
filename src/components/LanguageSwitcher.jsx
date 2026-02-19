"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { langLabels } from "@/data/translations";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50"
        aria-label="Cambiar idioma"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="uppercase">{lang}</span>
        <svg className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded-lg border border-zinc-700 bg-zinc-900 py-1 shadow-xl">
          {["es", "en", "pt", "ko"].map((l) => (
            <button
              key={l}
              onClick={() => {
                changeLanguage(l);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-zinc-800 ${
                lang === l ? "bg-cyan-500/10 text-cyan-300" : "text-zinc-300"
              }`}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
