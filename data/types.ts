export enum Level {
  Low = "low",
  Moderate = "moderate",
  High = "high",
}

export enum Skill {
  Language = "lang",
  Technology = "tech",
  Framework = "framework",
  Database = "database",
  Concept = "concept",
}

export interface Proficiency {
  name: string;
  level: Level;
  category: Skill[];
}
