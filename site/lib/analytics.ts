/**
 * Analytics event tracking utility
 */

export type AnalyticsEvent = 
  | 'header_cta_add_to_shopify_click'
  | 'header_cta_book_demo_click'
  | 'header_cta_sign_in_click'
  | 'hero_cta_add_to_shopify_click'
  | 'hero_cta_interactive_demo_click'
  | 'hero_cta_book_demo_click'
  | 'demo_open'
  | 'demo_close'
  | 'demo_view_fit_pass'
  | 'pricing_toggle_change'
  | 'pricing_plan_click'
  | 'docs_click'
  | 'case_study_click'
  | 'partners_click'
  | 'contact_click'
  | 'faq_open'
  | 'developer_read_docs_click'
  | 'developer_view_sample_pdp_click';

export interface AnalyticsEventData {
  event: AnalyticsEvent;
  data?: Record<string, any>;
}

/**
 * Dispatch analytics event
 */
export function trackEvent(event: AnalyticsEvent, data?: Record<string, any>) {
  // Dispatch custom event for analytics platforms to listen
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('fit-check-analytics', {
        detail: { event, data, timestamp: new Date().toISOString() }
      })
    );
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event, data);
    }
  }
}

/**
 * Preserve UTM parameters across link navigation
 */
export function preserveUTMs(url: string): string {
  if (typeof window === 'undefined') return url;
  
  const currentParams = new URLSearchParams(window.location.search);
  const urlObj = new URL(url, window.location.origin);
  
  // List of UTM parameters to preserve
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmParams.forEach(param => {
    const value = currentParams.get(param);
    if (value && !urlObj.searchParams.has(param)) {
      urlObj.searchParams.set(param, value);
    }
  });
  
  return urlObj.toString();
}

/**
 * Get data attributes for analytics tracking
 */
export function getAnalyticsAttributes(event: AnalyticsEvent, data?: Record<string, any>) {
  return {
    'data-analytics-event': event,
    ...(data && { 'data-analytics-data': JSON.stringify(data) })
  };
}
