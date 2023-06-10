import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  return (
    <>
      <div className="max-w-[1180px] mx-auto py-5 px-5">
        <SectionHead titile="WITH OUR INSTRUCTORS" subtitle="get acquainted" className="sm:mb-10" />
        <div className="sm:grid grid-cols-3 gap-4">
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
          <Instructor />
        </div>
      </div>
    </>
  );
};

export default Instructors;
