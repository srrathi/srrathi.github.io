import React from 'react'
import OrbAnimation from './orbAnimation'
import './hero.css'
import TagWord from '../common/tagWord'
import TextAnimation from '../common/textAnimation'
import ButtonElement from '../common/button'

const Hero = () => {
    return (
        <div className='h-full w-full'>
            <div className="overflow-hidden">
                <div className="grid grid-cols-12 my-auto min-h-screen items-center">
                    <div className="col-span-12 md:col-span-5 lg:col-span-5">
                        <OrbAnimation />
                    </div>
                    <div className="order-last md:order-first lg:order-first col-span-12 md:col-span-7 lg:col-span-7">
                        <TagWord text={`Hello, world`} />
                        <div className='hidden md:block lg:block'>
                            <div className="text-[40px]/[40px] max-w-[900px]">
                                <p className="content__container__text">
                                    I&apos;m Sitaram Rathi a&nbsp;
                                </p>
                                <div className="relative">
                                    <div className="content__container">
                                        <ul className="content__container__list">
                                            <li className="content__container__list__item">Software&nbsp;Developer</li>
                                            <li className="content__container__list__item">Fullstack&nbsp;Developer</li>
                                            <li className="content__container__list__item">Backend&nbsp;Developer</li>
                                            <li className="content__container__list__item">Database&nbsp;Developer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[40px]/[40px] text-left pt-5 m-0">
                                from Bengaluru, India.
                            </p>
                        </div>

                        <div className="block md:hidden lg:hidden">
                            <div className="max-w-[80%]">
                                <h1 className="text-2xl font-semibold text-white">
                                    <span>I&apos;m Sitaram Rathi a</span>
                                    <TextAnimation texts={[
                                        <p key={1}>Software&nbsp;Developer</p>,
                                        <p key={2}>Fullstack&nbsp;Developer</p>,
                                        <p key={3}>Backend&nbsp;Developer</p>,
                                        <p key={4}>Database&nbsp;Developer</p>,
                                        <p key={5}>Web&nbsp;Developer</p>,
                                    ]} interval={3000} />
                                    <p className='pt-2'>from Bengaluru, India.</p>
                                </h1>
                            </div>
                        </div>
                        <ButtonElement href='#contact-us' text='CONTACT ME' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero