const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: "IT Management",
    description:
      "End-to-end IT operations management with proactive monitoring, helpdesk support, and strategic technology roadmapping.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Data Security",
    description:
      "Comprehensive data protection with encryption, access control, compliance frameworks, and real-time threat detection.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <path d="M1 10h22" />
        <path d="M7 6v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    title: "Infrastructure Planning",
    description:
      "Cloud-first and hybrid infrastructure architecture designed for scalability, performance, and cost efficiency.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Firewall & Network Security",
    description:
      "Multi-layered network defense with next-gen firewalls, intrusion detection, and zero-trust architecture.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Desktop Computing",
    description:
      "Managed desktop environments with automated provisioning, patch management, and secure remote access.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Product Design",
    description:
      "User-centered product design with research-backed UX, interactive prototyping, and design system creation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
    title: "Market Research",
    description:
      "Data-driven market analysis, competitive intelligence, and user research to validate ideas before building.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks, optimized for performance, SEO, and accessibility.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm" aria-hidden="true" />
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-[var(--color-primary-text)] mb-4"
          >
            Comprehensive IT Solutions
          </h2>
          <p className="text-[var(--font-size-lg)] text-[var(--color-secondary-text)] leading-relaxed">
            From strategy to deployment, we deliver full-spectrum technology
            services tailored to your business needs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative p-7 bg-white border border-[var(--color-border-light)] rounded-[var(--radius-xs)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-transparent cursor-pointer"
              role="listitem"
              tabIndex={0}
              aria-label={service.title}
            >
              {/* Accent Top Border on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] rounded-t-[var(--radius-xs)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />

              <div className="w-14 h-14 rounded-[var(--radius-xs)] bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:shadow-[var(--shadow-accent)]">
                {service.icon}
              </div>

              <h3 className="text-[var(--font-size-lg)] font-bold text-[var(--color-primary-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[var(--font-size-sm)] text-[var(--color-secondary-text)] leading-relaxed mb-5">
                {service.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[var(--font-size-xs)] font-semibold text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
