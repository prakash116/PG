import Reveal from "@/components/Reveal";

const seekerSteps = [
  {
    number: "01",
    title: "Search where life happens",
    copy: "Use a locality, college or office and see rooms that are actually available.",
    icon: "⌖",
  },
  {
    number: "02",
    title: "Compare the whole home",
    copy: "Check rent, sharing, meals, amenities and house notes before you inquire.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Talk to the owner",
    copy: "Send one verified inquiry to unlock direct call and chat.",
    icon: "↗",
  },
];

const ownerSteps = [
  {
    number: "01",
    title: "List once",
    copy: "Add rooms, photos, rent and the small details that make your PG feel right.",
    icon: "＋",
  },
  {
    number: "02",
    title: "Keep it live",
    copy: "Flip each room between Available and Filled in one satisfying tap.",
    icon: "↻",
  },
  {
    number: "03",
    title: "Fill with confidence",
    copy: "See genuine inquiries in one place and respond by call or chat.",
    icon: "✓",
  },
];

function StepList({
  eyebrow,
  title,
  steps,
  tone,
}: {
  eyebrow: string;
  title: string;
  steps: typeof seekerSteps;
  tone: "warm" | "cool";
}) {
  const warm = tone === "warm";

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border p-6 shadow-warm sm:p-8 ${
        warm
          ? "border-terracotta/20 bg-[#FBECE6]"
          : "border-teal/15 bg-[#E5EFED]"
      }`}
    >
      <div
        className={`blob absolute -right-16 -top-20 size-52 opacity-15 ${
          warm ? "bg-terracotta" : "bg-teal"
        }`}
        aria-hidden="true"
      />
      <p
        className={`relative text-xs font-extrabold uppercase tracking-[0.18em] ${
          warm ? "text-terracotta-deep" : "text-teal"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="relative mt-2 font-display text-3xl font-bold text-teal">{title}</h3>
      <ol className="relative mt-7 space-y-4">
        {steps.map((step) => (
          <li
            key={step.number}
            className="group flex gap-4 rounded-[20px] bg-cream-bright/85 p-4 transition-transform hover:-translate-y-0.5"
          >
            <span
              className={`grid size-11 shrink-0 place-items-center rounded-[15px] text-xl font-bold ${
                warm
                  ? "bg-terracotta-soft text-terracotta-deep"
                  : "bg-teal text-cream"
              }`}
              aria-hidden="true"
            >
              {step.icon}
            </span>
            <span>
              <span className="mb-1 flex items-baseline gap-2">
                <span className="text-[10px] font-black tracking-[0.16em] text-ink-soft/70">
                  {step.number}
                </span>
                <strong className="text-[15px] text-teal">{step.title}</strong>
              </span>
              <span className="block text-sm leading-relaxed text-ink-soft">{step.copy}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-cream px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-deep">
            One marketplace, both sides
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-teal sm:text-5xl">
            Less chasing. More moving in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            PG Finder keeps the information seekers need and the controls owners use in one
            warm, simple flow.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <StepList
              eyebrow="For seekers"
              title="Find a room that fits"
              steps={seekerSteps}
              tone="warm"
            />
          </Reveal>
          <Reveal delay={100}>
            <StepList
              eyebrow="For owners"
              title="Fill rooms without fuss"
              steps={ownerSteps}
              tone="cool"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
