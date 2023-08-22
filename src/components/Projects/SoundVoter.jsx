import React from "react";
import soundvoterImg from "../../assets/soundvoter.gif";

function SoundVoter() {
  return (
    <div id="soundvoter" className="max-w-screen-xl m-auto p-8 mt-5 py-28">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-12">
        SoundVoter
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-10">
          <img src={soundvoterImg} className="max-w-full" alt="Sound Voter" />
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
          href="https://hollyniquette.github.io/sound-voter/"
          className="bg-blue-600 text-white text-lg px-8 py-3 rounded hover:bg-blue-800 transition"
        >
          demo
        </a>
        <a
          href="https://github.com/hollyniquette/sound-voter"
          className="bg-blue-600 text-white text-lg px-8 py-3 rounded hover:bg-blue-800 transition"
        >
          repo
        </a>
      </div>
    </div>
  );
}

export default SoundVoter;
