"use client";

import { FormEvent, useState } from "react";

type Role = "seeker" | "owner";

export default function GetStartedForm() {
  const [role, setRole] = useState<Role>("seeker");
  const [submitted, setSubmitted] = useState(false);

  function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const interest = {
      role,
      phone: String(data.get("phone") || ""),
      savedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem("pg-finder-interest", JSON.stringify(interest));
    } catch {
      // The confirmation still works when storage is blocked by browser privacy settings.
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-[22px] bg-teal p-5 text-cream shadow-warm lg:w-[360px]"
        role="status"
      >
        <span
          className="grid size-10 place-items-center rounded-full bg-leaf text-lg font-bold text-white"
          aria-hidden="true"
        >
          ✓
        </span>
        <p className="mt-4 font-display text-2xl font-bold">Interest saved.</p>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          Your {role === "seeker" ? "room search" : "PG listing"} preference is saved on this
          device for the product preview.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-bold text-terracotta-soft underline decoration-terracotta-soft/50 underline-offset-4"
          onClick={() => setSubmitted(false)}
        >
          Change details
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-[22px] bg-cream-bright p-4 shadow-warm lg:w-[390px]"
      onSubmit={submitInterest}
    >
      <fieldset>
        <legend className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-ink-soft">
          I am a
        </legend>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-pressed={role === "seeker"}
            onClick={() => setRole("seeker")}
            className={`min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${
              role === "seeker"
                ? "bg-terracotta text-white"
                : "bg-sand text-ink-soft hover:bg-sand-deep"
            }`}
          >
            PG seeker
          </button>
          <button
            type="button"
            aria-pressed={role === "owner"}
            onClick={() => setRole("owner")}
            className={`min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${
              role === "owner"
                ? "bg-teal text-cream"
                : "bg-sand text-ink-soft hover:bg-sand-deep"
            }`}
          >
            PG owner
          </button>
        </div>
      </fieldset>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.14em] text-ink-soft">
          Mobile number
        </span>
        <span className="flex min-h-12 items-center rounded-[14px] border-2 border-sand-deep bg-cream px-3 focus-within:border-terracotta focus-within:ring-4 focus-within:ring-terracotta/10">
          <span className="border-r border-sand-deep pr-3 text-sm font-bold text-teal">+91</span>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit number"
            required
            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-ink-soft/55"
          />
        </span>
      </label>

      <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-[11px] leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-4 shrink-0 accent-terracotta"
        />
        <span>
          I consent to PG Finder saving these details on this device for this product preview.
        </span>
      </label>

      <button
        type="submit"
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-7 text-sm font-bold text-white shadow-[0_6px_18px_rgba(226,114,91,0.3)] transition-transform hover:-translate-y-0.5"
      >
        Save my interest →
      </button>
    </form>
  );
}
