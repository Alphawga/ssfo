
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Play, CheckCircle2,
  Globe, Building2, Zap, Sprout, Mail, MapPin, Phone, Menu, X,
  ExternalLink, BarChart3, ShieldCheck, Users2, Linkedin
} from 'lucide-react';
import { SectionContainer, SectionTitle, PrimaryButton, SecondaryButton, Badge } from './components/UI';
import { PORTFOLIO_DATA, SERVICES_DATA, FAQS_DATA } from './constants';
import { InquiryType } from './types';

// --- Components ---

const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    window.location.hash = href;
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'glass-nav shadow-lg py-4' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.location.hash = ''}>
            <div className="w-12 h-12 bg-[#0F172A] flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-[#C5A059] font-bold text-2xl italic heading-serif">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter text-[#0F172A]">SSFO</span>
              <span className="text-[10px] uppercase tracking-widest text-[#64748B] -mt-1 font-bold">Family Office</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#C5A059] after:transition-all ${currentPage === link.href.slice(1)
                  ? 'text-[#C5A059] after:w-full'
                  : 'text-[#0F172A] hover:text-[#C5A059] after:w-0 hover:after:w-full'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <PrimaryButton className="py-2.5 px-6 text-xs uppercase tracking-widest" onClick={() => window.location.hash = '#contact'}>
              Submit Deal
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#C5A059] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0F172A] pt-24 px-6"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-bold text-white hover:text-[#C5A059] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <PrimaryButton
                className="mt-8 w-full py-4 text-center"
                onClick={() => handleNavClick('#contact')}
              >
                Submit a Deal →
              </PrimaryButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


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
              <li className="text-blue-100/60">Energy & Logistics</li>
              <li className="text-blue-100/60">Fintech Infrastructure</li>
              <li className="text-blue-100/60">Agribusiness Processing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-8">Network</h4>
            <ul className="space-y-6 text-sm font-semibold">
              <li><a href="#" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-blue-100/60 hover:text-[#C5A059] transition-colors">X (Twitter)</a></li>
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

// --- Pages ---

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

      {/* Edmund Olotu Section */}
      <SectionContainer id="about">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Badge>The Principal</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 heading-serif">Edmund Olotu</h2>
            <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
              <p>
                Edmund Olotu founded SSFO to do what most institutional investors won't—stay close to the work.
              </p>
              <p>
                With operating experience across energy, finance, and technology, Edmund takes a hands-on approach to every significant investment. No investment committee delays. No junior associates running the relationship. Direct access to the decision-maker.
              </p>
            </div>
            <blockquote className="border-l-4 border-[#C5A059] pl-6 my-8">
              <p className="text-xl text-[#0F172A] italic heading-serif">
                "I back founders I'd want to build alongside—then I actually do."
              </p>
            </blockquote>
            <a
              href="https://linkedin.com/in/edmundolotu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0F172A] font-semibold hover:text-[#C5A059] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn →
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/edmund-olotu-headshot.png"
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
              <div className="flex items-center text-[#0F172A] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Detail View <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </motion.div>
  );
};

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
                {['Strategic Roadmap', 'Value Optimization', 'Institutional Alignment'].map(u => (
                  <li key={u} className="flex items-center text-xs font-bold text-[#0F172A] uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-[#C5A059]" /> {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>

    <SectionContainer bgColor="bg-[#0F172A]">
      <div className="grid lg:grid-cols-3 gap-12 text-center">
        {[
          { icon: <BarChart3 />, title: "Growth Analytics", desc: "Data-driven decision making at the core." },
          { icon: <ShieldCheck />, title: "Risk Governance", desc: "Institutional grade compliance and risk management." },
          { icon: <Users2 />, title: "Talent Acquisition", desc: "Access to our global network of tier-one operators." }
        ].map((item, i) => (
          <div key={i} className="text-white">
            <div className="text-[#C5A059] flex justify-center mb-6">{item.icon}</div>
            <h4 className="text-xl font-bold mb-4 heading-serif">{item.title}</h4>
            <p className="text-blue-100/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  </motion.div>
);

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

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 min-h-screen pb-24">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <Badge>Get in Touch</Badge>
            <SectionTitle>Initialize Contact.</SectionTitle>
            <p className="text-xl text-[#64748B] font-light mb-12">Whether you're a founder seeking capital or an institutional partner exploring synergies, we look forward to the conversation.</p>

            <div className="space-y-12">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#C5A059]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#64748B]">Email Inquiry</h4>
                  <p className="text-xl font-bold text-[#0F172A] heading-serif">contact@ssfo.ae</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#C5A059]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#64748B]">Regional Hub</h4>
                  <p className="text-xl font-bold text-[#0F172A] heading-serif">Abu Dhabi, UAE</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#C5A059]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#64748B]">Direct Channel</h4>
                  <p className="text-xl font-bold text-[#0F172A] heading-serif">+971 (0) 2 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-12 rounded-2xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-24">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Submission Received</h3>
                <p className="text-[#64748B]">Thank you. We've received your inquiry and will respond within two weeks.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-[#C5A059] font-bold hover:underline">New Inquiry</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">Your Name *</label>
                    <input id="name" name="name" required className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent" />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">Email Address *</label>
                    <input id="email" name="email" required type="email" className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="company" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">Company Name *</label>
                    <input id="company" name="company" required className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent" />
                  </div>
                  <div className="group">
                    <label htmlFor="website" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">Website (Optional)</label>
                    <input id="website" name="website" type="url" placeholder="https://" className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent" />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="context" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">What brings you to SSFO? *</label>
                  <select id="context" name="context" required className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent">
                    {Object.values(InquiryType).map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2 group-focus-within:text-[#C5A059] transition-colors">Tell us more *</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all resize-none bg-transparent" placeholder="Provide a summary of your inquiry..."></textarea>
                </div>
                <div className="group">
                  <label htmlFor="deck" className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2">Attach Deck (Optional)</label>
                  <input id="deck" name="deck" type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" className="w-full py-3 text-sm text-[#64748B] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#0F172A] file:text-white hover:file:bg-[#1E293B] file:cursor-pointer" />
                </div>
                <PrimaryButton type="submit" className="w-full py-5 text-sm">Send Message</PrimaryButton>
                <p className="text-xs text-[#64748B] text-center">Your information stays confidential. We don't share data with third parties.</p>
              </form>
            )}
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  );
};

// --- Main Router ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (['portfolio', 'services', 'thesis', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} />

      <main className="grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" />}
          {currentPage === 'portfolio' && <PortfolioPage key="portfolio" />}
          {currentPage === 'services' && <ServicesPage key="services" />}
          {currentPage === 'thesis' && <ThesisPage key="thesis" />}
          {currentPage === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
