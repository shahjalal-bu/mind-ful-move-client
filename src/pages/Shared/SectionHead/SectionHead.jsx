import React from "react";

const SectionHead = ({ titile, subtitle }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="font-grandHotel antialiased text-amber-500 text-xl sm:text-3xl">
        {subtitle}
      </div>
      <div className="font-luckiestGuy antialiased text-2xl sm:text-5xl mt-5">
        {titile}
      </div>
    </div>
  );
};

export default SectionHead;
