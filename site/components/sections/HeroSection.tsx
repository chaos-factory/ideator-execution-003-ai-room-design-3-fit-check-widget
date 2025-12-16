'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/config/site';
import { trackEvent, preserveUTMs } from '@/lib/analytics';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Check furniture fit from a photo. Fewer returns. More add-to-carts.
            </h1>
            <p className={styles.subtitle}>
              A drop-in &apos;Check Fit&apos; button for your product pages. Hosted flow, branded Fit Pass, and SMB-friendly pricing.
            </p>
            
            <div className={styles.ctas}>
              <Button
                variant="primary"
                size="large"
                href={preserveUTMs(siteConfig.urls.shopifyApp)}
                asLink
                onClick={() => trackEvent('hero_cta_add_to_shopify_click')}
              >
                Add to Shopify — Free 14-day trial
              </Button>
              <Button
                variant="secondary"
                size="large"
                href="#interactive-demo"
                asLink
                onClick={() => trackEvent('hero_cta_interactive_demo_click')}
              >
                See interactive demo
              </Button>
              <Button
                variant="tertiary"
                size="large"
                href={preserveUTMs(siteConfig.urls.demoBook)}
                asLink
                onClick={() => trackEvent('hero_cta_book_demo_click')}
              >
                Book a demo
              </Button>
            </div>
            
            <div className={styles.trustBand}>
              <div className={styles.trustItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>&lt;120 ms widget load (p95) from CDN</span>
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>≥99.5% availability</span>
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Pennies per fit check</span>
              </div>
            </div>
            
            <p className={styles.microCopy}>
              Works with sofas, sectionals, tables, and more. Minimal integration. Hosted flow.
            </p>
          </div>
          
          <div className={styles.right}>
            <div className={styles.visualComposite}>
              <div className={styles.layer1}>
                <div className={styles.pdpMockup}>
                  <div className={styles.mockupContent}>
                    <div className={styles.productImage}></div>
                    <h3>Modern Sectional Sofa</h3>
                    <p className={styles.price}>$2,499</p>
                    <p className={styles.dims}>84&quot; W × 38&quot; D × 34&quot; H</p>
                    <div className={styles.checkFitButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                      Check Fit
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.layer2}>
                <div className={styles.phoneMockup}>
                  <div className={styles.resultCard}>
                    <div className={styles.passChip}>PASS</div>
                    <p className={styles.resultText}>7 in. clearance on both sides</p>
                    <div className={styles.thumbnail}></div>
                  </div>
                </div>
              </div>
              <div className={styles.layer3}>
                <div className={styles.fitPassPreview}>
                  <div className={styles.fitPassHeader}>Fit Pass</div>
                  <div className={styles.fitPassBadge}>Merchant branding preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
