import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="var(--accent)" />
              <path d="M8 8h4v12H8V8zm8 0h4v8h-4V8z" fill="white" />
            </svg>
            <span style={{ fontWeight: 700, color: 'var(--text)' }}>
              Policy<span style={{ color: 'var(--accent)' }}>Forge</span>
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Generate professional privacy policies and terms of service for your website or app. Free, fast, and compliant.
          </p>
        </div>

        {/* Generators */}
        <div>
          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            Generators
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Privacy Policy Generator
            </Link>
            <Link href="/terms-of-service-generator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Terms of Service Generator
            </Link>
            <Link href="/cookie-policy-generator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Cookie Policy Generator
            </Link>
            <Link href="/gdpr-privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              GDPR Privacy Policy
            </Link>
            <Link href="/ccpa-privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              CCPA Privacy Policy
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            Resources
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Blog
            </Link>
            <Link href="/blog/privacy-policy-guide-2026" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Privacy Policy Guide 2026
            </Link>
            <Link href="/blog/gdpr-compliance-checklist" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              GDPR Compliance Checklist
            </Link>
            <Link href="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Pricing
            </Link>
          </div>
        </div>

        {/* Sister Products */}
        <div>
          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
            Our Other Tools
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="https://jsonbolt.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              JSONBolt — JSON Formatter
            </a>
            <a href="https://snapog-teal.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
              SnapOG — OG Image Generator
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} PolicyForge. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
          Not legal advice. Consult a qualified attorney for compliance.
        </p>
      </div>
    </footer>
  );
}
