import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";


const FooterComponent = () => {
  return (
    <div>
        <div className="relative mx-auto max-w-[1536px]">
            <div className="flex px-4 py-4 justify-center md:justify-between lg:justify-between items-center">
                <div className='text-lg flex items-center gap-1 text-gray-400 tracking-widest'>
                    <IoMailSharp size={22} /> Email me
                </div>
                <div className='text-3xl hidden md:flex lg:flex items-center gap-4 text-gray-400 tracking-widest'>
                    <FaLinkedinIn /> 
                    <FaGithub /> 
                    <AiFillTwitterCircle /> 
                    <IoLogoWhatsapp /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent