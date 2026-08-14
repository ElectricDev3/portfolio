import { ArrowRight } from "lucide-react";
import { StatusPanel } from "./StatusPanel";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <p className="font-mono-label text-xs uppercase text-[var(--accent)]">
            ElectricDev · Build log
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Construyo productos reales,
            <br />
            de la idea al deploy.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Desarrollador full-stack. Cada proyecto de este portafolio nace de un problema real y
            termina como un producto funcional, con su propia interfaz, su propia API y, cuando
            aplica, su propia integración externa real.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[#14110a] transition-transform hover:translate-y-[-1px] hover:brightness-110"
            >
              Ver proyectos <ArrowRight size={15} />
            </a>
            <a
              href="https://instagram.com/wili_desantiago"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Instagram
            </a>
          </div>
        </div>

        <StatusPanel />
      </div>
    </section>
  );
}
