import React from "react";
import starter from "../public/images/illustration-empty.svg";
import Image from "next/image";
import styles from "../styles/linksHolder.module.css";

const LinksHolder = () => {
  const { wrapper, empty } = styles;
  return (
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
