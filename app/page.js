"use client";

import Layout from "@/components/Layout";
import supabase from "@/utils/supabase";
import { createClient } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";

const Home = () => {
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // );

  // const [id, setId] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    let id;
    if (sessionStorage.length > 0) {
      id = sessionStorage.getItem("id");
      const getData = async () => {
        let { data: profiles } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", `${id}`);

        setUser(profiles[0]);
      };

      getData();
    }
  }, []);

  return (
    <Layout>
      <h1>Hi {user && user.last_name}</h1>
    </Layout>
  );
};

export default Home;
