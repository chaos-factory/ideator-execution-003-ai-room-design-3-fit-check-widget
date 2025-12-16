'use client';
import React from 'react';
import styles from './Section.module.css';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Turn hesitation into action',
      description: 'Replace "Will it fit?" with a one-tap answer. Shoppers move forward when fit is clear.'
    },
    {
      icon: '📉',
      title: 'Reduce size-related returns',
      description: 'Flag tight squeezes and door-clearance issues before checkout to protect margins.'
    },
    {
      icon: '⚡',
      title: 'Launch fast with hosted flow',
      description: 'Paste a line of code or install our Shopify app. We host the experience and handle updates.'
    },
    {
      icon: '🎨',
      title: 'Branded, multi-tenant',
      description: 'Your logo, colors, and optional white-label domain. Each merchant\'s data is isolated.'
    },
    {
      icon: '🏪',
      title: 'Kiosk-ready for stores',
      description: 'Run Fit-Check at a counter or kiosk for assisted selling.'
    },
    {
      icon: '📄',
      title: 'Fit Pass for customer service',
      description: 'Generate a timestamped PDF/PNG you can attach to orders.'
    }
  ];
  
  return (
    <section className={styles.section} style={{background: 'var(--color-gray-50)'}}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Why Fit-Check</p>
          <h2>Made for local and mid-market furniture retailers—no massive 3D catalog required.</h2>
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
