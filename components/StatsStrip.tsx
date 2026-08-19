import { PROJECTS } from "@/lib/projects";

export function StatsStrip() {
  const microSaas = PROJECTS.filter((p) => p.tier === 2).length;
  const utilities = PROJECTS.filter((p) => p.tier === 3).length;
  const withBackend = PROJECTS.filter((p) => p.stack.some((s) => /postgres|supabase|jwt/i.test(s))).length;

  const STATS = [
    { value: PROJECTS.length, label: "productos shipped" },
    { value: microSaas, label: "micro-SaaS" },
    { value: utilities, label: "utilidades" },
    { value: withBackend, label: "con backend real" },
  ];

  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-3xl font-semibold tabular-nums text-[var(--accent)] sm:text-4xl">
              {stat.value}
            </p>
            <p className="font-mono-label mt-1 text-[11px] uppercase text-[var(--text-muted)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
