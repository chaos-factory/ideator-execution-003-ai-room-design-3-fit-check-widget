'use client';

import React from 'react';
import styles from './SocialProofSection.module.css';

export const SocialProofSection: React.FC = () => {
  const logos = ['Retailer A', 'Retailer B', 'Retailer C', 'Retailer D', 'Retailer E'];
  
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logo}>{logo}</div>
          ))}
        </div>
        
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <svg className={styles.quoteIcon} width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20C10 15.5817 13.5817 12 18 12V16C15.7909 16 14 17.7909 14 20H18V28H10V20ZM22 20C22 15.5817 25.5817 12 30 12V16C27.7909 16 26 17.7909 26 20H30V28H22V20Z" fill="currentColor"/>
            </svg>
            <p>
              Before Fit-Check, customers would guess. Now they upload a photo, get a Fit Pass, and buy with confidence. Our add-to-cart rate increased on sectionals.
            </p>
          </div>
          <div className={styles.attribution}>
            <div className={styles.avatar}></div>
            <div>
              <p className={styles.name}>Sarah Mitchell</p>
              <p className={styles.title}>E-commerce Manager, Modern Furniture Co.</p>
              <p className={styles.location}>Portland, OR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
