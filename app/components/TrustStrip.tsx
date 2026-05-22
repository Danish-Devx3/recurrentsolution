const trustItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trusted by 200+ Clients",
    description: "Enterprise-grade partnerships built on reliability",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Agile sprints with predictable timelines",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Scalable Solutions",
    description: "Architecture that grows with your business",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "24/7 assistance from real engineering teams",
  },
];

export default function TrustStrip() {
  return (
    <section
      className="relative py-16 md:py-20 bg-[var(--color-surface-light)]"
      aria-label="Trust indicators"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-[var(--radius-xs)] bg-white border border-[var(--color-border-light)] transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:-translate-y-1 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-xs)] bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[var(--font-size-md)] font-bold text-[var(--color-primary-text)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[var(--font-size-xs)] text-[var(--color-secondary-text)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
