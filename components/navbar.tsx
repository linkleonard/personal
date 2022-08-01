import Link from "next/link";
import styles from "../styles/Nav.module.css";

const NavBar = () => (
  <nav className={styles.nav}>
    <h1>Leonard Law</h1>
    <Link href="/">About</Link>
    <Link href="/resume">Resume</Link>
  </nav>
);

export default NavBar;
