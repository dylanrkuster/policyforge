import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PolicyForge — Free Privacy Policy & Terms of Service Generator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#8b5cf6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: 'white',
              fontWeight: 700,
            }}
          >
            PF
          </div>
          <span style={{ fontSize: '42px', fontWeight: 700, color: '#e5e5e5' }}>
            Policy<span style={{ color: '#8b5cf6' }}>Forge</span>
          </span>
        </div>
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#e5e5e5',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Free Privacy Policy &
          <br />
          Terms of Service Generator
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#a3a3a3',
            textAlign: 'center',
          }}
        >
          GDPR • CCPA • COPPA Compliant — No Signup Required
        </div>
      </div>
    ),
    { ...size }
  );
}
