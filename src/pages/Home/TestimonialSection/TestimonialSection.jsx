import { motion } from "framer-motion";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Company A",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac varius leo, at iaculis nisi.",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "CTO, Company B",
      quote:
        "Sed feugiat nulla non ex lobortis, ac varius sapien accumsan. Quisque faucibus turpis at erat fringilla, non placerat.",
    },
    {
      id: 3,
      name: "David Johnson",
      designation: "CFO, Company C",
      quote:
        "Aenean a felis ac ex feugiat eleifend. Mauris nec mauris turpis. Curabitur tempus, magna id viverra tincidunt.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1180px] mx-auto px-4">
        
        <SectionHead titile="Testimonials" subtitle="What People Say!" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <p className="text-gray-600 font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
