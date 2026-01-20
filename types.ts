import React from 'react';

export interface PortfolioItem {
  name: string;
  description: string;
  sector: string;
  location?: string;
  logoInitial?: string;
  website?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum InquiryType {
  RAISING_CAPITAL = 'Raising Capital',
  PARTNERSHIP = 'Partnership Inquiry',
  PORTFOLIO_SERVICES = 'Portfolio Services',
  PRESS_MEDIA = 'Press & Media',
  OTHER = 'Other'
}