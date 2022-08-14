export enum Level {
  Low = "low",
  Moderate = "mid",
  High = "high",
}

export enum Skill {
  Language = "lang",
  Technology = "tech",
  Framework = "framework",
  Database = "database",
  Concept = "concept",
  Backend = "backend",
  Frontend = "frontend",
  Vendor = "vendor",
}

export enum Language {
  Scala = "Scala",
  Python = "Python",
  CSharp = "C#",
  SQL = "SQL",
  Typescript = "Typescript",
  Javascript = "Javascript",
}

export type Tag = Skill | Language;

export interface Proficiency {
  name: string;
  level: Level;
  tags: Tag[];
}

export interface Time {
  month?: string;
  year?: number;
  description?: string;
}
