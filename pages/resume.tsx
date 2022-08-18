import Head from "next/head";
import Banner from "../components/visual/Banner";
import Education from "../components/education";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProficiencyList from "../components/proficiencylist";
import WorkHistory from "../components/workhistory";
import styles from "../styles/Resume.module.scss";

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
        <Banner component="h2">Professional Experience</Banner>
        <WorkHistory />
      </section>
      <section>
        <Banner component="h2">Proficiencies</Banner>
        <ProficiencyList />
      </section>
      <section>
        <Banner component="h2">Education</Banner>
        <Education />
      </section>
    </main>
    <Footer />
  </div>
);
export default Resume;
