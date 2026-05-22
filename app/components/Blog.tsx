import Image from "next/image";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    category: "Cloud Computing",
    date: "May 18, 2026",
    title: "Why Cloud-First Infrastructure Is No Longer Optional for Enterprises",
    excerpt:
      "Modern enterprises are accelerating cloud adoption at unprecedented rates. We break down the architectural decisions, cost models, and migration patterns that separate successful transformations from costly failures.",
    readTime: "6 min read",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "Cybersecurity",
    date: "May 10, 2026",
    title: "Zero-Trust Architecture: A Practical Implementation Guide for 2026",
    excerpt:
      "Perimeter-based security is dead. This guide covers how to implement zero-trust principles across identity, network, and data layers — without disrupting daily operations or ballooning your security budget.",
    readTime: "8 min read",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Development",
    date: "April 28, 2026",
    title: "Full-Stack Performance Optimization: From Database to Edge Delivery",
    excerpt:
      "A deep-dive into the performance bottlenecks that kill conversions — slow queries, unoptimized APIs, and render-blocking assets. Learn how our team achieves sub-200ms TTFB across complex enterprise applications.",
    readTime: "7 min read",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-20 md:py-28 bg-[var(--color-surface-light)]"
      aria-labelledby="blog-heading"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] uppercase tracking-[2px] mb-4">
              <span
                className="inline-block w-8 h-[2px] bg-[var(--color-accent)] rounded-sm"
                aria-hidden="true"
              />
              Insights &amp; News
            </span>
            <h2
              id="blog-heading"
              className="text-[clamp(28px,4vw,var(--font-size-7xl))] font-bold leading-tight text-[var(--color-primary-text)] mb-3"
            >
              Read Our Latest Thinking
            </h2>
            <p className="text-[var(--font-size-lg)] text-[var(--color-secondary-text)] leading-relaxed max-w-xl">
              Practical insights from our engineering and strategy teams — no
              filler, just actionable knowledge.
            </p>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--color-primary-text)] text-[var(--font-size-sm)] font-semibold rounded-[var(--radius-sm)] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-light)] shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
          >
            View All Articles
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" role="list">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-[var(--radius-xs)] border border-[var(--color-border-light)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-transparent flex flex-col"
              role="listitem"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--font-size-xs)] font-semibold text-[var(--color-accent)] rounded-[var(--radius-sm)]">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <time
                    dateTime={post.date}
                    className="text-[var(--font-size-xs)] text-[var(--color-secondary-text)] font-medium"
                  >
                    {post.date}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" aria-hidden="true" />
                  <span className="text-[var(--font-size-xs)] text-[var(--color-secondary-text)] font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[var(--font-size-xl)] font-bold text-[var(--color-primary-text)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[var(--font-size-sm)] text-[var(--color-secondary-text)] leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <a
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-[var(--font-size-sm)] font-semibold text-[var(--color-accent)] transition-all duration-300 hover:gap-3 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 rounded-sm mt-auto"
                  aria-label={`Read more: ${post.title}`}
                >
                  Read Article
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
