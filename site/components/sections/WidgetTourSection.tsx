'use client';
import React from 'react';
import { Chip } from '../ui/Chip';
import styles from './Section.module.css';

export const WidgetTourSection: React.FC = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-gray-50)'}}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Widget UX tour</h2>
          <p>Fast, non-intrusive, and conversion-focused</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>PDP Button</h3>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: '8px', marginBottom: '1rem'}}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.75rem',
                background: 'var(--color-accent)',
                border: 'none',
                borderRadius: 'var(--radius-button)',
                color: 'var(--color-navy)',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                Check Fit
              </button>
            </div>
            <p style={{fontSize: '0.875rem', color: 'var(--color-slate)'}}>
              <strong>Loads asynchronously.</strong> &lt;120 ms p95 from global CDN.
            </p>
            <p style={{fontSize: '0.875rem', color: 'var(--color-slate)', marginTop: '0.5rem'}}>
              States: default, hover, disabled (on plan lapse, downgrades to 'Learn more' link).
            </p>
          </div>
          
          <div className={styles.card}>
            <h3>Hosted Flow</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600}}>Steps:</p>
              <ol style={{fontSize: '0.875rem', paddingLeft: '1.5rem', color: 'var(--color-slate)'}}>
                <li>Upload photo</li>
                <li>Confirm product dimensions</li>
                <li>View results</li>
              </ol>
            </div>
            <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap'}}>
              <Chip variant="pass">PASS</Chip>
              <Chip variant="warn">WARN</Chip>
              <Chip variant="fail">FAIL</Chip>
            </div>
            <p style={{fontSize: '0.875rem', color: 'var(--color-slate)'}}>
              Results include plain-English notes and recommendations.
            </p>
          </div>
        </div>
        
        <div style={{marginTop: '2rem', padding: '2rem', background: 'var(--color-white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)'}}>
          <h3 style={{marginBottom: '1rem'}}>Fit Pass Preview</h3>
          <div style={{display: 'grid', gap: '0.75rem', fontSize: '0.875rem'}}>
            <div><strong>Fields:</strong> Merchant logo/color, SKU/Product name, Product dimensions, Result (pass/warn/fail), Date/time, Photo thumbnail, Confidence note, Link/QR to re-open.</div>
            <div style={{color: 'var(--color-slate)'}}>
              <strong>Micro-note:</strong> Download PNG/PDF. Add to order notes in Shopify with one click.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
