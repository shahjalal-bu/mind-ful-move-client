import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Instructor = () => {
  return (
    <div className="bg-white rounded shadow-lg  group">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1616486436236-f45974d3ba49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8VHJpa29uYXNhbmF8fHx8fHwxNjg2MjQ4NjE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="Yoga"
          className="w-full h-60 object-cover rounded-xl mb-4"
        />

        {/* TODO: transiton not working */}
        <div className="w-full h-full justify-center items-center bg-amber-100/50 absolute left-0  hidden group-hover:top-0 group-hover:flex">
          <div className="bg-white p-2 rounded-full cursor-pointer">
            <AiOutlinePlus size={25} />
          </div>
        </div>
      </div>
      <div className="pb-5 px-5">
        <h3 className="text-2xl font-aleo font-bold antialiased text-center">
          Yoga and Meditation
        </h3>
        <p className="text-gray-500 text-center leading-1">hary@gmail.com</p>
        <div className="flex justify-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <SiGoogleclassroom className="text-amber-500" />
            <span className="text-gray-400 gap-x-2">10</span>
          </div>
          <div className="flex items-center gap-x-2">
            <FaStar className="text-amber-500" />
            <span className="text-gray-400">4.5</span>
          </div>
        </div>
        <button className="btn btn-warning my-5 btn-md w-full">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Instructor;
