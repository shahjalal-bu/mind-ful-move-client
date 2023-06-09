import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlinePlus,
} from "react-icons/ai";

const Card = () => {
  let a = ["a", "b"];
  return (
    <div className="bg-white rounded shadow-lg  group">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1616486436236-f45974d3ba49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8VHJpa29uYXNhbmF8fHx8fHwxNjg2MjQ4NjE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="Yoga"
          className="w-full h-60 object-cover  mb-4"
        />
        <div className="flex p-1 rounded-xl gap-x-1 shadow shadow-gray-300 absolute -bottom-3 right-4 bg-white z-10">
          <img
            src="https://bestwebcreator.com/dhyana/demo/assets/images/cl_teacher_img1.jpg"
            className="w-6 h-6 rounded-full"
          />
          <span>Rasmika Mardana</span>
        </div>
        {/* TODO: transiton not working */}
        <div className="w-full h-full justify-center items-center bg-black/50 absolute left-0  hidden group-hover:top-0 group-hover:flex">
          <div className="bg-white p-2 rounded-full cursor-pointer">
            <AiOutlinePlus size={25} />
          </div>
        </div>
      </div>
      <div className="pb-5 px-5">
        <div className="badge badge-accent text-white font-semibold">
          accent
        </div>
        <h3 className="text-2xl font-aleo font-bold mb-2 antialiased my-2">
          Yoga and Meditation
        </h3>
        <div className="flex gap-x-3">
          <div className="flex items-center gap-x-2">
            <AiOutlineCalendar className="text-amber-500" />
            <span className="text-gray-400 gap-x-2">Sun, Tue , Wed</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineClockCircle className="text-amber-500" />
            <span className="text-gray-400">09:00 - 11:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
