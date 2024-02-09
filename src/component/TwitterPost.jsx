import React from "react";

const TwitterPost = ({
  username,
  handle,
  timestamp,
  content,
  likes,
  retweets,
}) => {
  return (
    <div className="max-w-[500px] bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-2"
        />
        <div>
          <p className="font-bold">{username}</p>
          <p className="text-gray-500">@{handle}</p>
        </div>
      </div>
      <p className="text-gray-800">{content}</p>
      <div className="flex justify-between mt-4 text-gray-500">
        <p>{timestamp}</p>
        <div className="flex">
          <p className="mr-4">
            <i className="far fa-comment"></i>
          </p>
          <p className="mr-4">
            <i className="far fa-heart"></i> {likes}
          </p>
          <p>
            <i className="fas fa-retweet"></i> {retweets}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwitterPost;
