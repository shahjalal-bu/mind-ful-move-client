import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Instructor from "./Instructor";

const Instructors = () => {
  return (
    <>
      <div className="max-w-[1180px] mx-auto py-7 px-5">
        <SectionHead titile="WITH OUR INSTRUCTORS" subtitle="get acquainted" />
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
