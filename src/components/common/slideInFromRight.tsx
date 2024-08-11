"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type SlideInFromRightProps = {
    children: ReactNode;
    className?: string;
};

const SlideInFromRight: React.FC<SlideInFromRightProps> = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
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
            variants={slideInFromRight}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideInFromRight;