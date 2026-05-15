export type EducationType = "degree" | "certification";

export interface EducationEntry {
  type: EducationType;
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: EducationEntry[] = [
  {
    type: "degree",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    institution: "Cesur",
    period: "2022 – 2024",
    description:
      "Ciclo Formativo de Grado Superior (CFGS). Formación en desarrollo web full stack, bases de datos, despliegue de aplicaciones y metodologías de desarrollo de software.",
  },
  {
    type: "certification",
    title: "Cambridge C2 Proficiency (CPE)",
    institution: "Cambridge Assessment English",
    period: "2022",
  },
];
