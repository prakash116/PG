import Reveal from "@/components/Reveal";

const trustPoints = [
  {
    icon: "●",
    iconClass: "text-leaf",
    title: "Live availability",
    copy: "Updated by owners, not agents",
  },
  {
    icon: "✍",
    iconClass: "text-terracotta",
    title: "Verified inquiries",
    copy: "Real people, fewer distractions",
  },
  {
    icon: "☎",
    iconClass: "text-teal",
    title: "Direct conversations",
    copy: "Call and chat without brokers",
  },
  {
    icon: "⌂",
    iconClass: "text-rust",
    title: "Built for Indian PGs",
    copy: "Rooms, meals and house rules",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Why people choose PG Finder"
      className="border-y border-sand-deep/70 bg-cream px-5 py-8"
    >
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 70}>
            <div className="flex h-full items-center gap-3 rounded-[20px] bg-sand px-4 py-4 shadow-warm">
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full bg-cream-bright text-xl font-black ${point.iconClass}`}
                aria-hidden="true"
              >
                {point.icon}
              </span>
              <span>
                <strong className="block text-sm font-bold text-teal">{point.title}</strong>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">
                  {point.copy}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
