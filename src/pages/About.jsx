import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <>
    <div className='bg-[#3189ac] py-32'>




      <div className='flex justify-evenly items-center py-32 flex-wrap'>
    <div>
      <p className='font-semibold text-5xl'>Know Who I'M
      </p> <br />
      <p className='text-2xl font-medium'>Hi Everyone, I am Muhammad Asad from Karachi, Pakistan. <br />
      I am studying web development at SMIT.</p>
    </div>
<div>
<img 
  width={300}
      className="md:w-300" 
      src="/images/home.webp" 
      alt="Muhammad Asad" 
    />
</div>
</div>





<p className='font-semibold text-5xl text-center flex-wrap'>Web Development Skills</p>
<div className='flex justify-center'>

  <div className='flex justify-center gap-4 flex-wrap mx-8 my-8'>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<IoLogoHtml5 className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<FaCss3Alt className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<IoLogoJavascript  className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<FaBootstrap  className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<RiTailwindCssFill  className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<BiLogoTypescript  className='text-8xl text-white'/>
</div>
<div className='border-2 border-blue-950 py-6 px-20 rounded-md'>
<FaReact  className='text-8xl text-white'/>
</div>
  </div>
</div>

    </div>
    </>
  )
}

export default About