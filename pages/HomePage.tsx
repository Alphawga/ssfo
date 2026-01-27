import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Building2, Globe, Sprout, Linkedin } from 'lucide-react';
import { SectionContainer, PrimaryButton, SecondaryButton, Badge } from '../components/UI';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import InvestmentThesisSlider from '../components/InvestmentThesisSlider';


const HomePage = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero Section */}
            <header className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="absolute min-w-full min-h-full object-cover grayscale opacity-20 scale-105">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-business-center-building-and-high-skyline-2005-large.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[#F8FAFC]/70 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
                    <Badge>The Investment Holding & Advisory Office of Edmund Olotu</Badge>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0F172A] leading-[0.95] mb-8 tracking-tight">
                        Operator-Led Capital<br />
                        <span className="text-[#C5A059] italic">for Builders of Real Economies</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#64748B] mb-12 max-w-2xl leading-relaxed font-light">
                        Backing exceptional founders across <span className="text-[#0F172A] font-semibold">energy, fintech, agribusiness, and technology</span> with capital, operational expertise, and a principal who answers the phone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <PrimaryButton className="px-10" onClick={() => window.location.hash = '#contact'}>Submit a Deal →</PrimaryButton>
                        <SecondaryButton className="px-10" onClick={() => window.location.hash = '#portfolio'}>Explore Portfolio</SecondaryButton>
                    </div>
                    {/* Trust Signals */}
                    <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-[#C5A059] font-bold">15+</span>
                            <span className="text-[#64748B]">Portfolio Companies</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#C5A059] font-bold">4</span>
                            <span className="text-[#64748B]">Continents</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                        <div className="text-[#64748B]">
                            <span className="text-[#0F172A] font-medium">Energy</span> · <span className="text-[#0F172A] font-medium">Fintech</span> · <span className="text-[#0F172A] font-medium">Agribusiness</span> · <span className="text-[#0F172A] font-medium">Technology</span>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-[#64748B]" />
                </motion.div>
            </header>

            {/* Trust Bar */}
            <div className="bg-[#0F172A] py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[{ label: 'Asset Classes', val: 'Alternative', icon: <Zap className="w-5 h-5 text-[#C5A059]" /> },
                    { label: 'Operations', val: 'Multi-Sector', icon: <Building2 className="w-5 h-5 text-[#C5A059]" /> },
                    { label: 'Geographies', val: 'Global', icon: <Globe className="w-5 h-5 text-[#C5A059]" /> },
                    { label: 'Approach', val: 'Operator-Led', icon: <Sprout className="w-5 h-5 text-[#C5A059]" /> }].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="mb-4">{stat.icon}</div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2">{stat.label}</span>
                            <span className="text-3xl text-white font-bold heading-serif">{stat.val}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Positioning Statement Section */}
            <SectionContainer bgColor="bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-32 h-px bg-[#C5A059]/30 mx-auto mb-12"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-8 heading-serif">
                        Not a Passive Allocator.<br />
                        <span className="text-[#C5A059]">An Active Builder.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
                        Most family offices write checks and wait. SSFO operates differently. We take concentrated positions in businesses we understand deeply—then roll up our sleeves. Our portfolio companies gain access to fractional executive support, M&A capabilities, and strategic guidance typically reserved for firms ten times their size.
                    </p>
                    <p className="text-lg text-[#0F172A] font-medium mt-8">
                        Abu Dhabi headquarters. Portfolio spanning Africa, the US, and beyond. One principal making decisions.
                    </p>
                </div>
            </SectionContainer>

            {/* Investment Philosophy Slider */}
            <SectionContainer id="thesis">
                <ScrollReveal>
                    <InvestmentThesisSlider />
                </ScrollReveal>
            </SectionContainer>

            {/* Animated Stats Section */}
            <div className="bg-[#0F172A] py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white heading-serif mb-2">
                                    <AnimatedCounter value={15} suffix="+" />
                                </div>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Portfolio Companies</span>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white heading-serif mb-2">
                                    <AnimatedCounter value={4} />
                                </div>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Continents</span>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white heading-serif mb-2">
                                    <AnimatedCounter value={10} suffix="+" />
                                </div>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Years Experience</span>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-white heading-serif mb-2">
                                    $<AnimatedCounter value={100} suffix="M+" />
                                </div>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Capital Deployed</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Edmund Olotu Section */}
            <SectionContainer id="about">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <Badge>The Principal</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 heading-serif">Edmund Olotu</h2>
                        <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
                            <p>
                                Serial entrepreneur and investor who has founded and financed technology companies across <span className="text-[#0F172A] font-semibold">Nigeria, the United States, and the United Kingdom</span>.
                            </p>
                            <p>
                                His track record includes co-founding <span className="text-[#0F172A] font-semibold">Novira Therapeutics</span> (acquired by J&J for <span className="text-[#C5A059] font-bold">$600M</span>), founding <span className="text-[#0F172A] font-semibold">Generate4Schools</span> which pioneered merchant processing fees for education, and building <span className="text-[#0F172A] font-semibold">TechAdvance/Blocbanc</span>—recognized by the London Stock Exchange as one of "100 Companies to Inspire Africa."
                            </p>
                        </div>
                        <blockquote className="border-l-4 border-[#C5A059] pl-6 my-8">
                            <p className="text-xl text-[#0F172A] italic heading-serif">
                                "I back founders I'd want to build alongside—then I actually do."
                            </p>
                        </blockquote>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 font-semibold hover:bg-[#1E293B] transition-colors"
                            >
                                Read Full Bio →
                            </a>
                            <a
                                href="https://www.linkedin.com/in/edmundolotu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0F172A] font-semibold hover:text-[#C5A059] transition-colors border border-[#0F172A] px-6 py-3"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src="/edmund-olotu-pic.jpeg"
                                alt="Edmund Olotu, Founder and Principal of SSFO"
                                className="aspect-[4/5] object-cover object-top rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#C5A059] rounded-lg -z-10"></div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default HomePage;
