import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — PolicyForge',
  description: 'PolicyForge pricing plans. Free privacy policy generation with optional Pro and Business upgrades for advanced features.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and small websites.',
    features: [
      'Unlimited privacy policy generation',
      'Unlimited terms of service generation',
      'GDPR, CCPA, COPPA compliance',
      'Export as Markdown & plain text',
      'Export as HTML',
      'Copy to clipboard',
      'All compliance frameworks',
    ],
    cta: 'Start Generating',
    ctaLink: '/',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'one-time',
    description: 'For professionals who need polished, branded policies.',
    features: [
      'Everything in Free',
      'Export as DOCX (Word)',
      'Remove PolicyForge branding',
      'Save & manage policies',
      'Custom disclaimer text',
      'Priority support',
      'Future updates included',
    ],
    cta: 'Coming Soon',
    ctaLink: '#',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$29',
    period: 'one-time',
    description: 'For agencies and businesses with multiple sites.',
    features: [
      'Everything in Pro',
      'Multi-site policies',
      'Custom clauses builder',
      'White-label export',
      'Bulk generation',
      'API access',
      'Dedicated support',
    ],
    cta: 'Coming Soon',
    ctaLink: '#',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section
        style={{
          padding: '5rem 1.5rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg) 100%)',
        }}
      >
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
          Simple, <span style={{ color: 'var(--accent)' }}>Honest</span> Pricing
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
          Generate unlimited policies for free. Pay once for premium features — no subscriptions, no recurring charges.
        </p>
      </section>

      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: '2rem',
                background: plan.highlighted ? 'var(--bg-secondary)' : 'var(--bg)',
                border: `${plan.highlighted ? '2px' : '1px'} solid ${plan.highlighted ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '16px',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.25rem 1rem',
                  background: 'var(--accent)',
                  borderRadius: '20px',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}>
                  Most Popular
                </div>
              )}

              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                {plan.name}
              </h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>/ {plan.period}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {plan.description}
              </p>

              <Link
                href={plan.ctaLink}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  background: plan.highlighted ? 'var(--accent)' : 'var(--bg-tertiary)',
                  border: plan.highlighted ? 'none' : '1px solid var(--border)',
                  borderRadius: '8px',
                  color: plan.highlighted ? 'white' : 'var(--text)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '1.5rem',
                }}
              >
                {plan.cta}
              </Link>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--success)', fontSize: '0.85rem' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', textAlign: 'center', marginBottom: '2rem' }}>
            Pricing FAQ
          </h2>
          {[
            { q: 'Is the free plan really unlimited?', a: 'Yes! You can generate as many privacy policies and terms of service as you need, completely free. No signup, no limits.' },
            { q: 'Why one-time pricing?', a: 'We believe in honest pricing. You pay once and get access to premium features forever, including all future updates. No surprise charges.' },
            { q: 'Can I upgrade later?', a: 'Absolutely. Start with the free plan and upgrade to Pro or Business whenever you need the additional features.' },
            { q: 'Do you offer refunds?', a: 'Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
              <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.375rem', fontSize: '1rem' }}>{faq.q}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
