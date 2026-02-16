import { site } from "@/data/site";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm text-zinc-400">{site.location}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl gradient-text">
            {site.name}
          </h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              {site.phone}
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-zinc-300">{site.role}</p>

          <p className="mt-6 max-w-xl text-zinc-400">
            Tecnólogo en Análisis y Desarrollo de Software. He trabajado en soporte y
            desarrollo en entornos reales, haciendo correcciones, optimización de
            procesos y administración de bases de datos (PostgreSQL/MySQL), además
            de despliegues y control de versiones con Git. También desarrollo
            sitios y landing pages orientadas a conversión, integrando CTAs
            (WhatsApp/formularios) y aplicando marketing digital para mejorar
            resultados.
          </p>

          {/* Mini-métricas */}
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500">
            <li className="flex items-center gap-1.5">
              <span className="text-cyan-400">+6</span> proyectos publicados
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-cyan-400">E-commerce</span> (Shopify)
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-cyan-400">API</span> JWT + PostgreSQL
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/30 focus:outline focus:ring-2 focus:ring-cyan-500/50"
            >
              Ver proyectos
            </a>

            <a
              href={site.cvUrl}
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:text-white focus:outline focus:ring-2 focus:ring-cyan-500/50"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Descargar CV
            </a>

            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-cyan-500/50 hover:text-cyan-300 focus:outline focus:ring-2 focus:ring-cyan-500/50"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="flex justify-start md:justify-end">
          <div className="profile-card group relative rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5">
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
                Frontend / Fullstack Junior · Enfoque en UX y conversión
              </p>
              <div className="profile-chips mt-3 flex flex-wrap justify-center gap-2 [&>span]:shrink-0">
                <span className="inline-block whitespace-nowrap rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  Frontend
                </span>
                <span className="inline-block whitespace-nowrap rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  APIs + SQL
                </span>
                <span className="inline-block whitespace-nowrap rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  Meta Ads / Conversion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
