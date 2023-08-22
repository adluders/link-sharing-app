"use client";

import AccountLayout from "@/components/AccountLayout";
import supabase from "@/utils/supabase";
import React, { useState, useEffect } from "react";

const Account = () => {
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
    <AccountLayout>
      <h1>Hi {user && user.last_name}</h1>
    </AccountLayout>
  );
};

export default Account;
