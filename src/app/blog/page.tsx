import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Privacy Policy & Compliance Guides',
  description: 'Expert guides on privacy policies, GDPR compliance, CCPA requirements, and website legal documentation. Stay informed about data protection regulations.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    slug: 'privacy-policy-guide-2026',
    title: 'Complete Privacy Policy Guide for 2026',
    excerpt: 'Everything you need to know about creating a comprehensive privacy policy in 2026. Covers all major regulations, best practices, and common mistakes to avoid.',
    date: 'January 15, 2026',
    readTime: '12 min read',
    tags: ['Privacy Policy', 'Guide', 'GDPR', 'CCPA'],
  },
  {
    slug: 'gdpr-compliance-checklist',
    title: 'GDPR Compliance Checklist for Websites',
    excerpt: 'A practical, step-by-step checklist to ensure your website meets all GDPR requirements. From privacy policies to data processing agreements.',
    date: 'January 10, 2026',
    readTime: '10 min read',
    tags: ['GDPR', 'Compliance', 'Checklist'],
  },
];

export default function BlogPage() {
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
          Privacy & Compliance <span style={{ color: 'var(--accent)' }}>Blog</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
          Expert guides and resources on privacy policies, data protection regulations, and website compliance.
        </p>
      </section>

      <section style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{post.date}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>•</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{post.readTime}</span>
              </div>
              <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                {post.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 1rem', fontSize: '0.95rem' }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'var(--accent-light)',
                      borderRadius: '20px',
                      color: 'var(--accent)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
