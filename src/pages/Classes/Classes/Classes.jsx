import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Class from "../Class/Class";

const Classes = () => {
  return (
    <>
      <div className="max-w-[1180px] mx-auto py-7 px-5">
        <SectionHead
          titile="OUR CLASS"
          subtitle="get roared"
          className="sm:mb-10"
        />
        <div className="sm:grid grid-cols-3 gap-4">
          <Class />
          <Class />
          <Class />
          <Class />
          <Class />
          <Class />
        </div>
      </div>
    </>
  );
};

export default Classes;
