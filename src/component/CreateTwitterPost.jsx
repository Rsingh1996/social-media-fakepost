import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import TwitterPost from "./TwitterPost";
const CreateTwitterPost = () => {
  return (
    <div className="container flex items-center justify-center mx-auto p-4">
      <div className="max-w-[600px] bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
        {/* {container} */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-7">
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
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex items-center ">
              <span></span>
              <label>Name:</label>
            </div>
            <input className=" p-2 my-2" type="text" placeholder="John Doe" />
            <div className="flex items-center ">
              <span></span>
              <label>Username</label>
            </div>
            <input className="p-2 my-2" type="text" placeholder="@john_doe" />
            <div className="flex items-center ">
              <span></span>
              <label>Tweet Text:</label>
            </div>
            <textarea
              className="p-2 my-2 h-[40px]"
              placeholder="Tweet message!"
              name="messgae"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center ">
              <span></span>
              <label>Add Official Tick:</label>
            </div>
            <div className="flex gap-4 p-2 my-2">
              <div className=" flex items-center gap-3">
                <label>Yes</label>
                <input type="radio" />
              </div>
              <div className="flex items-center gap-3">
                <label>No</label>
                <input type="radio" />
              </div>
            </div>
            <div className="flex items-center">
              <span></span>
              <label>Theme:</label>
            </div>
            <div className="flex gap-4 p-2 my-2">
              {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="flexSwitchCheckDefault"
              >
                Light
              </label>
              <input
                class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[black] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="flexSwitchCheckDefault"
              >
                Dark
              </label>
            </div>
            <div className="flex items-center">
              <span></span>
              <label>Time:</label>
            </div>
            <div className="flex gap-4 p-2 my-2">
              <div className=" flex items-center gap-3 w-[25px]">
                <input type="number" />
              </div>
              <div className="flex items-center gap-3 w-[25px]">
                <input type="number" />
              </div>
              <div className="flex items-center gap-3 w-[25px]">
                <input type="number" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between mt-4 text-gray-500">
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
