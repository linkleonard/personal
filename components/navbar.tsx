import Link from "next/link";
import global from "../styles/Global.module.css";
import styles from "../styles/Nav.module.css";

const NavBar = () => (
  <nav className={styles.nav}>
    <h1 className={styles.name}>Leonard Law</h1>
    <ul>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
      <li>
        <a
          className={global.outbound}
          href="https://www.linkedin.com/in/leonard-law/"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a className={global.outbound} href="https://github.com/linkleonard">
          GitHub
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
