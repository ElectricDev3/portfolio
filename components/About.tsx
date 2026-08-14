const BLOCKS = [
  {
    label: "01 · quién soy",
    body: "[Tu nombre] — desarrollador full-stack. Reemplaza este bloque con una o dos frases reales sobre ti: tu trayectoria, tu enfoque de trabajo, o qué te trajo a construir software.",
  },
  {
    label: "02 · qué construyo",
    body: "Productos completos, no solo interfaces: desde el modelo de datos y la lógica de negocio hasta una UI pulida y lista para producción. Este portafolio es la muestra — ocho micro-SaaS, cada uno con un problema real, una solución concreta y un stack elegido a propósito.",
  },
  {
    label: "03 · áreas de interés",
    body: "Herramientas con IA integrada de forma útil (no decorativa), arquitectura limpia que envejece bien, y experiencia de desarrollador — el tipo de detalle que hace que un proyecto sea agradable de mantener, no solo de lanzar.",
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
