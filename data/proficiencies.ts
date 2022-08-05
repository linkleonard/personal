import { Proficiency, Level, Skill } from "./types";

const proficiencies: Proficiency[] = [
  {
    name: "Typescript",
    level: Level.High,
    category: [Skill.Language],
  },
  {
    name: "Javascript",
    level: Level.High,
    category: [Skill.Language],
  },
  {
    name: "Python",
    level: Level.High,
    category: [Skill.Language],
  },
  {
    name: "Scala",
    level: Level.High,
    category: [Skill.Language],
  },
  {
    name: "C#",
    level: Level.Low,
    category: [Skill.Language],
  },
  {
    name: "CSS",
    level: Level.Moderate,
    category: [Skill.Language],
  },
  {
    name: "SCSS",
    level: Level.Moderate,
    category: [Skill.Language],
  },
  {
    name: "Test Driven Development",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Microservice Architecture",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Distributed Systems",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Application Monitoring",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Akka",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "Cats",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "OpenAPI",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "React",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "Redux",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "Material UI",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "Redis",
    level: Level.High,
    category: [Skill.Technology, Skill.Database],
  },
  {
    name: "Django",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "PostgreSQL",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Sentry",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Twilio",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Mandrill",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Square",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Unix",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Stripe",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Relational Databases",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Document Stores",
    level: Level.High,
    category: [Skill.Concept],
  },
  {
    name: "Git",
    level: Level.High,
    category: [Skill.Technology],
  },
  {
    name: "Django REST Framework",
    level: Level.High,
    category: [Skill.Framework],
  },
  {
    name: "AWS",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Google Cloud",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Bash",
    level: Level.Moderate,
    category: [Skill.Language],
  },
  {
    name: "HBase",
    level: Level.Moderate,
    category: [Skill.Technology, Skill.Database],
  },
  {
    name: "Kafka",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Finagle",
    level: Level.Moderate,
    category: [Skill.Framework],
  },
  {
    name: "Celery",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "SQL",
    level: Level.Moderate,
    category: [Skill.Language, Skill.Database],
  },
  {
    name: "MySQL",
    level: Level.Moderate,
    category: [Skill.Technology, Skill.Database],
  },
  {
    name: "Mailgun",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "nginx",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Apache Web Server",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Elasticsearch",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
  {
    name: "Websockets",
    level: Level.Moderate,
    category: [Skill.Concept],
  },
  {
    name: "Unity3D",
    level: Level.Moderate,
    category: [Skill.Technology],
  },
];

export default proficiencies;
