import AccountLayout from "@/components/AccountLayout";
import LinksDetails from "@/components/LinksDetails";
import Phone from "@/components/Phone";
import React from "react";

const links = () => {
  return (
    <AccountLayout>
      <Phone />
      <LinksDetails />
    </AccountLayout>
  );
};

export default links;
