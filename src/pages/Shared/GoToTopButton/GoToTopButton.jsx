import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-8 right-8 z-10 btn btn-warning btn-circle shadow-lg"
          onClick={handleGoToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
