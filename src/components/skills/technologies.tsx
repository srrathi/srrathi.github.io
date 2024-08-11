"use client";
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaNodeJs, FaDocker, FaAws, FaLinux } from "react-icons/fa";
import { FaGolang, FaGitAlt } from "react-icons/fa6";
import { SiExpress, SiTypescript, SiMysql, SiPostman, SiGooglecloud, SiSocketdotio, SiRedis } from "react-icons/si";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { PiFileCppFill } from "react-icons/pi";

const techStack = [
    {
        icon: FaNodeJs,
        hoverColor: '#215732',
        name: 'Nodejs',
    },
    {
        icon: SiExpress,
        hoverColor: '#6cc24a',
        name: 'Expressjs',
    },
    {
        icon: FaGolang,
        hoverColor: '#29BEB0',
        name: 'Golang',
    },
    {
        icon: IoLogoJavascript,
        hoverColor: '#F0DB4F',
        name: 'Javascript',
    },
    {
        icon: SiTypescript,
        hoverColor: '#007acc',
        name: 'Typescript',
    },
    {
        icon: RiReactjsFill,
        hoverColor: '#61dafb',
        name: 'Reactjs',
    },
    {
        icon: RiNextjsFill,
        hoverColor: '#32cd32',
        name: 'Nextjs',
    },
    {
        icon: SiMysql,
        hoverColor: '#00758f',
        name: 'MySQL',
    },
    {
        icon: BiLogoPostgresql,
        hoverColor: '#0064a5',
        name: 'PostgreSQL',
    },
    {
        icon: BiLogoMongodb,
        hoverColor: '#3FA037',
        name: 'MongoDB',
    },
    {
        icon: IoLogoFirebase,
        hoverColor: '#F5820D',
        name: 'Firebase',
    },
    {
        icon: FaAws,
        hoverColor: '#FF9900',
        name: 'AWS',
    },
    {
        icon: SiGooglecloud,
        hoverColor: '#4285F4',
        name: 'Google Cloud',
    },
    {
        icon: SiRedis,
        hoverColor: '#D82C20',
        name: 'Redis',
    },
    {
        icon: FaDocker,
        hoverColor: '#0db7ed',
        name: 'Docker',
    },
    {
        icon: SiPostman,
        hoverColor: '#ef5b25',
        name: 'Postman',
    },
    {
        icon: FaGitAlt,
        hoverColor: '#f34f29',
        name: 'Git',
    },
    {
        icon: SiSocketdotio,
        hoverColor: '#890089',
        name: 'SocketIo',
    },
    {
        icon: FaLinux,
        hoverColor: '#E95420',
        name: 'Linux',
    },
    {
        icon: PiFileCppFill,
        hoverColor: '#659ad2',
        name: 'C/C++',
    },
]

// DNS, Bootstrap, Material UI, HTML, CSS, Tailwind CSS

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const mitem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};


const Technologies = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="col-span-12 md:col-span-5 lg:col-span-5">
            <div className=''>
                <motion.ul
                    ref={ref}
                    className="container grid grid-cols-10 gap-4 md:gap-10 lg:gap-10 my-auto items-center"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll position
                >
                    {techStack?.map((item, idx) => (
                        <motion.li
                            title={item?.name}
                            style={{ color: item?.hoverColor }}
                            className={`item hover:text-[${item?.hoverColor}] hover:bg-white col-span-5 md:col-span-2 lg:col-span-2 cursor-pointer rounded-full text-4xl border-2 border-white hover:border-[${item?.hoverColor}] transition ease-in-out delay-150 justify-center items-center text-white h-20 w-20 p-2 flex mx-auto my-auto`}
                            key={idx}
                            variants={mitem}
                        >
                            <item.icon />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default Technologies