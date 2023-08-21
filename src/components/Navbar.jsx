import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 md:hidden cursor-pointer z-[99]"
      />
      {/* mobile nav */}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="/"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="/about"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <BsPerson size={20} />
            <span className="pl-4 ">About</span>
          </a>
          <a
            onClick={handleNav}
            href="/projects"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <GrProjects size={20} />
            <span className="pl-4 ">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="/contact"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-4 right-4 z-10">
        <div className="flex justify-center items-right">
          <a
            href="/"
            className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="/about"
            className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="/projects"
            className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="/contact"
            className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
