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
  // Nivel de complejidad/alcance interno del portafolio (nunca se muestra como texto "Grado N" en la UI pública).
  tier: 2 | 3;
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
    demoUrl: "https://quorel-phi.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/quorel",
    accent: "#6366F1",
    tier: 2,
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
    demoUrl: "https://stashline.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/stashline",
    accent: "#F59E0B",
    tier: 2,
  },
  {
    codename: "TMProject",
    portfolioId: "TM2Prf",
    name: "Fluxboard",
    tagline: "Proyectos y tareas en tableros kanban",
    problem:
      "Repartir el trabajo entre notas sueltas y chats hace que las tareas se pierdan entre proyectos.",
    solution:
      "Un tablero kanban por proyecto con arrastrar y soltar nativo, prioridades, fechas límite, y un link de solo lectura para compartir el avance con el cliente sin darle acceso al tablero.",
    stack: ["Next.js", "TypeScript", "Tailwind", "HTML5 Drag & Drop"],
    screenshot: "/screenshots/tm-fluxboard.png",
    demoUrl: "https://fluxboard-eight.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/fluxboard",
    accent: "#10B981",
    tier: 2,
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
    demoUrl: "https://formora-flax.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/formora",
    accent: "#06B6D4",
    tier: 2,
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
    demoUrl: "https://scoutlens-mocha.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/scoutlens",
    accent: "#F97316",
    tier: 2,
  },
  {
    codename: "RNProject",
    portfolioId: "RN2Prf",
    name: "Renewly",
    tagline: "Sabe quién está por vencer antes de que se te vaya",
    problem:
      "Sin un sistema real, un negocio de servicio recurrente descubre que un miembro no renovó cuando ya se fue, no antes.",
    solution:
      "Registra miembros con su plan y fecha de renovación; calcula en tiempo real quién está por vencer o ya venció, con ingreso recurrente estimado y una lista priorizada por urgencia real, no por orden de captura.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/rn-renewly.png",
    demoUrl: "https://renewly-sigma.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/renewly",
    accent: "#0891B2",
    tier: 2,
  },
  {
    codename: "BKProject",
    portfolioId: "BK2Prf",
    name: "Slotwise",
    tagline: "Reservas y citas sin choques, con link público",
    problem:
      "Agendar citas por mensajes de ida y vuelta hace perder tiempo y termina en horarios encimados.",
    solution:
      "Página de reservas pública con disponibilidad semanal, cálculo de horarios libres en tiempo real, y una restricción de base de datos que hace literalmente imposible una doble reserva.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Neon Postgres", "JWT"],
    screenshot: "/screenshots/bk-slotwise.png",
    demoUrl: "https://slotwise-beta.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/slotwise",
    accent: "#3B82F6",
    tier: 2,
  },
  {
    codename: "CSProject",
    portfolioId: "CS2Prf",
    name: "Costora",
    tagline: "Sabe cuánto te cuesta cada platillo antes de venderlo",
    problem:
      "Sin costear cada receta a detalle, un negocio de comida no sabe si un platillo popular en realidad le está dejando margen o casi no gana nada.",
    solution:
      "Registra ingredientes con su costo real, arma recetas combinándolos, y calcula al instante el costo por porción, el margen real, y un precio sugerido para el margen que quieras — todo ordenado por rentabilidad.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/cs-costora.png",
    demoUrl: "https://costora-delta.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/costora",
    accent: "#EA580C",
    tier: 2,
  },
  {
    codename: "GFProject",
    portfolioId: "GF2Prf",
    name: "Guestflow",
    tagline: "Cada invitado, confirmado",
    problem:
      "Confirmar asistencia a un evento por chat o llamada dispersa las respuestas y nadie sabe el conteo real hasta el último momento.",
    solution:
      "Crea un evento y comparte un solo link público — los invitados confirman sin cuenta (sí/no/tal vez, acompañantes, notas dietéticas) y el conteo llega en vivo al panel del anfitrión.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Neon Postgres", "JWT"],
    screenshot: "/screenshots/gf-guestflow.png",
    demoUrl: "https://guestflow-pi.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/guestflow",
    accent: "#B45309",
    tier: 2,
  },
  {
    codename: "HDProject",
    portfolioId: "HD2Prf",
    name: "Deskly",
    tagline: "Mesa de ayuda con tickets, sin cuenta para el cliente",
    problem:
      "Atender soporte por correo o WhatsApp desordena las conversaciones y no deja rastro claro del estado de cada caso.",
    solution:
      "Los clientes abren tickets y les dan seguimiento con un código y su correo, sin crear cuenta; el negocio responde desde un panel con estado y prioridad.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Neon Postgres", "JWT"],
    screenshot: "/screenshots/hd-deskly.png",
    demoUrl: "https://deskly-amber.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/deskly",
    accent: "#EF4444",
    tier: 2,
  },
  {
    codename: "EXProject",
    portfolioId: "EX2Prf",
    name: "Ledgerly",
    tagline: "Gastos de freelancer, categorizados y exportables",
    problem:
      "Llevar los gastos del negocio en notas sueltas hace que armar la declaración o una factura sea un dolor de cabeza.",
    solution:
      "Registro de gastos por categoría y cliente, desglose visual del período, y exportación a CSV lista para el contador.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/ex-ledgerly.png",
    demoUrl: "https://ledgerly-scstudios.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/ledgerly",
    accent: "#84CC16",
    tier: 2,
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
    demoUrl: "https://marqly-brown.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/marqly",
    accent: "#8B5CF6",
    tier: 3,
  },
  {
    codename: "TAProject",
    portfolioId: "TA2Prf",
    name: "Lexmind",
    tagline: "Herramienta de análisis y procesamiento de texto",
    problem:
      "Contar, medir, buscar/reemplazar y formatear texto suele implicar copiar y pegar entre varias herramientas sueltas.",
    solution:
      "Estadísticas, frecuencia de palabras, buscar y reemplazar, y transformaciones de formato — todo calculado con lógica local en el navegador, sin backend ni claves de API.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/ta-lexmind.png",
    demoUrl: "https://lexmind-nu.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/lexmind",
    accent: "#14B8A6",
    tier: 3,
  },
  {
    codename: "MDProject",
    portfolioId: "MD2Prf",
    name: "Metrixa",
    tagline: "Convierte cualquier CSV en gráficas, en segundos",
    problem:
      "Un CSV con datos reales normalmente termina pegado en una hoja de cálculo solo para hacer una gráfica rápida.",
    solution:
      "Pega o sube un CSV, elige las columnas, y obtén una gráfica de línea o barra en SVG — sin datos de ejemplo falsos, solo tus datos reales.",
    stack: ["Next.js", "TypeScript", "Tailwind", "SVG a mano"],
    screenshot: "/screenshots/md-metrixa.png",
    demoUrl: "https://metrixa-beta.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/metrixa",
    accent: "#EC4899",
    tier: 3,
  },
  {
    codename: "CPProject",
    portfolioId: "CP2Prf",
    name: "Huemap",
    tagline: "Paletas de color validadas para accesibilidad real",
    problem:
      "Elegir colores 'a ojo' suele producir paletas que fallan en contraste o que dos personas con daltonismo no logran distinguir.",
    solution:
      "Genera o valida paletas calculando contraste WCAG y separación de color bajo simulación de daltonismo, no adivinando.",
    stack: ["Next.js", "TypeScript", "Tailwind", "OKLab/OKLCH a mano"],
    screenshot: "/screenshots/cp-huemap.png",
    demoUrl: "https://huemap-five.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/huemap",
    accent: "#D946EF",
    tier: 3,
  },
  {
    codename: "RXProject",
    portfolioId: "RX2Prf",
    name: "Patternly",
    tagline: "Playground de regex con explicación en español",
    problem:
      "Escribir una expresión regular a ciegas y solo descubrir el error cuando falla en producción es un mal momento para aprender.",
    solution:
      "Resalta las coincidencias en vivo, lista los grupos capturados, y explica cada parte del patrón en español, carácter por carácter.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/rx-patternly.png",
    demoUrl: "https://patternly-smoky.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/patternly",
    accent: "#0EA5E9",
    tier: 3,
  },
  {
    codename: "JTProject",
    portfolioId: "JT2Prf",
    name: "Jsonly",
    tagline: "Formatea, valida y compara JSON sin salir del navegador",
    problem:
      "Un JSON mal formado solo dice 'Unexpected token' sin decir dónde, y comparar dos versiones a mano es lento.",
    solution:
      "Valida con línea y columna exacta del error, muestra el JSON como árbol navegable, y compara dos versiones línea por línea.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/jt-jsonly.png",
    demoUrl: "https://jsonly-pink.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/jsonly",
    accent: "#F43F5E",
    tier: 3,
  },
  {
    codename: "MKProject",
    portfolioId: "MK2Prf",
    name: "Inkline",
    tagline: "Editor de Markdown con vista previa y exportación real",
    problem:
      "Escribir en Markdown sin ver el resultado final invita a errores de formato que solo se notan al publicar.",
    solution:
      "Vista previa en vivo con resaltado de código, y exportación a HTML o PDF vía el motor de impresión del navegador, con el HTML sanitizado contra scripts maliciosos.",
    stack: ["Next.js", "TypeScript", "Tailwind", "marked", "DOMPurify"],
    screenshot: "/screenshots/mk-inkline.png",
    demoUrl: "https://inkline-steel.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/inkline",
    accent: "#A855F7",
    tier: 3,
  },
  {
    codename: "ICProject",
    portfolioId: "IC2Prf",
    name: "Squeezr",
    tagline: "Comprime y convierte imágenes sin subirlas a ningún lado",
    problem:
      "Comprimir imágenes antes de subirlas a un sitio normalmente implica pasarlas por una herramienta en línea, cediendo el archivo a un tercero.",
    solution:
      "Arrastra tus imágenes, ajusta calidad y formato, y descarga — todo el procesamiento ocurre en tu navegador vía Canvas, sin backend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Canvas API"],
    screenshot: "/screenshots/ic-squeezr.png",
    demoUrl: "https://squeezr-gamma.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/squeezr",
    accent: "#EAB308",
    tier: 3,
  },
  {
    codename: "EPProject",
    portfolioId: "EP3Prf",
    name: "Epochly",
    tagline: "Convierte timestamps y zonas horarias, al instante",
    problem:
      "Depurar un timestamp Unix o comparar una hora entre zonas horarias normalmente significa abrir una calculadora aparte y hacer la cuenta a mano.",
    solution:
      "Pega un timestamp (detecta segundos o milisegundos) o elige una fecha, y ve la conversión en vivo a ISO 8601, RFC 2822 y varias zonas horarias a la vez — con Intl.DateTimeFormat nativo, sin backend.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    screenshot: "/screenshots/ep-epochly.png",
    demoUrl: "https://epochly-pi.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/epochly",
    accent: "#D97706",
    tier: 3,
  },
  {
    codename: "QRProject",
    portfolioId: "QR3Prf",
    name: "Qrafted",
    tagline: "Códigos QR reales, con estilo propio",
    problem:
      "La mayoría de los generadores de QR gratuitos producen un código genérico en blanco y negro, sin control real del diseño ni exportación de calidad.",
    solution:
      "Codifica URL, texto, WiFi o una tarjeta de contacto con el mismo algoritmo de corrección de errores que usa cualquier lector comercial, y aplica color y forma de esquina antes de exportar en SVG o PNG.",
    stack: ["Next.js", "TypeScript", "Tailwind", "qrcode"],
    screenshot: "/screenshots/qr-qrafted.png",
    demoUrl: "https://qrafted-zeta.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/qrafted",
    accent: "#4338CA",
    tier: 3,
  },
  {
    codename: "ENProject",
    portfolioId: "EN3Prf",
    name: "Encodex",
    tagline: "Base64, URL, hex y hashes — todo en tu navegador",
    problem:
      "Codificar/decodificar Base64 o sacar un hash rápido de un texto normalmente implica abrir una consola o pegar el dato en un sitio de terceros.",
    solution:
      "Cuatro módulos — Base64, URL, hex y hashes (SHA-1/SHA-256 vía Web Crypto nativo) — con codificación y decodificación en tiempo real, 100% en el navegador, sin backend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Web Crypto API"],
    screenshot: "/screenshots/en-encodex.png",
    demoUrl: "https://encodex-teal.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/encodex",
    accent: "#1D4ED8",
    tier: 3,
  },
  {
    codename: "IFProject",
    portfolioId: "IF3Prf",
    name: "Iconforge",
    tagline: "Sube una imagen, descarga todos los tamaños de ícono que necesitas",
    problem:
      "Generar favicons y app icons a mano en cada tamaño estándar (16, 32, 48, 180, 192, 512, .ico) es repetitivo y fácil de dejar incompleto.",
    solution:
      "Sube una imagen, recórtala a cuadrado, y descarga un ZIP con los 6 tamaños PNG reales, un favicon.ico multi-resolución armado a mano, y el snippet de HTML listo para pegar — todo procesado en tu navegador vía Canvas, sin backend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Canvas API", "JSZip"],
    screenshot: "/screenshots/if-iconforge.png",
    demoUrl: "https://iconforge-eight.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/iconforge",
    accent: "#C2410C",
    tier: 3,
  },
  {
    codename: "PFProject",
    portfolioId: "PF3Prf",
    name: "Passforge",
    tagline: "Contraseñas forjadas, no adivinadas",
    problem:
      "La mayoría de los generadores de contraseñas muestran una barra de 'fortaleza' inventada a ojo, sin ningún cálculo real detrás.",
    solution:
      "Genera contraseñas o passphrases con crypto.getRandomValues (criptográficamente seguro, nunca Math.random) y calcula la entropía real en bits, con tiempo de crackeo estimado a la vista — no una barra de colores puesta a ojo.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Web Crypto API"],
    screenshot: "/screenshots/pf-passforge.png",
    demoUrl: "https://passforge-lime.vercel.app",
    githubUrl: "https://github.com/ElectricDev3/passforge",
    accent: "#DC2626",
    tier: 3,
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
  screenshot: "/screenshots/sc-thorvane.png",
  // Repositorio público de exhibición (copia recortada y rebrandeada del
  // código real, sin docs internos) — NO es el repo interno de SCProject.
  githubUrl: "https://github.com/ElectricDev3/thorvane" as string | undefined,
};

export interface InProgressProject {
  name: string;
  nameNote: string;
  tagline: string;
  description: string;
  stack: string[];
  screenshot: string;
}

// Grado 1 en desarrollo activo — no está en PROJECTS ni tiene el mismo tratamiento
// que FEATURED porque, a diferencia de esos, todavía no está terminado ni probado.
// Se muestra con honestidad como "en desarrollo", no como un producto más.
export const IN_PROGRESS: InProgressProject = {
  name: "JARVIS",
  nameNote: "nombre provisional",
  tagline: "De chat de texto a un asistente de voz con identidad visual propia",
  description:
    "JARVIS es el asistente operativo personal de Wili: corre como app de escritorio, con memoria persistente entre conversaciones y un conjunto de reglas de operación fijas que respeta siempre. Hoy es un MVP de texto — solo tiene acceso a memoria y a la hora, y lo dice explícitamente en vez de simular que puede hacer más. El rediseño ya está definido: control por voz (push-to-talk, sin palabra de activación) y una esfera de cientos de puntos conectados como única interfaz — sin ventana de chat ni texto en pantalla. Todavía no implementado.",
  stack: ["Electron", "React", "TypeScript", "Claude API"],
  screenshot: "/screenshots/jv-jarvis.png",
};
