const BLOCKS = [
  {
    label: "01 · quién soy",
    body: "Soy ElectricDev, desarrollador enfocado en crear productos digitales y convertir ideas en software funcional.",
  },
  {
    label: "02 · cómo trabajo",
    body: "No me interesa únicamente programar por programar; me gusta entender el problema, diseñar una solución y construirla de principio a fin.",
  },
  {
    label: "03 · en qué estoy ahora",
    body: "Me interesa especialmente la inteligencia artificial, el desarrollo web y la creación de herramientas que resuelvan problemas reales. Actualmente trabajo en proyectos propios, experimentando con SaaS, IA y productos digitales mientras sigo desarrollando mis habilidades.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Sobre mí</p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {BLOCKS.map((block) => (
          <div key={block.label}>
            <p className="font-mono-label text-xs uppercase text-[var(--text-muted)]">{block.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
