import Link from "next/link";
import global from "../styles/Global.module.css";
import styles from "../styles/Nav.module.css";

const NavBar = () => (
  <nav className={styles.nav}>
    <h1 className={styles.name}>Leonard Law</h1>
    <Link href="/">About</Link>
    <Link href="/resume">Resume</Link>
    <a
      className={global.outbound}
      href="https://www.linkedin.com/in/leonard-law/"
    >
      LinkedIn
    </a>
    <a className={global.outbound} href="https://github.com/linkleonard">
      GitHub
    </a>
  </nav>
);

export default NavBar;
