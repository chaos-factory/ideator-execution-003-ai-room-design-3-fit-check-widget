'use client';
import React from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import styles from './Section.module.css';

export const DevelopersSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Go live in minutes</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Shopify</h3>
            <p>Install app. Toggle on 'Check Fit' for selected SKUs. No code required.</p>
            <p style={{fontSize: '0.875rem', color: 'var(--color-slate)', marginTop: '0.75rem'}}>
              Pass product dimensions automatically from metafields; override per variant.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Script/SDK</h3>
            <p>Embed a single script on your PDP. We render the button and open a hosted link.</p>
            <p style={{fontSize: '0.875rem', color: 'var(--color-slate)', marginTop: '0.75rem'}}>
              Pass SKU and dimensions via query params; optionally sign params.
            </p>
          </div>
        </div>
        <div style={{marginTop: '2rem', padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-card)'}}>
          <p style={{fontWeight: 600, marginBottom: '0.75rem'}}>Example query parameters:</p>
          <code style={{fontSize: '0.875rem', color: 'var(--color-slate)'}}>
            sku=ABC123, width=84in, depth=38in, height=34in, merchant_id=xxxx, ts=utc_timestamp, sig=signature
          </code>
        </div>
        <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap'}}>
          <Button 
            variant="primary" 
            href={siteConfig.urls.docs}
            asLink
            onClick={() => trackEvent('developer_read_docs_click')}
          >
            Read the docs
          </Button>
          <Button 
            variant="secondary"
            href="#"
            asLink
            onClick={() => trackEvent('developer_view_sample_pdp_click')}
          >
            View sample PDP
          </Button>
        </div>
      </div>
    </section>
  );
};
