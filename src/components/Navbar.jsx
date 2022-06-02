import React , {useState} from "react";
import { FaBars, FaTimes ,FaGithub , FaLinkedin ,FaFacebook, FaYoutube , FaTwitterSquare} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import logo from "../pictures/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <img src={logo} alt="logo image" style={{ width: "150px" }} />
      </div>

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Project</li>
          <li>contact us</li>
        </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Project</li>
        <li className="py-6 text-4xl">contact us</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:rounded-r-[100px] ">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              twitter <FaTwitterSquare size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              Linkedin <FaYoutube size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#556e4b] hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
