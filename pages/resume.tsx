import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Resume = () => (
  <div className={styles.container}>
    <Head>
      <title>Leonard Law</title>
      <meta name="description" content="Leonard Law personal website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />
    <main className={styles.main}>
      <h1 className={styles.title}>Resume</h1>
    </main>
    <Footer />
  </div>
);
export default Resume;
