import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';
import { PORTFOLIO_DATA } from '../constants';

const PortfolioPage = () => {
    const [filter, setFilter] = useState('All');

    // Extract main categories AND sub-categories
    const mainCategories = PORTFOLIO_DATA.map(p => p.sector.split(' · ')[0]);
    const subCategories = PORTFOLIO_DATA.map(p => p.sector.split(' · ')[1]).filter(Boolean);
    const allCategories = [...new Set([...mainCategories, ...subCategories])];
    const sectors = ['All', ...allCategories];

    const filtered = filter === 'All' ? PORTFOLIO_DATA : PORTFOLIO_DATA.filter(p => p.sector.includes(filter));

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
            <SectionContainer>
                <div className="mb-16">
                    <Badge>Full Portfolio</Badge>
                    <SectionTitle>Our Strategic Investments</SectionTitle>
                    <div className="flex flex-wrap gap-4 mt-8">
                        {sectors.map(s => (
                            <button
                                key={s}
                                onClick={() => setFilter(s)}
                                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest border transition-all ${filter === s ? 'bg-[#0F172A] text-white border-[#0F172A]' : 'bg-white text-[#64748B] border-gray-200 hover:border-[#C5A059]'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((item, i) => (
                        <motion.div
                            layout
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group bg-white border border-gray-100 p-10 hover:shadow-2xl transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#C5A059] group-hover:h-full transition-all duration-500"></div>
                            <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-4 block">{item.sector}</span>
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
                            ) : (
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 heading-serif">{item.name}</h3>
                            )}
                            <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default PortfolioPage;
