export type ProjectType = "professional" | "personal";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  type: ProjectType;
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    type: "professional",
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "Docker"],
    links: [],
  },
  {
    type: "professional",
    stack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zod", "WebSocket"],
    links: [],
  },
  {
    type: "professional",
    stack: ["Symfony", "Angular", "PostgreSQL", "Docker", "JWT", "PHPUnit"],
    links: [],
  },
  {
    type: "professional",
    stack: ["Symfony", "Angular", "PostgreSQL", "Docker", "Stripe", "PWA"],
    links: [],
  },
];
