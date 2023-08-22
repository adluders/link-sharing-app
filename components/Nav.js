import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";
import logo from "../public/images/logo-devlinks-large.svg";
import linkIcon from "../public/images/icon-link.svg";
import profileIcon from "../public/images/icon-profile-details-header.svg";
import Image from "next/image";
import Button from "./Button";

function Nav() {
  const { nav, links, linkItem } = styles;
  return (
    <nav className={nav}>
      <Image src={logo} alt="devlinks logo" />

      <div className={links}>
        <div className={linkItem}>
          <Image src={linkIcon} alt="link icon" />
          <Link href={"/account/links"}>Links</Link>
        </div>

        <div className={linkItem}>
          <Image src={profileIcon} alt="profile icon" />
          <Link href={"/account/details"}>Profile Details</Link>
        </div>
      </div>

      <Button content="Preview" isLink location={"/account/preview"} />
    </nav>
  );
}

export default Nav;
