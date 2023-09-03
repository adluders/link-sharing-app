"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/linkItem.module.css";
import dragDrop from "../public/images/icon-drag-and-drop.svg";
import linkIcon from "../public/images/icon-links-header.svg";
import github from "../public/images/icon-github.svg";
import Image from "next/image";
import Platforms from "./Platforms";
import supabase from "@/utils/supabase";

const LinkItem = ({ link, order }) => {
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
  const [currentPlatform, setCurrentPlatform] = useState();
  const [isPlatformsOpen, setPlatformsOpen] = useState(false);
  const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  useEffect(() => {
    setLinkURL(url);
    setCurrentPlatform(platform_name);

    const updateImage = async () => {
      const { data } = await supabase
        .from("links")
        .update({
          platform_icon: `${publicUrl}/storage/v1/object/public/images/icons/${platform_name}.svg`,
        })
        .eq("owner", "e1cc27b8-dcc3-4033-9b7d-24fbf1eb47fc")
        .select();

      console.log(data);
    };

    updateImage();
  }, [url, platform_name, publicUrl]);

  const updateLinkVal = (e) => setLinkURL(e.target.value);

  const openPlatforms = () => setPlatformsOpen(!isPlatformsOpen);

  /**when a platform is clicked, can I make an update request to update the specific link icon to 'baseUrl'/{name}.svg? */

  const updatePlatform = (e) => {
    setPlatformsOpen(!isPlatformsOpen);
    setCurrentPlatform(e.target.innerText);
  };

  return (
    <div className={wrapper}>
      <div className={header}>
        <h3>
          <Image src={dragDrop} alt="drag and drop" />
          Link #{order}
        </h3>
        <p>Remove</p>
      </div>
      <div className={inputGroup} onClick={openPlatforms}>
        <p>Platform</p>
        <div className={contentHeader}>
          <Image
            src={platform_icon}
            alt={platform_name}
            width={20}
            height={20}
          />
          <p>{currentPlatform}</p>
        </div>
      </div>
      {isPlatformsOpen && <Platforms updatePlatform={updatePlatform} />}
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
