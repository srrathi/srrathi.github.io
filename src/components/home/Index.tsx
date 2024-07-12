import React from 'react'
import Hero from './hero'
import SkillsHero from '../skills/hero'
import ProjectsComponent from '../projects'
import ExperiencesComponent from '../experiences'
import ContactComponent from '../contact'

const HomeComponent = () => {
    return (
        <div className='px-4'>
            <Hero />
            <div className="bg-black relative z-[100]">
                <SkillsHero />
                <ProjectsComponent />
                <ExperiencesComponent />
                <ContactComponent />
            </div>
        </div>
    )
}

export default HomeComponent