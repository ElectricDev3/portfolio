import Image from "next/image";
import { ArrowUpRight, Hammer } from "lucide-react";
import { FEATURED, IN_PROGRESS } from "@/lib/projects";
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
          TH
        </span>

        <div className="relative max-w-2xl">
          <h3 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
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

          {FEATURED.githubUrl ? (
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
          ) : (
            <span
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-muted)]"
              title="Repositorio público próximamente"
            >
              <GitHubIcon size={15} />
              Repositorio próximamente
            </span>
          )}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={FEATURED.screenshot}
              alt={`Captura de ${FEATURED.name}`}
              fill
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-dashed border-[var(--border-hover)] bg-[var(--bg-elevated)] p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.2fr] sm:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-hover)] px-2.5 py-1 font-mono-label text-[10px] uppercase text-[var(--text-secondary)]">
              <Hammer size={11} />
              En desarrollo
            </span>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
              {IN_PROGRESS.name}
              <span className="ml-2 text-sm font-normal text-[var(--text-muted)]">({IN_PROGRESS.nameNote})</span>
            </h3>
            <p className="mt-1 text-sm text-[var(--accent)]">{IN_PROGRESS.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              {IN_PROGRESS.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {IN_PROGRESS.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-label rounded border border-[var(--border)] px-2 py-1 text-[11px] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs text-[var(--text-muted)]">
              Sin demo ni repositorio público todavía — se agregan cuando esté probado y completo.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)] opacity-90">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={IN_PROGRESS.screenshot}
                alt={`Captura de ${IN_PROGRESS.name}`}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
