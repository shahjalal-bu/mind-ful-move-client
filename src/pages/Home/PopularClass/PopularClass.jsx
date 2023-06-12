import useClasses from "../../../hooks/useClasses";
import Class from "../../Shared/Class/Class";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const PopularClass = () => {
  const [classes, loading, refetch] = useClasses();
  if (loading) return <GlobalSpinner />;
  if (classes && Array.isArray(classes) && classes.length > 0)
    return (
      <div className="dark:bg-slate-700">
        <div className="max-w-[1290px] mx-auto py-7 px-5 ">
          <SectionHead
            titile="Choose Our Best Courses"
            subtitle="Choose Your Level Best"
            className="sm:mb-10"
          />
          <div className="sm:grid grid-cols-3 gap-4">
            {classes
              .sort((a, b) => b.enrolledStudents - a.enrolledStudents)
              .slice(0, 6)
              ?.map((el) => (
                <Class key={el._id} data={el} />
              ))}
          </div>
        </div>
      </div>
    );
};

export default PopularClass;
