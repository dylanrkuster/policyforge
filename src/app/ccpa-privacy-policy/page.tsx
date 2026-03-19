import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CCPA Privacy Policy Generator — California Compliant',
  description: 'Generate a CCPA/CPRA-compliant privacy policy for your website. Includes consumer rights, data sale disclosures, and opt-out provisions required under California law.',
  alternates: { canonical: '/ccpa-privacy-policy' },
};

export default function CCPAPrivacyPolicyPage() {
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
          <div style={{
            display: 'inline-block', padding: '0.375rem 1rem', background: 'var(--accent-light)',
            border: '1px solid var(--accent)', borderRadius: '20px', color: 'var(--accent)',
            fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem',
          }}>
            🌴 California Privacy Compliance
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent)' }}>CCPA/CPRA</span> Privacy Policy Generator
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Create a privacy policy that complies with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
          </p>
          <Link href="/" style={{
            display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
            borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem',
          }}>
            Generate CCPA-Compliant Policy →
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            CCPA/CPRA: What You Need to Know
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), gives California residents specific rights over their personal information. If your business serves California residents and meets certain thresholds, you must comply.
          </p>

          <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>
            Who Must Comply?
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The CCPA applies to for-profit businesses that collect personal information from California residents and meet any of these thresholds:
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Annual gross revenue exceeding $25 million</li>
            <li>Buy, sell, or share personal information of 100,000+ California residents/households annually</li>
            <li>Derive 50% or more of annual revenue from selling/sharing personal information</li>
          </ul>

          <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>
            Required Consumer Rights Under CCPA/CPRA
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Right to Know', desc: 'Consumers can request to know what personal information you collect, use, share, or sell.' },
              { title: 'Right to Delete', desc: 'Consumers can request deletion of personal information you\'ve collected (with some exceptions).' },
              { title: 'Right to Correct', desc: 'Consumers can request correction of inaccurate personal information.' },
              { title: 'Right to Opt-Out', desc: 'Consumers can opt out of the sale or sharing of their personal information.' },
              { title: 'Right to Limit Use of Sensitive Data', desc: 'Consumers can limit how you use sensitive personal information.' },
              { title: 'Right to Non-Discrimination', desc: 'You cannot discriminate against consumers who exercise their CCPA rights.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>
            Penalties for Non-Compliance
          </h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li>Up to $2,500 per unintentional violation</li>
            <li>Up to $7,500 per intentional violation</li>
            <li>Consumers may sue for $100–$750 per incident for data breaches caused by inadequate security</li>
          </ul>

          <div style={{ textAlign: 'center' }}>
            <Link href="/" style={{
              display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
              borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600,
            }}>
              Generate Your CCPA Policy Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
