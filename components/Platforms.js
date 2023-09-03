"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/platforms.module.css";
import github from "../public/images/icon-github.svg";
// import youtube from "../public/images/icon-youtube.svg";
// import linkedin from "../public/images/icon-linkedin.svg";
// import facebook from "../public/images/icon-facebook.svg";
// import frontend from "../public/images/icon-frontend-mentor.svg";
// import gitlab from "../public/images/icon-gitlab.svg";
// import hashnode from "../public/images/icon-hashnode.svg";
// import stackOverflow from "../public/images/icon-stack-overflow.svg";
// import twitch from "../public/images/icon-twitch.svg";
// import twitter from "../public/images/icon-twitter.svg";
import Image from "next/image";
import supabase from "@/utils/supabase";

//when a platform is clicked, update the value in the box and set isPlatformOpen to false
//when clicked. send an opject with the function to update the display

const Platforms = ({ updatePlatform }) => {
  const platformOptions = [
    {
      id: 0,
      name: "github",
    },
    {
      id: 1,
      name: "youtube",
    },
    {
      id: 2,
      name: "linkedIn",
    },
    {
      id: 3,
      name: "Facebook",
    },
    {
      id: 4,
      name: "Frontend Mentor",
    },
    {
      id: 5,
      name: "Gitlab",
    },
    {
      id: 6,
      name: "Hashnode",
    },
    {
      id: 7,
      name: "Stack Overflow",
    },
    {
      id: 8,
      name: "Twitch",
    },
    {
      id: 9,
      name: "Twitter",
    },
  ];

  const [platforms, setPlatforms] = useState();

  useEffect(() => {
    const getBucket = async () => {
      let { data } = await supabase.storage.from("images").list("icons");
      setPlatforms(data);
    };

    getBucket();
  }, []);

  const { wrapper, item } = styles;

  return (
    <div>
      <ul className={wrapper}>
        {platforms &&
          platforms.map(({ id, name }) => {
            const platformName = name.split(".");

            return (
              <li key={id} className={item}>
                <Image
                  src={`https://jvsqpigrjvyywrrocvaq.supabase.co/storage/v1/object/public/images/icons/${name}`}
                  alt={name}
                  width={20}
                  height={20}
                />
                <p onClick={updatePlatform}>{platformName[0]}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Platforms;

() => {};
