'use client';
import React from 'react';
import styles from './Section.module.css';

export const KioskSection: React.FC = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-gray-50)'}}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Make associates your fit experts</h2>
        </div>
        
        <div style={{display: 'grid', gap: '3rem', alignItems: 'center', gridTemplateColumns: '1fr', maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            <div>
              <ul style={{listStyle: 'none', padding: 0, fontSize: '1.125rem'}}>
                <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'flex-start'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>Run Fit-Check on a tablet or counter PC.</div>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'flex-start'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>Scan PDP QR to prefill SKU/dims.</div>
                </li>
                <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'flex-start'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>Print or email the Fit Pass while the shopper is in-store.</div>
                </li>
              </ul>
            </div>
            
            <div style={{background: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)', position: 'relative'}}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--color-accent)',
                color: 'var(--color-navy)',
                padding: '0.25rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                Kiosk mode
              </div>
              <div style={{width: '100%', height: '250px', background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <p style={{textAlign: 'center', fontSize: '1rem', fontWeight: 600, color: 'var(--color-navy)'}}>Upload photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
