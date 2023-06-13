import React, { useState } from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import useUsers from "../../../hooks/useUsers";
import Instructor from "../../Instructors/Instructor/Instructor";
import { useEffect } from "react";

const PopularInstructor = () => {
  const [users, loading, refetch] = useUsers();
  const instructors = users.filter((user) => user.role === "instructor");
  // Calculate the sum of enrolled students for each user
  instructors.forEach(function (user) {
    var totalEnrolledStudents = user.classes.reduce(function (sum, cls) {
      return sum + cls.enrolledStudents;
    }, 0);
    user.totalEnrolledStudents = totalEnrolledStudents;
  });
  // Sort the array based on the totalEnrolledStudents property in descending order
  instructors.sort(function (a, b) {
    return b.totalEnrolledStudents - a.totalEnrolledStudents;
  });

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (loading) return <GlobalSpinner />;
  if (instructors && Array.isArray(instructors) && instructors.length > 0)
    return (
      <div className="bg-gray-100 dark:bg-slate-700 py-12">
        <div className="max-w-[1290px] mx-auto px-4">
          <SectionHead
            className="pb-5 mb-10"
            title="Our Amazing Instructor"
            subtitle="Let's See!"
          />
          <div className="px-2 overflow-hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={slidesPerView}
              spaceBetween={50}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {instructors.slice(0, 6).map((el) => (
                <SwiperSlide key={el._id}>
                  <Instructor key={el._id} data={el} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
};

export default PopularInstructor;
