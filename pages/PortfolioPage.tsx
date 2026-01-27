import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';
import { PORTFOLIO_DATA, INVESTMENT_CATEGORIES } from '../constants';

const artImages = [
    '/art/art-1.jpg',
    '/art/art-2.jpg',
    '/art/art-3.jpg',
    '/art/art-4.jpg',
    '/art/art-5.jpg',
];

const PortfolioPage = () => {
    // Only show categories that have actual investments or are explicitly defined
    const categoriesToRender = INVESTMENT_CATEGORIES;

    // Helper to get investments for a specific category
    // We match if the portfolio item's sector string *contains* the category title
    // e.g. "Fintech" matches "Significant Holdings · Fintech" and "Angel/Venture · Fintech"
    const getInvestmentsForCategory = (categoryTitle) => {
        // Handle special cases or exact matching if needed
        return PORTFOLIO_DATA.filter(item =>
            item.sector.toLowerCase().includes(categoryTitle.toLowerCase()) ||
            (categoryTitle === 'Finance' && item.sector.includes('Finance') && !item.sector.includes('Fintech')) // Disambiguate Finance vs Fintech if needed
        );
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
            <SectionContainer>
                <div className="mb-16 text-center">
                    <Badge>Our Portfolio</Badge>
                    <SectionTitle>Distinctive Value. Global Impact.</SectionTitle>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
                        Our portfolio spans industries that define the future—from sustainable agriculture to frontier technology.
                    </p>
                </div>

                <div className="space-y-32">
                    {categoriesToRender.map((category, idx) => {
                        const investments = getInvestmentsForCategory(category.title);
                        // Cycle through art images
                        const artImage = artImages[idx % artImages.length];

                        return (
                            <section key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                                {/* Category Header with Art & Description */}
                                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}
                                    >
                                        <img
                                            src={artImage}
                                            alt={`${category.title} Art`}
                                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10"></div>
                                    </motion.div>

                                    <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 heading-serif">{category.title}</h2>
                                        <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                                            {category.description}
                                        </p>
                                        <div className="h-1 w-20 bg-[#C5A059]"></div>
                                    </div>
                                </div>

                                {/* Investments Grid for this Category */}
                                {investments.length > 0 ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {investments.map((item, i) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                                className="group bg-white border border-gray-100 p-10 hover:shadow-2xl transition-all relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 left-0 w-1 h-0 bg-[#C5A059] group-hover:h-full transition-all duration-500"></div>
                                                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-4 block">
                                                    {item.sector.split(' · ')[0]} {/* Show holding type (Significant, Angel, etc) */}
                                                </span>

                                                {item.name === 'Cray Finance' ? (
                                                    <img src="/logos/cray-finance.png" alt="Cray Finance" className="h-10 mb-4" />
                                                ) : item.name === 'FuelGap LLC' ? (
                                                    <img src="/logos/fuelgap.png" alt="FuelGap" className="h-10 mb-4" />
                                                ) : item.name === 'Kyshi' ? (
                                                    <img src="/logos/kyshi.png" alt="Kyshi" className="h-10 mb-4" />
                                                ) : item.name === 'Grey Matter Social Space' ? (
                                                    <img src="/logos/grey-matter.png" alt="Grey Matter" className="h-20 mb-4" />
                                                ) : item.name === 'Blocbanc Inc' ? (
                                                    <img src="/logos/blocbanc.png" alt="Blocbanc" className="h-20 mb-4" />
                                                ) : item.name === 'ATFA' ? (
                                                    <img src="/logos/atfa.png" alt="ATFA" className="h-10 mb-4" />
                                                ) : item.name === 'Grey Finance' ? (
                                                    <img src="/logos/grey-finance.png" alt="Grey Finance" className="h-10 mb-4" />
                                                ) : item.name === 'Eliaz Therapeutics' ? (
                                                    <img src="/logos/eliaz.png" alt="Eliaz Therapeutics" className="h-12 mb-4" />
                                                ) : item.name === 'Bitnob' ? (
                                                    <img src="/logos/bitnob.png" alt="Bitnob" className="h-10 mb-4" />
                                                ) : item.name === 'Pyn AI' ? (
                                                    <img src="/logos/pyn.jpg" alt="Pyn AI" className="h-10 mb-4" />
                                                ) : item.name === 'Mercury Bank' ? (
                                                    <img src="/logos/mercury.png" alt="Mercury Bank" className="h-10 mb-4" />
                                                ) : (
                                                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 heading-serif">{item.name}</h3>
                                                )}

                                                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 italic">
                                        Select opportunities in this sector.
                                    </div>
                                )}
                            </section>
                        );
                    })}
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default PortfolioPage;
