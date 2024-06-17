import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDev } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';

const linksData = [
    {
        Icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/sitaram-rathi-519152197/",
    },
    {
        Icon: FaGithub,
        href: "https://github.com/srrathi",
    },
    {
        Icon: AiFillTwitterCircle,
        href: "https://x.com/sitaramrathi5",
    },
    {
        Icon: FaDev,
        href: "https://dev.to/srrathi",
    },
    {
        Icon: SiLeetcode,
        href: "https://leetcode.com/u/srrathi2000/",
    },
    {
        Icon: IoLogoWhatsapp,
        href: "https://wa.me/917792062402",
    }
]

const LinksComponent = () => {
    return (
        <div className='text-3xl flex items-center gap-3 text-gray-400 tracking-widest'>
            {
                linksData.map((link, index) => {
                    const { Icon, href } = link
                    return (
                        <Link target='_blank' className='cursor-pointer hover:text-white transform ease-in-out delay-150' key={index} href={href}>
                            <Icon />
                        </Link>
                    )
                }
                )
            }
        </div>
    )
}

export default LinksComponent