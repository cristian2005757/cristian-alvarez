"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const filterIds = ["all", "web", "api", "game"];

export default function Projects() {
  const [active, setActive] = useState("all");
  const { lang } = useLanguage();
  const filters = filterIds.map((id) => ({ id, label: (translations[lang] || translations.es).projectFilters[id] }));

  const filtered = projects.filter(
    (p) => active === "all" || (p.category || "web") === active
  );

  const t = (translations[lang] || translations.es);
  const projectLabels = {
    repo: t.repo,
    demo: t.demo,
    noImage: t.noImage,
    categoryLabels: t.projectFilters,
    statusLabels: t.projectStatus,
  };

  const projectsWithTranslations = filtered.map((p) => {
    const idx = projects.findIndex((x) => x === p);
    const tr = t.projects[idx];
    return tr ? { ...p, _idx: idx, title: tr.title, description: tr.description, case: tr.case } : { ...p, _idx: idx };
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-zinc-900 ${
              active === f.id
                ? "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30"
                : "border border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
        initial={false}
      >
        <AnimatePresence mode="popLayout">
          {projectsWithTranslations.map((p, i) => (
            <motion.div
              key={`project-${p._idx ?? i}`}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProjectCard project={p} labels={projectLabels} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projectsWithTranslations.length === 0 && (
        <p className="py-12 text-center text-zinc-500">
          {(translations[lang] || translations.es).noProjects}
        </p>
      )}
    </div>
  );
}
