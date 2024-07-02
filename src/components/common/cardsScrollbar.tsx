"use client";
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import ProjectModal from './projectModal';

interface customDotsProps {
    onMove?: boolean,
    index?: number,
    onClick?: () => void,
    active?: boolean,
    type?: string
}

const CustomDot: React.FC<customDotsProps> = ({ onMove, type, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
            className='px-1'
            onClick={() => onClick && onClick()}
        >
            <div
                style={{ borderRadius: '10px', border: '1px solid white' }}
                className={active ? "active h-3 w-10" : "h-3 w-3"}
            >
            </div>
            {/* {index ?? 0 + 1} */}
        </li>
    );
};

interface customArrowProps {
    onClick?: () => void
}

const CustomRight: React.FC<customArrowProps> = ({ onClick }) => (
    <button className="arrow custom-dot right h-10 w-10 text-white border-2 border-white flex justify-center items-center" onClick={onClick} style={{
        background: "transparent",
        border: 0,
        color: "#fff",
        fontSize: "80px"
    }}>
        <IoIosArrowRoundForward size={20} />
    </button>
);

const CustomLeft: React.FC<customArrowProps> = ({ onClick }) => (
    <button className="arrow custom-dot left h-10 w-10 text-white border-2 border-white flex justify-center items-center" onClick={onClick} style={{
        background: "transparent",
        border: 0,
        color: "#fff",
        fontSize: "80px"
    }}>
        <IoIosArrowRoundBack size={20} />
    </button>
);

// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//         onMove,
//         carouselState: { currentSlide, deviceType }
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return <button className='text-white text-4xl' onClick={() => onClick()} > NEXT</button>;
// };

// const CustomButtonGroupAsArrows = ({ next, previous }) => {
//     return (
//         <div
//             className='text-center text-white text-4xl'
//         >
//             <h4>These buttons can be positioned anywhere you want on the screen</h4>
//             <button onClick={previous}>Prev</button>
//             <button onClick={next}>Next</button>
//         </div>
//     );
// };

interface dataCard {
    img?: string
    heading?: string
    subHeading?: string
    link?: string
}

interface cardsScrollbarProps {
    data?: dataCard[]
}

const CardsScrollbar: React.FC<cardsScrollbarProps> = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleSelectedProject = (index: number) => {
        setSelectedProjectIndex(index)
        setOpen(prev => !prev)
    }

    const responsive = {
        // Define responsive settings for different screen sizes
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
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
        <div id="main-slide" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <Carousel
                    ssr={true}
                    infinite
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={1000}
                    swipeable={true}
                    arrows={true}
                    draggable={true}
                    pauseOnHover={true}
                    showDots={true}
                    containerClass="carousel-container"
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="mt-[10rem]"
                    renderDotsOutside={true}
                    customDot={<CustomDot />}
                >
                    {
                        data?.map((project, index) =>
                            <div key={index} className="p-2 backdrop-blur-md">
                                <div
                                    onClick={() => handleSelectedProject(index)}
                                    style={{ background: `url(${project?.img})`, backgroundRepeat: "none", backgroundSize: "cover", backgroundPosition: "center" }}
                                    className={`max-w-full cursor-pointer px-1 bg-cover bg-center bg-no-repeat w-full p-4 text-center min-h-[17rem] md:min-h-[24rem] lg:min-h-[24rem]`}>
                                    <div className="flex justify-center md:justify-end lg:justify-end w-full items-end min-h-full h-full">
                                        <div className='text-2xl bg-black p-2 font-bold md:text-[40px]/[60px] lg:text-[40px]/[60px]' >
                                            <h1 style={{ textShadow: "3px 3px 17px rgba(0, 0, 0, 1)" }} className='text-white'>{project?.heading}</h1>
                                            <h1 style={{ textShadow: "3px 3px 17px rgba(0, 0, 0, 1)" }} className='text-purple-300'>{project?.subHeading}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Carousel>
            </div>
            <ProjectModal open={open} setOpen={setOpen} activeIndex={selectedProjectIndex} />
        </div>
    )
}

export default CardsScrollbar