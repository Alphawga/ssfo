import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PrimaryButton } from './UI';

interface NavbarProps {
    currentPage: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
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
                className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home'
                    ? 'top-4 px-4 md:px-8'
                    : 'top-0 px-0'
                    }`}
            >
                <div className={`mx-auto transition-all duration-500 ${isScrolled || currentPage !== 'home'
                    ? 'max-w-5xl glass-nav shadow-xl py-3 px-6 md:px-8 rounded-full'
                    : 'max-w-7xl bg-transparent py-8 px-6 md:px-12'
                    }`}>
                    <div className="flex justify-between items-center">
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

export default Navbar;
