import React from "react";
import TwitterPost from "./TwitterPost";
const CreateTwitterPost = () => {
  return (
    <div className="container flex items-center justify-center mx-auto p-4">
      <div className="max-w-[500px] bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
        <div className="flex items-center mb-4">
          <input
            className="rounded-full w-10 h-10 mr-5 bg-[#ccd6f6] p-2"
            type="file"
            name="uploader"
            id="uploader"
            accept="image/*"
            capture
          />

          <div>
            <input
              className="font-bold bg-[#ccd6f6] p-2"
              type="text"
              placeholder="username"
            />
            <br />
            <input
              className="text-gray-500 bg-[#ccd6f6] p-2 my-4"
              type="text"
              placeholder="@handle"
            />
          </div>
        </div>
        <input
          className="text-gray-800 bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="messgae"
          rows={10}
        />
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
