import React from 'react'

interface HeadingProps {
    text?: string
}
const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <h1 className='text-2xl/[40px] md:text-[40px]/[80px] font-semibold lg:text-[40px]/[40px] max-w-[700px] tracking-widest text-white'>
            {text}
        </h1>
    )
}

export default Heading