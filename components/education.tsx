import styles from "../styles/Education.module.scss";
import Card from "./visual/Card";
import FloatTag from "./visual/FloatTag";
import TimePeriod from "./visual/TimePeriod";

const Education = () => (
  <ul>
    <Card className={styles.enrollment}>
      <div className={styles.school}>
        <h3>NYU Tandon</h3>
        <i>School of Engineering</i>
        <i>formerly Polytechnic Institute of NYU</i>
      </div>
      <FloatTag>
        <TimePeriod
          className={styles.period}
          start={{
            month: "September",
            year: 2010,
          }}
          end={{
            month: "May",
            year: 2014,
          }}
        />
      </FloatTag>
      <p className={styles.title}>Bachelor of Science, Computer Science</p>
      <h4>Honors</h4>
      <ul>
        <li>Magna Cum Laude (3.767 GPA)</li>
        <li>Polytechnic Scholarship for Academic Excellence</li>
        <li>
          Dean&apos;s List (
          <TimePeriod start={{ year: 2010 }} end={{ year: 2014 }} />)
        </li>
      </ul>
    </Card>
  </ul>
);

export default Education;
