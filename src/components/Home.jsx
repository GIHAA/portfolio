import React, { useEffect } from "react";
import bg from "../assets/bg.jpg";
import {HiArrowNarrowRight} from "react-icons/hi";
import Typical from 'react-typical'
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div 
        style={{ backgroundImage: `url(${bg})`  }}
        name = 'home' className='snap-start bg-no-repeat bg-center w-full h-screen '>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-2xl font-po text-[#00dbfe]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f5]">GIHAN SUDEEPA</h1>
                <h2 className="font- text-4xl sm:text-5xl font-bold text-[#888fa4]">
                < Typical
                    loop ={1}
                    warpper = "p"
                    steps={[
                        'I like to program things :)'
                    ]}
                    /></h2>
                <div>
                <button className='rounded-lg text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#61b8c5] hover:border-[#00dbfe]'>
                <Link to='Projects' smooth={true} duration={500}>
            View Work
                    </Link>
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