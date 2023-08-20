import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";

function Nav() {
  return (
    <nav>
      <Link className={styles.navLink} href={"/"}>
        Home
      </Link>
      <Link className={styles.navLink} href={"/signup"}>
        Sign Up
      </Link>
      <Link className={styles.navLink} href={"/login"}>
        Login
      </Link>
    </nav>
  );
}

export default Nav;
