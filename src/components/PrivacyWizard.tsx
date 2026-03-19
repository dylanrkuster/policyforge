'use client';

import { useState, useCallback } from 'react';
import { PolicyFormData, DATA_TYPES, THIRD_PARTY_SERVICES, COMPLIANCE_FRAMEWORKS } from '@/lib/types';
import { generatePrivacyPolicy, policyToHtml, policyToPlainText } from '@/lib/generate-privacy-policy';
import PolicyOutput from './PolicyOutput';

const INITIAL_DATA: PolicyFormData = {
  businessName: '',
  websiteUrl: '',
  businessType: '',
  contactEmail: '',
  country: '',
  dataCollected: [],
  collectFromMinors: false,
  dataRetentionPeriod: '',
  thirdPartyServices: [],
  customThirdParty: [],
  complianceFrameworks: [],
  allowOptOut: true,
  allowDataDeletion: true,
  cookieConsent: true,
};

const steps = [
  { title: 'Business Info', icon: '🏢' },
  { title: 'Data Collection', icon: '📊' },
  { title: 'Third-Party Services', icon: '🔗' },
  { title: 'Compliance', icon: '⚖️' },
  { title: 'Your Policy', icon: '📄' },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  color: 'var(--text)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  color: 'var(--text)',
  fontWeight: 500,
  fontSize: '0.9rem',
};

const checkboxContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: '0.75rem',
};

function CheckboxCard({ checked, onChange, icon, label, description }: {
  checked: boolean;
  onChange: () => void;
  icon?: string;
  label: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: checked ? 'var(--accent-light)' : 'var(--bg)',
        border: `1px solid ${checked ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s',
        width: '100%',
      }}
    >
      <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '0.1rem' }}>{icon || (checked ? '☑' : '☐')}</span>
      <div>
        <span style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem', display: 'block' }}>{label}</span>
        {description && (
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{description}</span>
        )}
      </div>
    </button>
  );
}

export default function PrivacyWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<PolicyFormData>(INITIAL_DATA);
  const [generatedPolicy, setGeneratedPolicy] = useState('');
  const [customService, setCustomService] = useState('');

  const updateField = useCallback(<K extends keyof PolicyFormData>(field: K, value: PolicyFormData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleArrayItem = useCallback((field: 'dataCollected' | 'thirdPartyServices' | 'complianceFrameworks', item: string) => {
    setData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter((i: string) => i !== item)
        : [...prev[field], item],
    }));
  }, []);

  const nextStep = () => {
    if (step === 3) {
      const policy = generatePrivacyPolicy(data);
      setGeneratedPolicy(policy);
    }
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const addCustomService = () => {
    if (customService.trim()) {
      setData(prev => ({
        ...prev,
        customThirdParty: [...prev.customThirdParty, customService.trim()],
      }));
      setCustomService('');
    }
  };

  const canProceed = () => {
    switch (step) {
      case 0: return data.businessName.trim().length > 0;
      case 1: return data.dataCollected.length > 0;
      case 2: return true;
      case 3: return true;
      default: return false;
    }
  };

  const servicesByCategory = THIRD_PARTY_SERVICES.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, typeof THIRD_PARTY_SERVICES[number][]>);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Step indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => i < step ? setStep(i) : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: i === step ? 'var(--accent-light)' : i < step ? 'var(--bg-tertiary)' : 'var(--bg)',
              border: `1px solid ${i === step ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '8px',
              color: i === step ? 'var(--accent)' : i < step ? 'var(--text)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              cursor: i < step ? 'pointer' : 'default',
              transition: 'all 0.2s',
              fontWeight: i === step ? 600 : 400,
            }}
          >
            <span>{s.icon}</span>
            <span className="step-label">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Step 1: Business Info */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Tell us about your business
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            This information will be used to personalize your privacy policy.
          </p>

          <div>
            <label style={labelStyle}>Business Name *</label>
            <input
              type="text"
              placeholder="Acme Inc."
              value={data.businessName}
              onChange={e => updateField('businessName', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Website URL</label>
            <input
              type="url"
              placeholder="https://example.com"
              value={data.websiteUrl}
              onChange={e => updateField('websiteUrl', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Contact Email</label>
            <input
              type="email"
              placeholder="privacy@example.com"
              value={data.contactEmail}
              onChange={e => updateField('contactEmail', e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Business Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem' }}>
              {(['website', 'app', 'saas', 'ecommerce'] as const).map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateField('businessType', type)}
                  style={{
                    padding: '0.75rem',
                    background: data.businessType === type ? 'var(--accent-light)' : 'var(--bg)',
                    border: `1px solid ${data.businessType === type ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: '8px',
                    color: data.businessType === type ? 'var(--accent)' : 'var(--text)',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    fontWeight: data.businessType === type ? 600 : 400,
                    transition: 'all 0.2s',
                  }}
                >
                  {type === 'saas' ? 'SaaS' : type === 'ecommerce' ? 'E-commerce' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Country / Region</label>
            <input
              type="text"
              placeholder="United States"
              value={data.country}
              onChange={e => updateField('country', e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
      )}

      {/* Step 2: Data Collection */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            What data do you collect?
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Select all types of personal data your service collects from users.
          </p>

          <div style={checkboxContainerStyle}>
            {DATA_TYPES.map(d => (
              <CheckboxCard
                key={d.id}
                checked={data.dataCollected.includes(d.id)}
                onChange={() => toggleArrayItem('dataCollected', d.id)}
                icon={d.icon}
                label={d.label}
              />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <CheckboxCard
              checked={data.collectFromMinors}
              onChange={() => updateField('collectFromMinors', !data.collectFromMinors)}
              icon="👶"
              label="We collect data from users under 13"
              description="Triggers COPPA compliance sections"
            />

            <div>
              <label style={labelStyle}>Data Retention Period</label>
              <select
                value={data.dataRetentionPeriod}
                onChange={e => updateField('dataRetentionPeriod', e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="">Select retention period...</option>
                <option value="as long as the account is active">As long as account is active</option>
                <option value="30 days after account deletion">30 days after account deletion</option>
                <option value="90 days after account deletion">90 days after account deletion</option>
                <option value="1 year after last activity">1 year after last activity</option>
                <option value="2 years after last activity">2 years after last activity</option>
                <option value="5 years as required by law">5 years (legal requirement)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Third-Party Services */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Third-party services you use
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Select any third-party services integrated with your product. These will be disclosed in your policy.
          </p>

          {Object.entries(servicesByCategory).map(([cat, services]) => (
            <div key={cat}>
              <h3 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
                {cat}
              </h3>
              <div style={checkboxContainerStyle}>
                {services.map(s => (
                  <CheckboxCard
                    key={s.id}
                    checked={data.thirdPartyServices.includes(s.id)}
                    onChange={() => toggleArrayItem('thirdPartyServices', s.id)}
                    label={s.label}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Custom services */}
          <div>
            <h3 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
              Other Services
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Add a custom service..."
                value={customService}
                onChange={e => setCustomService(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCustomService()}
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={addCustomService}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--accent)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                Add
              </button>
            </div>
            {data.customThirdParty.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                {data.customThirdParty.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.375rem 0.75rem',
                      background: 'var(--accent-light)',
                      border: '1px solid var(--accent)',
                      borderRadius: '20px',
                      color: 'var(--accent)',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => setData(prev => ({
                        ...prev,
                        customThirdParty: prev.customThirdParty.filter((_, idx) => idx !== i),
                      }))}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent)',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '1rem',
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 4: Compliance */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Compliance requirements
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Select the regulations your privacy policy should comply with based on your audience.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {COMPLIANCE_FRAMEWORKS.map(f => (
              <CheckboxCard
                key={f.id}
                checked={data.complianceFrameworks.includes(f.id)}
                onChange={() => toggleArrayItem('complianceFrameworks', f.id)}
                icon={f.icon}
                label={f.label}
                description={f.description}
              />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            <h3 style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', margin: 0 }}>
              User Rights
            </h3>
            <CheckboxCard
              checked={data.allowOptOut}
              onChange={() => updateField('allowOptOut', !data.allowOptOut)}
              label="Allow users to opt out of marketing emails"
            />
            <CheckboxCard
              checked={data.allowDataDeletion}
              onChange={() => updateField('allowDataDeletion', !data.allowDataDeletion)}
              label="Allow users to request data deletion"
            />
            <CheckboxCard
              checked={data.cookieConsent}
              onChange={() => updateField('cookieConsent', !data.cookieConsent)}
              label="Show cookie consent banner"
              description="Recommended for GDPR compliance"
            />
          </div>
        </div>
      )}

      {/* Step 5: Generated Policy */}
      {step === 4 && generatedPolicy && (
        <PolicyOutput
          markdown={generatedPolicy}
          toHtml={policyToHtml}
          toPlainText={policyToPlainText}
          title="Your Privacy Policy"
        />
      )}

      {/* Navigation */}
      {step < 4 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', gap: '1rem' }}>
          {step > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              style={{
                padding: '0.75rem 2rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text)',
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            style={{
              padding: '0.75rem 2rem',
              background: canProceed() ? 'var(--accent)' : 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '8px',
              color: canProceed() ? 'white' : 'var(--text-secondary)',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
              fontSize: '0.95rem',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            {step === 3 ? 'Generate Policy 🚀' : 'Continue →'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .step-label { display: none; }
        }
      `}</style>
    </div>
  );
}
