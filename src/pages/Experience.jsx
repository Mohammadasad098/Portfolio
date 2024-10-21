import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
    <div className='bg-[#3189ac] py-[255px] md:py-[222px]'>
      <div className='flex flex-col md:flex-row justify-center items-center flex-wrap md:justify-evenly'>
        <div className='mb-8 md:mb-0'> {/* Increased margin-bottom for more gap */}
          <p className='text-white text-center font-semibold text-4xl'>I am studying web development at SMIT.</p>
        </div>
        <div className='mt-10 md:mt-0'>
          <img 
            width={300} // Reduced image width for mobile screens
            src="/images/experience.webp" 
            alt="Experience" 
            className='md:w-[400px]' // Keeps original width for larger screens
          />
        </div>
      </div>
    </div>
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-8 bg-blue-950 font-bold text-white text-2xl px-4 py-3 rounded-md shadow-lg"
        > 
          <FaArrowUp />
        </button>
      )}
    </div>
    </div>
  );
}

export default Experience;

