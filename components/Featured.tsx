import { ArrowUpRight } from "lucide-react";
import { FEATURED } from "@/lib/projects";
import { GitHubIcon } from "./icons";

export function Featured() {
  return (
    <section id="destacado" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Proyecto principal</p>

      <div className="relative mt-8 overflow-hidden rounded-xl border border-[var(--accent-ring)] bg-[var(--surface)] p-8 sm:p-12">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 select-none font-mono text-[220px] font-bold leading-none text-[var(--border)] opacity-40"
        >
          SC
        </span>

        <div className="relative max-w-2xl">
          <span className="font-mono-label rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] uppercase text-[var(--text-secondary)]">
            {FEATURED.codename}
          </span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {FEATURED.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--accent)]">{FEATURED.tagline}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {FEATURED.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FEATURED.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono-label rounded border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={FEATURED.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <GitHubIcon size={15} />
            Ver repositorio
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
