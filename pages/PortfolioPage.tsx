import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';
import { PORTFOLIO_DATA } from '../constants';

const PortfolioPage = () => {
    const [filter, setFilter] = useState('All');
    const sectors = ['All', ...new Set(PORTFOLIO_DATA.map(p => p.sector.split(' · ')[0]))];

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
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 heading-serif">{item.name}</h3>
                            <p className="text-sm text-[#64748B] leading-relaxed mb-8">{item.description}</p>
                            {item.website ? (
                                <a
                                    href={item.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-[#0F172A] font-bold text-xs uppercase tracking-widest hover:text-[#C5A059] transition-colors"
                                >
                                    Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            ) : (
                                <div className="flex items-center text-[#0F172A] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Detail View <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default PortfolioPage;
