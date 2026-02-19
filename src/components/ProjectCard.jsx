"use client";

import ImageWithFallback from "./ImageWithFallback";

export default function ProjectCard({ project, labels = {} }) {
  const {
    repo: repoLabel = "Repo",
    demo: demoLabel = "Demo",
    noImage: noImageLabel = "Sin imagen",
    categoryLabels = {},
    statusLabels = {},
  } = labels;
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 focus-within:ring-2 focus-within:ring-cyan-500/30">
      {project.image ? (
        <div className="relative h-44 overflow-hidden">
          <ImageWithFallback
            src={Array.isArray(project.image) ? project.image[0] : project.image}
            sources={Array.isArray(project.image) ? project.image : undefined}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            fallbackClassName="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
        </div>
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-zinc-800/50">
          <span className="text-zinc-500 text-sm">{noImageLabel}</span>
        </div>
      )}

      <div className="p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {project.category && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                project.category === "web"
                  ? "border border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                  : project.category === "api"
                    ? "border border-violet-500/40 bg-violet-500/10 text-violet-300"
                    : project.category === "game"
                      ? "border border-amber-500/40 bg-amber-500/10 text-amber-300"
                      : "border border-zinc-600 bg-zinc-800 text-zinc-400"
              }`}
            >
              {categoryLabels[project.category] || project.category}
            </span>
          )}
          {project.status && statusLabels[project.status] && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              {statusLabels[project.status]}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>

        {project.case && (
          <p className="mt-2 text-sm text-cyan-200/90 italic">
            {project.case}
          </p>
        )}
        <p className="mt-2 text-zinc-400">{project.description}</p>

        {/* Badges de intención (UI/UX, Conversion, etc.) */}
        {project.badges?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.stack || []).map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              {repoLabel}
            </a>
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50 rounded"
            >
              {demoLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
