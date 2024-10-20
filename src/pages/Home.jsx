import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import 'animate.css';


const Home = () => {
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
    <>
    <div className='bg-[#3189ac] pt-28'>

    <div className="flex flex-col md:flex-row justify-evenly items-center py-20 flex-wrap">
  <div className="text-center md:text-left mb-10 md:pb-10">
    <p className="text-4xl md:text-5xl text-white font-medium">Hi There! 👋🏻</p><br />
    <p className="text-4xl md:text-5xl text-white font-medium">I'M <span className='text-blue-950'>MUHAMMAD ASAD</span></p><br /><br />
    <TypeAnimation
      className="font-medium text-blue-950 text-3xl md:text-5xl"
      sequence={[
        'Front End Developer',
        1000,
        'Mern Stack Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  </div>
  <div className='mt-10 md:mt-0'> 
  <img 
    className="w-72 md:w-[400px] mx-2"
    src="/images/home.webp" 
    alt="Muhammad Asad" 
  />
</div>


</div>






<div className="text-white flex flex-col md:flex-row justify-evenly items-center px-6 md:px-20 py-10">
  <div className="mb-10 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-semibold ml-0 md:ml-8 text-center md:text-left">
      LET ME <span className='text-blue-950'>INTRODUCE</span> MYSELF
    </h1>
    <p className="text-[18px] md:text-[20px] mt-6 md:mt-8 font-medium text-center md:text-left">
      I fell in love with programming, and I've at least learned something, I think… 🤷‍♂️
      <br /><br />
      I am proficient in building web applications using <span className='text-blue-950'>React.js and Next.js</span> , offering optimized and scalable solutions. <br /> I can develop dynamic, responsive, and user-friendly interfaces while leveraging modern technologies to <br /> enhance the user experience
      <br /><br />
      My fields of interest are building new Web <span className='text-blue-950'>Technologies and Products</span>, as well as areas related to <br /><span className='text-blue-950'>Deep Learning and Natural Language Processing.</span>
      <br /><br />
      Whenever possible, I apply my passion for developing products with <span className='text-blue-950'>modern JavaScript libraries and <br /> frameworks </span> like <span className='text-blue-950'>React.js and Next.js.</span>
    </p>
  </div>
  <div className="mt-6 md:mt-0">
    <img width={250} src="/images/avatar.png" alt="Avatar" />
  </div>
</div>




    <div className='text-center pt-20 text-white'>
      <h1 className='text-4xl font-semibold'>FIND ME ON</h1>
      <p className='text-2xl font-[2px] mt-3'>Feel free to <span className='text-blue-950'>connect</span> with me</p>
    </div>
    <div className="flex justify-center gap-3 text-5xl mt-5 pb-10">
 <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://github.com/Mohammadasad098/"> <FaGithub className="border p-3 bg-white rounded-full" /></a>
  <FaTwitter className="border p-3 bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-105" />
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://www.linkedin.com/in/asad-ullah-b2a2572a9/"><FaLinkedin className="border p-3 bg-white rounded-full" /></a>
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://instagram.com/m.asad._.07/"><PiInstagramLogoFill className="border p-3 bg-white rounded-full" /></a>
  <a className='transition-transform duration-300 ease-in-out hover:scale-105' href="https://mail.google.com/mail/u/0/#sent"><MdEmail className="border p-3 bg-white rounded-full" /></a>
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
    </>
  )
}

export default Home