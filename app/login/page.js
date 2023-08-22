"use client";
import Form from "@/components/Form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [err, setErr] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErr(error.message);
    } else {
      // Save data to sessionStorage
      sessionStorage.setItem("id", `${data.user.id}`);

      router.push("/account");
    }
  };
  return <Form formSubmit={handleSignIn} error={err} />;
};

export default Login;
