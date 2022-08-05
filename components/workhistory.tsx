import styles from "../styles/WorkHistory.module.css";

import workExperience from "../data/experience";
import TimePeriod from "./timePeriod";

interface ExperienceProps {
  company: string;
  period: { start: string; end: string };
  location: string;
  title: string;
  responsibilities: string[];
}

const Experience = ({
  company,
  period: { start, end },
  location,
  title,
  responsibilities,
}: ExperienceProps) => (
  <li className={styles.experience}>
    <span className={styles.title}>{title}</span>
    <TimePeriod start={start} end={end} />
    <div className={styles.company}>
      <span className={styles.companyName}>{company}</span>
      <span className={styles.location}>{location}</span>
    </div>

    <ul className={styles.responsibilities}>
      {responsibilities.map((r, i) => (
        <li className={styles.responsibility} key={i}>
          {r}
        </li>
      ))}
    </ul>
  </li>
);

const WorkHistory = () => (
  <ul className={styles.history}>
    {workExperience.map((e, i) => (
      <Experience key={i} {...e} />
    ))}
  </ul>
);

export default WorkHistory;
