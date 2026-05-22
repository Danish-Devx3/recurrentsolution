const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Expert Team",
    description: "Senior engineers with 10+ years average experience across cloud, security, and development.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparent Process",
    description: "Full visibility with weekly reports, sprint reviews, and real-time project dashboards.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Reliable Delivery",
    description: "98% on-time delivery rate with rigorous quality assurance and testing protocols.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Security-First Approach",
    description: "SOC 2 compliant processes with end-to-end encryption and regular penetration testing.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Business-Focused Solutions",
    description: "Technology aligned to revenue goals, operational efficiency, and measurable ROI.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "End-to-End Support",
    description: "From initial consultation through post-launch maintenance — we're with you at every step.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="why-heading"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm" aria-hidden="true" />
            Why Recurrent Solution
          </span>
          <h2
            id="why-heading"
            className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-[var(--color-primary-text)] mb-4"
          >
            Built for Businesses That Demand More
          </h2>
          <p className="text-[var(--font-size-lg)] text-[var(--color-secondary-text)] leading-relaxed">
            We combine deep technical expertise with a relentless focus on
            business outcomes to deliver technology that truly matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative flex flex-col p-8 rounded-[var(--radius-xs)] bg-[var(--color-surface-light)] border border-transparent transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-light)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--color-primary-text)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--font-size-sm)] text-[var(--color-secondary-text)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
