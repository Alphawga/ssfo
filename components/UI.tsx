
import React from 'react';

export const PrimaryButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}> = ({ children, onClick, className = '', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-[#C5A059] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#A68648] transition-all duration-300 shadow-lg shadow-[#C5A059]/20 active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`border border-[#1a365d] text-[#1a365d] px-8 py-4 font-semibold tracking-wide hover:bg-[#1a365d] hover:text-white transition-all duration-300 active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
  light?: boolean;
}> = ({ children, centered, className = '', light = false }) => (
  <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-[#1a365d]'} mb-6 ${centered ? 'text-center' : ''} ${className}`}>
    {children}
  </h2>
);

export const SectionContainer: React.FC<{
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: string;
  noPadding?: boolean;
}> = ({ children, id, className = '', bgColor = 'bg-white', noPadding = false }) => (
  <section id={id} className={`${noPadding ? '' : 'py-24 md:py-32'} px-6 md:px-12 lg:px-24 ${bgColor} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">
    {children}
  </span>
);
