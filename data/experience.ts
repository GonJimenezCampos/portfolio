export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Codearts Solutions",
    role: "Backend Developer",
    period: "Mar 2025 – Actualidad",
    location: "Sevilla, España · Remoto",
    current: true,
    bullets: [
      "Desarrollo backend y referente técnico en proyectos para los sectores de ocio y hostelería.",
      "Coordinación directa con cliente y toma de decisiones técnicas en equipos pequeños.",
      "Proyectos destacados: Making Of, Museo Cartuja, DPTelemetry.",
    ],
    stack: ["Symfony", "Angular", "React Native", "PHP", "TypeScript"],
  },
  {
    company: "Ayesa",
    role: "Fullstack Developer — Prácticas",
    period: "Mar 2024 – Jun 2024",
    location: "Sevilla, España · Híbrido",
    current: false,
    bullets: [
      "Prácticas dentro del equipo asignado al cliente Repsol para el desarrollo del portal de administración interna de WiBLE, servicio de car-sharing en Madrid (joint venture entre Repsol y Kia).",
      "Desarrollo de nuevas funcionalidades y mejora de las existentes con Python, Django y PostgreSQL, junto con tareas puntuales de frontend en JavaScript.",
      "Trabajo con Docker para el entorno de desarrollo en un equipo con metodologías Scrum y Kanban.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "Docker"],
  },
];
