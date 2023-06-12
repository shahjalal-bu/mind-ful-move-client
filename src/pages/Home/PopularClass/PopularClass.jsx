import useClasses from "../../../hooks/useClasses";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import Card from "./Card";

const PopularClass = () => {
  const [classes, loading, refetch] = useClasses();
  if (loading) return <GlobalSpinner />;
  if (classes && Array.isArray(classes) && classes.length > 0)
    return (
      <div className="max-w-[1180px] mx-auto py-7 px-5">
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
              <Card key={el._id} data={el} />
            ))}
        </div>
      </div>
    );
};

export default PopularClass;
