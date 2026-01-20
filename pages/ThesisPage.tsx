import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';

const ThesisPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
        <SectionContainer>
            <div className="max-w-4xl mx-auto">
                <Badge>Our Thesis</Badge>
                <SectionTitle>Capital is a Commodity. Operation is the Arbitrage.</SectionTitle>
                <div className="prose prose-lg text-[#64748B] font-light leading-relaxed mt-12 space-y-8">
                    <p>
                        In today's global economy, capital is readily available but execution is scarce. Our core philosophy centers on the belief that the most significant value creation happens in the "hard" sectors of the real economy—infrastructure, logistics, and essential finance.
                    </p>
                    <div className="bg-[#F8FAFC] p-12 border-l-4 border-[#C5A059] my-12">
                        <p className="text-2xl font-bold text-[#0F172A] heading-serif italic">
                            "We don't buy businesses to fix them; we buy businesses to build them."
                        </p>
                    </div>
                    <p>
                        We focus on companies with proven product-market fit but lacking the institutional frameworks required to scale internationally. By deploying our fractional executive team, we bridge the gap between "good" and "institutional grade."
                    </p>
                    <h3 className="text-3xl font-bold text-[#0F172A] heading-serif mt-16 mb-8">The Three Pillars of SSFO</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div>
                            <span className="text-[#C5A059] font-bold text-4xl heading-serif">01</span>
                            <h4 className="text-lg font-bold text-[#0F172A] mt-4 mb-2">Conviction</h4>
                            <p className="text-sm">We take concentrated positions where we have deep sector intimacy.</p>
                        </div>
                        <div>
                            <span className="text-[#C5A059] font-bold text-4xl heading-serif">02</span>
                            <h4 className="text-lg font-bold text-[#0F172A] mt-4 mb-2">Collaboration</h4>
                            <p className="text-sm">We act as partners, not just financiers, sitting on the same side of the table.</p>
                        </div>
                        <div>
                            <span className="text-[#C5A059] font-bold text-4xl heading-serif">03</span>
                            <h4 className="text-lg font-bold text-[#0F172A] mt-4 mb-2">Clarity</h4>
                            <p className="text-sm">Institutional frameworks designed for speed and transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    </motion.div>
);

export default ThesisPage;
