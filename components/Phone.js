import React from "react";
import emptyPhone from "../public/images/illustration-phone-mockup.svg";
import Image from "next/image";
import styles from "../styles/phone.module.css";

const Phone = () => {
  const { phoneWrapper } = styles;
  return (
    <section className={phoneWrapper}>
      <Image src={emptyPhone} alt={"phone mockup"} />
    </section>
  );
};

export default Phone;
