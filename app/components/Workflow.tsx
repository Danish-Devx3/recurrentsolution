const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your goals, challenges, and existing infrastructure to define a clear project scope.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team crafts a detailed roadmap with milestones, technology stack recommendations, and KPIs.",
  },
  {
    number: "03",
    title: "Design",
    description: "UX research, wireframes, and high-fidelity prototypes validated with stakeholder feedback.",
  },
  {
    number: "04",
    title: "Development",
    description: "Agile sprints with continuous integration, code reviews, and transparent progress reporting.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA with automated testing, security audits, and performance optimization.",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Zero-downtime deployment with monitoring, rollback plans, and post-launch validation.",
  },
  {
    number: "07",
    title: "Support",
    description: "Ongoing maintenance, feature iterations, and 24/7 technical support.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="py-20 md:py-28 bg-gradient-to-br from-[#0a1628] via-[#0e1d35] to-[#142744] relative overflow-hidden"
      aria-labelledby="workflow-heading"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d2a98e]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm" aria-hidden="true" />
            Our Process
          </span>
          <h2
            id="workflow-heading"
            className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-white mb-4"
          >
            How We Deliver Excellence
          </h2>
          <p className="text-[var(--font-size-lg)] text-white/60 leading-relaxed">
            A proven, repeatable methodology that transforms complex requirements
            into production-ready solutions.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-[2px] bg-white/10" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:shadow-[0_0_30px_rgba(8,106,216,0.3)]">
                  <span className="text-lg font-extrabold text-white/50 group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-[var(--font-size-md)] font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[var(--font-size-xs)] text-white/45 leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
