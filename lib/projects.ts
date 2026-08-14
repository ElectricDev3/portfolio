export interface Project {
  codename: string;
  portfolioId: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  screenshot: string;
  demoUrl?: string;
  githubUrl?: string;
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    codename: "QIProject",
    portfolioId: "QI2Prf",
    name: "Quorel",
    tagline: "Cotizaciones y facturas con cálculo automático",
    problem:
      "Cotizar y facturar a mano en una hoja de cálculo es lento y propenso a errores de cálculo.",
    solution:
      "Documentos con líneas de conceptos, subtotal/descuento/impuesto calculados en vivo, vista previa profesional y exportación a PDF real.",
    stack: ["Next.js", "TypeScript", "Tailwind", "@react-pdf/renderer"],
    screenshot: "/screenshots/qi-quorel.png",
    accent: "#6366F1",
  },
  {
    codename: "IMProject",
    portfolioId: "IM2Prf",
    name: "Stashline",
    tagline: "Control de inventario con alertas de reabastecimiento",
    problem:
      "Sin visibilidad clara del stock, un negocio pequeño descubre que se quedó sin producto cuando ya es tarde.",
    solution:
      "Catálogo con ajuste rápido de cantidades, estados automáticos de stock y un dashboard con valor de inventario y alertas.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/im-stashline.png",
    accent: "#F59E0B",
  },
  {
    codename: "TMProject",
    portfolioId: "TM2Prf",
    name: "Fluxboard",
    tagline: "Proyectos y tareas en tableros kanban",
    problem:
      "Repartir el trabajo entre notas sueltas y chats hace que las tareas se pierdan entre proyectos.",
    solution:
      "Un tablero kanban por proyecto con arrastrar y soltar nativo, prioridades, fechas límite y progreso visible.",
    stack: ["Next.js", "TypeScript", "Tailwind", "HTML5 Drag & Drop"],
    screenshot: "/screenshots/tm-fluxboard.png",
    accent: "#10B981",
  },
  {
    codename: "BMProject",
    portfolioId: "BM2Prf",
    name: "Marqly",
    tagline: "Enlaces guardados, organizados y con favicon real",
    problem:
      "Los marcadores del navegador no se buscan ni se organizan bien entre dispositivos.",
    solution:
      "Un gestor de enlaces independiente con categorías, favoritos y búsqueda, con el ícono real de cada sitio.",
    stack: ["Next.js", "TypeScript", "Tailwind", "next/image"],
    screenshot: "/screenshots/bm-marqly.png",
    accent: "#8B5CF6",
  },
  {
    codename: "FBProject",
    portfolioId: "FB2Prf",
    name: "Formora",
    tagline: "Constructor de formularios con vista previa real",
    problem:
      "Armar un formulario de contacto o encuesta rápida suele significar depender de una herramienta externa.",
    solution:
      "Editor de 7 tipos de campo, vista previa funcional con validación, y una tabla de respuestas recibidas.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/fb-formora.png",
    accent: "#06B6D4",
  },
  {
    codename: "MDProject",
    portfolioId: "MD2Prf",
    name: "Metrixa",
    tagline: "Dashboard de métricas con gráficas hechas a mano",
    problem:
      "Un producto necesita ver sus métricas clave de un vistazo, comparadas contra el período anterior.",
    solution:
      "Gráficas de línea y barra en SVG puro (sin librerías de charting), con crosshair, tooltips y paleta validada por accesibilidad de color.",
    stack: ["Next.js", "TypeScript", "Tailwind", "SVG a mano"],
    screenshot: "/screenshots/md-metrixa.png",
    accent: "#EC4899",
  },
  {
    codename: "MEProject",
    portfolioId: "ME2Prf",
    name: "Scoutlens",
    tagline: "Explorador de mercado con datos reales de la App Store",
    problem:
      "Antes de construir un producto conviene saber qué competidores ya existen, a qué precio y qué tan bien calificados están.",
    solution:
      "Búsqueda en vivo contra la iTunes Search API vía un proxy propio, con filtros y comparación lado a lado de hasta 3 apps.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Route Handlers", "iTunes Search API"],
    screenshot: "/screenshots/me-scoutlens.png",
    accent: "#F97316",
  },
  {
    codename: "TAProject",
    portfolioId: "TA2Prf",
    name: "Lexmind",
    tagline: "Herramienta de IA para procesamiento de texto",
    problem:
      "Procesar texto con IA suele significar volver a interpretar una respuesta en prosa libre.",
    solution:
      "Cuatro modos (resumen, corrección, tono, sentimiento) con salidas estructuradas garantizadas vía JSON Schema sobre la API de Claude.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Claude API"],
    screenshot: "/screenshots/ta-lexmind.png",
    accent: "#14B8A6",
  },
];

export const FEATURED = {
  // "codename" es el identificador técnico interno de SCStudios — nunca se muestra en la UI pública.
  codename: "SCProject",
  name: "Thorvane",
  tagline: "Un socio estratégico de IA para estructurar una idea de negocio",
  description:
    "Thorvane ayuda a emprendedores a convertir una idea en un proyecto estructurado junto a Andrew, un socio estratégico de IA que investiga mercado, competencia y riesgos antes de que el usuario invierta tiempo o dinero en algo sin validar. No es un chat genérico: tiene un método fijo y repetible, memoria por proyecto, y una personalidad que cuestiona en vez de solo responder.",
  stack: ["Next.js 16", "TypeScript", "Tailwind", "Supabase", "Claude API", "Voyage AI"],
  // TODO: reemplazar con el repositorio público real de Thorvane cuando exista
  // (NO usar el repo interno de SCProject).
  githubUrl: undefined as string | undefined,
};
