'use client';
import React from 'react';
import styles from './Section.module.css';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Add the button',
      description: 'Install via Shopify or drop a script on your PDP. Pass SKU and dimensions via query parameters.'
    },
    {
      num: '2',
      title: 'Shopper uploads a photo',
      description: 'They snap or upload a room image. The hosted flow guides angles and context.'
    },
    {
      num: '3',
      title: 'We validate fit',
      description: 'Spatial analysis outputs PASS/WARN/FAIL with plain-English notes and suggested adjustments.'
    },
    {
      num: '4',
      title: 'Share the Fit Pass',
      description: 'Auto-generate a branded PDF/PNG with SKU, dims, timestamp, and confidence note. Optional email to the shopper.'
    }
  ];
  
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>How it works</h2>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <a href="#interactive-demo" style={{color: 'var(--color-accent)', fontWeight: 600}}>Try it →</a>
        </div>
      </div>
    </section>
  );
};
