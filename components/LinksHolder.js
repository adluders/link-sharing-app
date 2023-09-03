"use client";

import React, { useEffect, useState } from "react";
import starter from "../public/images/illustration-empty.svg";
import Image from "next/image";
import styles from "../styles/linksHolder.module.css";
import LinkItem from "./LinkItem";
import supabase from "@/utils/supabase";

const LinksHolder = () => {
  const { wrapper, empty, container } = styles;
  const [userLinks, setLinks] = useState([]);

  const linkItems = [
    {
      id: 1,
      platform_icon: "../public/images/icon-github.svg",
      platform_name: "github",
      url: "github.com",
      owner: "e1cc27b8-dcc3-4033-9b7d-24fbf1eb47fc",
    },
    {
      id: 2,
      platform_icon: `../public/images/icon-linkedin.svg`,
      platform_name: "linkedIn",
      url: "linkedin.com",
      owner: "mom",
    },
  ];

  useEffect(() => {
    const getLinks = async () => {
      let { data: links, error } = await supabase
        .from("links")
        .select("*")
        .eq("owner", "e1cc27b8-dcc3-4033-9b7d-24fbf1eb47fc");

      console.log(links);
      setLinks(links);
    };

    getLinks();
  }, []);

  return userLinks ? (
    <section className={container}>
      {userLinks.map((link) => (
        <LinkItem
          key={userLinks.indexOf(link)}
          link={link}
          order={userLinks.indexOf(link) + 1}
        />
      ))}
    </section>
  ) : (
    <section className={wrapper}>
      <div className={empty}>
        <Image src={starter} alt="empty" />
        <h2>Let&apos;s get you started</h2>
        <p>
          Use the &ldquo;Add new link&rdquo; button to get started. Once you
          have more than one link, you can reorder and edit them. We&apos;re
          here to help you share your profile with everyone!
        </p>
      </div>
    </section>
  );
};

export default LinksHolder;
