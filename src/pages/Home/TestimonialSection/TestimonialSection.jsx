import { motion } from "framer-motion";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import "swiper/css";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// import { Pagination } from "swiper";
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      designation: "Yoga Enthusiast",
      quote:
        "I am truly grateful for the yoga classes offered on this teaching website. The instructors are incredibly knowledgeable and provide clear instructions, making it easy for beginners like me to follow along. The variety of classes ensures that there's always something new to explore. Yoga has become an essential part of my self-care routine, thanks to this platform.",
    },
    {
      id: 2,
      name: "Michael Adams",
      designation: "Yoga Practitioner",
      quote:
        "I've been practicing yoga for years, and this teaching website has taken my practice to the next level. The advanced classes challenge me both physically and mentally, helping me push my boundaries and grow as a yogi. The website's intuitive interface and well-structured courses make it a joy to navigate. I highly recommend it to anyone looking to deepen their yoga journey.",
    },
    {
      id: 3,
      name: "Sophia Patel",
      designation: "Yoga Instructor",
      quote:
        "As a yoga instructor, I'm always seeking inspiration and new teaching methods. This website has been a treasure trove of resources for me. The masterclasses and workshops have enriched my knowledge and expanded my repertoire of sequences and techniques. The community forums are a great place to connect with fellow instructors and exchange ideas. This teaching website is a game-changer for yoga professionals.",
    },
    {
      id: 4,
      name: "John Smith",
      designation: "Yoga Enthusiast",
      quote:
        "I stumbled upon this teaching website while searching for yoga classes online, and I'm glad I did. The beginner-friendly classes helped me ease into my yoga practice and build a solid foundation. The instructors' guidance and the supportive community have made my journey enjoyable and fulfilling. I would recommend this platform to anyone starting their yoga journey.",
    },
    {
      id: 5,
      name: "Emily Davis",
      designation: "Yoga Practitioner",
      quote:
        "This teaching website has become my go-to platform for yoga. The diverse range of classes, from Vinyasa to Yin, allows me to explore different styles and cater to my changing needs. The video library is extensive, and the quality of instruction is exceptional. Whether I want to energize or unwind, I can always find a class that suits my mood. It's a fantastic resource for yogis of all levels.",
    },
    {
      id: 6,
      name: "Daniel Johnson",
      designation: "Yoga Enthusiast",
      quote:
        "I have been using this teaching website for a few months now, and I'm impressed with the quality of content. The instructors are passionate, and their dedication shines through in each class. The website's user-friendly interface makes it easy to find and bookmark my favorite classes. It's like having a personal yoga studio at my fingertips. I'm grateful for this platform.",
    },
    {
      id: 7,
      name: "Olivia Wilson",
      designation: "Yoga Practitioner",
      quote:
        "This teaching website has transformed my yoga practice. The well-structured programs and challenges keep me motivated and help me progress. The interactive features, such as progress tracking and achievements, add a fun element to my journey. The community support and the ability to connect with fellow yogis have been invaluable. I'm grateful for this platform and the positive impact it has had on my life.",
    },
    {
      id: 8,
      name: "Ethan Martinez",
      designation: "Yoga Instructor",
      quote:
        "As a yoga instructor, I appreciate the comprehensive resources available on this teaching website. The workshops and tutorials have enhanced my teaching skills, and I often incorporate the knowledge gained into my classes. The platform's emphasis on alignment and mindful movement aligns perfectly with my teaching philosophy. It's a valuable tool for both yoga enthusiasts and instructors.",
    },
    {
      id: 9,
      name: "Ava Thompson",
      designation: "Yoga Enthusiast",
      quote:
        "I cannot recommend this teaching website enough. The quality of instruction is top-notch, and the classes are suitable for all levels. The website's layout is clean and intuitive, making it easy to navigate and find the right class for my needs. Whether I'm looking for a quick stretch or a full-length practice, I can always find something that fits my schedule. It's been a game-changer for my yoga journey.",
    },
    {
      id: 10,
      name: "Noah Davis",
      designation: "Yoga Practitioner",
      quote:
        "This teaching website has exceeded my expectations. The classes are thoughtfully curated, and the instructors provide clear cues and modifications. The website's design is visually appealing, creating a calming atmosphere for my practice. The variety of meditation and breathing exercises complements the yoga classes perfectly. It's a holistic platform that supports my overall well-being.",
    },
  ];

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

  return (
    <section className="bg-gray-100 dark:bg-slate-800 py-12">
      <div className="max-w-[1290px] mx-auto px-4 overflow-hidden">
        <SectionHead
          className="pb-5"
          title="Testimonials"
          subtitle="What People Say!"
        />

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white dark:bg-slate-600  p-6 rounded shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-gray-700 dark:text-white mb-4">
                  {testimonial.quote}
                </p>
                <p className="text-gray-600 dark:text-white font-bold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 dark:text-white ">
                  {testimonial.designation}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
