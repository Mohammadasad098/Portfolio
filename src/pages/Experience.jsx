import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/Hide scroll-to-top button on scroll
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-[#3189ac] flex flex-col justify-center items-center px-6 relative">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-white font-semibold text-xl md:text-2xl leading-snug">
            I am currently working as a{" "}
            <span className="text-blue-900">Frontend Development Intern</span>
            {" "}at <span className="text-blue-900">Trust Nexus</span>,
            contributing to their website projects and gaining valuable hands-on experience.
          </p>

        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/experience.webp"
            alt="Experience"
            className="w-[250px] md:w-[400px] rounded-lg"
          />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-950 hover:bg-blue-800 transition-all duration-300 font-bold text-white text-xl p-3 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Experience;
