import React from 'react'
import TagWord from '../common/tagWord'
import Heading from '../common/heading'
import ListElements from '../common/listElements'
import Technologies from './technologies'
import Advantages from './advantages'
import SlideInFromLeft from '../common/slideInFromLeft'

const items = [
    <p key={1}>Backend Development</p>,
    <p key={2}>SQL/NoSQL Database Development</p>,
    <p key={4}>Golang Microservices Development</p>,
    <p key={3}>Nodejs Server Development and Scripting</p>,
    <p key={5}>Web Development, Automation, Optimization, DNS and SEO</p>,
    <p key={6}>Fullstack Development, Deployment, Analytics, Mixpanel and CI/CD</p>,
    <p key={7}>Cost Effective Services Development</p>
]

const SkillsHero = () => {
    return (
        <section id="skills" className='h-full w-full min-h-screen '>
            <div className="pt-2 md:pt-14 lg:pt-14">
                <TagWord text='Skills' />
                <div className="mt-0 md:mt-5 lg:mt-5">
                    <div className="grid grid-cols-12 gap-2 md:gap-10 lg:gap-10 my-auto items-center">
                        <div className="col-span-12 md:col-span-7 lg:col-span-7">
                            <SlideInFromLeft>
                                <Heading text='Skills I posses as a Specialist' />
                                <ListElements
                                    items={items}
                                />
                            </SlideInFromLeft>
                        </div>
                        <Technologies />
                    </div>
                    <Advantages />
                </div>
            </div>
        </section>
    )
}

export default SkillsHero