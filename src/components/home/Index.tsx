import Hero from './hero'
import dynamic from 'next/dynamic'
const SkillsHero = dynamic(() => import('../skills/hero'))
const ProjectsComponent = dynamic(() => import('../projects'))
const ExperiencesComponent = dynamic(() => import('../experiences'))
const ContactComponent = dynamic(() => import('../contact'))
const TwitterComponent = dynamic(() => import('../twitter'))

const HomeComponent = () => {
    return (
        <div className='px-4'>
            <Hero />
            <SkillsHero />
            <ProjectsComponent />
            <ExperiencesComponent />
            <TwitterComponent />
            <ContactComponent />
        </div>
    )
}

export default HomeComponent