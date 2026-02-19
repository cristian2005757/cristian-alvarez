"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function MarketingProduct() {
  const { lang } = useLanguage();
  const m = (translations[lang] || translations.es).marketing;
  const items = m.items;

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/50 p-6 glow">
      <h3 className="text-lg font-semibold text-cyan-200">
        {m.title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-zinc-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
