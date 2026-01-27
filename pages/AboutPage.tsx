import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, GraduationCap, Briefcase, Globe, Award, Building2, Sparkles, BookOpen } from 'lucide-react';
import { SectionContainer, Badge } from '../components/UI';
import ScrollReveal from '../components/ScrollReveal';

// Portfolio investments data organized by region
const portfolioInvestments = {
    nigeria: [
        { name: 'Grey Finance LTD', description: 'International bank accounts and card issuing' },
        { name: 'Bitnob Technologies', description: 'Bitcoin infrastructure and exchange' },
        { name: 'Pyn AI', description: 'Artificial Intelligence' },
    ],
    uk: [
        { name: 'Kyshi UK', description: 'Merchant of Record infrastructure' },
    ],
    uae: [
        { name: 'Cray Finance', description: 'Fintech (Lead Investor)' },
    ],
    usa: [
        { name: 'Mercury Bank', description: 'Digital Business Banking' },
        { name: 'Token Metrics Inc.', description: 'Crypto analytics & insights' },
        { name: 'Doorvest', description: 'Proptech investment platform' },
        { name: 'Yummy Foods', description: 'Food Tech' },
        { name: 'Eliaz Pharma', description: 'Biotech' },
        { name: 'Sen-Jam Pharma', description: 'Biotech' },
        { name: 'PhorMed', description: 'Biotech' },
    ]
};

const viiVenturesPortfolio = [
    'Palantir', 'DoorDash', 'Jumbotail', 'SpaceX', 'Airbnb',
    'Robinhood', 'Ripple', 'Plaid', 'Atomic', 'Pipe', 'Marqeta'
];

// Grey Matter Image Slider Component
const greyMatterImages = [
    { src: '/grey-matter-logo.jpg', alt: 'Grey Matter Logo', objectPosition: 'center 30%' },
    { src: '/grey-matter-1.jpg', alt: 'Grey Matter cuisine - Signature dish', objectPosition: 'center' },
    { src: '/grey-matter-2.jpg', alt: 'Grey Matter cuisine - French toast with berries', objectPosition: 'center' },
    { src: '/grey-matter-3.jpg', alt: 'Grey Matter cuisine - Breakfast spread', objectPosition: 'center' },
];

const GreyMatterSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greyMatterImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <a
                href="https://www.instagram.com/greymatter.social/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
                {greyMatterImages.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: image.objectPosition }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: index === currentIndex ? 1 : 0,
                            scale: index === currentIndex ? 1 : 1.1
                        }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Instagram icon overlay */}
                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    </svg>
                </div>
            </a>
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {greyMatterImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-[#C5A059] w-6'
                            : 'bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
const AboutPage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Hero Section */}
            <header className="relative pt-32 pb-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge>The Principal</Badge>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[0.95] mb-8 tracking-tight heading-serif">
                                Edmund<br />
                                <span className="text-[#C5A059] italic">Olotu</span>
                            </h1>
                            <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
                                Serial entrepreneur and investor who has founded and financed technology companies across Nigeria, the United States, and the United Kingdom.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-[#0F172A] text-white px-6 py-3 rounded-full text-sm font-bold">
                                    <span className="text-[#C5A059]">$600M+</span> Exit (Novira → J&J)
                                </div>
                                <div className="bg-[#0F172A] text-white px-6 py-3 rounded-full text-sm font-bold">
                                    <span className="text-[#C5A059]">15+</span> Portfolio Companies
                                </div>
                                <div className="bg-[#0F172A] text-white px-6 py-3 rounded-full text-sm font-bold">
                                    <span className="text-[#C5A059]">3</span> Continents
                                </div>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/edmundolotu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#C5A059] text-[#0F172A] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF6A] transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                Connect on LinkedIn
                            </a>
                        </div>
                        <div className="relative">
                            <img
                                src="/edmund-olotu-pic.jpeg"
                                alt="Edmund Olotu, Founder and Principal of SSFO"
                                className="aspect-[4/5] object-cover object-top rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-[#C5A059] rounded-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C5A059]/10 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Full Biography Section */}
            <SectionContainer bgColor="bg-white">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-[#0F172A]" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] heading-serif">The Story</h2>
                        </div>
                        <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
                            <p>
                                Edmund Olotu is a serial entrepreneur and investor who has founded and financed technology companies across Nigeria, the United States, and the United Kingdom. His entrepreneurial journey includes co-founding <span className="text-[#0F172A] font-semibold">Novira Therapeutics Inc.</span>, a novel antiviral drug discovery company that was acquired by Johnson & Johnson in 2015 for <span className="text-[#C5A059] font-bold">$600 million</span>. He also founded <span className="text-[#0F172A] font-semibold">Generate4Schools LLC</span>, which pioneered the use of merchant processing fees to fund school projects in the United States.
                            </p>
                            <p>
                                In Nigeria, Edmund established <span className="text-[#0F172A] font-semibold">TechAdvance Ltd</span> in 2009, building collections, aggregation, and transaction data analytics platforms serving multiple industry verticals including electric utilities, transportation, digital banking, and internal revenue generation. The company processes payments for electricity companies across Nigeria and delivers e-government solutions to various states. TechAdvance earned recognition from the London Stock Exchange Group as one of <span className="text-[#C5A059] font-semibold">"100 Companies to Inspire Africa."</span>
                            </p>
                            <p>
                                The company later evolved into <span className="text-[#0F172A] font-semibold">Blocbanc (USA) Inc.</span>, a fintech infrastructure company offering banking-as-a-service, payment infrastructure, and global business payouts for African companies. Blocbanc operates through local subsidiaries in Nigeria, holding both a payment services provider license and a microfinance banking license from the Central Bank of Nigeria.
                            </p>
                            <p>
                                Beyond his operational roles, Edmund consults extensively for companies in the cross-border and international payment processing space globally. Through his family office, he serves as a board advisor and early-stage investor in numerous fintech, crypto, and biotech startups across Nigeria, the United States, and the United Kingdom.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* Track Record Section */}
            <SectionContainer bgColor="bg-[#0F172A]">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <Badge>Track Record</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 heading-serif">
                            Building Companies That <span className="text-[#C5A059]">Matter</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Novira */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#C5A059] rounded-xl flex items-center justify-center">
                                    <Award className="w-7 h-7 text-[#0F172A]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white heading-serif">Novira Therapeutics</h3>
                                    <p className="text-[#C5A059] text-sm font-bold uppercase tracking-widest">Co-Founder</p>
                                </div>
                            </div>
                            <p className="text-blue-100/70 leading-relaxed mb-6">
                                Novel antiviral drug discovery company co-founded in the USA. Acquired by Johnson & Johnson in 2015.
                            </p>
                            <div className="text-5xl font-bold text-white heading-serif">
                                $600<span className="text-[#C5A059]">M</span>
                                <span className="text-lg text-blue-100/50 font-normal ml-2">Exit</span>
                            </div>
                        </div>

                        {/* Generate4Schools */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#C5A059] rounded-xl flex items-center justify-center">
                                    <GraduationCap className="w-7 h-7 text-[#0F172A]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white heading-serif">Generate4Schools LLC</h3>
                                    <p className="text-[#C5A059] text-sm font-bold uppercase tracking-widest">Founder</p>
                                </div>
                            </div>
                            <p className="text-blue-100/70 leading-relaxed mb-6">
                                Pioneered the use of merchant processing fees to fund school projects in the United States. An innovative approach to education financing.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#C5A059]/20 px-4 py-2 rounded-lg">
                                    <span className="text-[#C5A059] font-bold text-sm">USA</span>
                                </div>
                                <span className="text-blue-100/50 text-sm">EdTech Innovation</span>
                            </div>
                        </div>

                        {/* TechAdvance */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#C5A059] rounded-xl flex items-center justify-center">
                                    <Building2 className="w-7 h-7 text-[#0F172A]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white heading-serif">TechAdvance LTD</h3>
                                    <p className="text-[#C5A059] text-sm font-bold uppercase tracking-widest">Founder (2009)</p>
                                </div>
                            </div>
                            <p className="text-blue-100/70 leading-relaxed mb-6">
                                Built collections, aggregation, and transaction data analytics platforms serving electric utilities, transportation, digital banking, and internal revenue generation across Nigeria.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#C5A059]/20 px-4 py-2 rounded-lg">
                                    <span className="text-[#C5A059] font-bold text-sm">London Stock Exchange</span>
                                </div>
                                <span className="text-blue-100/50 text-sm">"100 Companies to Inspire Africa"</span>
                            </div>
                        </div>

                        {/* Blocbanc */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#C5A059] rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-7 h-7 text-[#0F172A]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white heading-serif">Blocbanc (USA) Inc.</h3>
                                    <p className="text-[#C5A059] text-sm font-bold uppercase tracking-widest">Founder</p>
                                </div>
                            </div>
                            <p className="text-blue-100/70 leading-relaxed mb-6">
                                Fintech infrastructure company offering banking-as-a-service, payment infrastructure, and global business payouts for African companies.
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="bg-[#C5A059]/20 px-3 py-1 rounded-lg">
                                    <span className="text-[#C5A059] font-bold text-xs">CBN PSP License</span>
                                </div>
                                <div className="bg-[#C5A059]/20 px-3 py-1 rounded-lg">
                                    <span className="text-[#C5A059] font-bold text-xs">MFB License</span>
                                </div>
                                <div className="bg-[#C5A059]/20 px-3 py-1 rounded-lg">
                                    <span className="text-[#C5A059] font-bold text-xs">Canadian MSB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* Portfolio Investments Section */}
            <SectionContainer>
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <Badge>Investment Portfolio</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4 heading-serif">
                            Early-Stage <span className="text-[#C5A059]">Bets</span>
                        </h2>
                        <p className="text-xl text-[#64748B] mt-4 max-w-2xl mx-auto">
                            Board advisor and early investor to notable startups across fintech, crypto, and biotech.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Nigeria */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="w-6 h-6 text-[#C5A059]" />
                                <h3 className="text-xl font-bold text-[#0F172A] heading-serif">Nigeria</h3>
                            </div>
                            <ul className="space-y-4">
                                {portfolioInvestments.nigeria.map((company, i) => (
                                    <li key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-[#0F172A]">{company.name}</p>
                                        <p className="text-sm text-[#64748B]">{company.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* UK */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="w-6 h-6 text-[#C5A059]" />
                                <h3 className="text-xl font-bold text-[#0F172A] heading-serif">United Kingdom</h3>
                            </div>
                            <ul className="space-y-4">
                                {portfolioInvestments.uk.map((company, i) => (
                                    <li key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-[#0F172A]">{company.name}</p>
                                        <p className="text-sm text-[#64748B]">{company.description}</p>
                                    </li>
                                ))}
                                <li className="text-sm text-[#64748B] italic">Rain Technologies (defunct)</li>
                            </ul>
                        </div>

                        {/* UAE */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="w-6 h-6 text-[#C5A059]" />
                                <h3 className="text-xl font-bold text-[#0F172A] heading-serif">Abu Dhabi</h3>
                            </div>
                            <ul className="space-y-4">
                                {portfolioInvestments.uae.map((company, i) => (
                                    <li key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-[#0F172A]">{company.name}</p>
                                        <p className="text-sm text-[#64748B]">{company.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* USA */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="w-6 h-6 text-[#C5A059]" />
                                <h3 className="text-xl font-bold text-[#0F172A] heading-serif">United States</h3>
                            </div>
                            <ul className="space-y-4">
                                {portfolioInvestments.usa.map((company, i) => (
                                    <li key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-[#0F172A]">{company.name}</p>
                                        <p className="text-sm text-[#64748B]">{company.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* VII Ventures Section */}
            <SectionContainer bgColor="bg-[#F8FAFC]">
                <ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge>Venture Capital</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4 mb-6 heading-serif">
                                VII Ventures
                            </h2>
                            <p className="text-xl text-[#64748B] mb-6 leading-relaxed">
                                General Partner and Senior Advisor at the Middle East-based fund with investments in some of the world's most iconic technology companies.
                            </p>
                            <p className="text-[#64748B] leading-relaxed mb-8">
                                Edmund was also part of the pre-seed ideation team that secured regulatory licenses for <strong className="text-[#0F172A]">Ninja Logistics</strong> and <strong className="text-[#0F172A]">LAMA Fintech</strong>—both of which have since become profitable startups based in Saudi Arabia, with Ninja Logistics achieving <span className="text-[#C5A059] font-bold">unicorn status in 2025</span>.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-3">
                                {viiVenturesPortfolio.map((company, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-white px-5 py-3 rounded-full border border-gray-200 font-bold text-[#0F172A] text-sm shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all cursor-default"
                                    >
                                        {company}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* Education Section */}
            <SectionContainer>
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <Badge>Education</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4 heading-serif">
                            Academic <span className="text-[#C5A059]">Foundation</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 group hover:border-[#C5A059] transition-colors">
                            <div className="w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059] transition-colors">
                                <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2 heading-serif">University of Manchester</h3>
                            <p className="text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-2">Bachelor's Degree</p>
                            <p className="text-[#64748B]">Mechanical Engineering with Business</p>
                        </div>
                        <div className="text-center p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 group hover:border-[#C5A059] transition-colors">
                            <div className="w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059] transition-colors">
                                <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2 heading-serif">Nottingham University</h3>
                            <p className="text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-2">Master's Degree</p>
                            <p className="text-[#64748B]">Science & Technology Entrepreneurship <span className="text-[#0F172A] font-semibold">(Distinction)</span></p>
                        </div>
                        <div className="text-center p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 group hover:border-[#C5A059] transition-colors">
                            <div className="w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059] transition-colors">
                                <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2 heading-serif">Harvard University</h3>
                            <p className="text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-2">Master's Degree</p>
                            <p className="text-[#64748B]">Management Finance & Control</p>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* Personal Interests Section */}
            <SectionContainer bgColor="bg-[#0F172A]">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <Badge>Beyond Business</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 heading-serif">
                            The <span className="text-[#C5A059]">Unconventional</span> Pursuits
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <a
                            href="https://www.glenfiddich.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                                <img
                                    src="/glenfiddich-ambassador.png"
                                    alt="Glenfiddich Grand Cru - Edmund Olotu as Whisky Ambassador"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 heading-serif group-hover:text-[#C5A059] transition-colors">Glenfiddich Ambassador</h3>
                            <p className="text-blue-100/60 text-sm">2019</p>
                        </a>
                        <a
                            href="https://www.instagram.com/p/B1Gup0gHIlx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                                <img
                                    src="/edmund-diving.png"
                                    alt="Edmund Olotu - Certified Deep Sea Diver"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                {/* Instagram icon overlay */}
                                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 heading-serif group-hover:text-[#C5A059] transition-colors">Deep Sea Diver</h3>
                            <p className="text-blue-100/60 text-sm">Certified diver exploring the depths</p>
                        </a>
                        <a
                            href="https://youtu.be/Fn8_NdaibkQ?si=mPlQw6UDnG7buEGY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                                <img
                                    src="/vintage-car.jpg"
                                    alt="Vintage Mercedes-Benz - Edmund Olotu's collection"
                                    className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-[#C5A059] transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 heading-serif group-hover:text-[#C5A059] transition-colors">Vintage Cars</h3>
                            <p className="text-blue-100/60 text-sm mb-2">Collector and restorer of classic automobiles</p>
                            <span className="inline-flex items-center gap-1 text-[#C5A059] text-xs font-medium hover:underline">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                </svg>
                                @ancient_broom
                            </span>
                        </a>
                        <a
                            href="https://athingforart.com/our-collection/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                                <img
                                    src="/atfa-art.jpg"
                                    alt="A Thing For Art - African Art Collection"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 heading-serif group-hover:text-[#C5A059] transition-colors">Art Collector</h3>
                            <p className="text-blue-100/60 text-sm mb-2">Investor-grade African art collection</p>
                            <span className="text-[#C5A059] text-xs font-medium hover:underline">
                                A Thing For Art (ATFA) →
                            </span>
                        </a>
                    </div>

                    {/* Grey Matter */}
                    <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            {/* Image Slider */}
                            <GreyMatterSlider />

                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-4 heading-serif">Grey Matter Social Space</h3>
                                <p className="text-blue-100/70 mb-6">
                                    Proprietor of Grey Matter—a social space for digital natives that has become a popular gathering spot for technology founders and investors in Lagos, Nigeria.
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="bg-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-full text-sm font-medium">Tech Hub</span>
                                    <span className="bg-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-full text-sm font-medium">Lagos</span>
                                    <span className="bg-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-full text-sm font-medium">Fine Dining</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </SectionContainer>

            {/* CTA Section */}
            <SectionContainer>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 heading-serif">
                        Ready to Build <span className="text-[#C5A059]">Together?</span>
                    </h2>
                    <p className="text-xl text-[#64748B] mb-8">
                        Edmund consults extensively for companies in the cross-border and international payment processing space globally.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#0F172A] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#1E293B] transition-colors"
                    >
                        Get in Touch →
                    </a>
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default AboutPage;
