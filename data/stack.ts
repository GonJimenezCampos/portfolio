import type { SimpleIcon } from "simple-icons";
import {
  siPhp,
  siPython,
  siTypescript,
  siJavascript,
  siSymfony,
  siDjango,
  siAngular,
  siReact,
  siExpo,
  siPostgresql,
  siMysql,
  siGit,
  siDocker,
  siComposer,
  siPostman,
} from "simple-icons";

export interface TechItem {
  name: string;
  icon: SimpleIcon;
}

export interface StackCategory {
  label: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    label: "Lenguajes",
    items: [
      { name: "PHP", icon: siPhp },
      { name: "Python", icon: siPython },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Symfony", icon: siSymfony },
      { name: "Django", icon: siDjango },
    ],
  },
  {
    label: "Frontend & Móvil",
    items: [
      { name: "Angular", icon: siAngular },
      { name: "React Native", icon: siReact },
      { name: "Expo", icon: siExpo },
    ],
  },
  {
    label: "Bases de datos",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
    ],
  },
  {
    label: "Herramientas",
    items: [
      { name: "Git", icon: siGit },
      { name: "Docker", icon: siDocker },
      { name: "Composer", icon: siComposer },
      { name: "Postman", icon: siPostman },
    ],
  },
];
