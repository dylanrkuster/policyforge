'use client';

import { useState, useCallback } from 'react';
import { TosFormData, PROHIBITED_ACTIVITIES } from '@/lib/types';
import { generateTermsOfService } from '@/lib/generate-tos';
import { policyToHtml, policyToPlainText } from '@/lib/generate-privacy-policy';
import PolicyOutput from './PolicyOutput';

const INITIAL_DATA: TosFormData = {
  businessName: '',
  websiteUrl: '',
  businessType: '',
  contactEmail: '',
  country: '',
  effectiveDate: '',
  serviceDescription: '',
  hasUserAccounts: false,
  hasSubscriptions: false,
  hasUserContent: false,
  allowsApiAccess: false,
  prohibitedActivities: [],
  ageRestriction: '13',
  intellectualPropertyOwner: 'company',
  limitLiability: true,
  disputeResolution: 'arbitration',
  governingLaw: '',
  terminationPolicy: 'at-will',
  warrantyDisclaimer: true,
};

const steps = [
  { title: 'Business Info', icon: '🏢' },
  { title: 'Service Details', icon: '⚙️' },
  { title: 'User Conduct', icon: '📜' },
  { title: 'Legal Terms', icon: '⚖️' },
  { title: 'Your ToS', icon: '📄' },
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
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  color: 'var(--text)',
  fontWeight: 500,
  fontSize: '0.9rem',
};

function CheckboxCard({ checked, onChange, label, description }: {
  checked: boolean;
  onChange: () => void;
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
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{checked ? '☑' : '☐'}</span>
      <div>
        <span style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem', display: 'block' }}>{label}</span>
        {description && (
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{description}</span>
        )}
      </div>
    </button>
  );
}

function RadioCard({ checked, onChange, label, description }: {
  checked: boolean;
  onChange: () => void;
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
      <span style={{ fontSize: '1rem', flexShrink: 0, color: checked ? 'var(--accent)' : 'var(--text-secondary)' }}>
        {checked ? '◉' : '○'}
      </span>
      <div>
        <span style={{ color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem', display: 'block' }}>{label}</span>
        {description && (
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{description}</span>
        )}
      </div>
    </button>
  );
}

export default function TosWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<TosFormData>(INITIAL_DATA);
  const [generatedTos, setGeneratedTos] = useState('');

  const updateField = useCallback(<K extends keyof TosFormData>(field: K, value: TosFormData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleProhibited = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      prohibitedActivities: prev.prohibitedActivities.includes(id)
        ? prev.prohibitedActivities.filter(a => a !== id)
        : [...prev.prohibitedActivities, id],
    }));
  }, []);

  const nextStep = () => {
    if (step === 3) {
      const tos = generateTermsOfService(data);
      setGeneratedTos(tos);
    }
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const canProceed = () => {
    if (step === 0) return data.businessName.trim().length > 0;
    return true;
  };

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
              fontWeight: i === step ? 600 : 400,
            }}
          >
            <span>{s.icon}</span>
            <span className="tos-step-label">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Step 1: Business Info */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Business Information
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Basic information about your business for the Terms of Service.
          </p>

          <div>
            <label style={labelStyle}>Business Name *</label>
            <input type="text" placeholder="Acme Inc." value={data.businessName}
              onChange={e => updateField('businessName', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Website URL</label>
            <input type="url" placeholder="https://example.com" value={data.websiteUrl}
              onChange={e => updateField('websiteUrl', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Contact Email</label>
            <input type="email" placeholder="legal@example.com" value={data.contactEmail}
              onChange={e => updateField('contactEmail', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Business Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem' }}>
              {(['website', 'app', 'saas', 'ecommerce'] as const).map(type => (
                <button key={type} type="button" onClick={() => updateField('businessType', type)}
                  style={{
                    padding: '0.75rem', background: data.businessType === type ? 'var(--accent-light)' : 'var(--bg)',
                    border: `1px solid ${data.businessType === type ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: '8px', color: data.businessType === type ? 'var(--accent)' : 'var(--text)',
                    cursor: 'pointer', fontWeight: data.businessType === type ? 600 : 400,
                  }}>
                  {type === 'saas' ? 'SaaS' : type === 'ecommerce' ? 'E-commerce' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Service Details */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Service Details
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Describe your service and its features.
          </p>

          <div>
            <label style={labelStyle}>Service Description</label>
            <textarea
              placeholder="Briefly describe what your service does..."
              value={data.serviceDescription}
              onChange={e => updateField('serviceDescription', e.target.value)}
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={labelStyle}>Service Features</label>
            <CheckboxCard checked={data.hasUserAccounts} onChange={() => updateField('hasUserAccounts', !data.hasUserAccounts)}
              label="User Accounts" description="Users can create accounts on your service" />
            <CheckboxCard checked={data.hasSubscriptions} onChange={() => updateField('hasSubscriptions', !data.hasSubscriptions)}
              label="Paid Subscriptions" description="You charge for your service (one-time or recurring)" />
            <CheckboxCard checked={data.hasUserContent} onChange={() => updateField('hasUserContent', !data.hasUserContent)}
              label="User-Generated Content" description="Users can submit, upload, or post content" />
            <CheckboxCard checked={data.allowsApiAccess} onChange={() => updateField('allowsApiAccess', !data.allowsApiAccess)}
              label="API Access" description="You provide API access for developers" />
          </div>
        </div>
      )}

      {/* Step 3: User Conduct */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            User Conduct & Rules
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Define prohibited activities and rules for your users.
          </p>

          <div>
            <label style={labelStyle}>Prohibited Activities</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {PROHIBITED_ACTIVITIES.map(a => (
                <CheckboxCard key={a.id} checked={data.prohibitedActivities.includes(a.id)}
                  onChange={() => toggleProhibited(a.id)} label={a.label} />
              ))}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Minimum Age Requirement</label>
            <select value={data.ageRestriction} onChange={e => updateField('ageRestriction', e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="none">No age restriction</option>
              <option value="13">13 years old</option>
              <option value="16">16 years old</option>
              <option value="18">18 years old</option>
              <option value="21">21 years old</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Intellectual Property</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <RadioCard checked={data.intellectualPropertyOwner === 'company'}
                onChange={() => updateField('intellectualPropertyOwner', 'company')}
                label="Company owns all content" description="Output and content generated belongs to the company" />
              <RadioCard checked={data.intellectualPropertyOwner === 'user'}
                onChange={() => updateField('intellectualPropertyOwner', 'user')}
                label="Users own their content" description="Users retain full ownership of their content" />
              <RadioCard checked={data.intellectualPropertyOwner === 'shared'}
                onChange={() => updateField('intellectualPropertyOwner', 'shared')}
                label="Shared ownership" description="Users own their content, company owns the platform" />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Legal Terms */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Legal Terms
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Configure liability, disputes, and termination policies.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <CheckboxCard checked={data.limitLiability} onChange={() => updateField('limitLiability', !data.limitLiability)}
              label="Include Limitation of Liability" description="Limits your financial exposure from lawsuits" />
            <CheckboxCard checked={data.warrantyDisclaimer} onChange={() => updateField('warrantyDisclaimer', !data.warrantyDisclaimer)}
              label="Include Warranty Disclaimer" description='Service provided "as is" without warranties' />
          </div>

          <div>
            <label style={labelStyle}>Dispute Resolution</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <RadioCard checked={data.disputeResolution === 'arbitration'}
                onChange={() => updateField('disputeResolution', 'arbitration')}
                label="Binding Arbitration" description="Disputes resolved through private arbitration (most protective)" />
              <RadioCard checked={data.disputeResolution === 'mediation'}
                onChange={() => updateField('disputeResolution', 'mediation')}
                label="Mediation First" description="Attempt mediation before going to court" />
              <RadioCard checked={data.disputeResolution === 'litigation'}
                onChange={() => updateField('disputeResolution', 'litigation')}
                label="Court Litigation" description="Disputes resolved through the court system" />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Governing Law Jurisdiction</label>
            <input type="text" placeholder="State of Delaware, United States" value={data.governingLaw}
              onChange={e => updateField('governingLaw', e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Termination Policy</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <RadioCard checked={data.terminationPolicy === 'at-will'}
                onChange={() => updateField('terminationPolicy', 'at-will')}
                label="At Will" description="Can terminate accounts at any time without notice" />
              <RadioCard checked={data.terminationPolicy === 'with-notice'}
                onChange={() => updateField('terminationPolicy', 'with-notice')}
                label="With Notice" description="30-day notice required before termination" />
              <RadioCard checked={data.terminationPolicy === 'for-cause'}
                onChange={() => updateField('terminationPolicy', 'for-cause')}
                label="For Cause Only" description="Can only terminate for specific violations" />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Output */}
      {step === 4 && generatedTos && (
        <PolicyOutput
          markdown={generatedTos}
          toHtml={policyToHtml}
          toPlainText={policyToPlainText}
          title="Terms of Service"
        />
      )}

      {/* Navigation */}
      {step < 4 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', gap: '1rem' }}>
          {step > 0 ? (
            <button type="button" onClick={prevStep}
              style={{
                padding: '0.75rem 2rem', background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)',
                cursor: 'pointer', fontSize: '0.95rem',
              }}>
              ← Back
            </button>
          ) : <div />}
          <button type="button" onClick={nextStep} disabled={!canProceed()}
            style={{
              padding: '0.75rem 2rem',
              background: canProceed() ? 'var(--accent)' : 'var(--bg-tertiary)',
              border: 'none', borderRadius: '8px',
              color: canProceed() ? 'white' : 'var(--text-secondary)',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
              fontSize: '0.95rem', fontWeight: 600,
            }}>
            {step === 3 ? 'Generate Terms 🚀' : 'Continue →'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .tos-step-label { display: none; }
        }
      `}</style>
    </div>
  );
}
