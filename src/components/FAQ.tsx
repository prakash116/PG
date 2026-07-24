import Reveal from "@/components/Reveal";

const questions = [
  {
    question: "Does PG Finder charge seekers a brokerage fee?",
    answer:
      "No. PG Finder connects seekers directly with PG owners. There is no broker in the middle and no brokerage fee for finding a room.",
  },
  {
    question: "How do I know a room is still available?",
    answer:
      "Availability is managed room by room by the owner. When an owner marks a room Filled, it leaves available-only results immediately while the PG can remain discoverable.",
  },
  {
    question: "When is an owner's phone number shared?",
    answer:
      "The contact stays private while you browse. It is unlocked only after you deliberately send an inquiry for a specific room.",
  },
  {
    question: "Can owners list more than one PG?",
    answer:
      "Yes. The owner dashboard is designed to manage multiple PGs, their individual rooms, availability and incoming inquiries from one place.",
  },
  {
    question: "What details can I add to a listing?",
    answer:
      "Owners can add room types, rent, deposit, photos, amenities, meals, gender preference, address, map location and practical house notes such as gate timings.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-sand/60 px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-deep">
            Good to know
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-teal sm:text-5xl">
            Questions, answered simply.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            The important details about availability, privacy and how owners and seekers connect.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-3">
            {questions.map((item, index) => (
              <details
                key={item.question}
                className="faq group rounded-[20px] border border-sand-deep bg-cream-bright px-5 shadow-sm"
                open={index === 0}
              >
                <summary className="flex items-center justify-between gap-4 py-5 text-left text-[15px] font-bold text-teal">
                  {item.question}
                  <span
                    className="faq-ico grid size-8 shrink-0 place-items-center rounded-full bg-terracotta-soft text-xl font-medium text-terracotta-deep"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl pb-5 pr-10 text-sm leading-7 text-ink-soft">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
