import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import TwitterPost from "./TwitterPost";
const CreateTwitterPost = () => {
  return (
    <div className="container flex items-center justify-center mx-auto p-4">
      <div className="max-w-[500px] bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <span></span>
            <label className="mr-2">Profile Image</label>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10 mr-1"
            />
            <button type="button" className=" cursor-pointer">
              <FaCloudUploadAlt />
              <input
                className=" hidden rounded-full w-10 h-10 mr-5 bg-[#ccd6f6] p-2"
                type="file"
                name="uploader"
                id="uploader"
                accept="image/*"
                capture
              />
            </button>
          </div>
          <div className="flex items-center">
            <span></span>
            <label className="mr-2">Tweet Image</label>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10 mr-1"
            />
            <button type="button" className=" cursor-pointer">
              <FaCloudUploadAlt />
              <input
                className=" hidden rounded-full w-10 h-10 mr-5 bg-[#ccd6f6] p-2"
                type="file"
                name="uploader"
                id="uploader"
                accept="image/*"
                capture
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex items-center ">
              <span></span>
              <label>Name:</label>
            </div>
            <input className=" p-2 my-2" type="text" placeholder="John Doe" />
            <div>
              <span></span>
              <label>username</label>
            </div>
            <input className="p-2 my-2" type="text" placeholder="@john_doe" />
            <div>
              <span></span>
              <label>Tweet Text:</label>
            </div>
            <textarea
              className="p-2 my-2 h-[40px]"
              placeholder="Tweet message!"
              name="messgae"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between mt-4 text-gray-500">
          <div>
            <label>Post time :</label>
            <input type="datetime-local" />
          </div>
          <div className="flex">
            <div className="mr-4">
              {"comments"}
              <input type="range" />
            </div>
            <div className="mr-4">
              {"likes"}
              <input type="range" />
            </div>
            <div>
              {"retweets"}
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTwitterPost;
