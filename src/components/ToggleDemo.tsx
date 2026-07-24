"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Room = {
  id: number;
  name: string;
  rent: string;
  available: boolean;
};

const initialRooms: Room[] = [
  { id: 101, name: "Single room", rent: "₹9,500 / month", available: true },
  { id: 201, name: "Double sharing", rent: "₹7,000 / month", available: false },
  { id: 301, name: "Triple sharing", rent: "₹5,500 / month", available: true },
];

export default function ToggleDemo() {
  const [rooms, setRooms] = useState(initialRooms);
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const availableCount = rooms.filter((room) => room.available).length;

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  function toggleRoom(id: number) {
    const room = rooms.find((item) => item.id === id);
    if (!room) return;

    const willBeAvailable = !room.available;
    setRooms((current) =>
      current.map((item) =>
        item.id === id ? { ...item, available: willBeAvailable } : item
      )
    );
    setMessage(
      willBeAvailable
        ? `Room ${id} updated — live in search now.`
        : `Room ${id} marked filled — availability filters updated.`
    );
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2600);
  }

  return (
    <section
      id="live-availability"
      className="scroll-mt-24 overflow-hidden bg-teal px-5 py-20 text-cream sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-terracotta-soft">
            The stale-listing fix
          </p>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl">
            One tap keeps every room honest.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/75">
            No dashboards full of forms. Owners use a quick room-level switch, and seekers see
            the change immediately in availability filters.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream/10 px-4 py-2.5 text-sm font-semibold">
            <span className="size-2.5 animate-pulse-dot rounded-full bg-leaf" aria-hidden="true" />
            <span>
              <strong className="text-white">{availableCount}</strong> of {rooms.length} rooms
              available now
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              className="blob absolute -left-10 -top-8 size-40 bg-terracotta/25"
              aria-hidden="true"
            />
            <div className="grain relative overflow-hidden rounded-[32px] bg-cream p-5 text-ink shadow-lift sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-teal">
                    Sunrise PG · Rooms
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">Try the switches — this demo is live.</p>
                </div>
                <span className="rounded-full bg-leaf-soft px-3 py-1.5 text-xs font-extrabold text-leaf-deep">
                  LIVE
                </span>
              </div>

              <div className="space-y-3">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="flex items-center justify-between gap-3 rounded-[20px] bg-cream-bright p-4 shadow-warm"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-teal">
                        Room {room.id} · {room.name}
                      </p>
                      <p className="num mt-1 text-xs text-ink-soft">{room.rent}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={room.available}
                      aria-label={`Mark room ${room.id} ${
                        room.available ? "filled" : "available"
                      }`}
                      className={`avtog ${room.available ? "on" : ""}`}
                      onClick={() => toggleRoom(room.id)}
                    >
                      <span className="lbl lbl-avail">AVAILABLE</span>
                      <span className="lbl lbl-full">FILLED</span>
                      <span className="knob" aria-hidden="true">
                        {room.available ? "●" : "○"}
                      </span>
                    </button>
                  </div>
                ))}
              </div>

              <div
                aria-live="polite"
                className={`mt-4 flex min-h-11 items-center gap-2 rounded-[16px] bg-teal px-4 py-3 text-xs font-semibold text-cream transition-all ${
                  message ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
              >
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full bg-leaf text-[10px] text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {message || "Availability updated."}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
