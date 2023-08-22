"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/form.module.css";
import logo from "../public/images/logo-devlinks-large.svg";
import emailIcon from "../public/images/icon-email.svg";
import passwordIcon from "../public/images/icon-password.svg";
import Button from "./Button";

function Form({ formSubmit, error, signUp }) {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [passwordConfirm, setConfirm] = useState("");

  const updateEmail = (e) => setEmail(e.target.value);

  const updatePassword = (e) => setPasswrod(e.target.value);

  const updatePasswordConfirm = (e) => setConfirm(e.target.value);

  const {
    formWrapper,
    formHolder,
    header,
    formGroup,
    inputGroup,
    formInput,
    errorMssg,
    formSubmitBtn,
    formMssg,
  } = styles;

  return (
    <section className={formWrapper}>
      <div>
        <Image src={logo} alt="Dev Links Logo" priority />
      </div>

      <div className={formHolder}>
        <div className={header}>
          <h1>{signUp ? "Create account" : "Login"}</h1>
          <p>
            {signUp
              ? "Let's get you started sharing your links!"
              : "Add your details below to get back into the app"}
          </p>
        </div>

        <form onSubmit={formSubmit}>
          <div className={formGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={inputGroup}>
              <Image src={emailIcon} alt="Message Icon" />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={updateEmail}
                placeholder="e.g. alex@email.com"
                className={formInput}
                autoComplete="true"
              />
            </div>
          </div>

          <div className={formGroup}>
            <label htmlFor="password">
              {signUp ? "Create Password" : "Password"}
            </label>
            <div className={inputGroup}>
              <Image src={passwordIcon} alt="Lock Icon" />
              <input
                type="password"
                name="password"
                id="password"
                minLength={8}
                value={password}
                onChange={updatePassword}
                placeholder={
                  signUp ? "At least 8 characters" : "Enter your password"
                }
                className={formInput}
              />
            </div>
          </div>
          {signUp && (
            <div className={formGroup}>
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <div className={inputGroup}>
                <Image src={passwordIcon} alt="Lock Icon" />
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  value={passwordConfirm}
                  onChange={updatePasswordConfirm}
                  placeholder="At least 8 characters"
                  className={formInput}
                />
              </div>
            </div>
          )}

          <div className={formSubmitBtn}>
            <Button
              btnType={"submit"}
              content={signUp ? "create new account" : "login"}
              primary
            />
          </div>

          <div className={errorMssg}>
            <p>{error}</p>
          </div>

          <div className={formMssg}>
            <p>
              {signUp ? "Already have an account? " : "Don't have an account?"}{" "}
              <a href={signUp ? "/login" : "/"}>
                {signUp ? "Login" : "Create account"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
