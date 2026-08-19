const BLOCKS = [
  {
    label: "01 · la regla",
    body: "Si no funciona de verdad, no está acá. Nada de datos de mentira ni capturas retocadas — cada producto se prueba con datos reales antes de marcarse como terminado, no solo se ve bien en una imagen.",
  },
  {
    label: "02 · sin plantilla",
    body: "Cero clones. Cada proyecto nace de un problema real, con su propio stack elegido a propósito, su propia interfaz y, cuando aplica, su propia base de datos e integración externa real — no una plantilla repintada treinta veces.",
  },
  {
    label: "03 · el ritmo",
    body: "Treinta productos en producción y subiendo. La meta no es tener el portafolio más grande — es no dejar de construir cosas que resuelvan algo real.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Cómo se construye esto</p>
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
