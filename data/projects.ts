export type ProjectType = "professional" | "personal";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "WiBLE — Portal de Administración",
    type: "professional",
    description:
      "Portal de administración interna del servicio de car-sharing WiBLE (joint venture entre Repsol y Kia, operativo en Madrid). Desarrollado durante las prácticas en Ayesa dentro del equipo asignado al cliente Repsol.",
    highlights: [
      "Desarrollo de nuevas funcionalidades y mejora de las existentes en la herramienta de administración con Python y Django.",
      "Integración con PostgreSQL y tareas puntuales de frontend en JavaScript.",
      "Entorno Docker con metodologías Scrum y Kanban en un equipo de cliente corporativo real.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "Docker"],
    links: [],
  },
  {
    title: "DPTelemetry App",
    type: "professional",
    description:
      "Aplicación móvil de telemetría en tiempo real para competición de automovilismo. Permite a los pilotos y equipos monitorizar sesiones de carrera, visualizar trayectorias GPS en mapa y seguir el leaderboard en vivo durante los eventos.",
    highlights: [
      "Mapa en vivo con posiciones de hasta 5 dispositivos actualizadas a 20 Hz vía WebSocket.",
      "Historial de sesiones con telemetría paginada, tiempos por vuelta y filtros avanzados.",
      "Autenticación completa con JWT, refresh token automático y almacenamiento seguro con expo-secure-store.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zod", "WebSocket"],
    links: [],
  },
  {
    title: "MakkingOf",
    type: "professional",
    description:
      "Rediseño completo de la plataforma web de MakkingOf, empresa del sector del ocio y la hostelería. Incluye landing pública, sistema de solicitud y gestión de eventos con roles diferenciados (usuario, empresa, administrador) y automatización de notificaciones por email.",
    highlights: [
      "API REST documentada con OpenAPI/Swagger y validada en pipeline de GitLab CI en cada push.",
      "Soft delete con purga automática a los 90 días mediante Symfony Scheduler y Messenger.",
      "Despliegue en VPS con Docker Compose, Nginx y certificado SSL automático vía Certbot.",
    ],
    stack: ["Symfony", "Angular", "PostgreSQL", "Docker", "JWT", "PHPUnit"],
    links: [],
  },
  {
    title: "Museo Cartuja",
    type: "professional",
    description:
      "Renovación de la plataforma web del Museo Cartuja de Murcia. Aplicación Angular con capacidades PWA para funcionamiento offline, integración de inicio de sesión con Google y pasarela de pagos con Stripe para la venta de entradas.",
    highlights: [
      "PWA con Service Worker y caché de assets: la app funciona sin conexión y se recarga desde caché en visitas posteriores.",
      "Login social con Google Cloud OAuth 2.0 integrado en el backend Symfony.",
      "Pasarela de pagos con Stripe para gestión de entradas y reservas.",
    ],
    stack: ["Symfony", "Angular", "PostgreSQL", "Docker", "Stripe", "PWA"],
    links: [],
  },
];
