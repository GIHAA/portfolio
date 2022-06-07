import React from 'react'
import { FaGithub , FaLinkedin , FaYoutube , FaTwitterSquare} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid place-items-center w-full h-[100px] bg-black content-center">
    <ul className='flex content-center'>
      <li>
        <a 
        href="https://www.linkedin.com/in/gihan-sudeepa-177a9820a/">
         <FaLinkedin size={30}/>
        </a>
      </li>
      <li>
        <a 
        href="https://github.com/GIHAA">
         <FaGithub size={30}/>
        </a>
      </li>
      <li>
        <a
        href="https://twitter.com/sudeepa_gihan">
          <FaTwitterSquare size={30}/>
        </a>
      </li>
      <li >
        <a
        href="https://www.youtube.com/channel/UCZ4YyKzfsJmZGkD6bXfHD5Q">
         <FaYoutube size={30}/>
        </a>
      </li>
      <li>
        <a >
         <BsFillPersonLinesFill size={30}/>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Footer