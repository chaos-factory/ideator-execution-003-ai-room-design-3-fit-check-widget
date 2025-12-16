'use client';
import React from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/config/site';
import { preserveUTMs } from '@/lib/analytics';
import styles from './FinalCTASection.module.css';

export const FinalCTASection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2>Start reducing returns this week</h2>
          <p>Install the widget, turn on a few PDPs, and watch the Fit Passes roll in.</p>
          <div className={styles.ctas}>
            <Button 
              variant="primary" 
              size="large"
              href={preserveUTMs(siteConfig.urls.shopifyApp)}
              asLink
            >
              Add to Shopify — Free 14-day trial
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              href={preserveUTMs(siteConfig.urls.demoBook)}
              asLink
            >
              Book a demo
            </Button>
          </div>
          <div style={{marginTop: '1.5rem'}}>
            <a href="#pricing" className={styles.link}>See pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
};
