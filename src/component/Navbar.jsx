import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed flex items-center justify-between px-4 bg-[#16263e] text-gray-300 z-50">
      <div className="mb-2 sm:mb-0">Logo</div>
      <ul className="flex flex-wrap justify-center gap-2">
        <li className="text-center">Instrgram</li>
        <li className="text-center">X (Twitter)</li>
        <li className="text-center">Facebook</li>
        <li className="text-center">LinkedIn</li>
      </ul>
    </div>
  );
};

export default Navbar;
