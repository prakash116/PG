export default function Hero() {
  return (
    <section aria-label="Find or list a PG" className="grid min-h-[78vh] lg:grid-cols-2">
      {/* Seeker half */}
      <div className="grain relative overflow-hidden flex flex-col justify-center px-8 py-16 md:px-14 lg:px-16 bg-gradient-to-br from-[#F9E9E2] to-[#F4CFC4]">
        <div className="absolute right-7 top-7 flex gap-3.5 text-4xl" aria-hidden>
          <span className="animate-wiggle inline-block">🧳</span>
          <span>🗝️</span>
        </div>
        <h1 className="mb-4 font-display text-5xl font-bold leading-[1.05] text-teal md:text-6xl">
          Find <em className="not-italic text-terracotta">your</em> room.
        </h1>
        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[40ch] mb-8">
          New city, first job, big move? Search PGs with{" "}
          <strong className="text-teal">real-time availability</strong> near your office or
          college — and talk directly to the owner. No brokers, no stale listings.
        </p>
        <div>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 font-bold text-white shadow-[0_6px_18px_rgba(226,114,91,0.35)] transition-transform hover:-translate-y-1"
          >
            I&apos;m looking for a PG →
          </a>
        </div>
        <div className="blob absolute -bottom-20 -right-20 w-64 h-64 bg-terracotta opacity-25" aria-hidden />
      </div>

      {/* Owner half */}
      <div className="grain relative overflow-hidden flex flex-col justify-center px-8 py-16 md:px-14 lg:px-16 bg-gradient-to-br from-[#E3EEEC] to-[#CBDEDB]">
        <div className="absolute right-7 top-7 flex gap-3.5 text-4xl" aria-hidden>
          <span>🏠</span>
          <span className="animate-wiggle inline-block">🪭</span>
        </div>
        <h2 className="mb-4 font-display text-5xl font-bold leading-[1.05] text-teal md:text-6xl">
          Fill <em className="not-italic text-terracotta">your</em> rooms.
        </h2>
        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[40ch] mb-8">
          List your PG once, then flip a room to{" "}
          <strong className="text-leaf-deep">&ldquo;Available&rdquo;</strong> in one tap.
          Genuine, verified inquiries come straight to your phone.
        </p>
        <div>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-bold text-cream shadow-[0_6px_18px_rgba(27,77,74,0.28)] transition-transform hover:-translate-y-1"
          >
            I own a PG →
          </a>
        </div>
        <div className="blob absolute -bottom-20 -right-20 w-64 h-64 bg-teal opacity-25" aria-hidden />
      </div>
    </section>
  );
}
