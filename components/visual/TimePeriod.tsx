import styles from "../../styles/TimePeriod.module.css";

interface TimePeriodProps {
  start: string;
  end: string;
}

const TimePeriod = ({ start, end }: TimePeriodProps) => (
  <span className={styles.period}>
    <time>{start}</time>&ndash;<time>{end}</time>
  </span>
);

export default TimePeriod;
