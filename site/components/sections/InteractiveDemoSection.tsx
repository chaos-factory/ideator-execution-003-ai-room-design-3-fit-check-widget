'use client';
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { trackEvent } from '@/lib/analytics';
import styles from './InteractiveDemoSection.module.css';

export const InteractiveDemoSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [demoStep, setDemoStep] = useState<'upload' | 'result' | 'fitpass'>('upload');
  
  const openDemo = () => {
    setIsOpen(true);
    setDemoStep('upload');
    trackEvent('demo_open');
  };
  
  const closeDemo = () => {
    setIsOpen(false);
    trackEvent('demo_close');
  };
  
  const rooms = ['Living Room A', 'Living Room B', 'Dining Room'];
  
  return (
    <section id="interactive-demo" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Try it yourself</h2>
          <p>Experience the Check Fit flow with a sample product</p>
        </div>
        
        <div className={styles.demoCard}>
          <div className={styles.productMockup}>
            <div className={styles.mockupImage}></div>
            <h3>Modern Sectional Sofa</h3>
            <p className={styles.dims}>84" W × 38" D × 34" H • $2,499</p>
            <Button variant="primary" onClick={openDemo} style={{width: '100%'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '0.5rem'}}>
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              Check Fit
            </Button>
          </div>
          <p className={styles.demoNote}>Demo only. For best results, install on your store.</p>
        </div>
        
        <Modal isOpen={isOpen} onClose={closeDemo}>
          <div className={styles.demoFlow}>
            {demoStep === 'upload' && (
              <div className={styles.flowStep}>
                <h3>Upload a room photo</h3>
                <p>Choose a sample room or upload your own</p>
                <div className={styles.roomChoices}>
                  {rooms.map((room, i) => (
                    <button 
                      key={i} 
                      className={styles.roomChoice}
                      onClick={() => setDemoStep('result')}
                    >
                      {room}
                    </button>
                  ))}
                </div>
                <div className={styles.uploadBox}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <p>Or upload your own photo</p>
                </div>
              </div>
            )}
            
            {demoStep === 'result' && (
              <div className={styles.flowStep}>
                <div className={styles.resultHeader}>
                  <Chip variant="pass">PASS</Chip>
                  <h3>Great fit!</h3>
                </div>
                <div className={styles.resultDetails}>
                  <p><strong>7 inches clearance on both sides</strong></p>
                  <p>This sectional fits comfortably in your space with adequate walking room.</p>
                  <div className={styles.mockupImage} style={{marginTop: '1rem'}}></div>
                </div>
                <div className={styles.flowActions}>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setDemoStep('fitpass');
                      trackEvent('demo_view_fit_pass');
                    }}
                  >
                    View Fit Pass
                  </Button>
                  <Button variant="secondary" onClick={closeDemo}>
                    Close
                  </Button>
                </div>
              </div>
            )}
            
            {demoStep === 'fitpass' && (
              <div className={styles.flowStep}>
                <h3>Fit Pass Preview</h3>
                <div className={styles.fitPassMockup}>
                  <div className={styles.watermark}>DEMO</div>
                  <div className={styles.fitPassContent}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                      <div><strong>Fit-Check</strong></div>
                      <Chip variant="pass">PASS</Chip>
                    </div>
                    <p><strong>Modern Sectional Sofa</strong></p>
                    <p style={{fontSize: '0.875rem', color: 'var(--color-slate)'}}>SKU: SEC-001</p>
                    <p style={{fontSize: '0.875rem', color: 'var(--color-slate)'}}>84" W × 38" D × 34" H</p>
                    <div className={styles.mockupImage} style={{height: '100px', marginTop: '1rem'}}></div>
                    <p style={{fontSize: '0.875rem', marginTop: '1rem'}}>
                      <strong>Result:</strong> 7 in. clearance on both sides
                    </p>
                    <p style={{fontSize: '0.75rem', color: 'var(--color-slate)'}}>
                      Generated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className={styles.flowActions}>
                  <Button variant="secondary" onClick={closeDemo}>
                    Close Demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};
