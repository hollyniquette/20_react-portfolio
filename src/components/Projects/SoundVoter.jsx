import React from "react";
import soundvoterImg from "../../assets/soundvoter.gif";

function SoundVoter() {
  return (
    <div id="soundvoter" className="max-w-[1040px] m-auto p-4 py-28">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-12">
        SoundVoter
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 py-8">
        <img src={soundvoterImg} className="max-w-[600px]" />
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi unde ex
          quod pariatur, dolores incidunt eos, ratione ad dolorem hic ipsum
          officiis veritatis vitae libero non eaque eligendi est nisi.
        </p>
      </div>
    </div>
  );
}

export default SoundVoter;
