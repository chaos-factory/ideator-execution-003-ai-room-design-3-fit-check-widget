export const siteConfig = {
  name: "Fit-Check",
  description: "A drop-in 'Check Fit' button for your product pages. Hosted flow, branded Fit Pass, and SMB-friendly pricing.",
  
  urls: {
    shopifyApp: process.env.NEXT_PUBLIC_SHOPIFY_APP_URL || "https://apps.shopify.com/fit-check-widget",
    demoBook: process.env.NEXT_PUBLIC_DEMO_BOOK_URL || "https://calendly.com/fit-check/demo",
    docs: process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.fit-check.com",
    caseStudies: process.env.NEXT_PUBLIC_CASE_STUDIES_URL || "https://fit-check.com/case-studies",
    partners: process.env.NEXT_PUBLIC_PARTNERS_URL || "https://fit-check.com/partners",
    contact: process.env.NEXT_PUBLIC_CONTACT_URL || "https://fit-check.com/contact",
    status: process.env.NEXT_PUBLIC_STATUS_URL || "https://status.fit-check.com",
    signIn: process.env.NEXT_PUBLIC_SIGN_IN_URL || "https://app.fit-check.com/sign-in",
  },

  pricing: {
    starter: {
      name: "Starter",
      monthlyPrice: 49,
      perCheckPrice: 0.05,
      features: [
        "1 store",
        "1 brand theme",
        "2 seats",
        "1,000 checks/month soft cap",
        "Hosted flow",
        "Fit Pass",
        "Basic dashboard",
        "Shopify app install",
        "Email support"
      ]
    },
    growth: {
      name: "Growth",
      monthlyPrice: 99,
      perCheckPrice: 0.04,
      features: [
        "3 stores",
        "3 brand themes",
        "5 seats",
        "White-label domain option",
        "CSV export",
        "Kiosk mode",
        "Priority email support"
      ]
    },
    scale: {
      name: "Scale",
      monthlyPrice: 199,
      perCheckPrice: 0.03,
      features: [
        "Unlimited stores",
        "SSO (optional)",
        "Signed query params & API access",
        "Webhook events",
        "Extended retention options",
        "SLA-lite"
      ]
    }
  },

  seo: {
    title: "Fit-Check Widget for Furniture Retailers — Reduce Returns with Photo-Based Fit Validation",
    description: "Add a 'Check Fit' button to your Shopify or WooCommerce product pages. Shoppers upload a photo, we validate fit, and generate a branded Fit Pass. 14-day free trial.",
    ogImage: "/og-image.png"
  }
};
