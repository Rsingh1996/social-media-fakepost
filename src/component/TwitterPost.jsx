import React from "react";
import VERIFIEDTICK from "../assets/verify.png";

const TwitterPost = ({ postData }) => {
  console.log(postData);
  return (
    <div
      className={`max-w-[600px] bg-white border ml-12 border-gray-300 rounded-lg p-4 mb-4 shadow-md ${
        postData.theme ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <div className="flex w-[500px] items-center mb-4">
        <img
          src={postData.profileImage}
          alt="Profile"
          className="rounded-full w-10 h-10 mr-2"
        />
        <div className="flex gap-2">
          <p className="font-bold">{postData.name}</p>
          {postData.officialTick && (
            <img
              src={VERIFIEDTICK}
              alt="varified"
              className="rounded-full w-6 h-6"
            />
          )}
          <p className="text-gray-500">@{postData.username}</p>
        </div>
      </div>
      <p
        className={`text-gray-800 ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      >
        {postData.tweetText}
      </p>
      <div className="flex justify-between mt-4 text-gray-500">
        <p>{postData.time}</p>
        <div className="flex">
          <p className="mr-4">
            <i className="far fa-comment"></i>
          </p>
          <p className="mr-4">
            <i className="far fa-heart"></i> {postData.likesCount}
          </p>
          <p>
            <i className="fas fa-retweet"></i> {postData.retweetsCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwitterPost;
