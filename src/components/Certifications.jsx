"use client";

import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Certifications() {
  const { lang } = useLanguage();
  const t = (translations[lang] || translations.es).certifications;

  const certificationsWithTranslations = certifications.map((cert, i) => {
    const tr = t[i];
    return tr ? { ...cert, title: tr.title, issuer: tr.issuer } : cert;
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certificationsWithTranslations.map((cert, i) => (
        <motion.article
          key={cert.title || i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-cyan-500/20"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
            <svg
              className="h-6 w-6 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-100">{cert.title}</h3>
            {cert.issuer && (
              <p className="mt-0.5 text-sm text-cyan-400/90">{cert.issuer}</p>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
