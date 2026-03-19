import type { Metadata } from 'next';
import PrivacyWizard from '@/components/PrivacyWizard';

export const metadata: Metadata = {
  title: 'Free Privacy Policy Generator — GDPR & CCPA Compliant | PolicyForge',
  description: 'Generate a professional privacy policy for your website or app in minutes. GDPR, CCPA, COPPA compliant. Free, no signup required. Download as HTML, Markdown, or plain text.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
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
            🔒 100% Free — No Signup Required
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
            Generate a Professional{' '}
            <span style={{ color: 'var(--accent)' }}>Privacy Policy</span>{' '}
            in Minutes
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 1rem',
            }}
          >
            Create a comprehensive, legally-formatted privacy policy for your website, app, or SaaS.
            Compliant with GDPR, CCPA, COPPA, and more.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--success)' }}>✓</span> GDPR Compliant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--success)' }}>✓</span> CCPA Compliant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--success)' }}>✓</span> Client-Side Processing
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--success)' }}>✓</span> Export as HTML/MD/TXT
            </div>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section style={{ padding: '2rem 1.5rem 4rem' }}>
        <PrivacyWizard />
      </section>

      {/* Features */}
      <section
        style={{
          padding: '4rem 1.5rem',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text)',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Why Use PolicyForge?
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem' }}>
            Everything you need to create compliant legal documents for your business.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: '🔒',
                title: 'Privacy First',
                desc: 'All processing happens in your browser. We never see or store your data. Zero tracking, zero cookies.',
              },
              {
                icon: '⚖️',
                title: 'Multi-Regulation Compliance',
                desc: 'Generate policies that comply with GDPR, CCPA/CPRA, COPPA, CalOPPA, PIPEDA, and LGPD.',
              },
              {
                icon: '📋',
                title: 'Thorough Legal Sections',
                desc: 'Every policy includes data collection, third-party disclosures, user rights, security, and more.',
              },
              {
                icon: '💾',
                title: 'Multiple Export Formats',
                desc: 'Download your policy as HTML (ready to deploy), Markdown, or plain text. Copy to clipboard instantly.',
              },
              {
                icon: '🚀',
                title: 'No Signup Required',
                desc: 'Generate unlimited policies instantly. No account, no email, no payment wall for basic generation.',
              },
              {
                icon: '🎨',
                title: 'Professional Formatting',
                desc: 'Clean, well-structured policies with proper headings, sections, and legal language.',
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text)', textAlign: 'center', marginBottom: '2rem' }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: 'Is PolicyForge really free?',
              a: 'Yes! Basic privacy policy and terms of service generation is completely free with no signup required. We offer a Pro plan for advanced features like DOCX export and branding removal.',
            },
            {
              q: 'Are the generated policies legally binding?',
              a: 'The generated policies are comprehensive templates based on standard legal practices. However, they are not a substitute for legal advice. We recommend having a qualified attorney review your policy before publishing.',
            },
            {
              q: 'Do you store my data?',
              a: 'No. All policy generation happens entirely in your browser. We never see, collect, or store any of the information you enter into the wizard.',
            },
            {
              q: 'Which regulations do you support?',
              a: 'PolicyForge supports GDPR (EU), CCPA/CPRA (California), COPPA (children), CalOPPA, PIPEDA (Canada), and LGPD (Brazil). The generated policy automatically includes relevant sections based on your selections.',
            },
            {
              q: 'Can I customize the generated policy?',
              a: 'Yes! After generation, you can copy the policy in Markdown format, edit it in any text editor, and then use it on your website. The HTML export is ready to deploy as-is.',
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <h3 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                {faq.q}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
