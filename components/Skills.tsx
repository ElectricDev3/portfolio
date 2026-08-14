const GROUPS = [
  { label: "Frontend", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Route Handlers", "Server Actions", "Node.js", "REST"] },
  { label: "Database", items: ["Supabase (Postgres)", "localStorage / client-state cuando aplica"] },
  { label: "AI", items: ["Claude API", "Structured Outputs (JSON Schema)", "Diseño de prompts"] },
  { label: "Infra / Tools", items: ["Vercel", "Git & GitHub", "ESLint", "Playwright"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Skills</p>
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <p className="font-mono-label text-xs uppercase text-[var(--text-primary)]">{group.label}</p>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
