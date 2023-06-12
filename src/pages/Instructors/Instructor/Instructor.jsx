import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegEye, FaStar } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Instructor = ({ data }) => {
  const { displayName, photoURL, email } = data;
  return (
    <div className="bg-white rounded shadow-lg  group">
      <div className="relative">
        <img
          src={photoURL}
          alt="Yoga"
          className="w-full h-60 object-cover rounded-xl mb-4"
        />

        {/* TODO: transiton not working */}
        <div className="w-full h-full justify-center items-center bg-amber-100/50 absolute left-0  hidden group-hover:top-0 group-hover:flex">
          <div className="bg-white p-2 rounded-full cursor-pointer">
            <FaRegEye size={25} />
          </div>
        </div>
      </div>
      <div className="pb-5 px-5">
        <h3 className="text-2xl font-aleo font-bold antialiased text-center">
          {displayName}
        </h3>
        <p className="text-gray-500 text-center leading-1">{email}</p>
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
