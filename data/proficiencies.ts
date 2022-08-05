import { Proficiency, Level, Skill, Language } from "./types";

const proficiencies: Proficiency[] = [
  {
    name: "Typescript",
    level: Level.High,
    tags: [Skill.Language, Language.Typescript, Skill.Frontend],
  },
  {
    name: "Javascript",
    level: Level.High,
    tags: [Skill.Language, Language.Javascript, Skill.Frontend],
  },
  {
    name: "Python",
    level: Level.High,
    tags: [Skill.Language, Language.Python, Skill.Backend],
  },
  {
    name: "Scala",
    level: Level.High,
    tags: [Skill.Language, Language.Scala, Skill.Backend],
  },
  {
    name: "C#",
    level: Level.Moderate,
    tags: [Skill.Language, Language.CSharp],
  },
  {
    name: "CSS",
    level: Level.High,
    tags: [Skill.Language, Skill.Frontend],
  },
  {
    name: "SCSS",
    level: Level.High,
    tags: [Skill.Language, Skill.Frontend],
  },
  {
    name: "Test Driven Development",
    level: Level.High,
    tags: [Skill.Concept],
  },
  {
    name: "Microservice Architecture",
    level: Level.High,
    tags: [Skill.Concept, Skill.Backend],
  },
  {
    name: "Distributed Systems",
    level: Level.High,
    tags: [Skill.Concept, Skill.Backend],
  },
  {
    name: "Application Monitoring",
    level: Level.Moderate,
    tags: [Skill.Concept],
  },
  {
    name: "Akka",
    level: Level.Moderate,
    tags: [Skill.Framework, Language.Scala, Skill.Backend],
  },
  {
    name: "Cats",
    level: Level.High,
    tags: [Skill.Technology, Language.Scala, Skill.Backend],
  },
  {
    name: "OpenAPI",
    level: Level.High,
    tags: [Skill.Concept],
  },
  {
    name: "React",
    level: Level.High,
    tags: [
      Skill.Framework,
      Language.Javascript,
      Language.Typescript,
      Skill.Frontend,
    ],
  },
  {
    name: "Redux",
    level: Level.High,
    tags: [
      Skill.Framework,
      Language.Javascript,
      Language.Typescript,
      Skill.Frontend,
    ],
  },
  {
    name: "Material UI",
    level: Level.Moderate,
    tags: [
      Skill.Framework,
      Language.Javascript,
      Language.Typescript,
      Skill.Frontend,
    ],
  },
  {
    name: "Redis",
    level: Level.Moderate,
    tags: [Skill.Technology, Skill.Database, Skill.Backend],
  },
  {
    name: "Django",
    level: Level.High,
    tags: [Skill.Framework, Language.Python, Skill.Backend],
  },
  {
    name: "PostgreSQL",
    level: Level.High,
    tags: [Skill.Technology, Skill.Backend],
  },
  {
    name: "Sentry",
    level: Level.Moderate,
    tags: [Skill.Vendor],
  },
  {
    name: "Twilio",
    level: Level.Moderate,
    tags: [Skill.Vendor],
  },
  {
    name: "Mandrill",
    level: Level.Moderate,
    tags: [Skill.Vendor],
  },
  {
    name: "Square",
    level: Level.Moderate,
    tags: [Skill.Vendor],
  },
  {
    name: "Unix",
    level: Level.High,
    tags: [Skill.Technology, Skill.Backend],
  },
  {
    name: "Stripe",
    level: Level.Moderate,
    tags: [Skill.Vendor],
  },
  {
    name: "Relational Databases",
    level: Level.High,
    tags: [Skill.Concept, Skill.Backend],
  },
  {
    name: "Document Stores",
    level: Level.High,
    tags: [Skill.Concept, Skill.Backend],
  },
  {
    name: "Git",
    level: Level.High,
    tags: [Skill.Technology],
  },
  {
    name: "Django REST Framework",
    level: Level.High,
    tags: [Skill.Framework, Language.Python, Skill.Backend],
  },
  {
    name: "AWS",
    level: Level.High,
    tags: [Skill.Vendor, Skill.Backend],
  },
  {
    name: "Google Cloud",
    level: Level.High,
    tags: [Skill.Vendor, Skill.Backend],
  },
  {
    name: "Bash",
    level: Level.Moderate,
    tags: [Skill.Language],
  },
  {
    name: "HBase",
    level: Level.Low,
    tags: [Skill.Database, Skill.Backend],
  },
  {
    name: "Kafka Streams",
    level: Level.Moderate,
    tags: [Skill.Technology, Skill.Backend],
  },
  {
    name: "Finagle",
    level: Level.Moderate,
    tags: [Skill.Framework, Skill.Backend],
  },
  {
    name: "Celery",
    level: Level.High,
    tags: [Skill.Technology, Skill.Backend],
  },
  {
    name: "SQL",
    level: Level.High,
    tags: [Skill.Language, Skill.Database, Skill.Backend],
  },
  {
    name: "MySQL",
    level: Level.High,
    tags: [Skill.Technology, Skill.Database, Skill.Backend],
  },
  {
    name: "Mailgun",
    level: Level.Moderate,
    tags: [Skill.Vendor, Skill.Backend],
  },
  {
    name: "nginx",
    level: Level.Low,
    tags: [Skill.Technology, Skill.Frontend],
  },
  {
    name: "Apache Web Server",
    level: Level.Low,
    tags: [Skill.Technology, Skill.Frontend],
  },
  {
    name: "Elasticsearch",
    level: Level.Low,
    tags: [Skill.Technology],
  },
  {
    name: "Websockets",
    level: Level.Moderate,
    tags: [
      Skill.Concept,
      Language.Javascript,
      Language.Typescript,
      Skill.Frontend,
      Skill.Backend,
    ],
  },
  {
    name: "Unity3D",
    level: Level.Moderate,
    tags: [Skill.Technology, Language.CSharp],
  },
];

export default proficiencies;
