import React, { useState, useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import TwitterPost from "./TwitterPost";

const CreateTwitterPost = () => {
  const profileFileInputRef = useRef(null);
  const tweetFileInputRef = useRef(null);

  const [postData, setPostData] = useState({
    profileImage: "https://via.placeholder.com/40",
    name: "John Doe",
    username: "john_doe",
    tweetText: `This is a fake Twitter post created with React and Tailwind CSS!`,
    tweetImage: "",
    officialTick: "yes",
    theme: "light",
    time: "Feb 18, 2024, 5:06 PM",
    commentsCount: "772233",
    likesCount: "39838",
    retweetsCount: "2766",
    bookmarksCount: "2322",
  });

  const [darkMode, setDarkMode] = useState(false);

  // Handler to update the postData state when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;

    setPostData({
      ...postData,
      [name]: validatedValue,
    });
  };

  // Handler to update the postData state when radio inputs change
  const handleOfficialTickChange = (e) => {
    const value = e.target.value === "true" ? true : false; // Toggle between true and false
    setPostData({
      ...postData,
      officialTick: value,
    });
  };

  // Handler to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setPostData({
      ...postData,
      theme: darkMode ? true : false,
    });
  };

  // Handler to handle profile image upload
  const handleProfileImageUpload = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    setPostData({ ...postData, profileImage: URL.createObjectURL(file) });
  };

  // Handler to handle tweet image upload
  const handleTweetImageUpload = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    setPostData({ ...postData, tweetImage: URL.createObjectURL(file) });
  };

  // Handler to trigger file input click for profile image
  const handleProfileCloudUploadClick = () => {
    if (profileFileInputRef.current) {
      profileFileInputRef.current.click();
    }
  };

  // Handler to trigger file input click for tweet image
  const handleTweetCloudUploadClick = () => {
    if (tweetFileInputRef.current) {
      tweetFileInputRef.current.click();
    }
  };

  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center">
      <TwitterPost postData={postData} />
      <div className="container flex items-center justify-center mx-auto p-4">
        <div className="max-w-[600px] bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
          {/* {container} */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 max-w-[150px] md:max-w-full">
              <div className="flex items-center">
                <span></span>
                <label className="mr-2">Profile Image</label>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="rounded-full w-10 h-10 mr-1"
                />
                <button
                  type="button"
                  className=" cursor-pointer"
                  onClick={handleProfileCloudUploadClick}
                >
                  <FaCloudUploadAlt />
                  <input
                    ref={profileFileInputRef}
                    className="  rounded-full w-10 h-10 mr-5 bg-[#ccd6f6] p-2 hidden"
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    capture
                    onChange={handleProfileImageUpload}
                  />
                </button>
              </div>
              <div className="flex items-center ">
                <span></span>
                <label>Name:</label>
              </div>
              <input
                name="name"
                value={postData.name}
                className=" p-2 my-2 border-b-2 border-[#fcd200]"
                type="text"
                placeholder="John Doe"
                maxLength={12}
                onChange={handleInputChange}
              />
              <div className="flex items-center ">
                <span></span>
                <label>Username</label>
              </div>
              <input
                name="username"
                value={postData.username}
                className="p-2 my-2 border-b-2 border-[#fcd200]"
                type="text"
                placeholder="@john_doe"
                onChange={handleInputChange}
                maxLength={12}
              />
              <div className="flex items-center ">
                <span></span>
                <label>Tweet Text:</label>
              </div>
              <textarea
                className="p-2 my-2 h-[40px] border-b-2 border-[#fcd200]"
                placeholder="Tweet message!"
                name="tweetText"
                value={postData.tweetText}
                onChange={handleInputChange}
                maxLength={200}
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[150px] md:max-w-full">
              <div className="flex items-center">
                <span></span>
                <label className="mr-2">Tweet Image</label>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="rounded-full w-10 h-10 mr-1"
                />
                <button
                  type="button"
                  className=" cursor-pointer"
                  onClick={handleTweetCloudUploadClick}
                >
                  <FaCloudUploadAlt />
                  <input
                    ref={tweetFileInputRef}
                    className="  rounded-full w-10 h-10 mr-5 bg-[#ccd6f6] p-2 hidden"
                    type="file"
                    name="tweetImage"
                    accept="image/*"
                    capture
                    onChange={handleTweetImageUpload}
                  />
                </button>
              </div>
              <div className="flex items-center ">
                <span></span>
                <label>Add Official Tick:</label>
              </div>

              <div className="flex gap-4 p-2 my-2">
                <div className=" flex items-center gap-3">
                  <label for="Yes">Yes</label>
                  <input
                    type="radio"
                    id="Yes"
                    name="VERIFIEDTICK"
                    value={true}
                    checked={postData.officialTick === true}
                    onChange={handleOfficialTickChange}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label for="No">No</label>
                  <input
                    type="radio"
                    id="No"
                    name="VERIFIEDTICK"
                    value={false}
                    checked={postData.officialTick === false}
                    onChange={handleOfficialTickChange}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span></span>
                <label>Theme:</label>
              </div>
              <div className="flex gap-4 p-2 my-2">
                <label
                  class="inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="flexSwitchCheckDefault"
                >
                  Light
                </label>
                <input
                  class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[black] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
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
              <div className="flex gap-4 p-2 my-2 ">
                <input
                  className="border-b-2 border-[#fcd200]"
                  type="datetime-local"
                  name="time"
                  value={postData.time}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 text-gray-500">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="mr-2">
                <span></span>
                <label>Likes:</label>
                <input
                  type="range"
                  name="likesCount"
                  min="0"
                  max="99999998"
                  value={postData.likesCount}
                  onChange={handleInputChange}
                />{" "}
              </div>
              <div className="mr-2">
                <span></span>
                <label>Comments:</label>
                <input
                  type="range"
                  name="commentsCount"
                  min="0"
                  max="99999998"
                  value={postData.commentsCount}
                  onChange={handleInputChange}
                />{" "}
              </div>
              <div className="mr-2">
                <span></span>
                <label>Retweets:</label>
                <input
                  type="range"
                  name="retweetsCount"
                  min="0"
                  max="99999998"
                  value={postData.retweetsCount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <span></span>
                <label>Bookmarks:</label>
                <input
                  type="range"
                  name="bookmarksCount"
                  min="0"
                  max="99999998"
                  value={postData.bookmarksCount}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTwitterPost;
