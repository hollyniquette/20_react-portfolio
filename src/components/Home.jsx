import React from "react";

const Home = () => {
  return (
    <div id="background">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1535396253759-f556cac3c94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="background-image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/75">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            holly niquette
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            welcome
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
