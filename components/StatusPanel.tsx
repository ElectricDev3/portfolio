import { PROJECTS } from "@/lib/projects";

export function StatusPanel() {
  return (
    <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-[0_0_0_1px_rgba(255,180,84,0.04)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
        <span className="font-mono-label text-[11px] uppercase text-[var(--text-muted)]">
          build-log.sh
        </span>
        <span className="flex items-center gap-1.5 font-mono-label text-[11px] text-[var(--accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          live
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-relaxed">
        <p className="text-[var(--text-secondary)]">
          <span className="text-[var(--accent)]">$</span> ./status --portafolio
          <span className="caret text-[var(--accent)]">▍</span>
        </p>
        <div className="mt-3 space-y-1">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="flex items-center justify-between opacity-0"
              style={{
                animation: "fade-in-up 0.4s ease-out forwards",
                animationDelay: `${0.25 + i * 0.08}s`,
              }}
            >
              <span className="text-[var(--text-primary)]">{project.name}</span>
              <span className="text-[var(--accent)]">OK</span>
            </div>
          ))}
        </div>
        <div
          className="mt-3 border-t border-[var(--border)] pt-3 text-[var(--text-muted)] opacity-0"
          style={{ animation: "fade-in-up 0.4s ease-out forwards", animationDelay: "1s" }}
        >
          8/8 shipped · build sin errores
        </div>
      </div>
    </div>
  );
}
