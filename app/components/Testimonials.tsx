import Image from "next/image";

const testimonials = [
  {
    quote:
      "Recurrent Solution transformed our entire digital infrastructure. Their team delivered a scalable platform that cut our operational costs by 40% in the first year.",
    name: "Sarah Mitchell",
    role: "CTO, NexGen Financial",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "The security audit and implementation they did for us was outstanding. We went from vulnerability-ridden to SOC 2 compliant in under six months.",
    name: "David Chen",
    role: "VP Engineering, CloudSync",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Working with Recurrent Solution felt like having an in-house development team. Their transparent process and consistent delivery exceeded every expectation.",
    name: "Emily Rodriguez",
    role: "Founder, HealthBridge",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f59e0b" : "none"}
          stroke={i < rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm" aria-hidden="true" />
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-[var(--color-primary-text)] mb-4"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-[var(--font-size-lg)] text-[var(--color-secondary-text)] leading-relaxed">
            Hear directly from the decision-makers who chose Recurrent Solution
            to power their digital transformation.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="group relative flex flex-col p-8 bg-[var(--color-surface-light)] border border-transparent rounded-[var(--radius-xs)] transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-light)] hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="var(--color-accent)"
                className="opacity-10 mb-4"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <StarRating rating={testimonial.rating} />

              <p className="mt-5 mb-6 text-[var(--font-size-md)] text-[var(--color-primary-text)] leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[var(--color-border-light)]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <cite className="block text-[var(--font-size-sm)] font-bold text-[var(--color-primary-text)] not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="text-[var(--font-size-xs)] text-[var(--color-secondary-text)]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
