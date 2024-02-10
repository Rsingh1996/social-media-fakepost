import React from "react";
import Navbar from "./Navbar";
import Twitter from "./Twitter";
import CreateTwitterPost from "./CreateTwitterPost";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-normal items-center">
        <Twitter />
        <CreateTwitterPost />
      </div>
    </div>
  );
};
