"use client"
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type SlideInFromLeftProps = {
    children: ReactNode;
    className?: string;
    right?: boolean;
};

const SlideInDirection: React.FC<SlideInFromLeftProps> = ({ children, className = '', right = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once

    const slideInFromLeft = {
        hidden: { opacity: 0, x: right ? 100 : -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1 }, // Adjust the duration as needed
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideInDirection;