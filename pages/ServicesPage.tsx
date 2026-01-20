import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionContainer, SectionTitle, Badge } from '../components/UI';
import { SERVICES_DATA } from '../constants';

const ServicesPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
        <SectionContainer>
            <div className="max-w-4xl mb-24">
                <Badge>Institutional Advisory</Badge>
                <SectionTitle>Driving Value Through Operational Excellence</SectionTitle>
                <p className="text-xl text-[#64748B] font-light leading-relaxed">
                    SSFO doesn't just provide capital; we provide the operational framework necessary for institutional scaling. Our advisory services are designed for mid-market leaders seeking a path to major market dominance.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {SERVICES_DATA.map((service, i) => (
                    <div key={service.title} className="flex gap-8 group">
                        <div className="shrink-0 w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-3 heading-serif">{service.title}</h3>
                            <p className="text-[#64748B] leading-relaxed mb-6">{service.description}</p>
                            <ul className="space-y-3">
                                {service.bulletPoints.map(point => (
                                    <li key={point} className="flex items-center text-xs font-bold text-[#0F172A] uppercase tracking-widest">
                                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#C5A059]" /> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>

        <SectionContainer bgColor="bg-[#0F172A]">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 heading-serif">
                    Need Operational Support?
                </h3>
                <p className="text-xl text-blue-100/70 mb-8 leading-relaxed">
                    Portfolio services are available to all SSFO companies. Whether you need CFO-level support, M&A guidance, or digital transformation expertise—we're here to help scale.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {[
                        { label: 'Direct Principal Access', value: 'No Junior Associates' },
                        { label: 'Execution Speed', value: '2-Week Response Time' },
                        { label: 'Flexible Engagement', value: 'Project or Ongoing' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg px-8 py-6 border border-white/10">
                            <p className="text-[#C5A059] text-sm font-bold uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-white text-lg font-semibold">{item.value}</p>
                        </div>
                    ))}
                </div>
                <a
                    href="#contact"
                    className="inline-block bg-[#C5A059] text-[#0F172A] px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF6A] transition-colors"
                >
                    Let's Talk →
                </a>
            </div>
        </SectionContainer>
    </motion.div>
);

export default ServicesPage;
