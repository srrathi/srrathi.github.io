"use client"
import React, { useState, useEffect, ReactElement } from 'react';
import "./animation.css"

interface TextAnimationProps {
    texts?: ReactElement[]
    interval?: number
}

const TextAnimation: React.FC<TextAnimationProps> = ({ texts, interval }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % (texts?.length ?? 1));
        }, interval);

        return () => clearInterval(intervalId);
    }, [texts?.length, interval]);

    return (
        <div className="text-animation-container">
            {texts?.map((text, index) => (
                <div
                    key={index}
                    className={`text-item ${index === currentTextIndex ? 'active' : ''}`}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default TextAnimation;
