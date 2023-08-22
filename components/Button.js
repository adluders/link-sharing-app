import React from "react";
import styles from "../styles/button.module.css";
import Link from "next/link";

const Button = ({ isLink, location, btnType, primary, content }) => {
  const { button, main, secondary } = styles;

  return isLink ? (
    <Link href={location} className={`${button} ${primary ? main : secondary}`}>
      {" "}
      {content}{" "}
    </Link>
  ) : (
    <button
      type={btnType}
      className={`${button} ${primary ? main : secondary}`}
    >
      {content}
    </button>
  );
};

export default Button;
