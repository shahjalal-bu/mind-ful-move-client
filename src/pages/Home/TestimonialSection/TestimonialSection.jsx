import { motion } from "framer-motion";
import SectionHead from "../../Shared/SectionHead/SectionHead";

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
  ];

  return (
    <section className="bg-gray-100 dark:bg-slate-800 py-12">
      <div className="max-w-[1290px] mx-auto px-4">
        <SectionHead
          className="pb-5"
          titile="Testimonials"
          subtitle="What People Say!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
