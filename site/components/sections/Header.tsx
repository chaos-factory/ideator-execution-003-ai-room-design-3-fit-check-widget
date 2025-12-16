'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/config/site';
import { trackEvent, preserveUTMs } from '@/lib/analytics';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementDismissed, setIsAnnouncementDismissed] = useState(false);

  useEffect(() => {
    // Check if announcement was previously dismissed
    const dismissed = localStorage.getItem('announcement-dismissed');
    if (dismissed) setIsAnnouncementDismissed(true);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismissAnnouncement = () => {
    setIsAnnouncementDismissed(true);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  const handleNavClick = (href: string, event: string) => {
    trackEvent(event as any);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isAnnouncementDismissed && (
        <div className={styles.announcement}>
          <div className={styles.announcementContent}>
            <p>Free 14-day trial. No credit card required for Shopify installs.</p>
            <button
              onClick={dismissAnnouncement}
              className={styles.dismissButton}
              aria-label="Dismiss announcement"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <a href="/" className={styles.logo}>
              Fit-Check
            </a>

            <nav className={styles.desktopNav}>
              <a href="#how-it-works">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#resources" onClick={() => trackEvent('docs_click')}>Resources</a>
              <a href={siteConfig.urls.partners} onClick={() => trackEvent('partners_click')}>Partners</a>
              <a href={siteConfig.urls.contact} onClick={() => trackEvent('contact_click')}>Contact</a>
            </nav>

            <div className={styles.actions}>
              <Button
                variant="tertiary"
                size="small"
                href={siteConfig.urls.signIn}
                asLink
                onClick={() => trackEvent('header_cta_sign_in_click')}
                className={styles.signIn}
              >
                Sign in
              </Button>
              <Button
                variant="secondary"
                size="small"
                href={preserveUTMs(siteConfig.urls.demoBook)}
                asLink
                onClick={() => trackEvent('header_cta_book_demo_click')}
                className={styles.bookDemo}
              >
                Book a demo
              </Button>
              <Button
                variant="primary"
                size="small"
                href={preserveUTMs(siteConfig.urls.shopifyApp)}
                asLink
                onClick={() => trackEvent('header_cta_add_to_shopify_click')}
              >
                Add to Shopify
              </Button>
            </div>

            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <a href="#resources" onClick={() => handleNavClick('#resources', 'docs_click')}>Resources</a>
              <a href={siteConfig.urls.partners} onClick={() => handleNavClick(siteConfig.urls.partners, 'partners_click')}>Partners</a>
              <a href={siteConfig.urls.contact} onClick={() => handleNavClick(siteConfig.urls.contact, 'contact_click')}>Contact</a>
            </nav>
            <div className={styles.mobileActions}>
              <Button
                variant="secondary"
                href={preserveUTMs(siteConfig.urls.demoBook)}
                asLink
                onClick={() => handleNavClick(siteConfig.urls.demoBook, 'header_cta_book_demo_click')}
              >
                Book a demo
              </Button>
              <Button
                variant="primary"
                href={preserveUTMs(siteConfig.urls.shopifyApp)}
                asLink
                onClick={() => handleNavClick(siteConfig.urls.shopifyApp, 'header_cta_add_to_shopify_click')}
              >
                Add to Shopify — Free trial
              </Button>
              <Button
                variant="tertiary"
                href={siteConfig.urls.signIn}
                asLink
                onClick={() => handleNavClick(siteConfig.urls.signIn, 'header_cta_sign_in_click')}
              >
                Sign in
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
