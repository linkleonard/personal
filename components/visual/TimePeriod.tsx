import { Time } from "../../data/types";
import styles from "../../styles/TimePeriod.module.css";

interface TimeDisplayProps {
  children: Time;
}
const TimeDisplay = ({ children }: TimeDisplayProps) => (
  <time className={styles.time}>
    {children.month ? (
      <span className={styles.month}>
        {children.month && children.month.slice(0, 3)}
      </span>
    ) : null}
    {children.year ? (
      <span className={styles.year}>{children.year}</span>
    ) : null}
    {children.description}
  </time>
);

interface TimePeriodProps {
  className?: string;
  start: Time;
  end: Time;
}

const TimePeriod = ({ className, start, end }: TimePeriodProps) => (
  <span className={`${styles.period} ${className}`}>
    <TimeDisplay>{start}</TimeDisplay>&ndash;
    <TimeDisplay>{end}</TimeDisplay>
  </span>
);

export default TimePeriod;
