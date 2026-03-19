import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy Generator — Free Cookie Consent Policy',
  description: 'Generate a free cookie policy for your website. Covers essential cookies, analytics cookies, marketing cookies, and how users can manage their cookie preferences.',
  alternates: { canonical: '/cookie-policy-generator' },
};

export default function CookiePolicyGeneratorPage() {
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
            🍪 Cookie Compliance Made Easy
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Free <span style={{ color: 'var(--accent)' }}>Cookie Policy</span> Generator
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2rem' }}>
            Generate a comprehensive cookie policy that explains your use of cookies and tracking technologies.
            Required under GDPR&apos;s ePrivacy Directive.
          </p>
          <Link href="/" style={{
            display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
            borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem',
          }}>
            Generate Cookie Policy →
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Understanding Cookie Policies
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A cookie policy is a document that tells your website visitors about the cookies and tracking technologies your site uses. Under the EU&apos;s ePrivacy Directive (often called the &quot;Cookie Law&quot;) and GDPR, you must inform users about cookies and obtain consent before placing non-essential cookies on their devices.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Types of Cookies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              {
                title: '🔧 Essential Cookies',
                desc: 'Required for the website to function. Session management, authentication, security. Cannot be disabled.',
                example: 'Login sessions, shopping cart, CSRF tokens',
              },
              {
                title: '📊 Analytics Cookies',
                desc: 'Help understand how visitors use the website. Collect anonymous statistics about page views and interactions.',
                example: 'Google Analytics, Plausible, Mixpanel',
              },
              {
                title: '⚙️ Functional Cookies',
                desc: 'Remember user preferences like language, theme, and region to provide enhanced functionality.',
                example: 'Language preference, dark mode, region settings',
              },
              {
                title: '📢 Marketing Cookies',
                desc: 'Track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
                example: 'Google Ads, Facebook Pixel, retargeting',
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.25rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{item.desc}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: 0 }}>
                  <strong style={{ color: 'var(--text)' }}>Examples:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
            Cookie Consent Requirements
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { rule: 'Inform users about cookies before they are set', law: 'GDPR / ePrivacy Directive' },
              { rule: 'Obtain explicit consent for non-essential cookies', law: 'GDPR / ePrivacy Directive' },
              { rule: 'Allow users to withdraw consent at any time', law: 'GDPR' },
              { rule: 'Essential cookies can be set without consent', law: 'ePrivacy Directive' },
              { rule: 'Pre-checked consent boxes are not valid', law: 'GDPR (Planet49 ruling)' },
              { rule: 'Cookie consent must be freely given and specific', law: 'GDPR' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '8px', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text)', fontSize: '0.95rem' }}>✓ {item.rule}</span>
                <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 500 }}>{item.law}</span>
              </div>
            ))}
          </div>

          <div style={{
            padding: '1.5rem', background: 'var(--accent-light)',
            border: '1px solid var(--accent)', borderRadius: '12px', marginBottom: '2rem',
          }}>
            <h3 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
              💡 Tip: Use the Privacy Policy Generator
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Our main privacy policy generator includes a comprehensive cookie section when you select &quot;Cookies &amp; Tracking&quot; in the data collection step. The generated policy covers all cookie types and consent requirements.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/" style={{
              display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--accent)',
              borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600,
            }}>
              Generate Your Cookie Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
