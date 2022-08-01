import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leonard Law</title>
        <meta name="description" content="Leonard Law personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Leonard Law</h1>
        <p className={styles.description}>Software Engineer, New York City</p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
