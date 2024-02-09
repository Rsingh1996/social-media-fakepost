import React from "react";
import TwitterPost from "./TwitterPost";

const Twitter = () => {
  return (
    <div className="container flex items-center justify-center mx-auto p-4">
      <TwitterPost
        username="John Doe"
        handle="john_doe"
        timestamp="2h ago"
        content="This is a fake Twitter post created with React and Tailwind CSS!"
        likes={42}
        retweets={23}
      />
    </div>
  );
};

export default Twitter;
