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
  start: Time;
  end: Time;
  short?: boolean;
}

const TimePeriod = ({ start, end, short }: TimePeriodProps) => (
  <span className={styles.period}>
    <TimeDisplay>{start}</TimeDisplay>&ndash;
    <TimeDisplay>{end}</TimeDisplay>
  </span>
);

export default TimePeriod;
