import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";


const Home = () => {
  return (
    <>
    <div className='bg-[#3189ac] pt-32'>

    <div className="flex justify-evenly items-center py-20 flex-wrap">
  <div className="text-center md:text-left mb-10 md:mb-0">
    <p className="text-4xl font-medium">Hi There! 👋🏻</p><br />
    <p className="text-4xl font-medium">I'M MUHAMMAD ASAD</p><br /><br />
    <TypeAnimation
      className="font-medium"
      sequence={[
        'Front End Developer',
        1000,
        'Deep Learning Engineer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  </div>
  <div>
  <img 
  width={400}
      className="md:w-300" 
      src="/images/home.webp" 
      alt="Muhammad Asad" 
    />
  </div>
</div>






<div className="flex flex-col md:flex-row justify-evenly items-center px-6 md:px-20 py-10">
  <div className="mb-10 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-semibold ml-0 md:ml-8 text-center md:text-left">
      LET ME INTRODUCE MYSELF
    </h1>
    <p className="text-[18px] md:text-[20px] mt-6 md:mt-8 font-medium text-center md:text-left">
      I fell in love with programming, and I've at least learned something, I think… 🤷‍♂️
      <br /><br />
      I am fluent in classics like JavaScript, React.js, and React Native.
      <br /><br />
      My fields of interest are building new Web Technologies and Products, as well as areas related to Deep Learning and Natural Language Processing.
      <br /><br />
      Whenever possible, I apply my passion for developing products with modern JavaScript libraries and frameworks like React.js.
    </p>
  </div>
  <div className="mt-6 md:mt-0">
    <img width={250} src="/images/avatar.png" alt="Avatar" />
  </div>
</div>




    <div className='text-center pt-20'>
      <h1 className='text-4xl font-semibold'>FIND ME ON</h1>
      <p className='text-2xl font-[2px] mt-3'>Feel free to connect with me</p>
    </div>
    <div className="flex justify-center gap-3 text-5xl mt-5 pb-10">
  <FaGithub className="border p-3 bg-white rounded-full" />
  <FaTwitter className="border p-3 bg-white rounded-full" />
  <FaLinkedin className="border p-3 bg-white rounded-full" />
  <PiInstagramLogoFill className="border p-3 bg-white rounded-full" />
  <MdEmail className="border p-3 bg-white rounded-full" />
</div>


    </div>
    </>
  )
}

export default Home