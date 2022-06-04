import React from 'react';

import HTML from '../assets/html.png';
import arduino from '../assets/arduino.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import CPP from '../assets/C++.png';
import FireBase from '../assets/firebase.png';
import pi from '../assets/pi.png';
import GitHub from '../assets/github.png';


const Skills = () => {
  return (
    <div name = "Experience" className='bg-[#0a192f] text-gray-300 pt-[160px] pb-[160px]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00dbfe] '>Experience</p>
                {/* <p className='py-4'></p> */}
            </div>

            <div  className='w-full mt-[30px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div data-aos="fade-right" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={HTML} />
                    <p className='my-4'>HTML</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={CSS} />
                    <p className='my-4'>CSS</p>
                </div>
                <div data-aos="fade-down" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={JavaScript} />
                    <p className='my-4'>JAVASCRPIT</p>
                </div>
                <div data-aos="fade-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={arduino} />
                    <p className='my-4'>ARDUINO</p>
                </div>
                <div data-aos="fade-up-right" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={pi} />
                    <p className='my-4'>Raspberry pi pico</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={CPP} />
                    <p className='my-4'>C++</p>
                </div>
                <div data-aos="fade-up" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={FireBase} />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div data-aos="fade-up-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src ={GitHub} />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills