"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/profileDetails.module.css";
import Image from "next/image";
import defaultPic from "../public/images/icon-upload-image.svg";
import Button from "./Button";
import supabase from "@/utils/supabase";

const ProfileDetails = ({ user }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [userEmail, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setFirst(user.first_name);
      setLast(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  const id = sessionStorage.getItem("id");

  const updateFirst = (e) => setFirst(e.target.value);

  const updateLast = (e) => setLast(e.target.value);

  const updateEmail = (e) => setEmail(e.target.value);

  const {
    wrapper,
    header,
    profile,
    userInfo,
    formGroup,
    formLabel,
    photoUploader,
    sectionWrapper,
    save,
  } = styles;

  const updateProfile = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("profiles")
      .update({ first_name: first, last_name: last, email: userEmail })
      .eq("id", id)
      .select();

    console.log(data);
  };

  return (
    <section className={wrapper}>
      <div className={header}>
        <h1>Profile Details</h1>
        <p>Add your details to create a perosnal touch to your profile.</p>
      </div>

      {/**For Submit is to make a put/edit request to update the state */}
      <form onSubmit={updateProfile}>
        <section className={sectionWrapper}>
          <div className={formGroup}>
            <p className={formLabel}>Profile picture</p>
            <label htmlFor="pictureUpload" className={photoUploader}>
              <Image src={defaultPic} alt="photo uploader" />
              <p>+ Upload Image</p>
            </label>
            <input
              type="file"
              name="avatar"
              id="pictureUpload"
              accept="image/*"
              hidden
            />
          </div>
        </section>

        <section className={`${sectionWrapper} ${userInfo}`}>
          <div className={formGroup}>
            <label className={formLabel} htmlFor="first">
              First name*
            </label>
            <input
              type="text"
              name="first"
              id="first"
              value={first}
              placeholder="e.g. John"
              onChange={updateFirst}
            />
          </div>

          <div className={formGroup}>
            <label className={formLabel} htmlFor="last">
              Last name*
            </label>
            <input
              type="text"
              name="last"
              id="last"
              value={last}
              placeholder="e.g. Appleseed"
              onChange={updateLast}
            />
          </div>

          <div className={formGroup}>
            <label className={formLabel} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userEmail}
              placeholder="e.g. email@example.com"
              onChange={updateEmail}
            />
          </div>
        </section>

        <div className={save}>
          <Button content={"save"} primary btnType={"submit"} />
        </div>
      </form>
    </section>
  );
};

// <div className={userInfo}>
//   <p>{first_name}</p>
// </div>
export default ProfileDetails;
