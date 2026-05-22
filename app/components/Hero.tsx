import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0e1d35] to-[#142744]"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          aria-hidden="true"
          preload
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-[#d2a98e]/8 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 bg-white/5 border border-white/10 rounded-[var(--radius-sm)] backdrop-blur-sm animate-[fadeInUp_0.6s_ease-out_both]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-[pulse-glow_2s_ease-in-out_infinite]" />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              Trusted by 200+ businesses worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.1] text-white mb-6 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            Transforming Ideas Into{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#4da3ff]">
                Scalable
              </span>
            </span>{" "}
            Digital Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mb-10 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            From IT infrastructure and cybersecurity to custom software
            development — we architect, build, and manage technology that
            drives measurable business growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-accent)] text-white text-base font-semibold rounded-[var(--radius-sm)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-accent)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Our Services
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent text-white text-base font-semibold rounded-[var(--radius-sm)] border border-white/25 transition-all duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-16 mt-16 pt-10 border-t border-white/10 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Expert Engineers" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/50 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" aria-hidden="true" />
    </section>
  );
}
