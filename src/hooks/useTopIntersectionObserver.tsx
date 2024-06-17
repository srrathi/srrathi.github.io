import { useEffect, useState, RefObject } from 'react';

interface IntersectionOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useTopIntersection = (
    elementRef: RefObject<Element>,
    options: IntersectionOptions = {}
): boolean => {
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAtTop(entry.boundingClientRect.top <= 0 && entry.isIntersecting);
            },
            {
                root: options.root || null,
                rootMargin: options.rootMargin || '0px',
                threshold: options.threshold || 0,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);

    return isAtTop;
};

export default useTopIntersection;
