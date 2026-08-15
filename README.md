# Portafolio — ElectricDev

Sitio de portafolio técnico. Presenta a **Thorvane** como proyecto principal, 8 micro-SaaS y 8 utilidades adicionales — 16 productos en total — cada uno con su nombre de producto, el problema que resuelve, la solución, el stack usado, y capturas reales de la app corriendo.

> **Nota de confidencialidad:** cada proyecto del portafolio tiene un identificador técnico interno de SCStudios (carpeta/repo de desarrollo). Esos identificadores son confidenciales y **nunca se muestran en la interfaz pública** — ni en tarjetas, títulos, navegación, metadata visible ni en este README. Solo se usan internamente en `lib/projects.ts` como datos de trabajo (comentados como tal) para uso futuro del equipo, no para mostrarse.

## Niveles (micro-SaaS vs. utilidades)

Internamente cada proyecto en `lib/projects.ts` tiene un campo `tier: 2 | 3` (nivel de complejidad/alcance) que decide en qué sección aparece y qué tan compacta es su tarjeta:

- **`tier: 2` — Micro-SaaS.** Productos con potencial comercial real, complejidad media. Tarjeta grande con problema/solución completos, grid de 3 columnas.
- **`tier: 3` — Utilidades.** Herramientas ligeras, la mayoría 100% en el navegador. Tarjeta compacta (sin párrafos de problema/solución, hasta 3 tags de stack), grid denso de hasta 4 columnas.

El tamaño de tarjeta refleja el nivel, **no** la calidad — ambos niveles usan capturas reales, enlaces reales a demo/GitHub, y el mismo cuidado visual. `tier` es un dato interno de maquetación; nunca aparece como texto "Nivel 2/3" en la UI pública. Thorvane (y, en el futuro, JARVIS) es un nivel aparte por completo — vive en `FEATURED`/`Featured.tsx`, no en `PROJECTS`, y no compite por espacio con el resto.

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
4. **Proyectos** — dos grids: 8 micro-SaaS (tarjeta completa: nombre, problema, solución, stack, captura real, Live Demo y GitHub) y 8 utilidades (tarjeta compacta con la misma información esencial).
5. **Skills** — Frontend, Backend, Database, AI, Infraestructura/Tools.
6. **Instagram** — único canal de contacto/seguimiento (`@wili_desantiago`). Es un portafolio para mostrar trabajo, no una página de "contrátame".

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
  Projects.tsx, ProjectCard.tsx    Los dos grids (micro-SaaS + utilidades), ProjectCard soporta un modo `compact`
  Skills.tsx, Contact.tsx, Footer.tsx
  icons.tsx                        Íconos de GitHub/LinkedIn/Instagram (SVG propio)
lib/
  projects.ts            Datos de los 16 proyectos (con su `tier`) + del proyecto destacado
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

## Pendientes

- **JARVIS** — todavía es un prototipo sin terminar de probar; no se agrega a `PROJECTS` ni a `FEATURED` hasta que esté completo. Cuando lo esté, entra como parte de Grado 1 junto a Thorvane (ver `FEATURED` en `lib/projects.ts` — hoy es un solo objeto, no un array; habrá que decidir si pasa a ser una lista de 2).

## Despliegue

Preparado para Vercel: `npm run build` sin pasos adicionales, sin variables de entorno requeridas.

## Estado

MVP funcional y probado localmente (build, lint, y verificación visual con Playwright en desktop y mobile — sin errores de consola).
