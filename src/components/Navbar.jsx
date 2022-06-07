import React , {useState} from "react";
import { FaBars, FaTimes ,FaGithub , FaLinkedin ,FaFacebook, FaYoutube , FaTwitterSquare} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import logo from "../assets/logo.png";
import {Link} from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
      setNav(!nav);

      // Aos.init({disable: true});
    };
    const handleClickreset = () => {
      setNav(!nav);
      Aos.refresh();
    };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] z-50">
      <div>
        <img src={logo} alt="logo image" style={{ width: "150px" }} />
      </div>

        <ul className="hidden md:flex">
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='Experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to='Projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
      
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'z-50 fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
      <li className='py-6 text-4xl'>
          <Link onClick={handleClickreset} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClickreset} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClickreset} to='Experience' smooth={true} duration={500}>
          Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClickreset} to='Projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClickreset} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-blue-600 hover:rounded-r-[100px] ">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/gihan-sudeepa-177a9820a/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-[#333333] hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/GIHAA">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-blue-600 hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://twitter.com/sudeepa_gihan">
              twitter <FaTwitterSquare size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-red-600 hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.youtube.com/channel/UCZ4YyKzfsJmZGkD6bXfHD5Q">
              Youtube <FaYoutube size={30}/>
            </a>
          </li>
          <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-[#556e4b] hover:rounded-r-[100px]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
