'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLocationDot } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import TagWord from '../common/tagWord';


gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        start: "Feb 2024",
        end: "Present",
        company: `<p>Kirana Club</p>`,
        position: "SDE Intern",
        location: "Bengaluru, Karnataka",
        logo: '/assets/images/logos/kc-logo.png',
        description: `<p>◦ <b>Robust Website in Nextjs:</b> Developed Kirana Club new website in Nextjs with more than 30 pages from scratch, utilizing TypeScript and Tailwind CSS for SSR, achieving SEO optimization with 15k+ monthly visits.</p><br/>
        <p>◦ <b>Backend for Status Maker:</b> Enhanced Kirana Club app with ”Status Maker” feature, managing posters and categories via internal tool, integrating Cloud Functions, caching on redis and Golang CRON jobs for efficient scheduling of posters and categories visibilities to show in app.</p><br/>
        <p>◦ <b>Highly Scalable Services in Golang:</b> Engineered high-performance Golang service which connects with MySQL and Firebase for data queries, achieving 23ms minimum response time, load testing it and handling 25k+ daily invocations.</p><br/>
        <p>◦ <b>Integration in App Webviews:</b> Integrated many features including UPI verification and submission in webviews.</p>
        `
    },
    {
        start: "June 2023",
        end: "Aug 2023",
        company: `<p>Aalto University</p>`,
        position: "Research Assistant",
        location: "Espoo, Finland",
        logo: '/assets/images/logos/aalto-university.png',
        description: `<p>◦ <b>Winter Navigation Database Creation:</b> This Project involves developing a program for storing ice data from
        NetCDF format into a SQL database which can be used for feeding data to winter navigation traffic simulation model
        and ongoing research in marine and arctic sciences.</p><br/>
        <p>◦ <b>Performance Improvements:</b> The time taken by the model to load reduced from 62.72 sec to 3.87 sec and the RAM
        consumption is reduced from 61% of 16GB to 3% of 16GB</p>
        `
    },
    {
        start: "May 2022",
        end: "Nov 2022",
        company: `<p>Goggle Summer of<br/>Code Rocket.Chat</p>`,
        position: "Opensource Contributor",
        location: "Remote",
        logo: '/assets/images/logos/gsoc-rocketchat-logo.webp',
        description: `<p>◦ <b>TUI Development:</b> Designed and developed Rocket.chat TUI using bubbletea go package and their Go SDK. Added
        various rest and realtime functionalities like message receiving and sending, slash commands, @ mention, login using
        email and auth token, listing channels.</p><br/>
        <p>◦ <b>Enhanced Go SDK:</b> Contributed some TUI specific functions in their Go SDK.</p>
        `
    },
    {
        start: "May 2022",
        end: "July 2022",
        company: `<p>IIT Gandhinagar</p>`,
        position: "Research Intern",
        location: "Gandhinagar, Gujarat",
        logo: '/assets/images/logos/iitgn_logo.webp',
        description: `<p>◦ <b>Portal Development:</b> Made responsive portal for visualising and interacting with seismic waveform data. Used
        Dygraphs, React, Tailwind Css, Netlify for it’s development.</p><br/>
        <p>◦ <b>Additional Functionalities:</b> Added functionalities in graph which don’t exist in Dygraphs by adding them in the
        internals of Dygraphs.</p>
        `
    },
    {
        start: "Feb 2022",
        end: "Sep 2022",
        company: `<p>Myways</p>`,
        position: "MERN Stack Developer Intern",
        location: "Remote",
        logo: '/assets/images/logos/myways-logo.png',
        description: `<p>◦ <b>Serverless Backend Development:</b> Worked on AWS services like CDK, EC-2, Lambda Functions, API Gateway,
        SAM, Route 53 and many more for migrating backend as serverless backend on AWS.</p><br/>
        <p>◦ <b>Developing Tools:</b> Worked on Backend of the Software, structuring backend folder and created Private npm package
        for internal use in the organisation.</p>
        `
    },
    {
        start: "Aug 2021",
        end: "Oct 2021",
        company: `<p>Advenio Technosys Pvt. Ltd.</p>`,
        position: "Frontend Engineer Intern",
        location: "Remote",
        logo: '/assets/images/logos/advenio-logo.png',
        description: `<p>◦ <b>Backend Maintenance:</b> Worked on the Backend made in Nodejs for monitoring and debugging API’s as well as SQL
        Database on MariaDb and deploying both frontend and backend on AWS EC-2.</p><br/>
        <p>◦ <b>Frontend Development:</b> Worked and Developed web applications using Reactjs, Redux and Material UI.</p>
        `
    },
    {
        start: "Feb 2021",
        end: "July 2021",
        company: `<p>Requestly (YC-W22)</p>`,
        position: "SDE Intern",
        location: "Remote",
        logo: '/assets/images/logos/requestly-logo.png',
        description: `<p>◦ <b>Development on Web App:</b> Worked extensively on React Dashboard adding new features and fixing bugs. Using
        firebase for adding more functionality in it.</p><br/>
        <p>◦ <b>Third Party Integrations:</b> Added Google analytics in the website for capturing user events and SendInBlue for
        carrying out marketing and user engagement campaigns.</p>
        `
    },
    {
        start: "Mar 2021",
        end: "Sep 2021",
        company: `<p>The Uplift Project by<br/>Girlscript Foundation</p>`,
        position: "Web Developer",
        location: "Remote",
        logo: '/assets/images/logos/uplift-logo.png',
        description: `<p>◦ <b>Website development and maintenance:</b> Single Handedly Developed and Maintained the complete website of The
        Uplift Project 2021 using HTML, CSS, JavaScript, Bootstrap and SendInBlue for emails and tracking.</p><br/>
        <p>◦ <b>Badge Generator:</b> Developed a custom badge generator to embed participant image along with The Uplift Project
        Frame.</p>
        `
    }
];

const Experiences = () => {
    const lineRef = useRef(null);
    const lineWrapperRef = useRef(null);

    useEffect(() => {
        if (lineRef.current && lineWrapperRef.current) {
            const line = lineRef.current;
            const lineWrapper = lineWrapperRef.current;

            gsap.set(line, { transformOrigin: 'center top', xPercent: -50, x: 0 });

            gsap.fromTo(line, {
                scaleY: 0,
                delay: 1,

            }, {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: lineWrapper,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                }
            });
        }
    }, [lineRef, lineWrapperRef]);

    return (
        <section className="section py-14 md:py-20 lg:py-20 relative">
            <div className="py-10">
                <TagWord text='Experiences' />
            </div>
            <div className="container mx-auto">
                <div ref={lineWrapperRef} className="relative overflow-hidden w-full h-full">
                    <div ref={lineRef} className="absolute left-[6px] md:left-1/2 lg:left-1/2 top-0 w-px bg-white transform -translate-x-1/2 h-full"></div>

                    {
                        timelineData?.map((data, idx) => (
                            <div key={idx} className={`mb-8 flex justify-between ${idx % 2 !== 0 ? 'md:flex-row-reverse lg:flex-row-reverse' : ''} items-center w-full right-timeline`}>
                                <div className={`order-1 hidden md:flex items-center lg:flex justify-between w-5/12 py-4`}>
                                    <hr className='w-full hidden md:block lg:block' />
                                    <h3 className={`tracking-wider hover:bg-white hover:text-black transition ease-in-out delay-150 flex items-center gap-2 italic border-[1px] w-fit px-6 border-white text-xl py-3 font-bold`}>
                                        <div>
                                            <PiBuildingOfficeFill size={20} />
                                        </div>
                                        <div className='min-w-52' dangerouslySetInnerHTML={{ __html: data?.company }}></div>
                                    </h3>
                                    <hr className='w-full hidden md:block lg:block' />
                                    <div className={`relative object-contain min-w-40 min-h-40 w-40 h-40 ${idx % 2 === 0 ? 'order-first' : ''}`}>
                                        <img src={data?.logo} alt={data?.company} loading='lazy' className="object-contain w-full h-full" />
                                    </div>
                                </div>
                                <div className="z-20 flex items-center justify-center order-1 w-2/12">
                                    <hr className='w-full hidden md:block lg:block' />
                                    <div className='bg-white min-w-3 min-h-3 w-3 h-3 rounded-full'></div>
                                    <hr className='w-full' />
                                </div>
                                <div className="order-1 text-white border-[1px] border-white w-10/12 md:w-5/12 lg:w-5/12 px-6 py-4">
                                    <div className="flex w-full border-b-2 border-white justify-between items-center">
                                        <h3 className="tracking-wider text-lg md:text-xl lg:text-xl py-3 font-bold">
                                            {data?.position}
                                        </h3>
                                        <div className="text-sm md:text-[1rem]/[1.25rem] max-w-16 md:max-w-full lg:max-w-full lg:text-[1rem]/[1.25rem] font-thin">{`${data?.start} - ${data?.end}`}</div>
                                    </div>
                                    <p className="tracking-wider gap-1 flex items-center italic text-md md:hidden lg:hidden pt-4">
                                        <div>at</div> <PiBuildingOfficeFill /> <div dangerouslySetInnerHTML={{ __html: data?.company }} className="font-bold underline"></div>
                                    </p>

                                    <p dangerouslySetInnerHTML={{ __html: data?.description }} className="tracking-wider text-md md:text-lg lg:text-lg pt-4 pb-3">

                                    </p>

                                    <div className="text-md justify-start md:justify-end lg:justify-end items-center flex gap-2 pb-3">
                                        <FaLocationDot />
                                        <p>
                                            {data?.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className='h-[20vh]'></div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
