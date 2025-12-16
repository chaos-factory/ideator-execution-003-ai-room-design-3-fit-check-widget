'use client';
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/config/site';
import { trackEvent, preserveUTMs } from '@/lib/analytics';
import styles from './PricingSection.module.css';

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const handleToggle = () => {
    setIsAnnual(!isAnnual);
    trackEvent('pricing_toggle_change', { mode: !isAnnual ? 'annual' : 'monthly' });
  };
  
  const plans = [
    {
      id: 'starter',
      ...siteConfig.pricing.starter,
      cta: 'Start free trial',
      ctaVariant: 'secondary' as const,
      popular: false
    },
    {
      id: 'growth',
      ...siteConfig.pricing.growth,
      cta: 'Start free trial',
      ctaVariant: 'primary' as const,
      popular: true
    },
    {
      id: 'scale',
      ...siteConfig.pricing.scale,
      cta: 'Talk to sales',
      ctaVariant: 'secondary' as const,
      popular: false
    }
  ];
  
  const getPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      const annualMonthly = Math.round(monthlyPrice * 0.9);
      return { price: annualMonthly, suffix: '/mo (billed annually)' };
    }
    return { price: monthlyPrice, suffix: '/month' };
  };
  
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Plans that scale with your store</h2>
          <p>14-day free trial. No credit card required for Shopify installs.</p>
        </div>
        
        <div className={styles.toggle}>
          <span className={!isAnnual ? styles.activeLabel : ''}>Monthly</span>
          <button 
            className={styles.toggleSwitch}
            onClick={handleToggle}
            aria-label="Toggle pricing"
          >
            <span className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobActive : ''}`} />
          </button>
          <span className={isAnnual ? styles.activeLabel : ''}>
            Annual
            {isAnnual && <span className={styles.saveBadge}>Save 10%</span>}
          </span>
        </div>
        
        <div className={styles.plansGrid}>
          {plans.map((plan) => {
            const { price, suffix } = getPrice(plan.monthlyPrice);
            return (
              <div 
                key={plan.id} 
                className={`${styles.planCard} ${plan.popular ? styles.popularCard : ''}`}
              >
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className={styles.pricing}>
                  <span className={styles.priceAmount}>${price}</span>
                  <span className={styles.priceSuffix}>{suffix}</span>
                </div>
                <p className={styles.perCheck}>+ ${plan.perCheckPrice.toFixed(2)} per fit check</p>
                
                <Button
                  variant={plan.ctaVariant}
                  href={plan.id === 'scale' ? preserveUTMs(siteConfig.urls.demoBook) : preserveUTMs(siteConfig.urls.shopifyApp)}
                  asLink
                  onClick={() => trackEvent('pricing_plan_click', { plan: plan.id })}
                  style={{width: '100%', marginBottom: '1.5rem'}}
                >
                  {plan.cta}
                </Button>
                
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <p className={styles.finePrint}>
          Overages billed monthly. Nonprofits and multi-tenant agencies: <a href={siteConfig.urls.contact}>contact sales</a>.
        </p>
      </div>
    </section>
  );
};
