import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div name = 'home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f5]">Gihan sudeepa</h1>
                <p>I make stuff</p>
                <p>
                    dsadsadsadasdadsasdadasda dasda dsasds dasd adsa das dsda d
                </p>
                <div>
                    <button>View work <HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    );
}

export default Home;