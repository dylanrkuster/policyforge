import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GDPR Compliance Checklist for Websites',
  description: 'A practical, step-by-step GDPR compliance checklist for website owners. Covers data mapping, privacy policies, consent management, data subject rights, and security measures.',
  alternates: { canonical: '/blog/gdpr-compliance-checklist' },
};

function ChecklistItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
            padding: '0.75rem 1rem', background: 'var(--bg-secondary)',
            border: '1px solid var(--border)', borderRadius: '8px',
          }}>
            <span style={{ color: 'var(--accent)', fontSize: '1.1rem', flexShrink: 0 }}>☐</span>
            <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GDPRComplianceChecklist() {
  return (
    <article style={{ padding: '4rem 1.5rem 5rem' }}>
      <div className="prose" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Blog
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>January 10, 2026</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>•</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>10 min read</span>
        </div>

        <h1>GDPR Compliance Checklist for Websites</h1>

        <p>
          The General Data Protection Regulation (GDPR) applies to any website that processes personal data of individuals in the EU/EEA. This practical checklist helps you systematically address every major GDPR requirement for your website.
        </p>

        <div style={{
          padding: '1.25rem', background: 'var(--accent-light)', border: '1px solid var(--accent)',
          borderRadius: '12px', marginBottom: '2rem',
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            <strong style={{ color: 'var(--accent)' }}>💡 Pro Tip:</strong> Use this checklist alongside our{' '}
            <Link href="/" style={{ color: 'var(--accent)' }}>privacy policy generator</Link> to create a GDPR-compliant privacy policy automatically. Select &quot;GDPR&quot; in the compliance step to include all required sections.
          </p>
        </div>

        <h2>1. Data Mapping & Awareness</h2>
        <p>Before you can comply with GDPR, you need to understand what data you process and how.</p>

        <ChecklistItem
          title="Data Inventory"
          items={[
            'Identify all personal data you collect (names, emails, IPs, cookies, etc.)',
            'Document where each type of data is stored (databases, third-party services, backups)',
            'Map data flows: how data moves from collection to storage to deletion',
            'Identify all third parties who receive personal data',
            'Document the legal basis for each processing activity',
            'Determine data retention periods for each data type',
          ]}
        />

        <h2>2. Privacy Policy & Transparency</h2>
        <p>GDPR Articles 13 and 14 require you to provide comprehensive information about your data processing.</p>

        <ChecklistItem
          title="Privacy Policy Requirements"
          items={[
            'Privacy policy is easily accessible from every page (typically in footer)',
            'Includes identity and contact details of the data controller',
            'Lists Data Protection Officer (DPO) contact info (if applicable)',
            'Specifies the legal basis for each processing activity',
            'Describes all types of personal data collected',
            'Explains the purposes of data processing',
            'Lists categories of recipients/third parties',
            'Describes international data transfers and safeguards',
            'Specifies data retention periods',
            'Informs users of all their data subject rights',
            'Explains how to withdraw consent',
            'Provides right to lodge a complaint with supervisory authority',
            'Written in clear, plain language',
            'Available in the user\'s language',
          ]}
        />

        <h2>3. Consent Management</h2>
        <p>Where consent is the legal basis, GDPR has strict requirements for valid consent.</p>

        <ChecklistItem
          title="Consent Requirements"
          items={[
            'Cookie consent banner appears before non-essential cookies are set',
            'Consent is freely given (no pre-ticked checkboxes)',
            'Consent is specific (separate consent for different purposes)',
            'Consent is informed (users know what they\'re agreeing to)',
            'Consent is unambiguous (requires clear affirmative action)',
            'Users can withdraw consent as easily as they gave it',
            'Consent records are maintained (who, when, what, how)',
            'Marketing emails use double opt-in',
            'Consent is not bundled with T&Cs acceptance',
          ]}
        />

        <h2>4. Data Subject Rights</h2>
        <p>GDPR grants individuals extensive rights over their personal data. You must have processes to handle requests.</p>

        <ChecklistItem
          title="Rights Implementation"
          items={[
            'Process for handling Right of Access requests (provide data within 30 days)',
            'Process for Right to Rectification (correct inaccurate data)',
            'Process for Right to Erasure (delete data when requested)',
            'Process for Right to Restrict Processing',
            'Process for Right to Data Portability (export in machine-readable format)',
            'Process for Right to Object (stop processing based on legitimate interests)',
            'Mechanism to verify identity of person making the request',
            'Track and log all data subject requests',
            'Respond to requests within 30 days (with possible 60-day extension)',
            'No fee charged for first request (can charge for excessive/unfounded requests)',
          ]}
        />

        <h2>5. Data Security</h2>
        <p>Article 32 requires &quot;appropriate technical and organizational measures&quot; to ensure security.</p>

        <ChecklistItem
          title="Security Measures"
          items={[
            'HTTPS/TLS encryption on all pages',
            'Data encrypted at rest in databases',
            'Strong password policies for user accounts',
            'Two-factor authentication available (especially for admin access)',
            'Regular security audits and vulnerability assessments',
            'Access controls: employees only access data they need',
            'Employee training on data protection',
            'Incident response plan for data breaches',
            'Regular backups with tested restoration procedures',
            'Secure data deletion procedures when retention period expires',
          ]}
        />

        <h2>6. Data Breach Response</h2>
        <p>Articles 33 and 34 require notification of data breaches within strict timeframes.</p>

        <ChecklistItem
          title="Breach Response"
          items={[
            'Written data breach response plan in place',
            'Process to notify supervisory authority within 72 hours of awareness',
            'Process to notify affected individuals without undue delay (high-risk breaches)',
            'Breach notification includes: nature of breach, likely consequences, measures taken',
            'Maintain a breach register documenting all incidents',
            'Regular testing of breach response procedures',
          ]}
        />

        <h2>7. Third-Party Management</h2>
        <p>When third parties process data on your behalf, you need Data Processing Agreements.</p>

        <ChecklistItem
          title="Third-Party Compliance"
          items={[
            'Data Processing Agreements (DPAs) signed with all processors',
            'DPAs include required GDPR clauses (Article 28)',
            'Third parties assessed for adequate security measures',
            'International transfers covered by appropriate safeguards (SCCs)',
            'Regular review of third-party compliance',
            'List of all sub-processors documented and disclosed',
          ]}
        />

        <h2>8. Special Considerations</h2>

        <ChecklistItem
          title="Additional Requirements"
          items={[
            'Data Protection Impact Assessment (DPIA) for high-risk processing',
            'Data Protection Officer appointed (if required)',
            'Records of Processing Activities (ROPA) maintained',
            'Privacy by Design principles applied to new features/products',
            'Privacy by Default: most privacy-friendly settings used by default',
            'Children\'s data: age verification and parental consent mechanisms (if applicable)',
          ]}
        />

        <h2>Penalties for Non-Compliance</h2>

        <p>GDPR penalties are designed to be dissuasive:</p>

        <ul>
          <li><strong>Tier 1 (Lower):</strong> Up to €10 million or 2% of annual global turnover for technical/organizational failures</li>
          <li><strong>Tier 2 (Higher):</strong> Up to €20 million or 4% of annual global turnover for violating core principles or data subject rights</li>
        </ul>

        <p>
          Recent enforcement actions have shown regulators are willing to impose significant fines. In 2023-2025, Meta received over €2 billion in GDPR fines across multiple decisions. Smaller businesses have also been fined for issues like inadequate privacy policies and improper consent mechanisms.
        </p>

        <h2>Getting Started</h2>

        <p>
          Don&apos;t feel overwhelmed — GDPR compliance is a journey, not a destination. Start with the highest-impact items: create a comprehensive privacy policy, implement cookie consent, and establish processes for data subject requests.
        </p>

        <p>
          Our <Link href="/" style={{ color: 'var(--accent)' }}>free privacy policy generator</Link> automatically creates GDPR-compliant privacy policies that cover legal basis, data subject rights, international transfers, and all other required sections.
        </p>

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
            Generate GDPR-Compliant Privacy Policy →
          </Link>
        </div>
      </div>
    </article>
  );
}
