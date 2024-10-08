import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <>
    <div className='bg-[#3189ac] flex justify-center gap-72 items-center py-48 flex-wrap'>
    <div>
      <p className='text-4xl font-medium'>Hi There! 👋🏻</p><br />
      <p className='text-4xl font-medium'> I'M MUHAMMAD ASAD</p><br />
      <br />
      <TypeAnimation
      className='font-medium'
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
<img width={400} src="/images/home.webp" alt="" />
    </div>
    </div>





    <div className='bg-[#3189ac] flex justify-center items-center gap-8 px-20'>
    <div>
      <h1 className='text-5xl font-semibold ml-8'>LET ME INTRODUCE MYSELF</h1>
<p className='text-[19px] mt-8 font-medium'>
I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
<br /><br />

I am fluent in classics like Javascript, ReactJs and React Native. <br /><br />

My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.
<br /><br />
Whenever possible, I also apply my passion for developing products with Modern Javascript Library and Frameworks  like React.js

</p>
</div>
<div>
  <img width={250} src="/images/avatar.png" alt="" />
</div>
    </div>


    <div className='text-center pt-20 bg-[#3189ac]'>
      <h1 className='text-4xl font-semibold'>FIND ME ON</h1>
      <p>Feel free to connect with me</p>
    </div>
    
    </>
  )
}

export default About