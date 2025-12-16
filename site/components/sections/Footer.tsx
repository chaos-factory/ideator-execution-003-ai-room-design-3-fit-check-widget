'use client';
import React from 'react';
import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#fit-pass">Fit Pass</a></li>
              <li><a href="#kiosk">Kiosk mode</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Developers</h4>
            <ul>
              <li><a href={siteConfig.urls.docs}>Docs</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href={siteConfig.urls.status}>Status</a></li>
              <li><a href="#">API Reference</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><a href={siteConfig.urls.caseStudies}>Case studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href={siteConfig.urls.partners}>Partners</a></li>
              <li><a href="#">Press kit</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href={siteConfig.urls.contact}>Contact</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">DPA</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.lower}>
          <div className={styles.statusBar}>
            <span className={styles.statusDot}></span>
            <a href={siteConfig.urls.status}>All systems operational</a>
          </div>
          
          <div className={styles.social}>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          <div className={styles.copyright}>
            <p>© 2025 Fit-Check</p>
          </div>
          
          <div className={styles.badges}>
            <span className={styles.badge}>Shopify App</span>
            <span className={styles.badge}>Stripe Verified</span>
          </div>
        </div>
        
        <div className={styles.microLinks}>
          <a href="#">Accessibility</a>
          <a href="#">Cookies</a>
          <a href="#">Do Not Sell My Info</a>
        </div>
        
        <div className={styles.partnerCallout}>
          <p>
            <strong>Agencies and solution partners:</strong> Earn 15% revenue share. <a href={siteConfig.urls.partners}>Become a partner</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
