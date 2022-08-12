import { MouseEventHandler, ReactNode } from "react";
import { Language } from "../data/types";
import Card from "../components/card";
import styles from "../styles/ProficiencyFilter.module.css";

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

const Filter = ({ name, children }: { name: string; children: ReactNode }) => (
  <div className={styles.filter}>
    <span>{name}</span>
    <div>{children}</div>
  </div>
);

interface ProficiencyFiltersProps {
  filters: Set<string>;
  onUpdate: (t: Set<string>) => void;
}
const ProficiencyFilters = ({ filters, onUpdate }: ProficiencyFiltersProps) => {
  const updateFilter = (
    feature: string
  ): MouseEventHandler<HTMLInputElement> => {
    return (e) => {
      if (e.currentTarget.checked && !filters.has(feature)) {
        const updated = new Set(filters);
        updated.add(feature);
        onUpdate(updated);
      } else if (!e.currentTarget.checked && filters.has(feature)) {
        const updated = new Set(filters);
        updated.delete(feature);
        onUpdate(updated);
      }
    };
  };

  return (
    <Card className={styles.form} component="form">
      <label className={styles.title}>Filters</label>
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
    </Card>
  );
};
export default ProficiencyFilters;
