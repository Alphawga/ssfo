import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
    { name: 'Abu Dhabi Investment Authority', initials: 'ADIA' },
    { name: 'First Bank Nigeria', initials: 'FBN' },
    { name: 'African Development Bank', initials: 'AfDB' },
    { name: 'Goldman Sachs', initials: 'GS' },
    { name: 'Mastercard Foundation', initials: 'MCF' },
    { name: 'Pan-African Capital', initials: 'PAC' }
];

const PartnerLogos = () => (
    <div className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#64748B] font-bold mb-10">
                Trusted Partners & Co-Investors
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partnerLogos.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center bg-[#F8FAFC] rounded-lg border border-gray-100 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-xl md:text-2xl font-bold text-[#0F172A] heading-serif">{partner.initials}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

export default PartnerLogos;
