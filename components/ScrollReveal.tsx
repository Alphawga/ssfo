import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
}

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
