import Reveal from "@/components/Reveal";

const homes = [
  {
    name: "Sunrise PG for Gents",
    location: "Sector 45 · 1.2 km from HUDA City Centre",
    rent: "₹9,500",
    availability: "2 rooms available",
    icon: "🏡",
    gradient: "from-[#F2D6C8] to-[#E7B59E]",
    tags: ["Single room", "2 meals", "Wi-Fi"],
    available: true,
  },
  {
    name: "Anandam Girls PG",
    location: "DLF Phase 3 · 8 min from Cyber City",
    rent: "₹12,000",
    availability: "1 room available",
    icon: "🏠",
    gradient: "from-[#DDE9E7] to-[#B8D2CE]",
    tags: ["Double sharing", "AC", "Laundry"],
    available: true,
  },
  {
    name: "Shree Krishna Boys PG",
    location: "Sohna Road · Near Subhash Chowk",
    rent: "₹8,000",
    availability: "Currently full",
    icon: "🛏️",
    gradient: "from-[#E5D4C0] to-[#D6C1A8]",
    tags: ["Twin sharing", "Power backup", "Parking"],
    available: false,
  },
];

export default function Showcase() {
  return (
    <section id="homes" className="scroll-mt-24 bg-sand/60 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-deep">
              Designed for good decisions
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-teal sm:text-5xl">
              See the room before the runaround.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Clear rent, useful house details and honest availability—right where you need them.
            </p>
          </div>
          <a
            href="#get-started"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-teal px-5 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-cream"
          >
            Explore PGs <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homes.map((home, index) => (
            <Reveal key={home.name} delay={index * 90}>
              <article
                className={`group h-full overflow-hidden rounded-[26px] bg-cream-bright shadow-warm transition-all hover:-translate-y-1 hover:shadow-lift ${
                  home.available ? "" : "opacity-75 saturate-50"
                }`}
              >
                <div
                  className={`arch relative m-3 grid h-48 place-items-center bg-gradient-to-br text-6xl ${home.gradient}`}
                >
                  <span
                    className="transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {home.icon}
                  </span>
                  <span
                    className={`absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-extrabold shadow-sm ${
                      home.available
                        ? "bg-leaf-soft text-leaf-deep"
                        : "bg-rust-soft text-rust"
                    }`}
                  >
                    {home.available && (
                      <span
                        className="size-1.5 animate-pulse-dot rounded-full bg-leaf"
                        aria-hidden="true"
                      />
                    )}
                    {home.availability}
                  </span>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <h3 className="font-display text-xl font-bold text-teal">{home.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">⌖ {home.location}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Amenities">
                    {home.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-sand-deep bg-cream px-2.5 py-1 text-[10px] font-semibold text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-sand-deep/70 pt-4">
                    <p className="num text-xl font-extrabold text-ink">
                      {home.rent}
                      <span className="ml-1 text-[11px] font-medium text-ink-soft">/ month</span>
                    </p>
                    <span className="text-sm font-bold text-terracotta-deep">View home →</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
