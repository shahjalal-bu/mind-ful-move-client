import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Class from "../../Shared/Class/Class";
import useClasses from "../../../hooks/useClasses";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";

const Classes = () => {
  const [classes, loading, refetch] = useClasses();
  if (loading) return <GlobalSpinner />;
  if (classes && Array.isArray(classes) && classes.length > 0)
    return (
      <>
        <div className="max-w-[1180px] mx-auto py-7 px-5">
          <SectionHead
            titile="OUR CLASS"
            subtitle="get roared"
            className="sm:mb-10"
          />
          <div className="sm:grid grid-cols-3 gap-4">
            {classes?.map((el) => (
              <Class key={el._id} data={el} />
            ))}
          </div>
        </div>
      </>
    );
};

export default Classes;
