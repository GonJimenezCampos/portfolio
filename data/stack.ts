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
  /** Translation key used to look up the label in messages/[locale].json */
  key: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    key: "languages",
    items: [
      { name: "PHP", icon: siPhp },
      { name: "Python", icon: siPython },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Symfony", icon: siSymfony },
      { name: "Django", icon: siDjango },
    ],
  },
  {
    key: "frontend_mobile",
    items: [
      { name: "Angular", icon: siAngular },
      { name: "React Native", icon: siReact },
      { name: "Expo", icon: siExpo },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: siGit },
      { name: "Docker", icon: siDocker },
      { name: "Composer", icon: siComposer },
      { name: "Postman", icon: siPostman },
    ],
  },
];
