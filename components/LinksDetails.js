import React from "react";
import styles from "../styles/linksDetails.module.css";
import LinksHolder from "./LinksHolder";
import Button from "./Button";

const LinksDetails = () => {
  const { linksDetailsWrapper, header, linkAdd, save } = styles;

  return (
    <section className={linksDetailsWrapper}>
      <div className={header}>
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <div className={linkAdd}>
        <p>+ Add new link</p>
      </div>

      <LinksHolder />

      <div className={save}>
        <Button content={"save"} primary />
      </div>
    </section>
  );
};

export default LinksDetails;
