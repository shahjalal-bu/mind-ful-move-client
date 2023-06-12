import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Instructor from "../Instructor/Instructor";
import useUsers from "../../../hooks/useUsers";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";

const Instructors = () => {
  const [users, loading, refetch] = useUsers();
  const instructors = users.filter((user) => user.role === "instructor");
  if (loading) return <GlobalSpinner />;
  if (instructors && Array.isArray(instructors) && instructors.length > 0)
    return (
      <>
        <div className="max-w-[1180px] mx-auto py-5 px-5">
          <SectionHead
            titile="WITH OUR INSTRUCTORS"
            subtitle="get acquainted"
            className="sm:mb-10"
          />
          <div className="sm:grid grid-cols-3 gap-4">
            {instructors.map((el) => (
              <Instructor key={el._id} data={el} />
            ))}
          </div>
        </div>
      </>
    );
};

export default Instructors;
