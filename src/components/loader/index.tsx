"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'


const LoaderComponent = () => {
    const [loading, setLoading] = useState(true)
    useLayoutEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <div className={`${loading ? 'block' : 'hidden'}`}>
            <div className='fixed top-0 left-0 z-[10000] w-screen h-screen bg-black bg-opacity-100 flex justify-center items-center'>
                <div className='animate-bounce relative w-80 h-80 object-contain '>
                    <img src="/SR.webp"
                        className='object-contain w-full h-full'
                        alt="Sitaram Rathi Preloader Logo" />
                </div>
            </div>
        </div>
    )
}

export default LoaderComponent
