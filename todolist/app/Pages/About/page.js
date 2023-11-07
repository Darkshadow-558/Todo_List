import React from "react";
import avatar from "@/app/Images/avatar.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-200">
      <div className="w-4/5 h-1/2 bg-slate-100 rounded-s-full flex justify-between items-center">
        <div className="w-2/5 h-full rounded-full relative overflow-hidden bg-red-300">
          <Image src={avatar} fill />
        </div>
        <div className="w-3/5 h-full flex flex-col px-10 py-10 gap-3">
          <h1 className=" font-extrabold text-4xl text-slate-700">
            SUDARSHAN BHALBAR
          </h1>
          <h3 className="font-bold text-lg text-slate-500">Web Developer</h3>
          <div className="flex gap-0 flex-col">
            <p className=" font-semibold text-base text-slate-400">
              As A Web Developer, I Am Responsible For
            </p>
            <p className=" font-semibold text-base text-slate-400">
              Designing And Developing Web Pages.
            </p>
            <p className=" font-semibold text-base text-slate-400">
              My Primary Focus Is To Create Responsive,
            </p>
            <p className=" font-semibold text-base text-slate-400">
              User-Friendly Experiences That Meet The Needs
            </p>
            <p className=" font-semibold text-base text-slate-400">
              Of A Diverse Online Audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
