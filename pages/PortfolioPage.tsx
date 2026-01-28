import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';
import { PORTFOLIO_DATA } from '../constants';

const PortfolioPage = () => {
    // Distinct filters as requested
    const filters = [
        'All',
        'Energy',
        'Fintech',
        'Commodities & Agribusiness',
        'FoodTech',
        'Biotech',
        'AI',
        'Real Estate & Hospitality',
        'Alternative Assets'
    ];

    const [activeFilter, setActiveFilter] = useState('All');

    const filteredData = PORTFOLIO_DATA.filter(item => {
        if (activeFilter === 'All') return true;

        // Custom matching logic for combined categories
        if (activeFilter === 'Commodities & Agribusiness') {
            return item.sector.includes('Agribusiness') || item.sector.includes('Commodities');
        }
        if (activeFilter === 'Real Estate & Hospitality') {
            return item.sector.includes('Real Estate') || item.sector.includes('Hospitality');
        }

        return item.sector.includes(activeFilter);
    });

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
            <SectionContainer>
                <div className="mb-16 text-center">
                    <Badge>Our Portfolio</Badge>
                    <SectionTitle>Distinctive Value. Global Impact.</SectionTitle>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
                        Our portfolio spans industries that define the future—from sustainable agriculture and energy to frontier technology and digital infrastructure.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                                ? 'bg-[#0F172A] text-white shadow-lg'
                                : 'bg-white text-[#64748B] hover:bg-gray-50 border border-gray-100'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid Layout */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item) => (
                            <motion.div
                                layout
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-0 bg-[#C5A059] group-hover:h-full transition-all duration-500"></div>

                                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-4 block">
                                    {item.sector.split(' · ')[0]}
                                </span>

                                {/* Logo / Name Logic */}
                                <div className="min-h-[4rem] mb-4 flex items-center">
                                    {item.name === 'Cray Finance' ? (
                                        <img src="/logos/cray-finance.png" alt="Cray Finance" className="h-20 object-contain" />
                                    ) : item.name === 'FuelGap LLC' ? (
                                        <img src="/logos/fuelgap.png" alt="FuelGap" className="h-20 object-contain" />
                                    ) : item.name === 'Kyshi' ? (
                                        <img src="/logos/kyshi.png" alt="Kyshi" className="h-20 object-contain" />
                                    ) : item.name === 'Grey Matter Social Space' ? (
                                        <img src="/logos/grey-matter.png" alt="Grey Matter" className="h-24 object-contain" />
                                    ) : item.name === 'Optimus (By Afrinvest) LTD' ? (
                                        <img src="/logos/optimus.png" alt="Optimus" className="h-20 object-contain" />
                                    ) : item.name === 'ATFA' ? (
                                        <img src="/logos/atfa-new.png" alt="ATFA" className="h-20 object-contain" />
                                    ) : item.name === 'Grey Finance' ? (
                                        <img src="/logos/grey-finance.png" alt="Grey Finance" className="h-20 object-contain" />
                                    ) : item.name === 'Eliaz Therapeutics' ? (
                                        <img src="/logos/eliaz.png" alt="Eliaz Therapeutics" className="h-20 object-contain" />
                                    ) : item.name === 'Bitnob' ? (
                                        <img src="/logos/bitnob.png" alt="Bitnob" className="h-20 object-contain" />
                                    ) : item.name === 'Pyn AI' ? (
                                        <img src="/logos/pyn.jpg" alt="Pyn AI" className="h-20 object-contain" />
                                    ) : item.name === 'Mercury Bank' ? (
                                        <img src="/logos/mercury.png" alt="Mercury Bank" className="h-20 object-contain" />
                                    ) : item.name === 'Multi-trex PLC' ? (
                                        <h3 className="text-2xl font-bold text-[#0F172A] heading-serif">Multi-trex PLC</h3>
                                    ) : (
                                        <h3 className="text-2xl font-bold text-[#0F172A] heading-serif">{item.name}</h3>
                                    )}
                                </div>

                                <p className="text-sm text-[#64748B] leading-relaxed mb-6 min-h-[3rem]">
                                    {item.description}
                                </p>

                                {item.website && (
                                    <a
                                        href={item.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs font-bold text-[#0F172A] hover:text-[#C5A059] transition-colors uppercase tracking-wider"
                                    >
                                        Visit Website <ArrowRight className="w-3 h-3 ml-2" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredData.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-slate-400 italic">No investments found in this category.</p>
                    </div>
                )}

            </SectionContainer>
        </motion.div>
    );
};

export default PortfolioPage;
