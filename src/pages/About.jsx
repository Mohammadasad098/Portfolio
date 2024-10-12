import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  return (
    <>
    <div className='bg-[#3189ac] py-32'>




    <div className='flex text-white flex-col items-center md:flex-row justify-center md:justify-evenly py-16 md:py-32'>
  <div className='md:text-left mb-8 md:mb-0 md:mr-8'>
    <p className='font-semibold text-5xl px-3'>Know Who <span className='text-blue-950'>I'M</span></p>
    <br />
    <p className='text-2xl font-medium px-3'>
      Hi Everyone, I am <span className='text-blue-950'>Muhammad Asad</span> from <span className='text-blue-950'>Karachi, Pakistan.</span> <br />
      I am studying web development at SMIT.
    </p>
  </div>
  
  <div>
    <img 
      className="w-96 md:w-96" 
      src="https://media-public.canva.com/9Zna4/MAFjWH9Zna4/1/tl.png" 
      alt="Muhammad Asad" 
    />
  </div>
</div>






<p className='font-semibold text-5xl text-center text-white flex-wrap'>Web Development <span className='text-blue-950'>Skills</span> </p>
<div className='flex justify-center'>
  <div className='flex flex-wrap justify-center gap-4 mx-8 my-8'>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <IoLogoHtml5 className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <FaCss3Alt className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <IoLogoJavascript className='text-8xl text-white'/>
    </div>
    <div className='border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <FaBootstrap className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <RiTailwindCssFill className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <BiLogoTypescript className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <FaReact className='text-8xl text-white'/>
    </div>
    <div className='transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-950 py-5 px-8 rounded-md w-[calc(50%-8px)] md:w-[calc(25%-16px)] flex justify-center items-center'>
      <RiNextjsFill className='text-8xl text-white'/>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default About