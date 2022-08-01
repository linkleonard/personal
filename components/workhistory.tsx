import styles from "../styles/WorkHistory.module.css";

const WorkHistory = () => (
  <section>
    <h2>Professional Experience</h2>
    <ul className={styles.history}>
      <li>
        <h3>Hopper Inc.</h3>
        <time>May 2018</time>-<time>Now</time>
        <p>Senior Software Engineer - Full Stack</p>
        <ul className={styles.history}>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
        </ul>
      </li>
      <li>
        <h3>Hopper Inc.</h3>
        <time>May 2018</time>-<time>Now</time>
        <p>Software Engineer - Backend</p>
        <ul className={styles.history}>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
        </ul>
      </li>
      <li>
        <h3>Truveris</h3>
        <time>May 2018</time>-<time>Now</time>
        <p>Software Engineer - Backend</p>
        <ul className={styles.history}>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
          <li>Responsibility 3</li>
        </ul>
      </li>
    </ul>
  </section>
);

export default WorkHistory;
