"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Languages() {
  const { lang } = useLanguage();
  const { items } = (translations[lang] || translations.es).languages;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-4 transition duration-300 hover:border-cyan-500/20"
        >
          <span className="text-2xl">{item.flag}</span>
          <div>
            <p className="font-medium text-zinc-200">{item.name}</p>
            <p className="text-sm text-cyan-400/90">{item.level}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
