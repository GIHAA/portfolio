import React from "react";
import bg from "../assets/bg.jpg";
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div 
        style={{ backgroundImage: `url(${bg})`  }}
        name = 'home' className='bg-no-repeat bg-center w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-2xl text-[#00dbfe]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f5]">Gihan sudeepa</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#888fa4]">I like to program things :)</h2>
                <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
                </div>
            </div>
        </div>
    );
}

export default Home;