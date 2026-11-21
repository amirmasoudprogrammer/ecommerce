
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

export default function ScrollReveal({
                                         children,
                                         delay = 0,
                                     }: ScrollRevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 45,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                delay: delay ?? 0,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
