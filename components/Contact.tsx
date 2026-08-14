import { InstagramIcon } from "./icons";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Instagram</p>
      <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        Más de esto, por acá.
      </h2>
      <a
        href="https://instagram.com/wili_desantiago"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 transition-colors hover:border-[var(--accent)]"
      >
        <InstagramIcon
          size={17}
          className="text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
        />
        <div>
          <p className="font-mono-label text-[10px] uppercase text-[var(--text-muted)]">Instagram</p>
          <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
            @wili_desantiago
          </p>
        </div>
      </a>
    </section>
  );
}
