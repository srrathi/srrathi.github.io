import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDev } from "react-icons/fa6";
import LinksComponent from '../common/links';
import Link from 'next/link';

const FooterComponent = () => {
    return (
        <div>
            <div className="relative mx-auto max-w-[1536px]">
                <div className="flex border-t-[1px] border-white px-4 py-4 justify-center md:justify-between lg:justify-between items-center">
                    <Link href={'mailto:srrathi2000@gmail.com'}
                        target='_blank'
                        className='text-lg flex items-center gap-1 cursor-pointer hover:text-white transform ease-in-out delay-150 text-gray-400 tracking-widest'>
                        <IoMailSharp size={22} /> Email me
                    </Link>
                    <div className='text-3xl hidden md:flex lg:flex items-center tracking-widest'>
                        <LinksComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent