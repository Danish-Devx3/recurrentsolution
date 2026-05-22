import Image from "next/image";

const projects = [
  {
    title: "FinEdge Banking Platform",
    category: "Fintech",
    summary:
      "Complete digital banking platform with real-time analytics, secure transactions, and intuitive portfolio management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "MedConnect Health Suite",
    category: "Healthcare",
    summary:
      "Integrated health management system featuring patient records, telemedicine, and appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "ShopStream E-Commerce",
    category: "Retail",
    summary:
      "High-performance e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "DataVault Cloud Security",
    category: "Cybersecurity",
    summary:
      "Enterprise-grade cloud security solution with real-time threat monitoring and automated incident response.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "LogiTrack Supply Chain",
    category: "Logistics",
    summary:
      "End-to-end supply chain management with GPS tracking, inventory automation, and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "EduPro Learning Platform",
    category: "EdTech",
    summary:
      "Interactive e-learning platform with live sessions, progress tracking, and AI-driven personalized curriculum.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[var(--color-surface-light)]"
      aria-labelledby="projects-heading"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
              <span className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm" aria-hidden="true" />
              Case Studies
            </span>
            <h2
              id="projects-heading"
              className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-[var(--color-primary-text)] mb-3"
            >
              Projects That Speak Results
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--color-secondary-text)] leading-relaxed max-w-xl">
              Real solutions delivered for real businesses. Explore how we
              turn complex challenges into competitive advantages.
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--color-primary-text)] text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)] shrink-0"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" role="list">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-white rounded-[var(--radius-xs)] border border-[var(--color-border-light)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-transparent"
              role="listitem"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--font-size-xs)] font-semibold text-[var(--color-accent)] rounded-[var(--radius-sm)]">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--color-primary-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--font-size-sm)] text-[var(--color-secondary-text)] leading-relaxed mb-5 line-clamp-2">
                  {project.summary}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] transition-all duration-300 hover:gap-3"
                  aria-label={`View ${project.title} case study`}
                >
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
