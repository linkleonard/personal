import styles from "../styles/Education.module.css";
import Card from "./card";
import TimePeriod from "./timePeriod";

const Education = () => (
  <ul>
    <Card className={styles.enrollment}>
      <div className={styles.school}>
        <h3>NYU Tandon School of Engineering </h3>
        <i>formerly Polytechnic Institute of NYU</i>
      </div>
      <TimePeriod start="September 2010" end="May 2014" />
      <p className={styles.title}>Bachelor of Science, Computer Science</p>
      <h4>Honors</h4>
      <ul>
        <li>Magna Cum Laude (3.767 GPA)</li>
        <li>Polytechnic Scholarship for Academic Excellence</li>
        <li>
          Dean&apos;s List (<TimePeriod start="2010" end="2014" />)
        </li>
      </ul>
    </Card>
  </ul>
);

export default Education;
