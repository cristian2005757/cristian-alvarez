import { experience } from "@/data/experience";
import ImageWithFallback from "./ImageWithFallback";

export default function Experience() {
  return (
    <div className="grid gap-6">
      {experience.map((job) => (
        <article
          key={`${job.company}-${job.role}`}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition duration-300 hover:border-zinc-700"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="text-sm text-zinc-400">{job.date}</p>
              </div>

              <p className="mt-1 text-zinc-300">
                {job.company} · {job.location}
              </p>

              {job.links && job.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition focus:outline focus:ring-2 focus:ring-cyan-500/50 rounded"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}

              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
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
              <div className="shrink-0 w-full md:w-56">
                {job.links?.[0]?.url ? (
                  <a
                    href={job.links[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-xl border border-zinc-700 transition hover:border-cyan-500/30"
                  >
                    <ImageWithFallback
                      src={Array.isArray(job.image) ? job.image[0] : job.image}
                      sources={Array.isArray(job.image) ? job.image : undefined}
                      alt={`Vista de ${job.company}`}
                      className="h-36 w-full object-cover object-top"
                      fallbackClassName="h-36 w-full"
                      fallbackText="Vista"
                    />
                  </a>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-zinc-700">
                    <ImageWithFallback
                      src={Array.isArray(job.image) ? job.image[0] : job.image}
                      sources={Array.isArray(job.image) ? job.image : undefined}
                      alt={`Vista de ${job.company}`}
                      className="h-36 w-full object-cover object-top"
                      fallbackClassName="h-36 w-full"
                      fallbackText="Vista"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
