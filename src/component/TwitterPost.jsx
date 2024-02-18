import React from "react";
import VERIFIEDTICK from "../assets/verify.png";
import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiBookmark } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

const TwitterPost = ({ postData }) => {
  // Function to calculate time difference and return human-readable format
  const formatTime = (timeString) => {
    const postTime = new Date(timeString);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return postTime.toLocaleString("en-US", options);
  };

  return (
    <div
      className={`max-w-[500px] bg-white border ml-12 border-gray-300 rounded-lg p-4 mb-4 shadow-md ${
        postData.theme ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <div className="flex items-center w-[500px] mb-4">
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
        className={` mb-2 mt-2 ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      >
        {postData.tweetText}
      </p>
      <div className="flex mb-2 flex-col justify-center items-center">
        {postData.tweetImage && (
          <img
            src={postData.tweetImage}
            alt="Tweet"
            className=" w-max-[400px] h-auto mt-4"
          />
        )}
      </div>
      <div className="flex justify-between mb-3 mt-3 text-gray-500  ">
        <p>{formatTime(postData.time)}</p>
      </div>
      <hr
        class={`h-1 ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      />
      <div>
        {postData.retweetsCount} Reposts
        {postData.commentsCount} Quotes
        {postData.likesCount} Likes
        {postData.bookmarksCount}Bookmarks
      </div>
      <hr
        class={`h-1  ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      />

      <div>
        <div className="flex justify-evenly item-center mt-4 mb-2 ">
          <p className="mr-4 flex items-center gap-1 ">
            <FaRegComment />
          </p>

          <p className="mr-4 flex items-center gap-1 ">
            <FaRetweet />
          </p>

          <p className="mr-4 flex items-center gap-1 ">
            <FcLike />
          </p>

          <div className="flex gap-4">
            <p className="mr-4 flex items-center gap-1 ">
              <FiBookmark />
            </p>
            <p className="mr-4 flex items-center gap-1 ">
              <FiUpload />
            </p>
          </div>
        </div>
      </div>
      <hr
        class={`h-1  ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      />
    </div>
  );
};

export default TwitterPost;
