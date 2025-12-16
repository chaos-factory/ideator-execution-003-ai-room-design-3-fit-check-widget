'use client';
import React from 'react';
import styles from './Section.module.css';

export const ResultsSection: React.FC = () => {
  const results = [
    { title: '5–10% lift in Add-to-Cart', subtitle: 'on pilot PDPs' },
    { title: 'Fewer size-related returns', subtitle: 'protect your margins' },
    { title: 'Higher shopper confidence', subtitle: 'measured scores' }
  ];
  
  return (
    <section className={styles.section} style={{background: 'var(--color-accent)', color: 'var(--color-navy)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{color: 'var(--color-navy)'}}>What retailers see after launch</h2>
        </div>
        <div style={{display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          {results.map((result, i) => (
            <div key={i} style={{textAlign: 'center'}}>
              <p style={{fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem'}}>{result.title}</p>
              <p style={{fontSize: '1rem', opacity: 0.8}}>{result.subtitle}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', opacity: 0.7}}>
          Results vary by category and PDP traffic.
        </p>
      </div>
    </section>
  );
};
