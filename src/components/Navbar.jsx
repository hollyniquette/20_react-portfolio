import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const handleNav = () => {
    setNav(!nav);
  };

  let currentPageTitle;
  switch (location.pathname) {
    case "/about":
      currentPageTitle = "about";
      break;
    case "/projects":
      currentPageTitle = "projects";
      break;
    case "/projects/soundvoter":
      currentPageTitle = "projects";
      break;
    case "/projects/bite-buddy":
      currentPageTitle = "projects";
      break;
    case "/projects/weather-dashboard":
      currentPageTitle = "projects";
      break;
    case "/projects/undecided":
      currentPageTitle = "projects";
      break;
    case "/contact":
      currentPageTitle = "contact";
      break;
    default:
      currentPageTitle = "home";
      break;
  }
  return (
    <nav>
      <div className="fixed top-0 left-0 w-full h-[90px] bg-white z-50">
        <div className="md:block hidden fixed top-3 left-9 z-10 p-6">
          <h1 className="text-2xl text-[#929487] ">{currentPageTitle}</h1>
        </div>
        {/* TODO: change react icons */}
        <a
          onClick={handleNav}
          className="fixed rounded-[25%] shadow-lg bg-[#929487]-400 shadow-[#929487] m-2 p-4 top-4 right-4 md:hidden cursor-pointer hover:scale-110 z-[99]"
        >
          <AiOutlineMenu size={20} />
        </a>
        {/* <AiOutlineMenu
        size={20}
        onClick={handleNav}
        className="fixed rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 top-4 right-4 md:hidden cursor-pointer z-[99]"
      /> */}
        {/* mobile nav */}
        {!nav && (
          <div className="md:hidden fixed top-3 left-9 z-10 p-6">
            <h1 className="text-2xl text-[#929487]">{currentPageTitle}</h1>
          </div>
        )}
        {nav ? (
          <div className="fixed w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20">
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
              href="about"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            >
              <BsPerson size={20} />
              <span className="pl-4 ">About</span>
            </a>
            <a
              onClick={handleNav}
              href="projects"
              className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            >
              <GrProjects size={20} />
              <span className="pl-4 ">Projects</span>
            </a>
            <a
              onClick={handleNav}
              href="contact"
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
              href="about"
              className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            >
              <BsPerson size={20} />
            </a>
            <a
              href="projects"
              className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            >
              <GrProjects size={20} />
            </a>
            <a
              href="contact"
              className="rounded-[25%] shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
