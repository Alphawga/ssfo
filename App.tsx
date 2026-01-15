
import React, { useState, useEffect } from 'react';
import { SectionContainer, SectionTitle, PrimaryButton, SecondaryButton, Badge } from './components/UI';
import { PORTFOLIO_DATA, SERVICES_DATA, FAQS_DATA } from './constants';
import { InquiryType } from './types';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav shadow-lg py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-12 h-12 bg-[#0F172A] flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-[#C5A059] font-bold text-2xl italic heading-serif">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tighter text-[#0F172A]">SSFO</span>
            <span className="text-[10px] uppercase tracking-widest text-[#64748B] -mt-1 font-bold">Family Office</span>
          </div>
        </div>
        
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#0F172A] text-sm font-semibold tracking-wide hover:text-[#C5A059] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <PrimaryButton className="py-2.5 px-6 text-xs uppercase tracking-widest" onClick={() => window.location.hash = '#contact'}>
            Submit Deal
          </PrimaryButton>
        </div>
        
        <button className="lg:hidden text-[#0F172A]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6 group">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-[#0F172A] group-hover:text-[#C5A059] transition-colors">{question}</span>
        <span className={`text-[#C5A059] transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] mt-6' : 'max-h-0'}`}>
        <p className="text-[#64748B] leading-relaxed text-lg border-l-2 border-[#C5A059] pl-6 italic">{answer}</p>
      </div>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: InquiryType.RAISING_CAPITAL,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', inquiryType: InquiryType.RAISING_CAPITAL, message: '' });
    }, 1500);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Background" 
            className="w-full h-full object-cover grayscale opacity-10"
          />
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0F172A]/[0.02] -skew-x-12 translate-x-1/4"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <Badge>Institutional Holding & Advisory</Badge>
              <h1 className="text-6xl md:text-8xl font-bold text-[#0F172A] leading-[1] mb-8">
                Building the <span className="text-[#C5A059] italic">Real</span> Economies of Tomorrow.
              </h1>
              <p className="text-xl md:text-2xl text-[#64748B] mb-12 max-w-2xl leading-relaxed font-light">
                SSFO provides operator-led capital and institutional-grade advisory for builders in <span className="text-[#0F172A] font-semibold">Energy, Fintech,</span> and <span className="text-[#0F172A] font-semibold">Agribusiness</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <PrimaryButton className="px-12" onClick={() => window.location.hash = '#contact'}>
                  Get in Touch
                </PrimaryButton>
                <SecondaryButton className="px-12" onClick={() => window.location.hash = '#portfolio'}>
                  Our Portfolio
                </SecondaryButton>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#C5A059]/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-1696413575b3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Architecture" 
                  className="relative z-10 rounded-sm shadow-2xl grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-[#0F172A] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 opacity-80">
          {[
            { label: 'Asset Classes', val: 'Alternative' },
            { label: 'Operations', val: 'Multi-Sector' },
            { label: 'Geographies', val: 'Global' },
            { label: 'Approach', val: 'Operator-Led' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-1">{stat.label}</span>
              <span className="text-2xl text-white font-bold heading-serif">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Positioning */}
      <SectionContainer bgColor="bg-[#F8FAFC]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle>We Don't Just Invest. We Operate.</SectionTitle>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              The modern landscape requires more than just capital. It requires clarity, execution, and deep sector intimacy. SSFO bridges the gap between passive capital and active building.
            </p>
            <div className="space-y-6">
              {[
                'Direct Operational Engagement',
                'Institutional Frameworks for Scale',
                'Strategic M&A and Capital Structuring',
                'Fractional Leadership Excellence'
              ].map(item => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[#0F172A] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-[#0F172A] rounded-full absolute -bottom-10 -right-10 w-24 h-24 flex items-center justify-center animate-pulse">
                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest text-center">Active<br/>Build</span>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1454165833767-027ffeb996b0?auto=format&fit=crop&w=800&q=80" 
               alt="Meeting" 
               className="rounded shadow-2xl grayscale border-8 border-white"
             />
          </div>
        </div>
      </SectionContainer>

      {/* Portfolio */}
      <SectionContainer id="portfolio">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge>Strategic Holdings</Badge>
            <SectionTitle>Our Core Portfolio</SectionTitle>
            <p className="text-[#64748B] text-lg">A selection of foundational enterprises we support with long-term capital and operational guidance.</p>
          </div>
          <SecondaryButton onClick={() => window.location.hash = '#contact'}>Partner with Us</SecondaryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-100 border border-gray-100 shadow-xl overflow-hidden rounded-lg">
          {PORTFOLIO_DATA.map((company, idx) => (
            <div key={company.name} className="bg-white p-10 hover:bg-[#F8FAFC] transition-all duration-300 group">
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest mb-4 block group-hover:translate-x-1 transition-transform">{company.sector}</span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 heading-serif group-hover:text-[#C5A059] transition-colors">{company.name}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-8">{company.description}</p>
              <div className="w-8 h-[2px] bg-gray-200 group-hover:w-16 group-hover:bg-[#C5A059] transition-all"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-[#0F172A] text-white rounded-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">Venture & Angel Allocation</h4>
            <p className="text-blue-200/60 max-w-xl">In addition to our core holdings, we maintain strategic positions in disruptive technologies including Mercury, Bitnob, and Pyn.</p>
          </div>
          <SecondaryButton className="border-blue-200/30 text-white hover:bg-white hover:text-[#0F172A]">Request Full Deck</SecondaryButton>
        </div>
      </SectionContainer>

      {/* Services */}
      <SectionContainer id="services" bgColor="bg-[#0F172A]">
        <div className="text-center mb-24">
          <Badge>Institutional Advisory</Badge>
          <SectionTitle light centered>The Operational Edge</SectionTitle>
          <p className="text-blue-200/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We deploy executive capabilities typically unavailable to mid-market companies, driving value creation through precision management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {SERVICES_DATA.map((service, i) => (
            <div key={service.title} className="relative group">
              <div className="text-[#C5A059] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 heading-serif">{service.title}</h3>
              <p className="text-blue-100/60 text-sm leading-relaxed">{service.description}</p>
              <div className="absolute -bottom-6 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Thesis Section */}
      <SectionContainer id="thesis" bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle centered>The SSFO Investment Thesis</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border-l-4 border-[#0F172A] bg-[#F8FAFC]">
              <h4 className="text-xl font-bold text-[#0F172A] mb-4">Hard Infrastructure</h4>
              <p className="text-[#64748B] text-sm leading-relaxed">We back businesses that own assets or build the rails for economy-critical activities. We prefer cash-flow generating assets with defensible market positions.</p>
            </div>
            <div className="p-8 border-l-4 border-[#C5A059] bg-[#F8FAFC]">
              <h4 className="text-xl font-bold text-[#0F172A] mb-4">The Talent Arbitrage</h4>
              <p className="text-[#64748B] text-sm leading-relaxed">We invest where our operational bandwidth provides the highest ROI. We look for technical founders who need institutional frameworks to scale into major players.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer bgColor="bg-[#F8FAFC]">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <Badge>Inquiries</Badge>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <p className="text-[#64748B] mb-8">Quick answers to common inquiries regarding our mandates and engagement models.</p>
            <PrimaryButton className="w-full sm:w-auto" onClick={() => window.location.hash = '#contact'}>Still have questions?</PrimaryButton>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200">
              {FAQS_DATA.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact */}
      <SectionContainer id="contact">
        <div className="bg-[#0F172A] text-white p-12 lg:p-24 rounded-lg overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <SectionTitle light className="text-5xl lg:text-6xl mb-8">Partner with Excellence.</SectionTitle>
              <p className="text-blue-100/60 text-xl font-light mb-12">
                We review every serious proposal in Energy, Fintech, and Agribusiness. Start a conversation today.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">Regional Hub</h4>
                  <p className="text-2xl font-bold heading-serif">Abu Dhabi, UAE</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-2">Direct Channel</h4>
                  <p className="text-2xl font-bold heading-serif underline">contact@ssfo.ae</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 text-[#0F172A] rounded shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Submission Received</h3>
                  <p className="text-[#64748B]">Our investment team will review your proposal and respond within 10 business days.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[#C5A059] font-bold hover:underline">New Submission</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2">Full Name</label>
                      <input required className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2">Work Email</label>
                      <input required type="email" className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2">Inquiry Type</label>
                    <select className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all bg-transparent" value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value as InquiryType})}>
                      {Object.values(InquiryType).map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#64748B] mb-2">Project Brief</label>
                    <textarea required rows={3} className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#C5A059] outline-none transition-all resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <PrimaryButton type="submit" className="w-full">Initialize Contact</PrimaryButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center">
                  <span className="text-[#C5A059] font-bold text-xl italic heading-serif">S</span>
                </div>
                <span className="font-bold text-2xl tracking-tighter text-[#0F172A]">SSFO</span>
              </div>
              <p className="text-[#64748B] text-lg leading-relaxed max-w-sm font-light">
                Institutional-grade investment holding and advisory. Backing the infrastructure of real economies.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F172A] mb-6">Explore</h4>
                <ul className="space-y-4 text-sm font-semibold text-[#64748B]">
                  <li><a href="#portfolio" className="hover:text-[#C5A059]">Portfolio</a></li>
                  <li><a href="#services" className="hover:text-[#C5A059]">Services</a></li>
                  <li><a href="#thesis" className="hover:text-[#C5A059]">Thesis</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F172A] mb-6">Sectors</h4>
                <ul className="space-y-4 text-sm font-semibold text-[#64748B]">
                  <li>Energy</li>
                  <li>Fintech</li>
                  <li>Agribusiness</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F172A] mb-6">Legal</h4>
                <ul className="space-y-4 text-sm font-semibold text-[#64748B]">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Disclaimer</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-12 flex flex-col md:row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-bold">
            <p>© 2026 Stella's Son Family Office. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-[#C5A059]">LinkedIn</a>
              <a href="#" className="hover:text-[#C5A059]">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
