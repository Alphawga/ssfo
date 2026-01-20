import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
}

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(easeOut * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export default AnimatedCounter;
