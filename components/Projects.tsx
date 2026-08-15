import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const microSaas = PROJECTS.filter((p) => p.tier === 2);
  const utilities = PROJECTS.filter((p) => p.tier === 3);

  return (
    <section id="proyectos" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <div className="flex items-baseline justify-between">
        <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Proyectos</p>
        <p className="font-mono-label text-xs text-[var(--text-muted)]">{PROJECTS.length} shipped</p>
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        Ocho micro-SaaS, ocho habilidades distintas
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
        Cada uno resuelve un problema real, con un stack elegido a propósito y una interfaz pensada
        para usarse, no solo para mostrarse.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {microSaas.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-20">
        <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Utilidades</p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
          Ocho herramientas rápidas, sin fricción
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          Más ligeras y enfocadas en una sola tarea — la mayoría corre 100% en el navegador — pero con
          la misma atención al detalle que el resto del portafolio.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {utilities.map((project) => (
            <ProjectCard key={project.name} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
