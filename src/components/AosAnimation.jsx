import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosAnimation = ({ children }) => {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  return children;
};

export default AosAnimation;
