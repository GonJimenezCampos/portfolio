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
    location: "Sevilla, España",
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
    role: "Full Stack Developer — Prácticas",
    period: "Mar 2024 – Jun 2024",
    location: "Sevilla, España",
    current: false,
    bullets: [
      "Prácticas en el equipo de WiBLE (Repsol), plataforma de carsharing.",
      "Desarrollo full stack de nuevas funcionalidades y mantenimiento de la plataforma.",
    ],
    stack: ["Python", "Django", "PostgreSQL"],
  },
];
