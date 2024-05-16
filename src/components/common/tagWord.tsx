import React from 'react'

interface TagWordProps {
    text?: string
}
const TagWord: React.FC<TagWordProps> = ({ text }) => {
    return (
        <h4 className='text-lg font-semibold text-gray-400 tracking-widest pb-8'>
            {`<${text}>`}
        </h4>
    )
}

export default TagWord