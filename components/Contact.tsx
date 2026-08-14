import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const CHANNELS = [
  { icon: Mail, label: "Email", value: "[tu-email@ejemplo.com]", href: "mailto:tu-email@ejemplo.com" },
  { icon: GitHubIcon, label: "GitHub", value: "[github.com/tu-usuario]", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "[linkedin.com/in/tu-usuario]", href: "#" },
];

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
      <p className="font-mono-label text-xs uppercase text-[var(--accent)]">Contacto</p>
      <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        ¿Un proyecto en mente? Hablemos.
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CHANNELS.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 transition-colors hover:border-[var(--accent)]"
          >
            <Icon size={17} className="text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]" />
            <div>
              <p className="font-mono-label text-[10px] uppercase text-[var(--text-muted)]">{label}</p>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
