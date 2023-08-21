// import React from "react";

// const ProjectItem = ({ title, onClick }) => {
//   return (
//     <div className="relative flex items-center justify-center w-full h-[180px] bg-gray-800 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from gray-200 to-[#001b5e]">
//       {/* <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" /> */}
//       <div className="rounded-xl group-hover:hidden">

//       <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         <h3 className="text-2xl font-bold text-white tracking-wider text-center">
//           {title}
//         </h3>
//         <p className="pb-4 pt-2 text-white text-center">React JS</p>
//         <a href="/">
//           <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
//             More Info
//           </p>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectItem;

import React from "react";

const ProjectCard = ({ title, onClick }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[180px] bg-[#9BC4BC] shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#8DDBE0]">
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
