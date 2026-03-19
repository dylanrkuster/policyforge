import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GDPR Privacy Policy Generator — EU Compliant Privacy Policy',
  description: 'Generate a GDPR-compliant privacy policy for your website or app. Includes all required GDPR sections: legal basis for processing, data subject rights, DPO info, and international transfers.',
  alternates: { canonical: '/gdpr-privacy-policy' },
};

export default function GDPRPrivacyPolicyPage() {
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
            🇪🇺 GDPR Compliance Made Simple
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent)' }}>GDPR</span> Privacy Policy Generator
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Create a privacy policy that fully complies with the EU General Data Protection Regulation. Include all required legal sections automatically.
          </p>
          <Link href="/" style={{
            display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
            borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem',
          }}>
            Generate GDPR-Compliant Policy →
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Understanding GDPR Requirements for Privacy Policies
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The General Data Protection Regulation (GDPR) is the EU&apos;s comprehensive data protection law that took effect on May 25, 2018. It applies to any business that processes personal data of individuals in the European Economic Area (EEA) or United Kingdom — regardless of where your business is located.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Non-compliance can result in fines of up to €20 million or 4% of annual global turnover (whichever is higher). Having a comprehensive, GDPR-compliant privacy policy is a crucial first step in compliance.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            GDPR Privacy Policy Requirements
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                title: '1. Identity & Contact Details of the Controller',
                desc: 'You must clearly identify who is responsible for processing data, including your business name, address, and contact details.',
              },
              {
                title: '2. Legal Basis for Processing',
                desc: 'GDPR requires you to specify the legal basis for each processing activity: consent, contract, legal obligation, vital interests, public task, or legitimate interests.',
              },
              {
                title: '3. Data Subject Rights',
                desc: 'Your policy must inform users of their rights: access, rectification, erasure, restriction, portability, objection, and the right to withdraw consent.',
              },
              {
                title: '4. Purpose of Processing',
                desc: 'Clearly state why you collect each type of data and what you do with it. Be specific — generic descriptions are insufficient under GDPR.',
              },
              {
                title: '5. Data Retention Periods',
                desc: 'Specify how long you retain personal data or the criteria used to determine retention periods.',
              },
              {
                title: '6. International Transfers',
                desc: 'If data is transferred outside the EEA, explain the safeguards in place (Standard Contractual Clauses, adequacy decisions, etc.).',
              },
              {
                title: '7. Third-Party Recipients',
                desc: 'List categories of recipients who receive personal data, including processors and third-party services.',
              },
              {
                title: '8. Right to Lodge a Complaint',
                desc: 'Inform users of their right to file a complaint with a supervisory authority (data protection authority) in their country.',
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.25rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.375rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem', padding: '1.5rem', background: 'var(--accent-light)',
            border: '1px solid var(--accent)', borderRadius: '12px',
          }}>
            <h3 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
              💡 PolicyForge Handles All of This
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              When you select GDPR compliance in our wizard, all required sections are automatically included in your generated policy. Just fill in your business details and we handle the rest.
            </p>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/" style={{
              display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
              borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600,
            }}>
              Generate Your GDPR Policy Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
