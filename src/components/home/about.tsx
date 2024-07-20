import React from 'react'
import TagWord from '../common/tagWord'
import Heading from '../common/heading'
import ButtonElement from '../common/button'
import LinksComponent from '../common/links'

const AboutComponent = () => {
    return (
        <section id="about" className='h-full w-full min-h-screen '>
            {/* <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div> */}
            <div className="pt-2 md:pt-14 lg:pt-14">
                <TagWord text='About' />
                <div className="mt-0 md:mt-5 mb-14 lg:mb-0 md:mb-0 lg:mt-5">
                    <div className="grid grid-cols-12 gap-2 md:gap-20 lg:gap-20 my-auto items-center">
                        <div className="col-span-12 mt-6 md:mt-0 lg:mt-0 md:col-span-7 lg:col-span-7">
                            <Heading text='Who am I?' />
                            <div className="pt-5 tracking-wider">
                                <p className='text-lg text-justify md:text-2xl lg:text-2xl text-white'>
                                    I’m <span className="font-bold">Sitaram Rathi</span>, a Software Developer with expertise in creating dynamic frontend and backend web applications. I hold a Dual Degree (B.Tech + M.Tech) in Computer Science Engineering from NIT Hamirpur, and I have a proven track record of working on complex projects, including internships in Europe and significant contributions to open-source development.
                                    <br />
                                    <br />
                                    Hardworking and dedicated, I prefer to live low key, focusing on my goals and continuous learning. Proudly hailing from the vibrant and spicy city of Bikaner, Rajasthan, I bring a blend of technical prowess and cultural richness to everything I do.
                                    <br />
                                    <br />
                                    I am actively seeking full-time roles in Software Development where I can leverage my skills and passion to contribute to innovative projects.
                                    <br />
                                    <br />
                                </p>
                                <hr />
                                <div className='gap-5 mt-3 w-full flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                                    <ButtonElement href='#contact' text='CONTACT ME' />
                                    <div className='pt-6'>
                                        <LinksComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 order-first md:order-last lg:order-last md:col-span-5 lg:col-span-5">
                            <div className="w-full relative object-contain h-full max-h-[70vh]">
                                <img src="/assets/images/Sitaram-Rathi-Photo.png" loading='lazy' alt="Sitaram Rathi Photo"
                                    className="about_img w-full h-full object-contain" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent