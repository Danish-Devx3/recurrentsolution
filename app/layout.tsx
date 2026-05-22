import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Recurrent Solution — Enterprise IT Services & Digital Transformation",
  description:
    "Recurrent Solution delivers enterprise-grade IT management, cybersecurity, infrastructure planning, and custom software development. Trusted by businesses worldwide for scalable, secure digital solutions.",
  keywords: [
    "IT services",
    "software development",
    "cybersecurity",
    "digital transformation",
    "infrastructure planning",
    "web development",
    "IT management",
  ],
  authors: [{ name: "Recurrent Solution" }],
  openGraph: {
    title: "Recurrent Solution — Enterprise IT Services & Digital Transformation",
    description:
      "Trusted IT partner for scalable software, cybersecurity, and digital infrastructure solutions.",
    url: "https://recurrentsolution.com",
    siteName: "Recurrent Solution",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recurrent Solution",
    description:
      "Enterprise IT Services & Digital Transformation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body
        style={{ fontFamily: "var(--font-primary)" }}
        className="min-h-full flex flex-col"
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
