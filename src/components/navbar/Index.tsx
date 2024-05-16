"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

const routes = [
    {
        name: "HOME",
        href: "/",
        newTab: false,
    },
    {
        name: "ABOUT",
        href: "/about",
        newTab: false,
    },
    {
        name: "EXPERIENCES",
        href: "/experiences",
        newTab: false,
    },
    {
        name: "PROJECTS",
        href: "/projects",
        newTab: false,
    },
    {
        name: "CONTACT",
        href: "/contact",
        newTab: false,
    },
    {
        name: "RESUME",
        href: "https://drive.google.com/drive/folders/1AtCmiBnyegoQf2InpaHGz4Ufc0xb8Bsb",
        newTab: true,
    }
]

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed z-[10000] bg-black h-14 left-0 w-full">

            <div className="relative mx-auto bg-black max-w-[1536px]">
                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 left-6 z-50 text-white focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-8 w-8 ${isOpen ? 'transform ease-in-out delay-[1000] rotate-90' : 'transform ease-in-out rotate-0'
                            }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Language selector */}
                <div className="absolute top-4 text-xl text-white right-6 z-50">
                    IN
                </div>

                {/* Logo */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
                    {/* Place your logo component here */}
                </div>

                {/* Fullscreen Navigation */}
                <div
                    className={`${isOpen ? 'translate-y-0' : 'translate-y-full'
                        } fixed top-0 left-0 w-full h-full bg-black z-40 transition-transform duration-300 ease-in-out`}
                >
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <ul className="text-white text-2xl text-center space-y-8">
                            {
                                routes?.map((r, i) =>
                                    <li key={i}>
                                        <Link href={r.href} onClick={toggleMenu} target={r?.newTab ? '_blank' : ''} className='font-thin'>{r.name}</Link>
                                    </li>
                                )
                            }
                            <li className='text-3xl flex md:hidden lg:hidden items-center gap-3 text-gray-400 tracking-widest'>
                                <FaLinkedinIn />
                                <FaGithub />
                                <AiFillTwitterCircle />
                                <IoLogoWhatsapp />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent