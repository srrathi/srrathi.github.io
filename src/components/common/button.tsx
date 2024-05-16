import React from 'react'

interface ButtonElementProps {
    text?: string
    onClick?: any
    type?: 'button' | 'link'
    href?: string
}
const ButtonElement: React.FC<ButtonElementProps> = ({ text, onClick, type, href }) => {
    return (
        <div>
            <button className='px-6 py-2 tracking-wider border-2 hover:bg-white hover:text-black transition ease-in-out delay-150 text-white border-white mt-4 md:mt-8 lg:mt-8 text-lg text-center md:text-2xl lg:text-2xl'>
                {text}
            </button>
        </div>
    )
}

export default ButtonElement