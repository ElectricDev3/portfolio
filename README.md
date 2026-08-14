# Portafolio — ElectricDev

Sitio de portafolio técnico. Presenta a **Thorvane** como proyecto principal y 8 micro-SaaS adicionales, cada uno con su nombre de producto, el problema que resuelve, la solución, el stack usado, y capturas reales de la app corriendo.

> **Nota de confidencialidad:** cada proyecto del portafolio tiene un identificador técnico interno de SCStudios (carpeta/repo de desarrollo). Esos identificadores son confidenciales y **nunca se muestran en la interfaz pública** — ni en tarjetas, títulos, navegación, metadata visible ni en este README. Solo se usan internamente en `lib/projects.ts` como datos de trabajo (comentados como tal) para uso futuro del equipo, no para mostrarse.

## Concepto de diseño

- **Identidad:** ElectricDev — nombre en la navegación, el hero y la metadata del sitio.
- **Paleta:** grafito oscuro (`#0b0e11`) con un solo acento ámbar tipo "terminal fósforo" (`#ffb454`), inspirado en monitores de ingeniería retro. Un fondo de grilla sutil refuerza el concepto de "documento técnico" en vez de "landing de marketing".
- **Tipografía:** IBM Plex Sans para títulos y cuerpo, IBM Plex Mono para etiquetas y datos técnicos — una familia diseñada originalmente para documentación de ingeniería de IBM.
- **Firma visual:** el panel `build-log.sh` del hero — una lista de los productos con estado "OK", animada como una secuencia de arranque al cargar la página.
- **Contenido real:** todas las capturas de pantalla son screenshots reales de cada aplicación corriendo (capturadas con Playwright durante el desarrollo de cada proyecto), no mockups.

## Secciones

1. **Hero** — identidad (ElectricDev), tesis de una línea, CTA, panel de estado tipo terminal.
2. **Sobre mí** — quién soy / cómo trabajo / en qué estoy ahora.
3. **Proyecto principal** — Thorvane, con descripción real tomada de su documentación de visión y stack real.
4. **Proyectos** — grid de los 8 micro-SaaS: nombre, problema, solución, stack, captura real, Live Demo y GitHub.
5. **Skills** — Frontend, Backend, Database, AI, Infraestructura/Tools.
6. **Contacto** — email, GitHub, LinkedIn.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- `lucide-react` para iconografía (con dos íconos SVG propios para GitHub/LinkedIn, ya que la versión instalada de lucide-react no incluye íconos de marcas)
- Sin backend ni base de datos: es un sitio estático de contenido

## Estructura relevante

```
app/                  page.tsx, layout.tsx (fuentes IBM Plex), globals.css (tokens de diseño)
components/
  Hero.tsx, StatusPanel.tsx    Hero + panel de build-log animado
  About.tsx                      Sección "Sobre mí"
  Featured.tsx                    Proyecto principal (Thorvane)
  Projects.tsx, ProjectCard.tsx    Grid de los 8 proyectos
  Skills.tsx, Contact.tsx, Footer.tsx
  icons.tsx                        Íconos de GitHub/LinkedIn (SVG propio)
lib/
  projects.ts            Datos de los 8 proyectos + del proyecto destacado
                          (incluye identificadores técnicos internos, no expuestos en la UI)
public/screenshots/      Capturas reales de cada proyecto
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run lint    # eslint
```

## Variables de entorno

Ninguna. Sitio estático, sin APIs ni claves.

## Pendientes antes de publicar

- **`components/Contact.tsx`** — email, GitHub y LinkedIn están entre corchetes (`[tu-email@ejemplo.com]`, etc.) como placeholder.
- **`lib/projects.ts`** — cada proyecto tiene `demoUrl` y `githubUrl` sin definir (por eso las tarjetas muestran "Live Demo"/"GitHub" atenuados). A medida que subas cada repo a GitHub y lo despliegues en Vercel, agrega esas URLs aquí — las tarjetas se activan automáticamente.
- **Thorvane** — `FEATURED.githubUrl` está sin definir a propósito: el repositorio interno de desarrollo no debe enlazarse públicamente. Complétalo con el repositorio público real de Thorvane cuando exista.

## Despliegue

Preparado para Vercel: `npm run build` sin pasos adicionales, sin variables de entorno requeridas.

## Estado

MVP funcional y probado localmente (build, lint, y verificación visual con Playwright en desktop y mobile — sin errores de consola).
