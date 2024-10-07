import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <>
    <div className='bg-[#3189ac] flex justify-center gap-72 items-center py-60 flex-wrap'>
    <div>
      <p className='text-4xl'>Hi There! 👋🏻</p><br />
      <p className='text-4xl'> I'M MUHAMMAD ASAD</p><br />
      <br />
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'MERN Stack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Deep Learning Engineer',
        1000,
        'Mobile Application Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    <div>
<img width={100} src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg" alt="" />
    </div>
    </div>
    </>
  )
}

export default Home