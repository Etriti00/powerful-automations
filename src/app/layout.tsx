import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://powerautomations.net"),
  title: "Power Automations - AI Business Automation Solutions",
  description: "Transform your business with AI-powered automation solutions. Custom workflow automation, appointment scheduling, voice AI agents, and intelligent business processes that save time and increase revenue.",
  keywords: "business automation, AI automation, workflow automation, process automation, appointment scheduling automation, voice AI agents, custom business automation, automated workflows, business process automation, intelligent automation, automation solutions, productivity automation, small business automation, enterprise automation",
  openGraph: {
    title: "Power Automations - AI Business Automation Solutions",
    description: "Transform your business with AI-powered automation solutions that save time and increase revenue through intelligent workflow automation.",
    type: "website",
    url: "https://powerautomations.net",
    siteName: "Power Automations",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Power Automations - AI Business Automation Solutions",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Automations - AI Business Automation Solutions",
    description: "Transform your business with AI-powered automation solutions that save time and increase revenue.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://powerautomations.net",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Power Automations",
              "url": "https://powerautomations.net",
              "logo": "https://powerautomations.net/logo.png",
              "description": "AI-powered business automation solutions that save time and increase revenue through intelligent workflow automation.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://powerautomations.net/contact"
              },
              "sameAs": [
                "https://linkedin.com/company/power-automations",
                "https://twitter.com/powerautomations"
              ],
              "services": [
                "Business Process Automation",
                "AI Workflow Automation",
                "Appointment Scheduling Automation",
                "Voice AI Agents",
                "Custom Integration Solutions"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
