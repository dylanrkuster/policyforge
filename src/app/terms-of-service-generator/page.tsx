import type { Metadata } from 'next';
import TosWizard from '@/components/TosWizard';

export const metadata: Metadata = {
  title: 'Free Terms of Service Generator — Professional ToS Template',
  description: 'Generate professional terms of service for your website, app, or SaaS. Includes intellectual property, user conduct, liability, and dispute resolution sections. Free, no signup.',
  alternates: { canonical: '/terms-of-service-generator' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section
        style={{
          padding: '4rem 1.5rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg) 100%)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              background: 'var(--accent-light)',
              border: '1px solid var(--accent)',
              borderRadius: '20px',
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: 500,
              marginBottom: '1.5rem',
            }}
          >
            📜 Free Terms of Service Generator
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Generate Professional{' '}
            <span style={{ color: 'var(--accent)' }}>Terms of Service</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Create comprehensive terms and conditions for your business. Covers intellectual property,
            user conduct, liability limitations, and dispute resolution.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem 4rem' }}>
        <TosWizard />
      </section>

      {/* Info Section */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
            What Are Terms of Service?
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Terms of Service (ToS), also known as Terms and Conditions or Terms of Use, are a legal agreement
            between you (the service provider) and your users. They define the rules, restrictions, and expectations
            for using your website, application, or service.
          </p>
          <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem' }}>
            Why You Need Terms of Service
          </h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: '1.5rem' }}>
            <li>Protect your intellectual property and business assets</li>
            <li>Limit your liability in case of disputes</li>
            <li>Define acceptable use policies for your platform</li>
            <li>Establish rules for user-generated content</li>
            <li>Set clear expectations for payment, refunds, and termination</li>
            <li>Comply with consumer protection laws</li>
          </ul>
        </div>
      </section>
    </>
  );
}
