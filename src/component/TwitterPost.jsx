import React from "react";
import VERIFIEDTICK from "../assets/verify.png";
import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FiBookmark, FiPhoneCall } from "react-icons/fi";
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

  const formatNumber = (count) => {
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return `${(count / 1000).toFixed(1)}K`;
    } else {
      return `${(count / 1000000).toFixed(1)}M`;
    }
  };

  return (
    <div
      className={`max-w-full bg-white border ml-12 border-gray-300 rounded-lg p-4 mb-4 shadow-md ${
        postData.theme ? "text-black bg-white" : "text-white bg-[#000]"
      }`}
    >
      <div className="flex items-center w-[500px] mb-4">
        <img
          src={postData.profileImage}
          alt="Profile"
          className="rounded-full w-10 h-10 mr-2"
        />
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <p className="font-bold">{postData.name}</p>
            <p className="text-gray-500 text-sm">@{postData.username}</p>
          </div>
          <div>
            {postData.officialTick && (
              <img
                src={VERIFIEDTICK}
                alt="varified"
                className="rounded-full w-6 h-6"
              />
            )}
          </div>
        </div>
      </div>

      <p
        className={` mb-2 mt-2 ${
          postData.theme ? "text-black bg-white" : "text-white bg-[#000]"
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
      <div className="flex justify-between items-center text-sm ">
        <div className="flex gap-1">
          {formatNumber(postData.retweetsCount)}
          <label className="text-gray-500"> Reposts</label>
        </div>
        <div className="flex gap-1">
          {formatNumber(postData.commentsCount)}
          <label className="text-gray-500"> Quotes</label>
        </div>
        <div className="flex gap-1">
          {formatNumber(postData.likesCount)}
          <label className="text-gray-500"> Likes</label>
        </div>
        <div className="flex gap-1">
          {formatNumber(postData.bookmarksCount)}
          <label className="text-gray-500"> Bookmarks</label>
        </div>
      </div>
      <hr
        class={`h-1  ${
          postData.theme ? "text-black bg-white" : "text-white bg-black"
        }`}
      />

      <div>
        <div className="flex justify-between item-center mt-4 mb-2 ">
          <p className="mr-4 flex items-center">
            <FaRegComment />
          </p>

          <p className="mr-4 flex items-center ">
            <FaRetweet />
          </p>

          <p className="mr-4 flex items-center ">
            <FcLike />
          </p>

          <div className="flex gap-4">
            <p className="mr-4 flex items-center">
              <FiBookmark />
            </p>
            <p className="mr-4 flex items-center">
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
