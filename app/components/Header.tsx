"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Company", href: "#why-choose-us" },
  { label: "IT Solutions", href: "#services" },
  { label: "Case Studies", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="site-header"
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[var(--motion-ease)] ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-md)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Recurrent Solution Home"
        >
          <div className="w-10 h-10 rounded-[var(--radius-xs)] bg-[var(--color-accent)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-extrabold text-lg leading-none">
              R
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-[17px] font-bold leading-tight tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[var(--color-primary-text)]" : "text-white"
              }`}
            >
              Recurrent
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-[3px] leading-tight transition-colors duration-300 ${
                scrolled ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"
              }`}
            >
              Solution
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[var(--font-size-sm)] font-medium transition-colors duration-300 hover:text-[var(--color-accent)] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-[var(--color-secondary-text)]"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-accent)] text-white text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
            <svg
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-[var(--radius-xs)] transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-[5px] bg-[var(--color-primary-text)]"
                : scrolled
                ? "bg-[var(--color-primary-text)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-[var(--color-primary-text)]"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-[5px] bg-[var(--color-primary-text)]"
                : scrolled
                ? "bg-[var(--color-primary-text)]"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 ease-[var(--motion-ease)] ${
          mobileOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col pt-24 px-8 h-full">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-xl font-semibold text-[var(--color-primary-text)] border-b border-[var(--color-border-light)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-7 py-4 bg-[var(--color-accent)] text-white text-base font-semibold rounded-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
            >
              Contact Us
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="mt-auto pb-8 pt-6 border-t border-[var(--color-border-light)]">
            <p className="text-sm text-[var(--color-secondary-text)]">
              info@recurrentsolution.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
