"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useMediaQuery } from "react-responsive"; // For responsive media queries

type SlideInFromLeftProps = {
    children: ReactNode;
    className?: string;
};

const SlideInFromLeft: React.FC<SlideInFromLeftProps> = ({
    children,
    className = "",
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation once

    // Use media query to detect if the screen is mobile-sized (width <= 768px)
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Set animation direction based on viewport size
    const slideInVariants = {
        hidden: { opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? -100 : 0 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1 }, // Adjust the duration as needed
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideInFromLeft;
