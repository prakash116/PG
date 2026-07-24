import GetStartedForm from "@/components/GetStartedForm";

const footerLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#live-availability", label: "Live availability" },
  { href: "#homes", label: "Homes" },
  { href: "#faq", label: "FAQs" },
];

export default function SiteFooter() {
  return (
    <footer id="get-started" className="scroll-mt-20 bg-teal text-cream">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:pt-20">
        <div className="grain relative overflow-hidden rounded-[30px] bg-cream px-6 py-10 text-ink shadow-lift sm:px-10 lg:px-14">
          <div
            className="blob absolute -bottom-24 -right-16 size-72 bg-terracotta/20"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-deep">
                Your next room starts here
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-teal sm:text-5xl">
                Find your room. Fill your rooms.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                Join the early-access list for a direct, honest PG marketplace built around live
                availability.
              </p>
            </div>
            <GetStartedForm />
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-2 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 font-display text-xl font-bold"
            >
              <span
                className="inline-block h-7 w-6 rounded-b-[5px] rounded-t-full bg-terracotta"
                aria-hidden="true"
              />
              PG Finder
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/65">
              Live PG availability, direct owner conversations and no brokers in between.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-cream/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-cream/15 pt-5 text-xs text-cream/50">
          © {new Date().getFullYear()} PG Finder. Made for easier moves.
        </div>
      </div>
    </footer>
  );
}
