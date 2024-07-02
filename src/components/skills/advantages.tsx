"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RiUserVoiceFill } from "react-icons/ri";
import { FaUserTie, FaServer } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { MdSupport } from "react-icons/md";
import TagWord from '../common/tagWord';

const carouselItems = [
    {
        icon: FaServer,
        title: 'Fullstack Expertise',
        content: `Proficient in frontend, backend and cloud technologies, ensuring end-to-end solutions tailored to your needs.`,
    },
    {
        icon: FaUserTie,
        title: 'Business Awareness',
        content: `Immersing in your business model, I can realize a project the way a client wants to see it, not just a developer.`,
    },
    {
        icon: CgWebsite,
        title: 'SEO Optimization',
        content: `Specialize in crafting SEO-friendly websites, implementing best practices to enhance visibility and drive organic traffic.`,
    },
    {
        icon: MdSupport,
        title: 'Reliable Partner',
        content: `Committed to open communication, timely delivery, and ongoing support, providing a seamless experience from conception to execution and beyond.`,
    },
    {
        icon: SiGoogleanalytics,
        title: 'Analytics Integration',
        content: `Seamlessly integrate with platforms like Google Analytics and Mixpanel for valuable insights to maximize conversions.`,
    },
    {
        icon: MdPrivacyTip,
        title: 'Privacy',
        content: `Some projects have unique properties that shouldn't be public until the end of implementation or even after completeion.`,
    },
    {
        icon: RiUserVoiceFill,
        title: 'Communication',
        content: `I quickly reply to your messages during our work, since I'm online most of the time, so cooperation is productive.`,
    }
]

const Advantages = () => {
    const responsive = {
        // Define responsive settings for different screen sizes
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className='pt-14 scroll-smooth md:pt-20 lg:pt-20'>
            <div className="py-10">
                <TagWord text='Strengths' />
            </div>
            <Carousel
                ssr={true}
                infinite
                autoPlay={true}
                autoPlaySpeed={10000}
                transitionDuration={3000}
                swipeable={true}
                draggable={true}
                pauseOnHover={true}
                arrows={false}
                showDots={false}
                containerClass="carousel-container"
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="mt-[80px]"
            >
                {carouselItems.map((item, idx) => (
                    <div className='min-w-[20rem] cursor-grab text-white max-w-[28rem] p-4 border-2 text-center min-h-[17rem] border-white' key={idx}>
                        <div className="w-full first-line: text-3xl py-3 mx-auto flex justify-center text-center">
                            <item.icon />
                        </div>
                        <h3 className="text-center text-white tracking-wider text-xl py-3 font-bold">
                            {item?.title}
                        </h3>
                        <p className="text-center text-white tracking-wider text-lg py-3">
                            {item?.content}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Advantages