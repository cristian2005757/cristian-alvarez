"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Services() {
  const { lang } = useLanguage();
  const { items } = (translations[lang] || translations.es).services;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition duration-300 hover:border-cyan-500/20"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-zinc-200">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}
