'use client';
import React from 'react';
import styles from './Section.module.css';

export const DashboardSection: React.FC = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-gray-50)'}}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Know what's working. Optimize your PDPs.</h2>
        </div>
        
        <div style={{background: 'var(--color-white)', borderRadius: 'var(--radius-card)', padding: '2rem', boxShadow: 'var(--shadow-card)', marginBottom: '2rem'}}>
          <div style={{display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: '8px'}}>
              <h4 style={{fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--color-slate)', marginBottom: '0.5rem'}}>Total Checks</h4>
              <p style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0}}>1,247</p>
              <p style={{fontSize: '0.875rem', color: 'var(--color-accent)', margin: 0}}>↑ 23% vs last month</p>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: '8px'}}>
              <h4 style={{fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--color-slate)', marginBottom: '0.5rem'}}>Pass Rate</h4>
              <p style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0}}>68%</p>
              <p style={{fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0}}>832 PASS / 289 WARN / 126 FAIL</p>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--color-gray-50)', borderRadius: '8px'}}>
              <h4 style={{fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--color-slate)', marginBottom: '0.5rem'}}>Top SKU</h4>
              <p style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0.5rem 0'}}>Modern Sectional</p>
              <p style={{fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0}}>287 checks this month</p>
            </div>
          </div>
        </div>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
          <select style={{padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', background: 'var(--color-white)', fontSize: '0.9375rem'}}>
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
          <select style={{padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E5E7EB', background: 'var(--color-white)', fontSize: '0.9375rem'}}>
            <option>All devices</option>
            <option>Desktop</option>
            <option>Mobile</option>
          </select>
          <button style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--color-accent)',
            background: 'var(--color-white)',
            color: 'var(--color-accent)',
            fontSize: '0.9375rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Export CSV
          </button>
        </div>
        
        <p style={{textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-slate)'}}>
          <strong>Note:</strong> Export to CSV. API access available on Scale plan.
        </p>
      </div>
    </section>
  );
};
