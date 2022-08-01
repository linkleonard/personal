import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProficiencyList from "../components/proficiencylist";
import WorkHistory from "../components/workhistory";
import styles from "../styles/Resume.module.css";

const Resume = () => (
  <div className={styles.container}>
    <Head>
      <title>Resume</title>
      <meta name="description" content="Leonard Law's Resume" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />
    <main className={styles.main}>
      <h1 className={styles.title}>Resume</h1>
      <section>
        <h2>Professional Experience</h2>
        <WorkHistory />
      </section>
      <section>
        <h2>Proficiencies</h2>
        <ProficiencyList />
      </section>
    </main>
    <Footer />
  </div>
);
export default Resume;
