import Reveal from "@/components/Reveal";

const stories = [
  {
    quote:
      "I could see which single rooms were still open before calling. I found one close to work in two evenings.",
    name: "Aarav Menon",
    role: "Seeker · moved to Gurugram",
    initials: "AM",
    tone: "warm",
  },
  {
    quote:
      "Earlier I kept answering calls for rooms that were already filled. The room switches fixed that immediately.",
    name: "Rajesh Yadav",
    role: "Owner · Sunrise PG",
    initials: "RY",
    tone: "cool",
  },
  {
    quote:
      "The house notes saved time. I knew the food schedule and gate timing before I booked a visit.",
    name: "Naina Kapoor",
    role: "Seeker · DLF Phase 3",
    initials: "NK",
    tone: "sand",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-24 bg-cream px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-deep">
            Room stories
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-teal sm:text-5xl">
            A warmer way to get home.
          </h2>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {stories.map((story, index) => (
            <Reveal key={story.name} delay={index * 90}>
              <figure
                className={`flex h-full flex-col rounded-[24px] border p-6 ${
                  story.tone === "warm"
                    ? "border-terracotta/20 bg-[#FBECE6]"
                    : story.tone === "cool"
                      ? "border-teal/15 bg-[#E5EFED]"
                      : "border-sand-deep bg-sand"
                }`}
              >
                <span className="font-display text-5xl leading-none text-terracotta" aria-hidden>
                  “
                </span>
                <blockquote className="-mt-2 flex-1 text-[15px] font-medium leading-7 text-ink">
                  {story.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="grid size-11 place-items-center rounded-full bg-cream-bright text-sm font-extrabold text-teal shadow-sm">
                    {story.initials}
                  </span>
                  <span>
                    <strong className="block text-sm text-teal">{story.name}</strong>
                    <span className="mt-0.5 block text-xs text-ink-soft">{story.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
