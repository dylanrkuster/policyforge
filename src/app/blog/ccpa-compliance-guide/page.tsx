import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CCPA Compliance Guide: What Every Website Owner Needs to Know',
  description: 'Complete guide to CCPA/CPRA compliance for websites and apps. Learn requirements, consumer rights, penalties, and how to create a compliant privacy policy.',
  keywords: [
    'ccpa compliance',
    'ccpa requirements',
    'ccpa privacy policy',
    'california consumer privacy act',
    'cpra compliance',
    'ccpa guide',
  ],
  alternates: { canonical: '/blog/ccpa-compliance-guide' },
};

export default function CcpaComplianceGuide() {
  return (
    <article style={{ padding: '4rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Blog
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>March 19, 2026</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>•</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>10 min read</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['CCPA', 'CPRA', 'Compliance', 'Privacy'].map(tag => (
            <span key={tag} style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', border: '1px solid var(--accent)' }}>
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text)' }}>
          CCPA Compliance Guide: What Every Website Owner Needs to Know
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA),
          is one of the strictest data privacy laws in the United States. If your website has California visitors,
          you likely need to comply. Here&apos;s everything you need to know.
        </p>

        <nav style={{ padding: '1.5rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Table of Contents</h2>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '1.25rem', color: 'var(--accent)', fontSize: '0.95rem', lineHeight: 2 }}>
            <li><a href="#what-is-ccpa" style={{ color: 'var(--accent)', textDecoration: 'none' }}>What Is the CCPA/CPRA?</a></li>
            <li><a href="#who-must-comply" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Who Must Comply?</a></li>
            <li><a href="#consumer-rights" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Consumer Rights Under CCPA</a></li>
            <li><a href="#privacy-policy-requirements" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy Policy Requirements</a></li>
            <li><a href="#do-not-sell" style={{ color: 'var(--accent)', textDecoration: 'none' }}>The &quot;Do Not Sell&quot; Requirement</a></li>
            <li><a href="#penalties" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Penalties for Non-Compliance</a></li>
            <li><a href="#compliance-checklist" style={{ color: 'var(--accent)', textDecoration: 'none' }}>CCPA Compliance Checklist</a></li>
            <li><a href="#generate" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Generate a CCPA-Compliant Privacy Policy</a></li>
          </ol>
        </nav>

        <section id="what-is-ccpa" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>1. What Is the CCPA/CPRA?</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            The <strong style={{ color: 'var(--text)' }}>California Consumer Privacy Act (CCPA)</strong> took effect on January 1, 2020.
            It was significantly strengthened by the <strong style={{ color: 'var(--text)' }}>California Privacy Rights Act (CPRA)</strong>,
            which took effect on January 1, 2023. Together, they give California residents extensive rights over their personal data.
          </p>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Key facts:
          </p>
          <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
            <li>Applies to <strong style={{ color: 'var(--text)' }}>any business</strong> that collects data from California residents — even if you&apos;re not based in California</li>
            <li>Covers <strong style={{ color: 'var(--text)' }}>personal information</strong> broadly: name, email, IP address, browsing history, purchase history, geolocation, and more</li>
            <li>Enforced by the <strong style={{ color: 'var(--text)' }}>California Privacy Protection Agency (CPPA)</strong> and the California Attorney General</li>
            <li>CPRA expanded the definition of &quot;sensitive personal information&quot; (SSN, financial data, biometrics, precise geolocation)</li>
          </ul>
        </section>

        <section id="who-must-comply" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>2. Who Must Comply?</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            The CCPA applies to for-profit businesses that collect personal information from California residents AND meet <strong style={{ color: 'var(--text)' }}>any one</strong> of these thresholds:
          </p>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
            {[
              { threshold: '$25 million+', desc: 'Annual gross revenue exceeding $25 million' },
              { threshold: '100,000+ consumers', desc: 'Buy, sell, or share personal information of 100,000+ California residents, households, or devices per year' },
              { threshold: '50%+ revenue', desc: 'Derive 50% or more of annual revenue from selling or sharing California residents\' personal information' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1rem', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.25rem' }}>{item.threshold}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', padding: '1rem', borderRadius: '8px', background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
            ⚠️ <strong style={{ color: 'var(--text)' }}>Important:</strong> Even if you don&apos;t meet these thresholds, having a CCPA-compliant privacy policy is still best practice. Many businesses are adopting CCPA standards proactively, and California&apos;s thresholds may lower over time.
          </p>
        </section>

        <section id="consumer-rights" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>3. Consumer Rights Under CCPA/CPRA</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            California residents have these rights regarding their personal information:
          </p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { right: 'Right to Know', desc: 'Request disclosure of what personal information you collect, use, share, and sell.' },
              { right: 'Right to Delete', desc: 'Request deletion of their personal information (with some exceptions).' },
              { right: 'Right to Correct', desc: 'Request correction of inaccurate personal information (added by CPRA).' },
              { right: 'Right to Opt-Out', desc: 'Opt out of the sale or sharing of their personal information.' },
              { right: 'Right to Limit Use', desc: 'Limit the use and disclosure of sensitive personal information (added by CPRA).' },
              { right: 'Right to Non-Discrimination', desc: 'Cannot be penalized for exercising their privacy rights.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600, minWidth: '150px', fontSize: '0.9rem' }}>{item.right}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="privacy-policy-requirements" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>4. Privacy Policy Requirements</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Under CCPA/CPRA, your privacy policy <strong style={{ color: 'var(--text)' }}>must</strong> include:
          </p>
          <ul style={{ lineHeight: 2.2, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
            <li>Categories of personal information collected in the past 12 months</li>
            <li>Sources from which information is collected</li>
            <li>Business or commercial purpose for collecting the information</li>
            <li>Categories of third parties with whom information is shared</li>
            <li>Specific pieces of personal information collected</li>
            <li>Whether you sell or share personal information (and categories if yes)</li>
            <li>How long you retain each category of information</li>
            <li>Instructions for submitting consumer rights requests</li>
            <li>A description of consumer rights under CCPA/CPRA</li>
            <li>Date the privacy policy was last updated</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Your privacy policy must be updated <strong style={{ color: 'var(--text)' }}>at least once every 12 months</strong>.
          </p>
        </section>

        <section id="do-not-sell" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>5. The &quot;Do Not Sell or Share&quot; Requirement</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            If you sell or share personal information, you must provide a clear <strong style={{ color: 'var(--text)' }}>&quot;Do Not Sell or Share My Personal Information&quot;</strong> link on your homepage. &quot;Sharing&quot; under CPRA includes cross-context behavioral advertising — so if you use targeted advertising (Google Ads, Meta Pixel, etc.), this likely applies to you.
          </p>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            You must also honor the <strong style={{ color: 'var(--text)' }}>Global Privacy Control (GPC)</strong> browser signal as a valid opt-out request.
          </p>
        </section>

        <section id="penalties" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>6. Penalties for Non-Compliance</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { amount: '$2,500', desc: 'Per unintentional violation' },
              { amount: '$7,500', desc: 'Per intentional violation or involving minors\' data' },
              { amount: 'No cap', desc: 'Private right of action for data breaches: $100-$750 per consumer per incident, or actual damages' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1rem', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.amount}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Since CPRA, the California Privacy Protection Agency (CPPA) can enforce these penalties <strong style={{ color: 'var(--text)' }}>without a 30-day cure period</strong> — meaning you can be fined without warning.
          </p>
        </section>

        <section id="compliance-checklist" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>7. CCPA Compliance Checklist</h2>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {[
              'Determine if CCPA applies to your business (revenue, data volume, or data sales thresholds)',
              'Audit what personal information you collect, from where, and why',
              'Update your privacy policy with all required CCPA disclosures',
              'Add a "Do Not Sell or Share My Personal Information" link (if applicable)',
              'Implement a process for handling consumer rights requests within 45 days',
              'Honor Global Privacy Control (GPC) browser signals',
              'Verify parental consent mechanisms for minors under 16',
              'Review and update data processing agreements with service providers',
              'Train employees who handle consumer inquiries on CCPA requirements',
              'Implement reasonable security measures to prevent data breaches',
              'Review and update your privacy policy at least annually',
            ].map((item, i) => (
              <label key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                <input type="checkbox" style={{ accentColor: 'var(--accent)', marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section id="generate" style={{ marginBottom: '3rem', padding: '2rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '2px solid var(--accent)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>8. Generate a CCPA-Compliant Privacy Policy</h2>
          <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            PolicyForge automatically includes all required CCPA/CPRA sections when you select California compliance. Our generator covers consumer rights, data categories, third-party disclosures, and opt-out instructions — all formatted and ready to publish.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--accent)', color: '#000', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Generate CCPA Privacy Policy →
            </Link>
            <Link
              href="/ccpa-privacy-policy"
              style={{ display: 'inline-block', padding: '0.75rem 1.5rem', border: '1px solid var(--accent)', color: 'var(--accent)', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Learn More About CCPA
            </Link>
          </div>
        </section>

        <section style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <h3 style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>Related Resources</h3>
          <ul style={{ lineHeight: 2.2, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
            <li><Link href="/blog/privacy-policy-guide-2026" style={{ color: 'var(--accent)' }}>Complete Privacy Policy Guide for 2026</Link></li>
            <li><Link href="/blog/gdpr-compliance-checklist" style={{ color: 'var(--accent)' }}>GDPR Compliance Checklist</Link></li>
            <li><Link href="/gdpr-privacy-policy" style={{ color: 'var(--accent)' }}>GDPR Privacy Policy Guide</Link></li>
            <li><a href="https://jsonbolt.vercel.app" style={{ color: 'var(--accent)' }}>JSONBolt — Free JSON Tools for Developers</a></li>
          </ul>
        </section>
      </div>
    </article>
  );
}
