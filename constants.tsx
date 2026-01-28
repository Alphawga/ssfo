
import React from 'react';
import { PortfolioItem, ServiceItem, FAQItem } from './types';

export const COLORS = {
  primary: '#0F172A', // Deeper navy
  secondary: '#1E293B',
  accent: '#C5A059', // Refined gold
  charcoal: '#334155',
  slateGray: '#64748B',
  offWhite: '#F8FAFC',
};

export const INVESTMENT_CATEGORIES = [
  {
    title: 'Agribusiness & Foodtech',
    description: 'We back businesses across the agricultural value chain—from farm operations and processing to technology-enabled solutions transforming how food is produced and distributed. Our focus is on ventures with real assets, strong cash flows, and the potential to strengthen food systems across emerging markets.'
  },
  {
    title: 'AI',
    description: 'We invest in artificial intelligence companies building practical solutions for enterprise and emerging market challenges. Our interest lies in AI applications that drive efficiency, unlock new capabilities, and create measurable impact across our core sectors.'
  },
  {
    title: 'Alternative Assets',
    description: 'We hold selective positions in non-traditional asset classes including art, vintage cars, and collectibles. These investments offer portfolio diversification and exposure to emerging stores of value beyond conventional markets.'
  },
  {
    title: 'Biotech',
    description: 'We back life sciences ventures developing solutions for healthcare challenges in underserved markets. Our focus is on companies with clear paths to commercialization and the potential to deliver both returns and meaningful health outcomes.'
  },
  {
    title: 'Commodities',
    description: 'We invest in businesses involved in the sourcing, trading, and processing of physical commodities. Our expertise spans soft commodities and industrial inputs, with a focus on established trade flows and operational excellence.'
  },
  {
    title: 'Energy',
    description: 'We have deep experience in oil services, equipment leasing, and industrial gas manufacturing across Africa and beyond. We understand the operational complexity and capital intensity required to build lasting businesses in this sector.'
  },
  {
    title: 'Finance',
    description: 'We back financial services companies building infrastructure for capital formation and deployment. Our interest spans corporate finance platforms, lending businesses, and tools that improve access to capital in growth markets.'
  },
  {
    title: 'Fintech',
    description: 'We invest in the rails that move money—cross-border payments, merchant infrastructure, and lending platforms serving emerging markets. Our portfolio includes companies building foundational financial technology across Africa and the United States.'
  },
  {
    title: 'Hospitality & Real Estate',
    description: 'We hold selective positions in hospitality venues, integrated resorts, and property assets that generate yield and strategic optionality. Our investments focus on locations and developments aligned with broader demographic and economic growth trends.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // Significant Holdings
  { name: 'Davidson Oil Tools LTD', description: 'Snubbing and downhole tools & equipment leasing', sector: 'Significant Holdings · Energy', website: 'https://davidsonoiltools.com' },
  { name: 'Davidson Oil and Gas', description: 'Oil servicing and industrial gas manufacturing', sector: 'Significant Holdings · Energy', website: 'https://davidsonoilandgas.com' },
  { name: 'Cray Finance', description: 'Pan-African payment rails orchestration company serving 13+ countries in Africa. Canadian MSB, IMTO, MFB, PSSP', sector: 'Significant Holdings · Fintech', website: 'https://crayfinance.com' },
  { name: 'FuelGap LLC', description: 'US-based gas station lending platform', sector: 'Significant Holdings · Fintech', website: 'https://fuelgap.com' },
  { name: 'Kyshi', description: 'Merchant of Record infrastructure', sector: 'Significant Holdings · Fintech', website: 'https://kyshi.co' },
  { name: 'Mepe Farms, Ghana', description: 'Integrated farms and eco-resort hospitality', sector: 'Significant Holdings · Agribusiness', website: 'https://mepefarms.com' },
  { name: 'Grey Matter Social Space', description: 'Hospitality venue for technology founders', sector: 'Significant Holdings · Hospitality', website: 'https://www.instagram.com/greymatter.social?igsh=MXFydjM5aGprMTA0NQ==' },
  { name: 'Varsani Interiors', description: 'Real estate holdings', sector: 'Significant Holdings · Real Estate', website: '' },
  { name: 'Blocbanc Inc', description: 'Fintech infrastructure and BaaS', sector: 'Significant Holdings · Fintech', website: '' },
  { name: 'Optimus (By Afrinvest) LTD', description: 'Investment management services', sector: 'Significant Holdings · Finance', website: '' },
  { name: 'ATFA', description: 'Art/collectibles investment and creative technology', sector: 'Significant Holdings · Alternative Assets', website: 'https://athingforart.com' },
  { name: 'SSFO Commodities Trading', description: 'Commodities trading operations', sector: 'Significant Holdings · Commodities', website: '' },

  // Publicly Listed Holdings
  { name: 'Multi-trex PLC', description: "West Africa's largest cocoa processor", sector: 'Publicly Listed · Agribusiness', website: 'https://multitrexplc.com' },
  { name: 'DeapCap (CMFC)', description: 'Publicly traded investment vehicle', sector: 'Publicly Listed · Finance', website: 'https://afx.kwayisi.org/ngx/deapcap.html' },

  // Angel/Venture Holdings
  { name: 'Mercury Bank', description: 'Digital business banking', sector: 'Angel/Venture · Fintech', website: 'https://mercury.com' },
  { name: 'Token Metrics LLC', description: 'Crypto analytics & insights', sector: 'Angel/Venture · Fintech', website: 'https://tokenmetrics.com' },
  { name: 'SEN-Jam Pharmaceuticals', description: 'Biotech research and development', sector: 'Angel/Venture · Biotech', website: '' },
  { name: 'Yummy Future', description: 'Food technology platform', sector: 'Angel/Venture · FoodTech', website: '' },
  { name: 'Eliaz Therapeutics', description: 'Biotech therapeutics', sector: 'Angel/Venture · Biotech', website: '' },
  { name: 'Phor-Med', description: 'Biotech innovation', sector: 'Angel/Venture · Biotech', website: '' },
  { name: 'Novira Therapeutics', description: 'Therapeutics development', sector: 'Angel/Venture · Biotech', website: '' },
  { name: 'Bitnob', description: 'Bitcoin infrastructure', sector: 'Angel/Venture · Fintech', website: 'https://bitnob.com' },
  { name: 'Grey Finance', description: 'International bank accounts and card issuing', sector: 'Angel/Venture · Fintech', website: 'https://grey.co' },
  { name: 'Pyn AI', description: 'AI powered job search platform', sector: 'Angel/Venture · AI', website: 'https://www.joinpyn.com' },
  { name: 'Doorvest', description: 'Real estate investing platform', sector: 'Angel/Venture · Fintech', website: '' },

  // Investment Advisory
  { name: 'VII Ventures', description: 'Middle East-based fund - GP & Senior Advisor. Portfolio: Palantir, DoorDash, SpaceX, Airbnb, Robinhood, Ripple, Plaid, and more', sector: 'Investment Advisory · VC', website: 'https://www.viiventures.co' },
  { name: 'Founders Syndicate', description: 'Angel investment syndicate', sector: 'Investment Advisory · Syndicate', website: 'https://www.foundersyndicate.com' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Fractional CFO',
    description: 'Expert financial leadership including cash flow management, strategic reporting, and fundraising support tailored for scaling entities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bulletPoints: ['Cash Flow Management', 'Financial Reporting', 'Fundraising Support'],
  },
  {
    title: 'Corporate Finance',
    description: 'Bespoke capital structuring and debt advisory, optimizing treasury functions across diverse equity and debt instruments.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bulletPoints: ['Capital Structuring', 'Debt Advisory', 'Treasury Optimization'],
  },
  {
    title: 'M&A Advisory',
    description: 'Full-spectrum buy-side and sell-side support, from target identification and due diligence to complex deal negotiation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    bulletPoints: ['Target Identification', 'Due Diligence', 'Deal Structuring'],
  },
  {
    title: 'Strategy & Growth',
    description: 'Comprehensive market entry strategies and business model refinement leveraging proven clarity-driven frameworks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bulletPoints: ['Market Entry', 'Competitive Positioning', 'Business Model Refinement'],
  },
  {
    title: 'Digital Systems (CDO)',
    description: 'Architecting digital transformation and product strategy to ensure technological infrastructure supports rapid scale.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    bulletPoints: ['Digital Transformation', 'Product Strategy', 'Technology Roadmaps'],
  },
  {
    title: 'Institutional Branding',
    description: 'Crafting sophisticated positioning and growth marketing to build brands that resonate with institutional partners.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167H3.3a1.598 1.598 0 01-1.558-1.812l.39-2.113a1.598 1.598 0 011.558-1.322h1.637l2.147-6.167a1.76 1.76 0 013.417.592zM15.817 3.45a19.09 19.09 0 013.183 1.517 18.914 18.914 0 013.181 2.368 19.145 19.145 0 010 10.61c-1.026 1.556-2.094 3.012-3.181 4.368a19.09 19.09 0 01-3.183 3.517" />
      </svg>
    ),
    bulletPoints: ['Brand Positioning', 'Messaging Strategy', 'Growth Marketing'],
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'What stage companies do you invest in?',
    answer: 'Primarily growth equity—businesses with proven models seeking capital to scale. We\'ll consider earlier stages when sector expertise gives us conviction and we can add operational value immediately.',
  },
  {
    question: 'What\'s your typical check size?',
    answer: 'Varies by opportunity and structure. We\'re flexible on instrument—equity, structured equity, debt, or hybrid. Reach out with specifics and we\'ll tell you quickly if there\'s a fit.',
  },
  {
    question: 'How involved are you post-investment?',
    answer: 'As involved as needed. Some founders want a thought partner on speed dial. Others want capital and space. We calibrate to what drives outcomes.',
  },
  {
    question: 'Do you lead rounds?',
    answer: 'We can lead or co-invest depending on the opportunity. We\'re comfortable setting terms when the fit is right.',
  },
  {
    question: 'What\'s your geographic focus?',
    answer: 'Africa, Middle East, and the United States primarily—but we follow conviction, not borders.',
  },
];
