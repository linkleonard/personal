import { MouseEventHandler, useMemo, useState, ReactNode } from "react";
import { Language, Proficiency, Skill } from "../data/types";
import proficiencies from "../data/proficiencies";
import styles from "../styles/ProficiencyList.module.css";

interface FilterToggleProps {
  onClick: MouseEventHandler<HTMLInputElement>;
  label: string;
}
const FilterToggle = ({ onClick, label }: FilterToggleProps) => (
  <label className={styles.filterLabel}>
    <input type="checkbox" onClick={onClick} /> {label}
  </label>
);

const proficiencyFilters = [
  ["Proficient", "proficiency-high"],
  ["Comfortable", "proficiency-mid"],
  ["Familiar", "proficiency-low"],
];

const languageFilters = Object.values(Language).map((key) => {
  return [key, `lang-${key}`];
});

const disciplineFilters = [
  ["Frontend", "discipline-frontend"],
  ["Backend", "discipline-backend"],
];

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

const Filter = ({ name, children }: { name: string; children: ReactNode }) => (
  <div className={styles.filter}>
    <span>{name}</span>
    <div>{children}</div>
  </div>
);

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
      <form className={styles.form}>
        <label>Filters</label>
        <Filter name="Proficiency Level">
          {proficiencyFilters.map(([label, field]) => (
            <FilterToggle
              key={field}
              onClick={updateFilter(field)}
              label={label}
            />
          ))}
        </Filter>

        <Filter name="Language">
          {languageFilters.map(([label, field]) => (
            <FilterToggle
              key={field}
              onClick={updateFilter(field)}
              label={label}
            />
          ))}
        </Filter>
        <Filter name="Discipline">
          {disciplineFilters.map(([label, field]) => (
            <FilterToggle
              key={field}
              onClick={updateFilter(field)}
              label={label}
            />
          ))}
        </Filter>
      </form>

      <ul className={styles.skillList}>
        {[
          Skill.Language,
          Skill.Framework,
          Skill.Database,
          Skill.Concept,
          Skill.Vendor,
          Skill.Technology,
        ].map((skill) => {
          return (
            <li key={skill} className={styles.category}>
              <span className={styles.categoryName}>{skill}</span>
              <ul className={styles.skills}>
                {filtered
                  .filter((s) => s.tags.includes(skill))
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
