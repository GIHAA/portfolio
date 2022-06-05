import React from 'react';

const About = () => {
  return (
    <div name='about' className=' bg-radial-at-r from-sky-400 to-indigo-900 w-full h-screen bg-[#0a192f] text-gray-300 snap-start'>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p data-aos="fade-up" className='text-4xl font-bold inline border-b-4 border-[#00dbfe]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p data-aos="fade-right" >Hi. I'm Gihan sudeepa, nice to meet you.</p>
            </div>
            <div>
              <p data-aos="fade-up">Robotics enthusiast and a Software Engineering student 🚀 from sri lanka. Currently,I am studing Software Engineering at SLIIT</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;