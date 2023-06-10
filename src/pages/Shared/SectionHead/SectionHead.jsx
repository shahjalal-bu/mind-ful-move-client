import React from "react";

const SectionHead = ({ titile, subtitle, className }) => {
  return (
    <div className={`flex flex-col items-center ` + className}>
      {subtitle && (
        <div className="font-grandHotel antialiased text-amber-500 text-xl sm:text-3xl my-5">
          {subtitle}
        </div>
      )}
      <div className="font-luckiestGuy antialiased text-2xl sm:text-5xl">
        {titile}
      </div>
    </div>
  );
};

export default SectionHead;
