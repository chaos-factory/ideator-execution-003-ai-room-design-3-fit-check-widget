'use client';
import React from 'react';
import styles from './Section.module.css';

export const PerformanceSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Performance, privacy, and reliability</h2>
        </div>
        
        <div className={styles.grid} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
          <div className={styles.card}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>⚡</div>
            <h3>Performance</h3>
            <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-slate)', fontSize: '0.9375rem'}}>
              <li style={{marginBottom: '0.5rem'}}>• &lt;120 ms widget load (p95) from CDN</li>
              <li style={{marginBottom: '0.5rem'}}>• Hosted flow isolates heavy compute</li>
              <li style={{marginBottom: '0.5rem'}}>• Minimal impact on PDP Core Web Vitals</li>
            </ul>
          </div>
          
          <div className={styles.card}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🔒</div>
            <h3>Privacy & Security</h3>
            <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-slate)', fontSize: '0.9375rem'}}>
              <li style={{marginBottom: '0.5rem'}}>• Shopper photos retained 72 hours by default</li>
              <li style={{marginBottom: '0.5rem'}}>• DPA template available</li>
              <li style={{marginBottom: '0.5rem'}}>• GDPR/CCPA-friendly settings</li>
              <li style={{marginBottom: '0.5rem'}}>• Per-merchant data isolation</li>
            </ul>
          </div>
          
          <div className={styles.card}>
            <div style={{fontSize: '2rem', marginBottom: '1rem'}}>✓</div>
            <h3>Reliability</h3>
            <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-slate)', fontSize: '0.9375rem'}}>
              <li style={{marginBottom: '0.5rem'}}>• Availability ≥99.5%</li>
              <li style={{marginBottom: '0.5rem'}}>• SLA-lite support with strong per-tenant logs</li>
              <li style={{marginBottom: '0.5rem'}}>• Graceful degradation on issues</li>
            </ul>
          </div>
        </div>
        
        <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-slate)'}}>
          <strong>Micro-footer:</strong> Signed query parameters supported. Audit logging on Scale.
        </p>
      </div>
    </section>
  );
};
