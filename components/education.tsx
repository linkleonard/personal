import styles from "../styles/Education.module.css";

const Education = () => (
  <ul>
    <li className={styles.enrollment}>
      <div className={styles.school}>
        <h3>NYU Tandon School of Engineering </h3>
        <i>formerly Polytechnic Institute of New York University</i>
      </div>
      <span className={styles.period}>
        <time>September 2010</time>-<time>May 2014</time>
      </span>
      <p className={styles.title}>Bachelor of Science, Computer Science</p>
      <h4>Honors</h4>
      <ul>
        <li>Magna Cum Laude (3.767 GPA)</li>
        <li>Polytechnic Scholarship for Academic Excellence</li>
        <li>
          Dean&apos;s List (<time>2010</time>-<time>2014</time>)
        </li>
      </ul>
    </li>
  </ul>
);

export default Education;
