import React from "react";

const ProjectCard = ({ title, onClick }) => {
  return (
    <div className="relative aspect-square flex items-center justify-center w-full h-[350px] bg-[#9BC4BC] shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#8DDBE0]">
      {/* <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" /> */}
      <div className="rounded-xl cursor-pointer">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="hidden group-hover: absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <a href="/">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-2xl">
              More Info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// TODO: colors
