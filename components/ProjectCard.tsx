import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { GitHubIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-hover)]">
      <div
        className={`relative w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elevated)] ${
          compact ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.screenshot}
          alt={`Captura de ${project.name}`}
          fill
          sizes={
            compact
              ? "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1"
          style={{ background: project.accent }}
          aria-hidden
        />
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5"}`}>
        <h3 className={`font-semibold text-[var(--text-primary)] ${compact ? "text-base" : "text-lg"}`}>
          {project.name}
        </h3>
        <p className={`mt-0.5 text-[var(--accent)] ${compact ? "text-xs" : "text-sm"}`}>{project.tagline}</p>

        {!compact && (
          <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            <p>
              <span className="font-mono-label text-[10px] uppercase text-[var(--text-muted)]">Problema — </span>
              {project.problem}
            </p>
            <p>
              <span className="font-mono-label text-[10px] uppercase text-[var(--text-muted)]">Solución — </span>
              {project.solution}
            </p>
          </div>
        )}

        <div className={`flex flex-wrap gap-1.5 ${compact ? "mt-3" : "mt-4"}`}>
          {(compact ? project.stack.slice(0, 3) : project.stack).map((tech) => (
            <span
              key={tech}
              className="font-mono-label rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`flex items-center gap-3 border-t border-[var(--border)] text-sm ${
            compact ? "mt-4 pt-3" : "mt-5 pt-4"
          }`}
        >
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              Live Demo <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)]" title="Aún no desplegado">
              Live Demo <ArrowUpRight size={13} />
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
            >
              <GitHubIcon size={14} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)]" title="Repositorio próximamente">
              <GitHubIcon size={14} /> GitHub
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
