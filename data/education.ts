export type EducationType = "degree" | "certification";

export interface EducationEntry {
  type: EducationType;
}

export const education: EducationEntry[] = [
  { type: "degree" },
  { type: "certification" },
];
