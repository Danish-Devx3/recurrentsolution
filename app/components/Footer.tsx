"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "#why-choose-us" },
    { label: "Our Process", href: "#workflow" },
    { label: "Case Studies", href: "#projects" },
    { label: "Blog & Insights", href: "#blog" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "IT Management", href: "#services" },
    { label: "Data Security", href: "#services" },
    { label: "Infrastructure Planning", href: "#services" },
    { label: "Network & Firewall", href: "#services" },
    { label: "Product Design", href: "#services" },
    { label: "Web Development", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubState("error");
      return;
    }
    setSubState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubState("success");
    setEmail("");
  }

  return (
    <footer
      className="bg-[#060e1c] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label="Recurrent Solution Home"
            >
              <div className="w-10 h-10 rounded-[var(--radius-xs)] bg-[var(--color-accent)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-extrabold text-lg leading-none">
                  R
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold leading-tight tracking-tight text-white">
                  Recurrent
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[3px] leading-tight text-[var(--color-accent)]">
                  Solution
                </span>
              </div>
            </Link>

            <p className="text-[var(--font-size-sm)] text-white/50 leading-relaxed max-w-xs mb-6">
              Enterprise IT services and digital transformation solutions. We
              build technology that drives measurable business growth.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-[var(--radius-xs)] bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[var(--font-size-xs)] font-semibold text-white/40 uppercase tracking-[2px] mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-sm)] text-white/55 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[var(--font-size-xs)] font-semibold text-white/40 uppercase tracking-[2px] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-sm)] text-white/55 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[var(--font-size-xs)] font-semibold text-white/40 uppercase tracking-[2px] mb-5">
              Stay Updated
            </h3>
            <p className="text-[var(--font-size-sm)] text-white/50 leading-relaxed mb-5">
              Get the latest IT insights and company news delivered to your
              inbox. No spam.
            </p>

            {subState === "success" ? (
              <div
                className="flex items-center gap-2 text-[var(--color-success)] text-[var(--font-size-sm)] font-medium"
                role="alert"
                aria-live="polite"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Subscribed successfully!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                noValidate
                aria-label="Newsletter subscription"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (subState === "error") setSubState("idle");
                      }}
                      placeholder="your@email.com"
                      aria-label="Email address for newsletter"
                      aria-invalid={subState === "error"}
                      className={`w-full px-4 py-3 text-[var(--font-size-sm)] text-white bg-white/8 border rounded-[var(--radius-xs)] placeholder:text-white/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 ${
                        subState === "error"
                          ? "border-[var(--color-error)] focus-visible:border-[var(--color-error)]"
                          : "border-white/15 hover:border-white/25 focus-visible:border-[var(--color-accent)]"
                      }`}
                    />
                  </div>
                  {subState === "error" && (
                    <span
                      role="alert"
                      className="text-[var(--font-size-xs)] text-[var(--color-error)] font-medium"
                    >
                      Please enter a valid email address.
                    </span>
                  )}
                  <button
                    type="submit"
                    disabled={subState === "loading"}
                    aria-busy={subState === "loading"}
                    className="w-full px-5 py-3 bg-[var(--color-accent)] text-white text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-xs)] hover:bg-[var(--color-accent-hover)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 flex items-center justify-center gap-2"
                  >
                    {subState === "loading" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Subscribing…
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-[var(--font-size-xs)] text-white/35">
              © 2026 Recurrent Solution. All rights reserved.
            </p>
            <span
              className="hidden sm:inline text-white/20 text-xs"
              aria-hidden="true"
            >
              ·
            </span>
            <p className="text-[var(--font-size-xs)] text-white/30">
              Enterprise IT solutions trusted by 1,250+ businesses worldwide.
            </p>
          </div>

          {/* Legal Links */}
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-5" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-xs)] text-white/30 hover:text-white/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
