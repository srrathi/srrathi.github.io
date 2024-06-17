import React from 'react'
import TagWord from '../common/tagWord'
import CardsScrollbar from '../common/cardsScrollbar';


const projectsData = [
    {
        heading: 'Hello world',
        subHeading: 'Hello world',
        img: 'https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg',
        bgImg: 'bg-[url(https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg)]'
    },
    {
        heading: 'Hello world',
        subHeading: 'Hello world',
        img: 'https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg',
        bgImg: 'bg-[url(https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg)]'
    },
    {
        heading: 'Hello world',
        subHeading: 'Hello world',
        img: 'https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg',
        bgImg: 'bg-[url(https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg)]'
    },
    {
        heading: 'Hello world',
        subHeading: 'Hello world',
        img: 'https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg',
        bgImg: 'bg-[url(https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg)]'
    }
]


const ProjectsScrollbar = () => {
    return (
        <div className='w-full'>
            <div className='pt-14 scroll-smooth md:pt-20 lg:pt-20'>
                <div className="py-10 w-100">
                    <TagWord text='Projects' />
                </div>

                <CardsScrollbar data={projectsData} />
            </div>
        </div>
    )
}

export default ProjectsScrollbar