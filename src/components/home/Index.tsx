import React from 'react'
import Hero from './hero'
import SkillsHero from '../skills/hero'

const HomeComponent = () => {
    return (
        <div className='px-4'>
            <Hero />
            <SkillsHero />
        </div>
    )
}

export default HomeComponent