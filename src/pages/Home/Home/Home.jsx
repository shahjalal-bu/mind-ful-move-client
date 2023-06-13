import SectionHead from "../../Shared/SectionHead/SectionHead";
import Hero from "../Hero/Hero";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularClass />
      <PopularInstructor />
      <TestimonialSection />
    </>
  );
};

export default Home;
