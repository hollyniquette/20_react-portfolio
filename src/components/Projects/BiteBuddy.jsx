import React from "react";
import bbImg from "../../assets/bbImg-04.png";

function BiteBuddy() {
  return (
    <div id="bite-buddy" className="max-w-screen-xl m-auto p-8 mt-5 py-28">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-12">
        bitebuddy
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-10">
          <img src={bbImg} className="max-w-full" alt="Bite Buddy" />
        </div>
        <div className="md:w-1/3 md:pr-10 mt-12">
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi unde
            ex quod pariatur, dolores incidunt eos, ratione ad dolorem hic ipsum
            officiis veritatis vitae libero non eaque eligendi est nisi.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4 justify-center mt-12">
        <a
          href="https://bite-buddy23-22fb9ad56b45.herokuapp.com/"
          className="bg-blue-600 text-white text-lg px-8 py-3 rounded hover:bg-blue-800 transition"
        >
          demo
        </a>
        <a
          href="https://github.com/DaveFMiranda/bite-buddy"
          className="bg-blue-600 text-white text-lg px-8 py-3 rounded hover:bg-blue-800 transition"
        >
          repo
        </a>
      </div>
    </div>
  );
}

export default BiteBuddy;
