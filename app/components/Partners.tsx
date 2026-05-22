const partners = [
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M11.4 2H2v9.4h9.4V2zm10.6 0h-9.4v9.4H22V2zm-10.6 10.6H2V22h9.4v-9.4zm10.6 0h-9.4V22H22v-9.4z" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0C2.698 9.575 2.5 9.9 2.5 10.26v1.5c0 .36.198.686.456.967C3.92 16.025 7.67 19 12.5 19c4.76 0 8.458-2.894 9.47-6.107.28-.347.53-.726.53-1.133V10.5c0-.414-.25-.8-.59-1.094A9.339 9.339 0 0 0 12.19 2.38zm.31 3.62a5.723 5.723 0 0 1 5.69 5.05H6.5a5.723 5.723 0 0 1 5.999-5.05z" />
      </svg>
    ),
  },
  {
    name: "Amazon Web Services",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.368-1.3-.368-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.152-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687a.49.49 0 0 1-.32-.08c-.063-.056-.12-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32a.513.513 0 0 1-.321.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .407-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.814-.415.304-.096.623-.144.95-.144.167 0 .343.008.51.032.176.023.336.055.487.087.144.04.28.08.408.128.128.048.224.096.296.144a.597.597 0 0 1 .208.183.43.43 0 0 1 .056.224v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.07.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M10.065 6.525a3.13 3.13 0 0 1 2.31-1.017 3.13 3.13 0 0 1 2.647 1.46 4.268 4.268 0 0 1 1.527-.281 4.3 4.3 0 0 1 4.3 4.3 4.3 4.3 0 0 1-4.3 4.3H5.775a3.375 3.375 0 0 1-3.375-3.376 3.375 3.375 0 0 1 3.375-3.375c.166 0 .33.012.49.035a3.12 3.12 0 0 1-.2-1.096 3.13 3.13 0 0 1 4.0-3.95z" />
      </svg>
    ),
  },
  {
    name: "Oracle",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M16.412 19.237H7.59A7.087 7.087 0 0 1 7.59 5.063h8.82a7.087 7.087 0 0 1 0 14.174zm-.185-2.687a4.4 4.4 0 0 0 0-8.8H7.774a4.4 4.4 0 0 0 0 8.8z" />
      </svg>
    ),
  },
  {
    name: "IBM",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M0 7.5h3v1.5H0V7.5zm0 3h3v1.5H0V10.5zm0 3h3v1.5H0V13.5zm21 0h3v1.5h-3V13.5zm0-3h3v1.5h-3V10.5zm0-3h3v1.5h-3V7.5zM4.5 9h15v1.5h-15V9zm0 4.5h15V15h-15v-1.5zm1.5-6h3v1.5H6V7.5zm9 0h3v1.5h-3V7.5zM6 13.5h3V15H6v-1.5zm9 0h3V15h-3v-1.5z" />
      </svg>
    ),
  },
  {
    name: "SAP",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M13.41 2.25H24v19.5H13.41L0 12l13.41-9.75zm1.09 7.5H22v4.5h-7.5v-4.5zm-8.25 0H10v1.5H6.25V9.75zm0 3H10v1.5H6.25v-1.5z" />
      </svg>
    ),
  },
  {
    name: "Cisco",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M12 2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM8.4 5.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm7.2 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-10.8 3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm14.4 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-10.8 3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm7.2 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3.6 3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM4.8 13.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm14.4 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-10.8 3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm7.2 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 19.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section
      className="py-16 md:py-20 bg-white border-t border-[var(--color-border-light)]"
      aria-label="Partner and client logos"
    >
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Label */}
        <p className="text-center text-[var(--font-size-sm)] font-semibold text-[var(--color-secondary-text)] uppercase tracking-[3px] mb-10">
          Trusted by 1,250+ businesses worldwide
        </p>

        {/* Marquee Container */}
        <div
          className="relative overflow-hidden"
          aria-hidden="true"
        >
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-16 items-center"
            style={{
              animation: "marquee 30s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center w-20 h-10 flex-shrink-0 opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300 text-[var(--color-primary-text)]"
                title={partner.name}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Accessible text list (hidden visually, visible to screen readers) */}
        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
