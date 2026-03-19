import { TosFormData, PROHIBITED_ACTIVITIES } from './types';

function getDate(): string {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getProhibitedLabel(id: string): string {
  return PROHIBITED_ACTIVITIES.find(a => a.id === id)?.label || id;
}

export function generateTermsOfService(data: TosFormData): string {
  const {
    businessName,
    websiteUrl,
    businessType,
    contactEmail,
    effectiveDate: rawDate,
    serviceDescription,
    hasUserAccounts,
    hasSubscriptions,
    hasUserContent,
    allowsApiAccess,
    prohibitedActivities,
    ageRestriction,
    intellectualPropertyOwner,
    limitLiability,
    disputeResolution,
    governingLaw,
    terminationPolicy,
    warrantyDisclaimer,
  } = data;

  const effectiveDate = rawDate || getDate();
  const bName = businessName || '[Your Business Name]';
  const bUrl = websiteUrl || '[Your Website URL]';
  const bEmail = contactEmail || '[your-email@example.com]';
  const bType = businessType || 'website';
  const serviceWord = bType === 'app' ? 'application' : bType === 'saas' ? 'platform' : bType === 'ecommerce' ? 'online store' : 'website';
  const svcDesc = serviceDescription || `the services provided through our ${serviceWord}`;

  let tos = '';
  let section = 1;

  // Header
  tos += `# Terms of Service for ${bName}\n\n`;
  tos += `**Effective Date:** ${effectiveDate}\n\n`;
  tos += `**Last Updated:** ${getDate()}\n\n`;

  // Agreement
  tos += `## ${section}. Agreement to Terms\n\n`;
  tos += `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and ${bName} ("Company," "we," "our," or "us") governing your access to and use of the ${serviceWord} located at ${bUrl} and any related services (collectively, the "Service").\n\n`;
  tos += `By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.\n\n`;
  section++;

  // Description of Service
  tos += `## ${section}. Description of Service\n\n`;
  tos += `${bName} provides ${svcDesc}. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice.\n\n`;
  section++;

  // User Accounts
  if (hasUserAccounts) {
    tos += `## ${section}. User Accounts\n\n`;
    tos += `### ${section}.1 Account Creation\n\n`;
    tos += `To access certain features of the Service, you may be required to create an account. You agree to:\n\n`;
    tos += `- Provide accurate, current, and complete information during registration\n`;
    tos += `- Maintain and promptly update your account information\n`;
    tos += `- Maintain the security and confidentiality of your login credentials\n`;
    tos += `- Accept responsibility for all activities that occur under your account\n`;
    tos += `- Notify us immediately of any unauthorized access or use of your account\n\n`;
    tos += `### ${section}.2 Account Security\n\n`;
    tos += `You are responsible for safeguarding the password used to access the Service. We will not be liable for any loss or damage arising from your failure to maintain the security of your account and password.\n\n`;
    tos += `### ${section}.3 Account Termination\n\n`;
    tos += `We reserve the right to suspend or terminate your account at our discretion, without notice, for conduct that we determine violates these Terms, is harmful to other users, or is otherwise objectionable.\n\n`;
    section++;
  }

  // Subscriptions & Payments
  if (hasSubscriptions) {
    tos += `## ${section}. Payments and Subscriptions\n\n`;
    tos += `### ${section}.1 Billing\n\n`;
    tos += `Certain features of the Service require payment. By subscribing to a paid plan, you agree to pay the applicable fees as described on our pricing page. All fees are exclusive of taxes unless otherwise stated.\n\n`;
    tos += `### ${section}.2 Recurring Charges\n\n`;
    tos += `Subscription fees are billed in advance on a recurring basis (monthly or annually, depending on your plan). Your subscription will automatically renew unless you cancel it before the end of the current billing period.\n\n`;
    tos += `### ${section}.3 Refund Policy\n\n`;
    tos += `Refunds may be issued at our sole discretion. If you are not satisfied with the Service, you may cancel your subscription at any time. No partial refunds will be given for unused portions of a billing period.\n\n`;
    tos += `### ${section}.4 Price Changes\n\n`;
    tos += `We reserve the right to change our prices at any time. Price changes will take effect at the start of your next billing period. We will provide you with reasonable advance notice of any price changes.\n\n`;
    section++;
  }

  // User Content
  if (hasUserContent) {
    tos += `## ${section}. User Content\n\n`;
    tos += `### ${section}.1 Your Content\n\n`;
    tos += `The Service may allow you to post, upload, submit, or otherwise make available content, including but not limited to text, images, data, and other materials ("User Content").\n\n`;
    tos += `You retain ownership of your User Content. By submitting User Content, you grant ${bName} a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display your User Content solely for the purpose of providing and improving the Service.\n\n`;
    tos += `### ${section}.2 Content Responsibility\n\n`;
    tos += `You are solely responsible for your User Content and the consequences of posting it. You represent and warrant that:\n\n`;
    tos += `- You own or have the necessary rights to your User Content\n`;
    tos += `- Your User Content does not violate any third party's rights\n`;
    tos += `- Your User Content complies with these Terms and all applicable laws\n\n`;
    tos += `### ${section}.3 Content Removal\n\n`;
    tos += `We reserve the right, but are not obligated, to review, edit, or remove User Content that violates these Terms or is otherwise objectionable, at our sole discretion and without notice.\n\n`;
    section++;
  }

  // Intellectual Property
  tos += `## ${section}. Intellectual Property\n\n`;
  if (intellectualPropertyOwner === 'company') {
    tos += `### ${section}.1 Company Property\n\n`;
    tos += `The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of ${bName} and its licensors. The Service is protected by copyright, trademark, trade secret, and other intellectual property laws.\n\n`;
    tos += `### ${section}.2 Restrictions\n\n`;
    tos += `You may not:\n\n`;
    tos += `- Copy, modify, or distribute any part of the Service without prior written consent\n`;
    tos += `- Use the Service's name, logo, or branding without prior written consent\n`;
    tos += `- Attempt to decompile, reverse engineer, or disassemble any portion of the Service\n`;
    tos += `- Remove any copyright, trademark, or other proprietary notices\n\n`;
  } else if (intellectualPropertyOwner === 'user') {
    tos += `### ${section}.1 User Ownership\n\n`;
    tos += `All content, data, and output you create using the Service remains your exclusive property. ${bName} claims no ownership over content generated or stored through your use of the Service.\n\n`;
    tos += `### ${section}.2 Service Property\n\n`;
    tos += `The Service itself, including its design, code, features, and branding, remain the exclusive property of ${bName} and its licensors.\n\n`;
  } else {
    tos += `### ${section}.1 Shared Ownership\n\n`;
    tos += `Content you create using the Service remains your property. The Service itself, including its design, code, features, and branding, remain the exclusive property of ${bName}.\n\n`;
    tos += `Both parties retain their respective intellectual property rights. Neither party's use of the Service grants the other any rights in their respective intellectual property.\n\n`;
  }
  section++;

  // API Access
  if (allowsApiAccess) {
    tos += `## ${section}. API Usage\n\n`;
    tos += `If we provide an Application Programming Interface (API) as part of the Service:\n\n`;
    tos += `- You must use the API in compliance with our API documentation and rate limits\n`;
    tos += `- API access may be revoked at any time for violation of these Terms\n`;
    tos += `- You must not use the API to build a competing product or service\n`;
    tos += `- You are responsible for maintaining the security of your API keys\n`;
    tos += `- You agree not to exceed published rate limits or circumvent access controls\n\n`;
    section++;
  }

  // Prohibited Activities
  if (prohibitedActivities.length > 0) {
    tos += `## ${section}. Prohibited Activities\n\n`;
    tos += `You agree not to engage in any of the following prohibited activities:\n\n`;
    prohibitedActivities.forEach(a => {
      tos += `- ${getProhibitedLabel(a)}\n`;
    });
    tos += `\nViolation of these prohibited activities may result in immediate termination of your account and access to the Service, without prior notice or liability.\n\n`;
    section++;
  }

  // Age Restriction
  if (ageRestriction && ageRestriction !== 'none') {
    tos += `## ${section}. Age Requirements\n\n`;
    tos += `You must be at least ${ageRestriction} years of age to use the Service. By using the Service, you represent and warrant that you meet this age requirement. If we discover that a user does not meet the age requirement, we will terminate their account immediately.\n\n`;
    section++;
  }

  // Warranty Disclaimer
  if (warrantyDisclaimer) {
    tos += `## ${section}. Disclaimer of Warranties\n\n`;
    tos += `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. ${bName.toUpperCase()} SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.\n\n`;
    tos += `WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS, OR RELIABILITY OF THE SERVICE.\n\n`;
    section++;
  }

  // Limitation of Liability
  if (limitLiability) {
    tos += `## ${section}. Limitation of Liability\n\n`;
    tos += `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${bName.toUpperCase()}, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:\n\n`;
    tos += `- LOSS OF PROFITS, DATA, USE, OR GOODWILL\n`;
    tos += `- SERVICE INTERRUPTION OR COMPUTER DAMAGE\n`;
    tos += `- COST OF SUBSTITUTE GOODS OR SERVICES\n`;
    tos += `- ANY OTHER INTANGIBLE LOSSES\n\n`;
    tos += `WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n`;
    tos += `OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).\n\n`;
    section++;
  }

  // Indemnification
  tos += `## ${section}. Indemnification\n\n`;
  tos += `You agree to defend, indemnify, and hold harmless ${bName} and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:\n\n`;
  tos += `- Your violation of these Terms\n`;
  tos += `- Your use of the Service\n`;
  tos += `- Your violation of any third-party rights\n`;
  tos += `- Any content you submit through the Service\n\n`;
  section++;

  // Dispute Resolution
  tos += `## ${section}. Dispute Resolution\n\n`;
  if (disputeResolution === 'arbitration') {
    tos += `### Binding Arbitration\n\n`;
    tos += `Any dispute, controversy, or claim arising out of or relating to these Terms or the breach thereof shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in ${governingLaw || '[Your Jurisdiction]'}. The arbitrator's award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.\n\n`;
    tos += `### Class Action Waiver\n\n`;
    tos += `YOU AND ${bName.toUpperCase()} AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.\n\n`;
  } else if (disputeResolution === 'mediation') {
    tos += `### Mediation\n\n`;
    tos += `Any dispute arising from these Terms shall first be submitted to mediation before a mutually agreed-upon mediator in ${governingLaw || '[Your Jurisdiction]'}. If mediation fails to resolve the dispute within 60 days, either party may pursue resolution through the courts.\n\n`;
  } else {
    tos += `### Litigation\n\n`;
    tos += `Any disputes arising from these Terms shall be resolved exclusively in the courts located in ${governingLaw || '[Your Jurisdiction]'}. You consent to the personal jurisdiction and venue of such courts.\n\n`;
  }
  section++;

  // Governing Law
  tos += `## ${section}. Governing Law\n\n`;
  tos += `These Terms shall be governed by and construed in accordance with the laws of ${governingLaw || '[Your Jurisdiction]'}, without regard to its conflict of law provisions.\n\n`;
  section++;

  // Termination
  tos += `## ${section}. Termination\n\n`;
  if (terminationPolicy === 'at-will') {
    tos += `We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.\n\n`;
  } else if (terminationPolicy === 'with-notice') {
    tos += `We may terminate or suspend your access to the Service with 30 days' prior written notice. We may terminate immediately without notice if you materially breach these Terms.\n\n`;
  } else {
    tos += `We may terminate or suspend your access to the Service only for cause, including but not limited to: material breach of these Terms, illegal activity, or non-payment of applicable fees. We will provide reasonable notice before termination when practicable.\n\n`;
  }
  tos += `Upon termination, your right to use the Service will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.\n\n`;
  section++;

  // Severability
  tos += `## ${section}. Severability\n\n`;
  tos += `If any provision of these Terms is held to be unenforceable or invalid, such provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.\n\n`;
  section++;

  // Changes
  tos += `## ${section}. Changes to Terms\n\n`;
  tos += `We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.\n\n`;
  tos += `By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.\n\n`;
  section++;

  // Entire Agreement
  tos += `## ${section}. Entire Agreement\n\n`;
  tos += `These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and ${bName} concerning the Service and supersede all prior agreements and understandings.\n\n`;
  section++;

  // Contact
  tos += `## ${section}. Contact Information\n\n`;
  tos += `If you have any questions about these Terms, please contact us:\n\n`;
  tos += `- **Email:** ${bEmail}\n`;
  tos += `- **Website:** ${bUrl}\n\n`;

  // Disclaimer
  tos += `---\n\n`;
  tos += `*These Terms of Service were generated by [PolicyForge](https://policyforge.vercel.app) on ${getDate()}. This document is provided for informational purposes only and does not constitute legal advice. We strongly recommend having these terms reviewed by a qualified attorney before publishing them on your ${serviceWord}.*\n`;

  return tos;
}
