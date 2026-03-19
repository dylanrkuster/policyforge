import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy Generator — Free & GDPR/CCPA Compliant',
  description: 'Generate a free privacy policy for your website or app. Our privacy policy generator creates comprehensive, GDPR and CCPA compliant policies in minutes. No signup required.',
  alternates: { canonical: '/privacy-policy-generator' },
};

export default function PrivacyPolicyGeneratorPage() {
  return (
    <>
      <section
        style={{
          padding: '5rem 1.5rem 3rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg) 100%)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Free <span style={{ color: 'var(--accent)' }}>Privacy Policy Generator</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Create a professional privacy policy that complies with GDPR, CCPA, COPPA, and other regulations. Our generator creates comprehensive policies tailored to your specific business needs.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'var(--accent)',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            Generate Your Privacy Policy →
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            What Is a Privacy Policy?
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A privacy policy is a legal document that discloses how a website, app, or business collects, uses, stores, and protects personal information from its users. It&apos;s a legal requirement in most jurisdictions worldwide, including under the GDPR (European Union), CCPA (California), PIPEDA (Canada), and LGPD (Brazil).
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Even if you only collect basic information like email addresses or use cookies for analytics, you likely need a privacy policy. Failing to have one can result in fines, legal action, and loss of user trust.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            What Should a Privacy Policy Include?
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { title: 'Information Collection', desc: 'Detail every type of personal data you collect, whether directly from users or automatically through cookies and analytics.' },
              { title: 'How Data Is Used', desc: 'Explain the purposes for collecting data — service delivery, communication, marketing, analytics, etc.' },
              { title: 'Third-Party Sharing', desc: 'Disclose which third-party services receive user data and why (payment processors, analytics tools, email providers).' },
              { title: 'User Rights', desc: 'Inform users of their rights to access, correct, delete, or port their data under applicable regulations.' },
              { title: 'Data Security', desc: 'Describe the security measures you employ to protect personal information (encryption, access controls, etc.).' },
              { title: 'Data Retention', desc: 'Specify how long you keep personal data and the criteria for determining retention periods.' },
              { title: 'Cookie Policy', desc: 'Explain your use of cookies and tracking technologies, types of cookies used, and how users can manage them.' },
              { title: 'Contact Information', desc: 'Provide a way for users to contact you about privacy concerns and exercise their data rights.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.25rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.375rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'var(--accent)',
                borderRadius: '8px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Create Your Free Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
