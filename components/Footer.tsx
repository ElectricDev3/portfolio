export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono-label text-[11px] uppercase text-[var(--text-muted)] sm:flex-row">
        <span>ElectricDev · portafolio técnico</span>
        <span>Next.js · TypeScript · Tailwind</span>
      </div>
    </footer>
  );
}
