import React, { ReactElement } from 'react'

interface ListElementsProps {
    title?: string
    items?: ReactElement[] | string[]
}
const ListElements: React.FC<ListElementsProps> = ({ title, items }) => {
    return (
        <div className='py-4 md:py-10 lg:py-10 text-white'>
            {title &&
                <h3 className="text-2xl pb-4 w-full font-semibold">
                    {title}
                </h3>
            }

            <ul style={{ listStyle: "disc" }} className='w-full pl-4 tracking-wider marker:text-white'>
                {items?.map((it, idx) =>
                    <li className='py-1 text-lg md:text-xl lg:text-xl' key={idx}>{it}</li>
                )}
            </ul>

        </div>
    )
}

export default ListElements