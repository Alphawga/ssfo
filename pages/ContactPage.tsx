import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { SectionContainer, SectionTitle, PrimaryButton, Badge } from '../components/UI';
import { InquiryType } from '../types';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}
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
                                <PrimaryButton type="submit" className="w-full py-5 text-sm" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </PrimaryButton>
                                <p className="text-xs text-[#64748B] text-center">Your information stays confidential. We don't share data with third parties.</p>
                            </form>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </motion.div>
    );
};

export default ContactPage;
