'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLocationDot } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import TagWord from '../common/tagWord';
import SlideInDirection from '../common/SlideInDirection';


gsap.registerPlugin(ScrollTrigger);

const WORD_LIMIT = 100; // Default word limit for the description


const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};


const timelineData = [
    {
        start: "Feb 2024",
        end: "Present",
        company: `<p>Kirana Club</p>`,
        position: "Software Development Engineer",
        location: "Bengaluru, Karnataka",
        logo: '/assets/images/logos/kc-logo.png',
        description: `
            <p>◦ <b>Marketplace Expansion & Revenue Growth:</b> Developed high-performance Golang and Node.js APIs to launch the marketplace on the React Native app, increasing GTV by 3.5x in 2 months.</p><br/>
            
            <p>◦ <b>Backend for B2B Dashboard:</b> Designed and deployed the first version of the B2B Dashboard using Next.js with Docker, adding advanced payment records, role-based access control, and multi-level filtering for partner brands.</p><br/>
            
            <p>◦ <b>Third-Party API & OMS Integrations:</b> Integrated Easyecom, Unicommerce, Delhivery, Shiprocket, Icarry, Exotel (IVR), and Zoho (IGM) to automate order processing and vendor management.</p><br/>
            
            <p>◦ <b>Push Notification RCA & Crash Fixes:</b> Identified and fixed critical app crashes using Sentry, Crashlytics, and Mixpanel. Applied backend hotfixes to reduce production crashes by resolving issues in missing metadata during push notifications.</p><br/>
            
            <p>◦ <b>Optimized Product Search with Fuzzy Matching:</b> Developed high-performance fuzzy search services in Golang using Levenshtein distance, enhancing product discovery and user experience.</p><br/>
            
            <p>◦ <b>Singleton-Based High-Performance Services:</b> Implemented a singleton-based service architecture for core business logic, reducing code duplication and improving backend performance.</p><br/>
            
            <p>◦ <b>Brand Dashboard for FMCG Partners:</b> Built an interactive React + Golang Brand Dashboard for FMCG brands to post content, track retailer engagement, and configure dynamic content visibility.</p><br/>
            
            <p>◦ <b>Modular Cloud Function Optimization:</b> Developed an internal npm package to refactor duplicate widget-resolving logic, improving cloud function efficiency and maintainability.</p><br/>
            
            <p>◦ <b>Vendor Enablement & Marketplace Expansion:</b> Onboarded 9+ FMCG brands (Zoff Foods, Go Desi, Panchvate Herbals, Hugs by Schellz, Mothers Kitchen, Apsara Tea, Mangalam, Nutraj, Lots Wholesale) by managing OMS integrations, product listings, discounts, and pincode-based serviceability.</p><br/>
            
            <p>◦ <b>Robust Website Development:</b> Developed Kirana Club’s new website using Next.js, TypeScript, and Tailwind CSS, improving SEO and reaching 15k+ monthly visits.</p><br/>
            
            <p>◦ <b>Backend for Status Maker:</b> Built and managed the Status Maker feature using Golang, Redis, and CRON jobs to schedule and display promotional posters in the app. Developed APIs for poster visibility management via internal tools.</p><br/>
            
            <p>◦ <b>High-Performance Golang Services:</b> Engineered scalable Golang services connected to MySQL and Firebase, achieving a 23ms minimum response time and handling 25k+ daily invocations.</p><br/>
            
            <p>◦ <b>UPI Verification & App Webviews Integration:</b> Integrated UPI verification and submission within app webviews, enabling seamless payment processing and secure transactions.</p><br/>
            
            <p>◦ <b>Production Stability & RCA:</b> Conducted thorough Root Cause Analysis (RCA) for backend failures and API performance issues, ensuring high system reliability across millions of daily users.</p><br/>

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
        company: `<p>Goggle Summer of Code Rocket.Chat</p>`,
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
    const [expanded, setExpanded] = useState<boolean[]>(Array(timelineData.length).fill(false));

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

    const toggleReadMore = (index: number) => {
        setExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

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
                                <SlideInDirection right={idx % 2 !== 0} className={`order-1 hidden md:flex items-center lg:flex justify-between w-5/12 py-4`}>
                                    <hr className='w-full hidden md:block lg:block' />
                                    <h3 className={`tracking-wider hover:bg-white hover:text-black transition ease-in-out delay-150 flex items-center gap-2 italic border-[1px] w-fit px-6 border-white text-xl py-3 font-bold`}>
                                        <div className='min-w-5'>
                                            <PiBuildingOfficeFill size={20} />
                                        </div>
                                        <div className='min-w-52 text-white hover:bg-white hover:text-black' dangerouslySetInnerHTML={{ __html: data?.company }}></div>
                                    </h3>
                                    <hr className='w-full hidden md:block lg:block' />
                                    <div className={`relative object-contain min-w-40 min-h-40 w-40 h-40 ${idx % 2 === 0 ? 'order-first' : ''}`}>
                                        <img src={data?.logo} alt={data?.company} loading='lazy' className="object-contain w-full h-full" />
                                    </div>
                                </SlideInDirection>
                                <div className="z-20 flex items-center justify-center order-1 w-2/12">
                                    <hr className='w-full hidden md:block lg:block' />
                                    <div className='bg-white min-w-3 min-h-3 w-3 h-3 rounded-full'></div>
                                    <hr className='w-full' />
                                </div>
                                <SlideInDirection right={idx % 2 === 0} className="order-1 text-white border-[1px] border-white w-10/12 md:w-5/12 lg:w-5/12 px-6 py-4">
                                    <div className="block md:flex lg:flex w-full border-b-2 border-white justify-between items-center">
                                        <h3 className="tracking-wider text-lg md:text-xl lg:text-xl py-3 font-bold">
                                            {data?.position}
                                        </h3>
                                        <p className="text-sm md:text-[1rem]/[1.25rem] mb-2 md:mb-0 lg:mb-0 max-w-full lg:text-[1rem]/[1.25rem] font-thin">{`${data?.start} - ${data?.end}`}</p>
                                    </div>
                                    <div className="tracking-wider w-full gap-1 flex items-center italic text-md md:hidden lg:hidden pt-4">
                                        <p>at</p>
                                        <p className="min-w-3 mr-1">
                                            <PiBuildingOfficeFill />
                                        </p>
                                        <div dangerouslySetInnerHTML={{ __html: data?.company }} className="font-bold underline"></div>
                                    </div>

                                    <div dangerouslySetInnerHTML={{ __html: expanded[idx]
                                                ? data?.description
                                                : truncateText(data?.description, WORD_LIMIT) }} 
                                        className="tracking-wider text-md md:text-lg lg:text-lg pt-4 pb-3"></div>
                                        <button
                                            onClick={() => toggleReadMore(idx)}
                                            className="text-white font-bold underline mt-2"
                                        >
                                            {expanded[idx] ? 'Read Less' : 'Read More'}
                                        </button>
                                    <div className="text-md justify-start md:justify-end lg:justify-end items-center flex gap-2 pb-3">
                                        <FaLocationDot />
                                        <p>
                                            {data?.location}
                                        </p>
                                    </div>
                                </SlideInDirection>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Experiences;
