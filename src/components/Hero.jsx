"use client";

import { site } from "@/data/site";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;
  const cvUrl = typeof site.cvUrl === "object" ? site.cvUrl[lang] || site.cvUrl.es : site.cvUrl;

  return (
    <section className="py-16">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p variants={item} className="text-sm text-zinc-400">
            {site.name} · {site.location} 🇨🇴
          </motion.p>

          {/* Title (2 lines max) */}
          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl"
          >
            <span className="gradient-text">Full-Stack Developer</span> <br />
            <span className="text-zinc-400">(React · Laravel · PostgreSQL)</span>
          </motion.h1>

          {/* Subtitle (1–2 lines) */}
          <motion.p variants={item} className="mt-5 max-w-xl text-zinc-400 leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs (2 only) */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:scale-[1.02] hover:bg-cyan-500/30 focus:outline focus:ring-2 focus:ring-cyan-500/50"
            >
              {t.hero.viewProjects}
            </a>

            <a
              href={cvUrl}
              className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:scale-[1.02] hover:border-zinc-500 hover:text-white focus:outline focus:ring-2 focus:ring-cyan-500/50"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {t.hero.downloadCV}
            </a>
          </motion.div>

          {/* Highlights chips */}
          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
              APIs JWT
            </span>
            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
              PostgreSQL/MySQL
            </span>
            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
              Git + Linux
            </span>
          </motion.div>

          {/* Contact line (no CTA button, only link) */}
          <motion.p variants={item} className="mt-6 text-sm text-zinc-500">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              {site.email}
            </a>
            <span className="mx-2 text-zinc-700">•</span>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              WhatsApp
            </a>
            <span className="mx-2 text-zinc-700">•</span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
          </motion.p>
        </motion.div>

        {/* RIGHT (Profile card) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex justify-start md:justify-end"
        >
          <div className="profile-card group relative rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 mix-blend-overlay" />
                <div className="opacity-95 saturate-[0.95] transition group-hover:opacity-100 group-hover:saturate-100">
                  <ProfileImage />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-zinc-300">
                Full-Stack Developer · {site.age} {t.hero.ageLabel} · Colombia 🇨🇴
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-2 [&>span]:shrink-0">
                <span className="inline-block whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900/30 px-3 py-1.5 text-xs font-medium text-zinc-200">
                  APIs JWT
                </span>
                <span className="inline-block whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900/30 px-3 py-1.5 text-xs font-medium text-zinc-200">
                  PostgreSQL/MySQL
                </span>
                <span className="inline-block whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900/30 px-3 py-1.5 text-xs font-medium text-zinc-200">
                  Git + Linux
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
