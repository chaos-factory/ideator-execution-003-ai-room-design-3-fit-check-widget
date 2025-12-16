'use client';
import React from 'react';
import { Accordion } from '../ui/Accordion';
import { trackEvent } from '@/lib/analytics';
import styles from './Section.module.css';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      id: 'how-it-works',
      question: 'How does Fit-Check work?',
      answer: 'We guide shoppers to upload a room photo, analyze scale and clearances, and present PASS/WARN/FAIL results with notes.'
    },
    {
      id: 'slow-pages',
      question: 'Will it slow down my product pages?',
      answer: 'No. The widget loads asynchronously from a CDN with a budget of <120 ms p95. Heavy compute runs in our hosted flow.'
    },
    {
      id: '3d-models',
      question: 'Do I need 3D models?',
      answer: 'No. Fit-Check validates space and clearances from a photo and known product dimensions.'
    },
    {
      id: 'accuracy',
      question: 'How accurate is it?',
      answer: 'Fit-Check is designed for confidence decisions—fit/no-fit with practical clearance guidance. It\'s not a laser measurement tool.'
    },
    {
      id: 'subscription-lapse',
      question: 'What happens if our subscription lapses?',
      answer: 'The button automatically degrades to a \'Learn more\' link until billing is resolved.'
    },
    {
      id: 'branding',
      question: 'Can we brand the experience?',
      answer: 'Yes. Upload your logo, set color accents, and optionally use a white-label domain (Growth+).'
    },
    {
      id: 'photo-storage',
      question: 'Where are photos stored? For how long?',
      answer: 'Securely, with default 72-hour retention. You can request deletion at any time.'
    },
    {
      id: 'in-store',
      question: 'Does it work in store?',
      answer: 'Yes. Kiosk mode is available on Growth and Scale plans.'
    },
    {
      id: 'billing',
      question: 'How do you bill?',
      answer: 'Stripe subscription per store plus metered per-check fees. Tiered per-check rates by plan.'
    },
    {
      id: 'woocommerce',
      question: 'Does it work with WooCommerce?',
      answer: 'Yes. Hosted link + script works today; a Woo plugin is in development. Join the waitlist.'
    },
    {
      id: 'data-export',
      question: 'Can we export data?',
      answer: 'Yes. CSV exports are included; API and webhooks on Scale.'
    },
    {
      id: 'support',
      question: 'What support is included?',
      answer: 'Email support for all plans; priority email for Growth; SLA-lite for Scale.'
    }
  ];
  
  return (
    <section className={styles.section} style={{background: 'var(--color-gray-50)'}}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Frequently asked questions</h2>
        </div>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Accordion 
            items={faqs} 
            onItemOpen={(id) => trackEvent('faq_open', { question_id: id })}
          />
        </div>
      </div>
    </section>
  );
};
