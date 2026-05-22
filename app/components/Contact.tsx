"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 7.26 7.26l.98-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (888) 000-0000",
    href: "tel:+18880000000",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@recurrentsolution.com",
    href: "mailto:info@recurrentsolution.com",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "United States — Remote Worldwide",
    href: "#",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function validate() {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Full name is required.";
    if (!formData.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) next.subject = "Subject is required.";
    if (!formData.message.trim()) {
      next.message = "Message is required.";
    } else if (formData.message.trim().length < 20) {
      next.message = "Please provide at least 20 characters.";
    }
    return next;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormState("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  }

  const inputBase =
    "w-full px-4 py-3.5 text-[var(--font-size-sm)] text-white bg-white/8 border border-white/15 rounded-[var(--radius-xs)] placeholder:text-white/30 transition-all duration-200 focus:outline-none focus-visible:border-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/30 hover:border-white/30";
  const inputError =
    "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/30";

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-[#0a1628] via-[#0e1d35] to-[#142744] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d2a98e]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column — CTA + Contact Info */}
          <div>
            <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
              <span
                className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm"
                aria-hidden="true"
              />
              Get In Touch
            </span>

            <h2
              id="contact-heading"
              className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-white mb-5"
            >
              Let&apos;s Build Your
              <br />
              Next Project Together
            </h2>

            <p className="text-[var(--font-size-lg)] text-white/60 leading-relaxed mb-10 max-w-md">
              Tell us about your challenge. Our team will respond within one
              business day with a concrete plan to move forward.
            </p>

            {/* Contact Info Items */}
            <ul className="flex flex-col gap-5 mb-10" role="list">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-[var(--radius-xs)] bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[var(--font-size-xs)] text-white/40 font-medium uppercase tracking-[1.5px]">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      className="text-[var(--font-size-md)] text-white/85 font-medium hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 rounded-sm"
                    >
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {/* Secondary CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-white text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-sm)] border border-white/25 transition-all duration-300 hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
            >
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a Consultation
            </a>
          </div>

          {/* Right Column — Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[var(--radius-xs)] p-8 md:p-10">
            {formState === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center py-12"
                role="alert"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/15 flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-success)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-white/60 text-[var(--font-size-md)] leading-relaxed max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within one
                  business day.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 px-6 py-3 text-[var(--font-size-sm)] font-semibold text-white bg-[var(--color-accent)] rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3 className="text-xl font-bold text-white mb-7">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[var(--font-size-xs)] font-semibold text-white/60 uppercase tracking-[1.5px]"
                    >
                      Full Name <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      className={`${inputBase} ${errors.name ? inputError : ""}`}
                    />
                    {errors.name && (
                      <span
                        id="error-name"
                        role="alert"
                        className="text-[var(--font-size-xs)] text-[var(--color-error)] font-medium"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-[var(--font-size-xs)] font-semibold text-white/60 uppercase tracking-[1.5px]"
                    >
                      Email Address <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      className={`${inputBase} ${errors.email ? inputError : ""}`}
                    />
                    {errors.email && (
                      <span
                        id="error-email"
                        role="alert"
                        className="text-[var(--font-size-xs)] text-[var(--color-error)] font-medium"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-[var(--font-size-xs)] font-semibold text-white/60 uppercase tracking-[1.5px]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputBase}
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-[var(--font-size-xs)] font-semibold text-white/60 uppercase tracking-[1.5px]"
                    >
                      Subject <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "error-subject" : undefined}
                      className={`${inputBase} ${errors.subject ? inputError : ""} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0e1d35] text-white">
                        Select a topic
                      </option>
                      <option value="it-management" className="bg-[#0e1d35] text-white">IT Management</option>
                      <option value="security" className="bg-[#0e1d35] text-white">Data Security</option>
                      <option value="infrastructure" className="bg-[#0e1d35] text-white">Infrastructure Planning</option>
                      <option value="web-development" className="bg-[#0e1d35] text-white">Web Development</option>
                      <option value="product-design" className="bg-[#0e1d35] text-white">Product Design</option>
                      <option value="other" className="bg-[#0e1d35] text-white">Other</option>
                    </select>
                    {errors.subject && (
                      <span
                        id="error-subject"
                        role="alert"
                        className="text-[var(--font-size-xs)] text-[var(--color-error)] font-medium"
                      >
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mb-7">
                  <label
                    htmlFor="contact-message"
                    className="text-[var(--font-size-xs)] font-semibold text-white/60 uppercase tracking-[1.5px]"
                  >
                    Message <span className="text-[var(--color-error)]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
                  />
                  {errors.message && (
                    <span
                      id="error-message"
                      role="alert"
                      className="text-[var(--font-size-xs)] text-[var(--color-error)] font-medium"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  aria-busy={formState === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-accent)] text-white text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
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
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
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
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[var(--font-size-xs)] text-white/30">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
