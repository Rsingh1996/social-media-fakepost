import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-evenly items-center px-4 bg-[#16263e] text-gray-300 ">
      <div>Logo</div>
      <ul className=" flex justify-evenly ">
        <li>Instrgram</li>
        <li>X (Twitter)</li>
        <li>FaceBook</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
};

export default Navbar;
