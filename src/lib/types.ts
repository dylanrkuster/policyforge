export interface PolicyFormData {
  // Step 1: Business Info
  businessName: string;
  websiteUrl: string;
  businessType: 'website' | 'app' | 'saas' | 'ecommerce' | '';
  contactEmail: string;
  country: string;

  // Step 2: Data Collection
  dataCollected: string[];
  collectFromMinors: boolean;
  dataRetentionPeriod: string;

  // Step 3: Third-Party Services
  thirdPartyServices: string[];
  customThirdParty: string[];

  // Step 4: Compliance
  complianceFrameworks: string[];
  allowOptOut: boolean;
  allowDataDeletion: boolean;
  cookieConsent: boolean;
}

export interface TosFormData {
  // Step 1: Business Info
  businessName: string;
  websiteUrl: string;
  businessType: 'website' | 'app' | 'saas' | 'ecommerce' | '';
  contactEmail: string;
  country: string;
  effectiveDate: string;

  // Step 2: Service Details
  serviceDescription: string;
  hasUserAccounts: boolean;
  hasSubscriptions: boolean;
  hasUserContent: boolean;
  allowsApiAccess: boolean;

  // Step 3: User Conduct
  prohibitedActivities: string[];
  ageRestriction: string;
  intellectualPropertyOwner: 'company' | 'user' | 'shared';

  // Step 4: Legal
  limitLiability: boolean;
  disputeResolution: 'arbitration' | 'litigation' | 'mediation';
  governingLaw: string;
  terminationPolicy: 'at-will' | 'with-notice' | 'for-cause';
  warrantyDisclaimer: boolean;
}

export const DATA_TYPES = [
  { id: 'name', label: 'Full Name', icon: '👤' },
  { id: 'email', label: 'Email Address', icon: '📧' },
  { id: 'phone', label: 'Phone Number', icon: '📱' },
  { id: 'address', label: 'Physical Address', icon: '🏠' },
  { id: 'payment', label: 'Payment Information', icon: '💳' },
  { id: 'ip', label: 'IP Address', icon: '🌐' },
  { id: 'cookies', label: 'Cookies & Tracking', icon: '🍪' },
  { id: 'analytics', label: 'Usage Analytics', icon: '📊' },
  { id: 'location', label: 'Location Data', icon: '📍' },
  { id: 'device', label: 'Device Information', icon: '💻' },
  { id: 'social', label: 'Social Media Profiles', icon: '🔗' },
  { id: 'biometric', label: 'Biometric Data', icon: '🔐' },
  { id: 'health', label: 'Health Information', icon: '🏥' },
  { id: 'dob', label: 'Date of Birth', icon: '🎂' },
] as const;

export const THIRD_PARTY_SERVICES = [
  { id: 'google-analytics', label: 'Google Analytics', category: 'Analytics' },
  { id: 'mixpanel', label: 'Mixpanel', category: 'Analytics' },
  { id: 'hotjar', label: 'Hotjar', category: 'Analytics' },
  { id: 'plausible', label: 'Plausible', category: 'Analytics' },
  { id: 'stripe', label: 'Stripe', category: 'Payments' },
  { id: 'paypal', label: 'PayPal', category: 'Payments' },
  { id: 'lemonsqueezy', label: 'Lemon Squeezy', category: 'Payments' },
  { id: 'google-login', label: 'Google Sign-In', category: 'Authentication' },
  { id: 'facebook-login', label: 'Facebook Login', category: 'Authentication' },
  { id: 'apple-login', label: 'Sign in with Apple', category: 'Authentication' },
  { id: 'github-login', label: 'GitHub Login', category: 'Authentication' },
  { id: 'mailchimp', label: 'Mailchimp', category: 'Email' },
  { id: 'sendgrid', label: 'SendGrid', category: 'Email' },
  { id: 'convertkit', label: 'ConvertKit', category: 'Email' },
  { id: 'resend', label: 'Resend', category: 'Email' },
  { id: 'aws', label: 'Amazon Web Services', category: 'Hosting' },
  { id: 'vercel', label: 'Vercel', category: 'Hosting' },
  { id: 'cloudflare', label: 'Cloudflare', category: 'Hosting' },
  { id: 'intercom', label: 'Intercom', category: 'Support' },
  { id: 'zendesk', label: 'Zendesk', category: 'Support' },
  { id: 'sentry', label: 'Sentry', category: 'Error Tracking' },
  { id: 'google-ads', label: 'Google Ads', category: 'Advertising' },
  { id: 'facebook-pixel', label: 'Facebook Pixel', category: 'Advertising' },
] as const;

export const COMPLIANCE_FRAMEWORKS = [
  { id: 'gdpr', label: 'GDPR', description: 'General Data Protection Regulation (EU/EEA users)', icon: '🇪🇺' },
  { id: 'ccpa', label: 'CCPA/CPRA', description: 'California Consumer Privacy Act (California users)', icon: '🌴' },
  { id: 'coppa', label: 'COPPA', description: 'Children\'s Online Privacy Protection Act (under 13)', icon: '👶' },
  { id: 'caloppa', label: 'CalOPPA', description: 'California Online Privacy Protection Act', icon: '📋' },
  { id: 'pipeda', label: 'PIPEDA', description: 'Personal Information Protection (Canada)', icon: '🇨🇦' },
  { id: 'lgpd', label: 'LGPD', description: 'Lei Geral de Proteção de Dados (Brazil)', icon: '🇧🇷' },
] as const;

export const PROHIBITED_ACTIVITIES = [
  { id: 'spam', label: 'Sending spam or unsolicited messages' },
  { id: 'scraping', label: 'Scraping or automated data collection' },
  { id: 'reverse-engineering', label: 'Reverse engineering the service' },
  { id: 'impersonation', label: 'Impersonating others' },
  { id: 'illegal', label: 'Illegal activities' },
  { id: 'harassment', label: 'Harassment or abusive behavior' },
  { id: 'malware', label: 'Distributing malware or viruses' },
  { id: 'circumvent', label: 'Circumventing security measures' },
  { id: 'resale', label: 'Unauthorized resale of the service' },
  { id: 'competitor', label: 'Competitive analysis or benchmarking' },
] as const;
