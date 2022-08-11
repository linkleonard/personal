import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connect - Leonard Law</title>
        <meta name="description" content="Connect with Leonard Law" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Connect</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/leonard-law/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/linkleonard">GitHub</a>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
