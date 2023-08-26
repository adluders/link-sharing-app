"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/linkItem.module.css";
import dragDrop from "../public/images/icon-drag-and-drop.svg";
import linkIcon from "../public/images/icon-links-header.svg";
import github from "../public/images/icon-github.svg";
import Image from "next/image";
import Platforms from "./Platforms";

const LinkItem = ({ link }) => {
  const {
    wrapper,
    inputGroup,
    inputData,
    header,
    contentHeader,
    dropdown,
    info,
  } = styles;
  const { id, platform_icon, platform_name, url } = link;
  const [linkURL, setLinkURL] = useState("");
  const [isPlatformsOpen, setPlatformsOpen] = useState(false);

  useEffect(() => {
    setLinkURL(url);
  }, [url]);

  const updateLinkVal = (e) => setLinkURL(e.target.value);

  const openPlatforms = () => setPlatformsOpen(true);

  return (
    <div className={wrapper}>
      <div className={header}>
        <h3>
          <Image src={dragDrop} alt="drag and drop" />
          Link #{id}
        </h3>
        <p>Remove</p>
      </div>
      <div className={inputGroup} onClick={openPlatforms}>
        <p>Platform</p>
        <div className={contentHeader}>
          <Image src={github} alt="source" />
          <p>{platform_name}</p>
        </div>
      </div>
      {isPlatformsOpen && <Platforms />}
      <div className={inputGroup}>
        <label htmlFor={`linkInfo${id}`}>Link</label>
        <div className={inputData}>
          <Image src={linkIcon} alt="link icon" />
          <input
            type="text"
            name={`linkInfo${id}`}
            id={`linkInfo${id}`}
            value={linkURL}
            onChange={updateLinkVal}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
