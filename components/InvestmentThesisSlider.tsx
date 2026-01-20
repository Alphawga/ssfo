import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users2, BarChart3, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { Badge } from './UI';

const investmentThesisPillars = [
    {
        icon: <Users2 className="w-8 h-8" />,
        title: 'Operator-Led',
        description: 'Direct involvement from a principal with operating experience across energy, finance, and technology.'
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: 'Concentrated Positions',
        description: 'We take meaningful stakes in a focused number of businesses we understand deeply.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: 'Long-Term Commitment',
        description: 'Patient capital with no fund timeline pressure. We build for decades, not quarters.'
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Global Reach',
        description: 'Abu Dhabi headquarters with portfolio companies across Africa, the US, and beyond.'
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: 'Sector Expertise',
        description: 'Deep knowledge in energy, fintech infrastructure, agribusiness, and technology.'
    }
];

const InvestmentThesisSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const cardsPerView = 3;
    const maxIndex = Math.max(0, investmentThesisPillars.length - cardsPerView);

    const scroll = (direction: 'left' | 'right') => {
        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === 'right' && currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="relative">
            {/* Header with Arrows */}
            <div className="flex justify-between items-end mb-12">
                <div>
                    <Badge>Our Approach</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] heading-serif mt-4">
                        Investment Philosophy
                    </h2>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => scroll('left')}
                        disabled={currentIndex === 0}
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex === 0
                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                            : 'border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={currentIndex >= maxIndex}
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex >= maxIndex
                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                            : 'border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white'
                            }`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Cards Slider */}
            <div className="overflow-hidden">
                <motion.div
                    ref={sliderRef}
                    className="flex gap-6"
                    animate={{ x: `-${currentIndex * (100 / cardsPerView + 2)}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {investmentThesisPillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[calc(100%-1rem)] sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)] bg-[#F1F5F9] rounded-3xl p-8 group hover:bg-[#0F172A] transition-all duration-500"
                            whileHover={{ y: -8 }}
                        >
                            <div className="text-[#C5A059] mb-6 group-hover:text-[#C5A059]">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-white transition-colors heading-serif">
                                {pillar.title}
                            </h3>
                            <p className="text-[#64748B] leading-relaxed group-hover:text-blue-100/70 transition-colors">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default InvestmentThesisSlider;
