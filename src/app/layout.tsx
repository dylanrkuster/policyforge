import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://policyforge-blond.vercel.app"),
  title: {
    default: "PolicyForge — Free Privacy Policy & Terms of Service Generator",
    template: "%s | PolicyForge",
  },
  description:
    "Generate professional privacy policies, terms of service, and cookie policies for your website or app. Free, GDPR & CCPA compliant. No signup required.",
  keywords: [
    "privacy policy generator",
    "terms of service generator",
    "cookie policy generator",
    "GDPR privacy policy",
    "CCPA privacy policy",
    "free privacy policy",
    "terms and conditions generator",
  ],
  authors: [{ name: "PolicyForge" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://policyforge-blond.vercel.app",
    siteName: "PolicyForge",
    title: "PolicyForge — Free Privacy Policy & Terms of Service Generator",
    description:
      "Generate professional, compliant privacy policies and terms of service in minutes. Free, no signup required.",
    images: [
      {
        url: "https://snapog-teal.vercel.app/api/og?title=PolicyForge&description=Free+Privacy+Policy+%26+Terms+of+Service+Generator&theme=dark&template=product&siteName=policyforge&accent=%238b5cf6",
        width: 1200,
        height: 630,
        alt: "PolicyForge — Privacy Policy Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PolicyForge — Free Privacy Policy Generator",
    description:
      "Generate professional privacy policies and terms of service. GDPR & CCPA compliant. Free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PolicyForge",
              url: "https://policyforge-blond.vercel.app",
              description:
                "Free privacy policy and terms of service generator. GDPR, CCPA, COPPA compliant.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "PolicyForge",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
