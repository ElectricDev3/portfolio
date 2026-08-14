const LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#destacado", label: "Destacado" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono-label text-sm text-[var(--text-primary)]">
          <span className="text-[var(--accent)]">~/</span>electricdev
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-label text-xs uppercase text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-md border border-[var(--border)] px-3 py-1.5 font-mono-label text-xs uppercase text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
