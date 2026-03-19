'use client';

import { useState, useRef } from 'react';

interface PolicyOutputProps {
  markdown: string;
  toHtml: (md: string) => string;
  toPlainText: (md: string) => string;
  title: string;
}

export default function PolicyOutput({ markdown, toHtml, toPlainText, title }: PolicyOutputProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'markdown' | 'html' | 'text'>('preview');
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const htmlContent = toHtml(markdown);
  const textContent = toPlainText(markdown);

  const getContent = () => {
    switch (viewMode) {
      case 'markdown': return markdown;
      case 'html': return htmlContent;
      case 'text': return textContent;
      default: return markdown;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getContent());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = getContent();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadFile = (format: 'md' | 'html' | 'txt') => {
    let content: string;
    let mimeType: string;
    let ext: string;

    switch (format) {
      case 'html':
        content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 2rem auto; padding: 1rem; line-height: 1.7; color: #333; }
    h1 { font-size: 1.75rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }
    h2 { font-size: 1.35rem; margin-top: 2rem; color: #222; }
    h3 { font-size: 1.15rem; margin-top: 1.5rem; }
    ul { padding-left: 1.5rem; }
    li { margin: 0.25rem 0; }
    strong { color: #111; }
    hr { border: none; border-top: 1px solid #ddd; margin: 2rem 0; }
    a { color: #7c3aed; }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>`;
        mimeType = 'text/html';
        ext = 'html';
        break;
      case 'txt':
        content = textContent;
        mimeType = 'text/plain';
        ext = 'txt';
        break;
      default:
        content = markdown;
        mimeType = 'text/markdown';
        ext = 'md';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderPreview = () => {
    const lines = markdown.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('# ')) return <h1 key={i} style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1.5rem 0 0.75rem', color: 'var(--text)' }}>{line.slice(2)}</h1>;
      if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1.25rem 0 0.5rem', color: 'var(--text)' }}>{line.slice(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 600, margin: '1rem 0 0.5rem', color: 'var(--text)' }}>{line.slice(4)}</h3>;
      if (line.startsWith('---')) return <hr key={i} style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />;
      if (line.startsWith('- ')) {
        const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>');
        return <li key={i} style={{ marginLeft: '1.5rem', margin: '0.25rem 0 0.25rem 1.5rem', lineHeight: 1.6, color: 'var(--text-secondary)', listStyleType: 'disc' }} dangerouslySetInnerHTML={{ __html: content }} />;
      }
      if (line.startsWith('**') && line.includes(':**')) {
        const content = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>');
        return <p key={i} style={{ margin: '0.5rem 0', lineHeight: 1.7, color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: content }} />;
      }
      if (line.startsWith('*') && line.endsWith('*')) {
        const content = line.replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--accent)">$1</a>');
        return <p key={i} style={{ margin: '0.5rem 0', lineHeight: 1.7, color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.85rem' }} dangerouslySetInnerHTML={{ __html: content }} />;
      }
      if (line.trim() === '') return <br key={i} />;
      const content = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--accent)">$1</a>');
      return <p key={i} style={{ margin: '0.5rem 0', lineHeight: 1.7, color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: content }} />;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
          ✅ {title}
        </h2>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(['preview', 'markdown', 'html', 'text'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              style={{
                padding: '0.375rem 0.75rem',
                background: viewMode === mode ? 'var(--accent)' : 'var(--bg-tertiary)',
                border: `1px solid ${viewMode === mode ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: '6px',
                color: viewMode === mode ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                textTransform: 'capitalize',
                fontWeight: viewMode === mode ? 600 : 400,
              }}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2rem',
          maxHeight: '600px',
          overflow: 'auto',
        }}
      >
        {viewMode === 'preview' ? (
          <div>{renderPreview()}</div>
        ) : (
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            {getContent()}
          </pre>
        )}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={copyToClipboard}
          style={{
            padding: '0.75rem 1.5rem',
            background: copied ? 'var(--success)' : 'var(--accent)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
        </button>
        <button
          onClick={() => downloadFile('md')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          📝 Download .md
        </button>
        <button
          onClick={() => downloadFile('html')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          🌐 Download .html
        </button>
        <button
          onClick={() => downloadFile('txt')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          📄 Download .txt
        </button>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
        ⚠️ <strong style={{ color: 'var(--warning)' }}>Disclaimer:</strong> This document is generated for informational purposes only and does not constitute legal advice. We strongly recommend having your policy reviewed by a qualified attorney before publishing it.
      </p>
    </div>
  );
}
