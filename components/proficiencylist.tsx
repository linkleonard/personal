import { MouseEventHandler, useMemo, useState } from "react";
import { Proficiency, Skill } from "../data/types";
import proficiencies from "../data/proficiencies";
import styles from "../styles/ProficiencyList.module.css";

interface FilterToggleProps {
  onClick: MouseEventHandler<HTMLInputElement>;
  label: string;
}
const FilterToggle = ({ onClick, label }: FilterToggleProps) => (
  <label>
    <input type="checkbox" onClick={onClick} /> {label}
  </label>
);

const proficiencyFilters = [
  ["Proficient", "proficiency-high"],
  ["Comfortable", "proficiency-mid"],
  ["Familiar", "proficiency-low"],
];

const categoryFilters = Object.values(Skill).map((key) => {
  return [key, `skill-${key}`];
});

function matchesFeature(feature: string, proficiency: Proficiency): boolean {
  const [featureType, featureValue] = feature.split("-");
  if (featureType === "proficiency") {
    return proficiency.level === featureValue;
  }
  if (featureType === "skill") {
    return proficiency.category.find((c) => c === featureValue) !== undefined;
  }
  return false;
}

const ProficiencyList = () => {
  const [filters, setFilters] = useState(new Set<string>());

  const updateFilter = (
    feature: string
  ): MouseEventHandler<HTMLInputElement> => {
    return (e) => {
      if (e.currentTarget.checked && !filters.has(feature)) {
        const updated = new Set(filters);
        updated.add(feature);
        setFilters(updated);
      } else if (!e.currentTarget.checked && filters.has(feature)) {
        const updated = new Set(filters);
        updated.delete(feature);
        setFilters(updated);
      }
    };
  };

  const filtered: Proficiency[] = useMemo(() => {
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
  }, [filters]);

  return (
    <>
      <form>
        <span>Proficiency Level</span>

        {proficiencyFilters.map(([label, field]) => (
          <FilterToggle
            key={field}
            onClick={updateFilter(field)}
            label={label}
          />
        ))}
      </form>

      <ul className={styles.skillList}>
        {[
          Skill.Language,
          Skill.Framework,
          Skill.Database,
          Skill.Concept,
          Skill.Technology,
        ].map((skill) => {
          return (
            <li key={skill} className={styles.category}>
              <span className={styles.categoryName}>{skill}</span>
              <ul className={styles.skills}>
                {filtered
                  .filter((s) => s.category.includes(skill))
                  .map((s) => (
                    <li key={s.name}>{s.name}</li>
                  ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProficiencyList;