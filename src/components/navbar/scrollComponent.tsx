"use client"
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'

const MIN_SCROLL = 5;
const ScrollComponent = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
        if (scrollPercentage > MIN_SCROLL) setScrollProgress(scrollPercentage);
        else setScrollProgress(0);
    }, []);

    useLayoutEffect(() => {
        const handleThrottledScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', handleThrottledScroll);
        return () => {
            window.removeEventListener('scroll', handleThrottledScroll);
        };
    }, [handleScroll]);
    return (
        <div className='max-w-[1536px] mx-auto'>
            <div style={{ width: `${scrollProgress}%` }} className=' h-14 border-b-2 border-white'>

            </div>
        </div>
    )
}

export default ScrollComponent