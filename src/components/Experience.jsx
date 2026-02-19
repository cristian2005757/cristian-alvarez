"use client";

import { experience } from "@/data/experience";
import ImageWithFallback from "./ImageWithFallback";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = (translations[lang] || translations.es).experience;

  const experienceWithTranslations = experience.map((job, i) => {
    const tr = t[i];
    if (!tr) return job;
    const merged = { ...job, role: tr.role, location: tr.location, bullets: tr.bullets };
    if (tr.links && job.links) {
      merged.links = job.links.map((l, j) => ({ ...l, label: tr.links[j]?.label ?? l.label }));
    }
    return merged;
  });

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-zinc-700 to-transparent md:left-6" />

      <div className="space-y-8">
        {experienceWithTranslations.map((job, i) => (
          <motion.article
            key={`${job.company}-${job.role}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6 pl-10 md:pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-500/40 bg-zinc-900">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>

            <div className="min-w-0 flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition duration-300 hover:border-cyan-500/20">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100">{job.role}</h3>
                    <p className="text-sm text-cyan-400/90">{job.date}</p>
                  </div>

                  <p className="mt-1 text-zinc-400">
                    {job.company} · {job.location}
                  </p>

                  {job.links && job.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.links.filter((l) => l.url).map((link, linkIdx) => (
                        <a
                          key={link.url || `link-${linkIdx}`}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 transition hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50 rounded"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-500">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {job.image && (
                  <div className="shrink-0 w-full md:w-52">
                    {job.links?.[0]?.url ? (
                      <a
                        href={job.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-xl border border-zinc-700 transition hover:border-cyan-500/30"
                      >
                        <ImageWithFallback
                          src={Array.isArray(job.image) ? job.image[0] : job.image}
                          sources={Array.isArray(job.image) ? job.image : undefined}
                          alt={`${job.company}`}
                          className="h-32 w-full object-cover object-top"
                          fallbackClassName="h-32 w-full"
                          fallbackText="Vista"
                        />
                      </a>
                    ) : (
                      <div className="overflow-hidden rounded-xl border border-zinc-700">
                        <ImageWithFallback
                          src={Array.isArray(job.image) ? job.image[0] : job.image}
                          sources={Array.isArray(job.image) ? job.image : undefined}
                          alt={`${job.company}`}
                          className="h-32 w-full object-cover object-top"
                          fallbackClassName="h-32 w-full"
                          fallbackText="Vista"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
