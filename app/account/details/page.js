"use client";

import AccountLayout from "@/components/AccountLayout";
import Phone from "@/components/Phone";
import ProfileDetails from "@/components/ProfileDetails";
import supabase from "@/utils/supabase";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    let id = sessionStorage.getItem("id");

    const getData = async () => {
      let { data: profiles } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", `${id}`);

      setUser(profiles[0]);
    };

    getData();
  }, []);

  return (
    <AccountLayout>
      <Phone />
      <ProfileDetails user={user} />
    </AccountLayout>
  );
};

export default Home;
