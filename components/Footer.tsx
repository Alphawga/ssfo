import React from 'react';

const Footer = () => (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-20 mb-32">
                <div className="lg:col-span-5">
                    <div className="flex items-center space-x-3 mb-10">
                        <div className="w-12 h-12 bg-white flex items-center justify-center">
                            <span className="text-[#0F172A] font-bold text-2xl italic heading-serif">S</span>
                        </div>
                        <span className="font-bold text-3xl tracking-tighter">SSFO</span>
                    </div>
                    <p className="text-blue-100/60 text-xl leading-relaxed max-w-md font-light">
                        Institutional-grade investment holding and advisory office backing the infrastructure of real economies globally.
                    </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Navigation</h4>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li><a href="#portfolio" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">Portfolio</a></li>
                            <li><a href="#services" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">Services</a></li>
                            <li><a href="#thesis" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">Our Thesis</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Specialties</h4>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li className="text-blue-100/60">Biotech</li>
                            <li className="text-blue-100/60">Commodities & Agribusiness</li>
                            <li className="text-blue-100/60">Energy</li>
                            <li className="text-blue-100/60">Fintech Infrastructure</li>
                            <li className="text-blue-100/60">Hospitality & Real Estate</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Network</h4>
                        <ul className="space-y-6 text-sm font-semibold">
                            <li><a href="https://www.linkedin.com/in/edmundolotu/" target="_blank" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/pyjama_ceo/" target="_blank" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-blue-100/40 font-bold">
                <p>© 2026 Stella's Son Family Office. All Rights Reserved.</p>
                <div className="flex space-x-12 mt-8 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Disclosure</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
