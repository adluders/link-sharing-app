"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";
import logo from "../public/images/logo-devlinks-large.svg";
import linkIcon from "../public/images/icon-links-header.svg";
import profileIcon from "../public/images/icon-profile-details-header.svg";
import purpleIcon from "../public/images/icon-profile-details-header-purple.svg";
import purpleLink from "../public/images/icon-links-header-purple.svg";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  const { nav, links, linkItem, active } = styles;
  return (
    <nav className={nav}>
      <Image src={logo} alt="devlinks logo" />

      <div className={links}>
        <div
          className={`${linkItem} ${pathname === "/account/links" && active}`}
        >
          {pathname === "/account/links" ? (
            <Image src={purpleLink} alt="link icon" />
          ) : (
            <Image src={linkIcon} alt="link icon" />
          )}
          <Link href={"/account/links"}>Links</Link>
        </div>

        <div
          className={`${linkItem} ${pathname === "/account/details" && active}`}
        >
          {pathname === "/account/details" ? (
            <Image src={purpleIcon} alt="link icon" />
          ) : (
            <Image src={profileIcon} alt="link icon" />
          )}
          <Link href={"/account/details"}>Profile Details</Link>
        </div>
      </div>

      <Button content="Preview" isLink location={"/account/preview"} />
    </nav>
  );
}

export default Nav;
