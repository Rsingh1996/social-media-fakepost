import React from "react";
import Navbar from "./Navbar";
import CreateTwitterPost from "./CreateTwitterPost";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <CreateTwitterPost />
      </div>
    </div>
  );
};
