import React from "react";
import styles from "../styles/platforms.module.css";
import github from "../public/images/icon-github.svg";
import youtube from "../public/images/icon-youtube.svg";
import linkedin from "../public/images/icon-linkedin.svg";
import facebook from "../public/images/icon-facebook.svg";
import frontend from "../public/images/icon-frontend-mentor.svg";
import gitlab from "../public/images/icon-gitlab.svg";
import hashnode from "../public/images/icon-hashnode.svg";
import stackOverflow from "../public/images/icon-stack-overflow.svg";
import twitch from "../public/images/icon-twitch.svg";
import twitter from "../public/images/icon-twitter.svg";
import Image from "next/image";

const Platforms = () => {
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

  const { wrapper, item } = styles;

  return (
    <div>
      <ul className={wrapper}>
        {platformOptions.map(({ id, name }) => (
          <li key={id} className={item}>
            <Image src={github} alt={`${name} icon`} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
