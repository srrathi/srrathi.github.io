"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type FadeInWithEaseProps = {
    children: ReactNode;
    className?: string;
};

const FadeInWithEase: React.FC<FadeInWithEaseProps> = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once

    const easeInOutAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2, // 2 seconds duration
                ease: "easeInOut", // EaseInOut transition
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={easeInOutAnimation}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWithEase;
