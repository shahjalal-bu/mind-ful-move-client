import SectionHead from "../../Shared/SectionHead/SectionHead";
import Card from "./Card";

const PopularClass = () => {
  return (
    <div className="max-w-[1180px] mx-auto py-7 px-5">
      <SectionHead
        titile="Choose Our Best Courses"
        subtitle="Choose Your Level Best"
        className="sm:mb-10"
      />
      <div className="sm:grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default PopularClass;
