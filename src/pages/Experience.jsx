import React from 'react';

const Experience = () => {
  return (
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
  );
}

export default Experience;

