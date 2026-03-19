'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="var(--accent)" />
            <path d="M8 8h4v12H8V8zm8 0h4v8h-4V8z" fill="white" />
          </svg>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>
            Policy<span style={{ color: 'var(--accent)' }}>Forge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service-generator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
            Terms of Service
          </Link>
          <Link href="/cookie-policy-generator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
            Cookie Policy
          </Link>
          <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
            Blog
          </Link>
          <Link href="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
            Pricing
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service-generator" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Terms of Service
          </Link>
          <Link href="/cookie-policy-generator" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Cookie Policy
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Blog
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Pricing
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
