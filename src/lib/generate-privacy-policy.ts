import { PolicyFormData, DATA_TYPES, THIRD_PARTY_SERVICES, COMPLIANCE_FRAMEWORKS } from './types';

function getDate(): string {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getDataLabel(id: string): string {
  return DATA_TYPES.find(d => d.id === id)?.label || id;
}

function getServiceLabel(id: string): string {
  return THIRD_PARTY_SERVICES.find(s => s.id === id)?.label || id;
}

function getServiceCategory(id: string): string {
  return THIRD_PARTY_SERVICES.find(s => s.id === id)?.category || 'Other';
}

export function generatePrivacyPolicy(data: PolicyFormData): string {
  const {
    businessName,
    websiteUrl,
    businessType,
    contactEmail,
    dataCollected,
    collectFromMinors,
    dataRetentionPeriod,
    thirdPartyServices,
    customThirdParty,
    complianceFrameworks,
    allowOptOut,
    allowDataDeletion,
    cookieConsent,
  } = data;

  const effectiveDate = getDate();
  const bName = businessName || '[Your Business Name]';
  const bUrl = websiteUrl || '[Your Website URL]';
  const bEmail = contactEmail || '[your-email@example.com]';
  const bType = businessType || 'website';

  const serviceWord = bType === 'app' ? 'application' : bType === 'saas' ? 'platform' : bType === 'ecommerce' ? 'online store' : 'website';

  let policy = '';

  // Header
  policy += `# Privacy Policy for ${bName}\n\n`;
  policy += `**Effective Date:** ${effectiveDate}\n\n`;
  policy += `**Last Updated:** ${effectiveDate}\n\n`;

  // Introduction
  policy += `## 1. Introduction\n\n`;
  policy += `Welcome to ${bName} ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our ${serviceWord} at ${bUrl}, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Service").\n\n`;
  policy += `Please read this Privacy Policy carefully. By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Service.\n\n`;

  // Information We Collect
  policy += `## 2. Information We Collect\n\n`;
  policy += `We collect information that you provide directly to us, information we obtain automatically when you use our Service, and information from third-party sources.\n\n`;

  if (dataCollected.length > 0) {
    policy += `### 2.1 Personal Information You Provide\n\n`;
    policy += `We may collect the following types of personal information:\n\n`;
    dataCollected.forEach(d => {
      const label = getDataLabel(d);
      switch (d) {
        case 'name':
          policy += `- **${label}:** We collect your name to personalize your experience and communicate with you.\n`;
          break;
        case 'email':
          policy += `- **${label}:** We collect your email address for account creation, communication, and service-related notifications.\n`;
          break;
        case 'phone':
          policy += `- **${label}:** We collect your phone number for account verification, customer support, and optional two-factor authentication.\n`;
          break;
        case 'address':
          policy += `- **${label}:** We collect your physical address for shipping, billing, or service delivery purposes.\n`;
          break;
        case 'payment':
          policy += `- **${label}:** We collect payment details (credit card numbers, billing addresses) to process transactions. Payment information is encrypted and processed through secure third-party payment processors.\n`;
          break;
        case 'dob':
          policy += `- **${label}:** We collect your date of birth for age verification and personalization purposes.\n`;
          break;
        case 'social':
          policy += `- **${label}:** We may collect information from your social media profiles when you choose to connect them to our Service.\n`;
          break;
        case 'biometric':
          policy += `- **${label}:** We may collect biometric identifiers for authentication or security purposes, with your explicit consent.\n`;
          break;
        case 'health':
          policy += `- **${label}:** We may collect health-related information necessary for providing our services, handled with the highest level of protection.\n`;
          break;
        default:
          policy += `- **${label}**\n`;
      }
    });
    policy += `\n`;
  }

  // Automatically collected
  const autoCollected = dataCollected.filter(d => ['ip', 'cookies', 'analytics', 'location', 'device'].includes(d));
  if (autoCollected.length > 0) {
    policy += `### 2.2 Information Collected Automatically\n\n`;
    policy += `When you access our Service, we may automatically collect certain information, including:\n\n`;
    if (dataCollected.includes('ip')) {
      policy += `- **IP Address:** Your Internet Protocol address is collected for security, analytics, and approximate geolocation purposes.\n`;
    }
    if (dataCollected.includes('device')) {
      policy += `- **Device Information:** We collect information about the device you use to access our Service, including hardware model, operating system, unique device identifiers, and browser type.\n`;
    }
    if (dataCollected.includes('analytics')) {
      policy += `- **Usage Data:** We collect information about how you interact with our Service, including pages visited, time spent, click patterns, and referring URLs.\n`;
    }
    if (dataCollected.includes('cookies')) {
      policy += `- **Cookies and Tracking Technologies:** We use cookies, web beacons, and similar technologies to collect information about your browsing activities. See our Cookie Policy section below for more details.\n`;
    }
    if (dataCollected.includes('location')) {
      policy += `- **Location Data:** We may collect precise or approximate location information from your device, with your permission.\n`;
    }
    policy += `\n`;
  }

  // How We Use Information
  policy += `## 3. How We Use Your Information\n\n`;
  policy += `We use the information we collect for the following purposes:\n\n`;
  policy += `- **Provide and maintain our Service:** To deliver the features and functionality of our ${serviceWord}.\n`;
  policy += `- **Process transactions:** To process payments and fulfill orders or subscriptions.\n`;
  policy += `- **Communicate with you:** To send service-related notices, updates, security alerts, and support messages.\n`;
  policy += `- **Improve our Service:** To analyze usage patterns, diagnose technical issues, and enhance user experience.\n`;
  policy += `- **Personalization:** To tailor content and features to your interests and preferences.\n`;
  policy += `- **Marketing:** To send promotional communications (with your consent where required by law).\n`;
  policy += `- **Security:** To detect, prevent, and address fraud, abuse, and security issues.\n`;
  policy += `- **Legal compliance:** To comply with applicable laws, regulations, and legal processes.\n`;
  policy += `\n`;

  // Legal Basis (GDPR)
  if (complianceFrameworks.includes('gdpr')) {
    policy += `## 4. Legal Basis for Processing (GDPR)\n\n`;
    policy += `If you are located in the European Economic Area (EEA) or United Kingdom (UK), we process your personal data based on the following legal grounds:\n\n`;
    policy += `- **Consent:** You have given clear consent for us to process your personal data for a specific purpose.\n`;
    policy += `- **Contract:** Processing is necessary for the performance of a contract with you.\n`;
    policy += `- **Legitimate Interests:** Processing is necessary for our legitimate interests, provided those interests are not overridden by your rights.\n`;
    policy += `- **Legal Obligation:** Processing is necessary to comply with a legal obligation.\n\n`;
  }

  // Third-Party Services
  const sectionNum = complianceFrameworks.includes('gdpr') ? 5 : 4;
  if (thirdPartyServices.length > 0 || customThirdParty.length > 0) {
    policy += `## ${sectionNum}. Third-Party Service Providers\n\n`;
    policy += `We may share your information with the following third-party service providers who assist us in operating our Service:\n\n`;

    const grouped: Record<string, string[]> = {};
    thirdPartyServices.forEach(s => {
      const cat = getServiceCategory(s);
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(getServiceLabel(s));
    });

    Object.entries(grouped).forEach(([cat, services]) => {
      policy += `### ${cat}\n`;
      services.forEach(s => {
        policy += `- **${s}** — Used for ${cat.toLowerCase()} purposes.\n`;
      });
      policy += `\n`;
    });

    if (customThirdParty.length > 0) {
      policy += `### Other Services\n`;
      customThirdParty.forEach(s => {
        policy += `- **${s}**\n`;
      });
      policy += `\n`;
    }

    policy += `These third-party providers have their own privacy policies and may collect information as described in their respective policies. We encourage you to review their privacy practices.\n\n`;
  }

  // Cookies Section
  if (dataCollected.includes('cookies')) {
    policy += `## ${sectionNum + 1}. Cookies and Tracking Technologies\n\n`;
    policy += `We use cookies and similar tracking technologies to track activity on our Service and hold certain information.\n\n`;
    policy += `### Types of Cookies We Use\n\n`;
    policy += `- **Essential Cookies:** Required for the Service to function properly. These cannot be disabled.\n`;
    policy += `- **Analytics Cookies:** Help us understand how visitors interact with our Service by collecting and reporting information anonymously.\n`;
    policy += `- **Functional Cookies:** Enable enhanced functionality and personalization, such as remembering your preferences.\n`;
    policy += `- **Marketing Cookies:** Used to track visitors across websites to display relevant advertisements.\n\n`;
    if (cookieConsent) {
      policy += `We obtain your consent before placing non-essential cookies on your device. You can manage your cookie preferences at any time through our cookie consent banner or your browser settings.\n\n`;
    }
    policy += `### Managing Cookies\n\n`;
    policy += `Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our Service.\n\n`;
  }

  // Data Retention
  let nextSection = sectionNum + (dataCollected.includes('cookies') ? 2 : 1);
  policy += `## ${nextSection}. Data Retention\n\n`;
  if (dataRetentionPeriod) {
    policy += `We retain your personal information for ${dataRetentionPeriod}, or as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.\n\n`;
  } else {
    policy += `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.\n\n`;
  }
  policy += `When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention procedures and applicable law.\n\n`;

  // Data Sharing
  nextSection++;
  policy += `## ${nextSection}. How We Share Your Information\n\n`;
  policy += `We do not sell your personal information. We may share your information in the following circumstances:\n\n`;
  policy += `- **Service Providers:** With third-party vendors who perform services on our behalf (see Section ${sectionNum} above).\n`;
  policy += `- **Legal Requirements:** If required by law, regulation, legal process, or governmental request.\n`;
  policy += `- **Business Transfers:** In connection with a merger, acquisition, reorganization, or sale of assets.\n`;
  policy += `- **Protection:** To protect the rights, property, or safety of ${bName}, our users, or the public.\n`;
  policy += `- **With Consent:** With your consent or at your direction.\n\n`;

  // Data Security
  nextSection++;
  policy += `## ${nextSection}. Data Security\n\n`;
  policy += `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:\n\n`;
  policy += `- Encryption of data in transit (TLS/SSL) and at rest\n`;
  policy += `- Regular security assessments and vulnerability testing\n`;
  policy += `- Access controls and authentication requirements\n`;
  policy += `- Employee training on data protection practices\n\n`;
  policy += `However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.\n\n`;

  // Your Rights
  nextSection++;
  policy += `## ${nextSection}. Your Rights and Choices\n\n`;

  if (allowOptOut) {
    policy += `### Opt-Out Rights\n`;
    policy += `You have the right to opt out of receiving promotional communications from us. You can exercise this right by:\n`;
    policy += `- Clicking the "unsubscribe" link in any promotional email\n`;
    policy += `- Contacting us at ${bEmail}\n\n`;
  }

  if (allowDataDeletion) {
    policy += `### Data Deletion\n`;
    policy += `You may request deletion of your personal information by contacting us at ${bEmail}. We will process your request within 30 days, subject to any legal obligations requiring us to retain certain information.\n\n`;
  }

  // GDPR Rights
  if (complianceFrameworks.includes('gdpr')) {
    policy += `### Rights Under GDPR (EEA/UK Users)\n\n`;
    policy += `If you are located in the EEA or UK, you have the following rights under the General Data Protection Regulation:\n\n`;
    policy += `- **Right of Access:** You have the right to request copies of your personal data.\n`;
    policy += `- **Right to Rectification:** You have the right to request correction of inaccurate personal data.\n`;
    policy += `- **Right to Erasure:** You have the right to request deletion of your personal data under certain conditions.\n`;
    policy += `- **Right to Restrict Processing:** You have the right to request restriction of processing under certain conditions.\n`;
    policy += `- **Right to Data Portability:** You have the right to receive your data in a structured, machine-readable format.\n`;
    policy += `- **Right to Object:** You have the right to object to processing based on legitimate interests or direct marketing.\n`;
    policy += `- **Right to Withdraw Consent:** Where processing is based on consent, you may withdraw consent at any time.\n\n`;
    policy += `To exercise any of these rights, please contact us at ${bEmail}. We will respond to your request within 30 days. You also have the right to lodge a complaint with your local data protection supervisory authority.\n\n`;
  }

  // CCPA Rights
  if (complianceFrameworks.includes('ccpa')) {
    policy += `### Rights Under CCPA/CPRA (California Residents)\n\n`;
    policy += `If you are a California resident, you have the following rights under the California Consumer Privacy Act and California Privacy Rights Act:\n\n`;
    policy += `- **Right to Know:** You have the right to request information about the categories and specific pieces of personal information we have collected about you.\n`;
    policy += `- **Right to Delete:** You have the right to request deletion of personal information we have collected from you.\n`;
    policy += `- **Right to Correct:** You have the right to request correction of inaccurate personal information.\n`;
    policy += `- **Right to Opt-Out:** You have the right to opt out of the sale or sharing of your personal information. We do not sell your personal information.\n`;
    policy += `- **Right to Non-Discrimination:** We will not discriminate against you for exercising any of your CCPA rights.\n`;
    policy += `- **Right to Limit Use of Sensitive Personal Information:** You may limit the use of sensitive personal information to purposes necessary for providing the Service.\n\n`;
    policy += `To submit a request, contact us at ${bEmail}. We will verify your identity before processing your request and respond within 45 days.\n\n`;
  }

  // COPPA
  if (complianceFrameworks.includes('coppa') || collectFromMinors) {
    nextSection++;
    policy += `## ${nextSection}. Children's Privacy (COPPA)\n\n`;
    policy += `We comply with the Children's Online Privacy Protection Act (COPPA). `;
    if (collectFromMinors) {
      policy += `Our Service may collect information from children under 13 years of age. We obtain verifiable parental consent before collecting, using, or disclosing personal information from children under 13. Parents may review, request deletion of, or refuse further collection of their child's information by contacting us at ${bEmail}.\n\n`;
    } else {
      policy += `Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information promptly. If you believe we have collected information from a child under 13, please contact us at ${bEmail}.\n\n`;
    }
  }

  // CalOPPA
  if (complianceFrameworks.includes('caloppa')) {
    nextSection++;
    policy += `## ${nextSection}. CalOPPA Compliance\n\n`;
    policy += `In accordance with the California Online Privacy Protection Act (CalOPPA), we agree to the following:\n\n`;
    policy += `- Users can visit our ${serviceWord} anonymously.\n`;
    policy += `- Our Privacy Policy link includes the word "Privacy" and can be easily found on our homepage.\n`;
    policy += `- Users will be notified of any Privacy Policy changes on this page.\n`;
    policy += `- Users can change their personal information by logging into their account or by contacting us at ${bEmail}.\n\n`;
    policy += `### Do Not Track Signals\n\n`;
    policy += `We honor Do Not Track (DNT) signals. When DNT is enabled in your browser, we will not track your activity across other websites or services.\n\n`;
  }

  // PIPEDA
  if (complianceFrameworks.includes('pipeda')) {
    nextSection++;
    policy += `## ${nextSection}. PIPEDA Compliance (Canadian Users)\n\n`;
    policy += `For users in Canada, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA). You have the right to:\n\n`;
    policy += `- Access your personal information held by us\n`;
    policy += `- Challenge the accuracy and completeness of your data\n`;
    policy += `- Withdraw consent for the collection, use, or disclosure of your information\n\n`;
    policy += `To exercise these rights, contact our Privacy Officer at ${bEmail}.\n\n`;
  }

  // LGPD
  if (complianceFrameworks.includes('lgpd')) {
    nextSection++;
    policy += `## ${nextSection}. LGPD Compliance (Brazilian Users)\n\n`;
    policy += `For users in Brazil, we comply with the Lei Geral de Proteção de Dados (LGPD). You have the right to:\n\n`;
    policy += `- Confirmation of the existence of processing\n`;
    policy += `- Access to your data\n`;
    policy += `- Correction of incomplete, inaccurate, or outdated data\n`;
    policy += `- Anonymization, blocking, or deletion of unnecessary data\n`;
    policy += `- Data portability\n`;
    policy += `- Information about sharing with third parties\n`;
    policy += `- Revocation of consent\n\n`;
    policy += `To exercise these rights, contact us at ${bEmail}.\n\n`;
  }

  // International Transfers
  nextSection++;
  policy += `## ${nextSection}. International Data Transfers\n\n`;
  policy += `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.\n\n`;
  if (complianceFrameworks.includes('gdpr')) {
    policy += `For transfers of personal data from the EEA/UK, we rely on appropriate safeguards including Standard Contractual Clauses approved by the European Commission, or other legally recognized transfer mechanisms.\n\n`;
  }

  // Changes to Policy
  nextSection++;
  policy += `## ${nextSection}. Changes to This Privacy Policy\n\n`;
  policy += `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For material changes, we will provide additional notice (such as email notification or a prominent notice on our Service).\n\n`;
  policy += `We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the Service after the posting of changes constitutes your acceptance of those changes.\n\n`;

  // Contact
  nextSection++;
  policy += `## ${nextSection}. Contact Us\n\n`;
  policy += `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\n`;
  policy += `- **Email:** ${bEmail}\n`;
  policy += `- **Website:** ${bUrl}\n`;
  if (complianceFrameworks.includes('gdpr')) {
    policy += `\nFor EEA/UK users, you may also contact your local data protection authority if you have concerns about how we process your personal data.\n`;
  }
  policy += `\n`;

  // Disclaimer
  policy += `---\n\n`;
  policy += `*This privacy policy was generated by [PolicyForge](https://policyforge.vercel.app) on ${effectiveDate}. This document is provided for informational purposes only and does not constitute legal advice. We recommend consulting with a qualified attorney to ensure your privacy policy complies with all applicable laws and regulations specific to your business and jurisdiction.*\n`;

  return policy;
}

export function policyToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^---$/gm, '<hr>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo]|<li|<hr)/gm, '<p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][^>]*>)<\/p>/g, '$1');
}

export function policyToPlainText(markdown: string): string {
  return markdown
    .replace(/^#{1,3} /gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/^---$/gm, '—'.repeat(40))
    .replace(/^\- /gm, '• ');
}
