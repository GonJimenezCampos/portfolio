export interface ExperienceEntry {
  company: string;
  location: string;
  current: boolean;
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Codearts Solutions",
    location: "Sevilla, España · Remoto",
    current: true,
    stack: ["Symfony", "Angular", "React Native", "PHP", "TypeScript"],
  },
  {
    company: "Ayesa",
    location: "Sevilla, España · Híbrido",
    current: false,
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "Docker"],
  },
];
