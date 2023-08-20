"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/form.module.css";
import logo from "../public/images/logo-devlinks-large.svg";

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
    subHeader,
    formGroup,
    formInput,
    errorMssg,
  } = styles;

  return (
    <section className={formWrapper}>
      <div>
        <Image src={logo} alt="Dev Links Logo" />
      </div>

      <div className={formHolder}>
        <div>
          <h1 className={header}>{signUp ? "Create account" : "Login"}</h1>
          <p className={subHeader}>
            {signUp
              ? "Let's get you started sharing your links!"
              : "Add your details below to get back into the app"}
          </p>
        </div>

        <form onSubmit={formSubmit}>
          <div className={formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={updateEmail}
              placeholder="e.g. alex@email.com"
              className={formInput}
            />
          </div>

          <div className={formGroup}>
            <label htmlFor="password">Password</label>
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
          {signUp && (
            <div className={formGroup}>
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                id="password-confirm"
                value={passwordConfirm}
                onChange={updatePasswordConfirm}
                placeholder="At least 8 characters"
                className={formInput}
              />
            </div>
          )}

          <input type="submit" value={`${signUp ? "sign up" : "sign in"}`} />

          <div className={errorMssg}>
            <p>{error}</p>
          </div>

          <div>
            <p>
              {signUp ? "Already have an account? " : "Don't have an account?"}{" "}
              <a href={signUp ? "/login" : "/signup"}>
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
