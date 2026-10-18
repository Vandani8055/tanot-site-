import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { site } from "../data";

// Points shown in the card (taken from your Why Us copy)
const perks = [
  "No upfront payment",
  "Pay only for verified deliverables",
  "Keep going only if you see results",
];

export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="pb-20 lg:pb-28">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f7cc0] via-brand to-[#0b5f94] px-6 py-12 text-white shadow-2xl shadow-brand/25 sm:px-12 sm:py-16 lg:px-16">
          {/* Decoration: plain gradients + dot grid (no blur filters, no infinite animation) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 [background-image:radial-gradient(#ffffff2e_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,transparent,black_70%)]" />
            <div className="absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,#ffffff2e,transparent_65%)]" />
            <div className="absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,#4fae3b66,transparent_65%)]" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
            {/* LEFT: message + buttons */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/30">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime-300" />
                Risk-free 30-day trial
              </p>

              <h2 id="cta-title" className="text-3xl font-bold leading-[1.1] sm:text-5xl">
                Try our SEO and link building service for 30 days.{" "}
                <span className="text-lime-200">Then choose to stay.</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg text-white/80">
                See real traffic, rankings and AI visibility before you commit to anything.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.bookingUrl} variant="light" arrow>Book a call</Button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display font-bold text-white ring-1 ring-white/40 transition hover:bg-white/15"
                >
                  Contact us
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* RIGHT: offer card */}
            <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/25">
              <div className="flex items-end gap-3 border-b border-white/20 pb-5">
                <span className="font-display text-7xl font-extrabold leading-none">30</span>
                <span className="pb-1.5 text-lg font-semibold text-white/80">days to see<br />real results</span>
              </div>

              <ul className="mt-5 grid gap-3.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-medium">
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-lime-300 text-ink">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}