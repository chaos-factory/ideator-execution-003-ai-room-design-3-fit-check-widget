'use client';
import React from 'react';
import { Chip } from '../ui/Chip';
import styles from './Section.module.css';

export const FitPassSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Proof of fit your team can trust</h2>
        </div>
        
        <div style={{display: 'grid', gap: '2rem', gridTemplateColumns: '1fr', maxWidth: '900px', margin: '0 auto'}}>
          <div>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Branded asset</strong> (PDF/PNG) with merchant colors and logo.
                </div>
              </li>
              <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Timestamped and SKU-referenced</strong> for order tracking.
                </div>
              </li>
              <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Optional shopper email delivery</strong> for easy sharing.
                </div>
              </li>
              <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Share-safe:</strong> expiring URL; default retention 72 hours for photos unless extended with consent.
                </div>
              </li>
              <li style={{display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--color-accent)', flexShrink: 0}}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Customer support ready:</strong> attach to order or ticket as evidence.
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-card)', border: '2px solid #E5E7EB'}}>
              <Chip variant="pass">PASS</Chip>
              <p style={{marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-slate)'}}>Great fit variant</p>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-card)', border: '2px solid #E5E7EB'}}>
              <Chip variant="warn">WARN</Chip>
              <p style={{marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-slate)'}}>Tight fit variant</p>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-card)', border: '2px solid #E5E7EB'}}>
              <Chip variant="fail">FAIL</Chip>
              <p style={{marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-slate)'}}>Won't fit variant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
