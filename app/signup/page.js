"use client";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabase";
import React, { useState } from "react";

const SignUp = () => {
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    const passwordConfirm = e.target[2].value;

    if (password !== passwordConfirm) {
      setErr("Passwords do not match");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: passwordConfirm,
      });

      await supabase
        .from("profiles")
        .insert([{ id: `${data.user.id}`, email: `${data.user.email}` }]);

      if (error) {
        setErr(`${error.message}`);
      } else {
        router.push("/login");
      }
    }
  };
  return (
    <Layout>
      <Form formSubmit={handleSignUp} signUp={true} error={err} />
    </Layout>
  );
};

export default SignUp;
