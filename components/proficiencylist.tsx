import { useMemo, useState } from "react";
import proficiencies from "../data/proficiencies";
import { Proficiency, Skill } from "../data/types";
import styles from "../styles/ProficiencyList.module.css";
import ProficiencyFilters from "./proficiencyFilter";

function matchesFeature(feature: string, proficiency: Proficiency): boolean {
  const [featureType, featureValue] = feature.split("-");
  if (featureType === "proficiency") {
    return proficiency.level === featureValue;
  }
  if (featureType === "lang" || featureType == "discipline") {
    return proficiency.tags.find((c) => c === featureValue) !== undefined;
  }
  return false;
}

type SkillToLabel = Record<Skill, string>;
const skillToLabel: SkillToLabel = {
  [Skill.Language]: "Language",
  [Skill.Technology]: "Technology",
  [Skill.Framework]: "Framework",
  [Skill.Database]: "Database",
  [Skill.Concept]: "Concept",
  [Skill.Backend]: "Backend",
  [Skill.Frontend]: "Frontend",
  [Skill.Vendor]: "Vendor",
};

const categoriesToGroup = [
  Skill.Language,
  Skill.Framework,
  Skill.Database,
  Skill.Concept,
  Skill.Vendor,
  Skill.Technology,
];

function getMatchingFeatures(
  proficiencies: Proficiency[],
  filters: Set<string>
): Proficiency[] {
  if (filters.size === 0) {
    return proficiencies;
  }
  return proficiencies.filter(
    (p) =>
      Array.from(filters).find((feature) => {
        return matchesFeature(feature, p);
      }) !== undefined,
    proficiencies
  );
}

const ProficiencyList = () => {
  const [filters, setFilters] = useState(new Set<string>());

  const filtered: Proficiency[] = useMemo(
    () => getMatchingFeatures(proficiencies, filters),
    [filters]
  );

  const proficienciesBySkill = useMemo(
    () =>
      categoriesToGroup.flatMap((skill) => {
        const matching = filtered
          .filter((s) => s.tags.includes(skill))
          .map((s) => <li key={s.name}>{s.name}</li>);

        if (matching.length === 0) {
          return [];
        }

        return [
          <li key={skill} className={styles.category}>
            <span className={styles.categoryName}>{skillToLabel[skill]}</span>
            <ul className={styles.skills}>{matching}</ul>
          </li>,
        ];
      }),
    [filtered]
  );

  return (
    <div className={styles.proficiencyList}>
      <ProficiencyFilters
        filters={filters}
        onUpdate={(updated) => setFilters(updated)}
      />
      <ul className={styles.skillList}>{proficienciesBySkill}</ul>
    </div>
  );
};

export default ProficiencyList;
