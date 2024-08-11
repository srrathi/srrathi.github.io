import React from 'react'
import TagWord from '../common/tagWord'
import CardsScrollbar from '../common/cardsScrollbar';
import projectsData from './data.json'
import FadeInWithEase from '../common/easeInOut';


const ProjectsScrollbar = () => {
    return (
        <div className='w-full'>
            <div className='pt-14 scroll-smooth md:pt-20 lg:pt-20'>
                <div className="py-10 w-100">
                    <TagWord text='Projects' />
                </div>

                <FadeInWithEase>
                    <CardsScrollbar data={projectsData} />
                </FadeInWithEase>
            </div>
        </div>
    )
}

export default ProjectsScrollbar