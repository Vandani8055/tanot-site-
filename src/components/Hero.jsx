import { lazy, Suspense } from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import LeadForm from "./LeadForm";
import { hero, site } from "../data";

// The chart is decoration, so it loads separately and doesn't delay the first paint
const GrowthChart = lazy(() => import("./GrowthChart"));

// Headline split into words; each slides up using CSS (see .word in index.css)
const words = [
  ...hero.titleStrong.split(" ").map((w) => ({ w, brand: true })),
  ...hero.titleRest.split(" ").map((w) => ({ w, brand: false })),
];

// Short proof points under the buttons (taken from your Why Us section)
const proof = ["No upfront payment", "100% transparent process", "AI-first SEO strategy"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-mist pb-20 pt-32 lg:pb-28 lg:pt-40">
      {/* Decorative background: plain gradients (no heavy blur filters) so scrolling stays smooth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(#1488cc33_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#1488cc40,transparent_65%)]" />
        <div className="absolute -right-40 top-32 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#4fae3b33,transparent_65%)]" />
      </div>

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* LEFT: message */}
        <div>
          {/* Eyebrow badge */}
          <p className="fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-md shadow-ink/5 ring-1 ring-line">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-leaf" />
            SEO for Google &amp; AI search
          </p>

          <h1 id="hero-title" className="text-[clamp(2.6rem,5.4vw,4.75rem)] font-extrabold leading-[1.04]">
            {words.map((p, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span className={`word ${p.brand ? "text-brand" : ""}`} style={{ "--i": i }}>{p.w}</span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-soft" style={{ "--d": "0.2s" }}>
            {hero.text}
          </p>

          <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ "--d": "0.3s" }}>
            <Button href={site.bookingUrl} arrow>Book a free strategy call</Button>
            <Button href="#case-study" variant="light">See client results</Button>
          </div>

          {/* Proof points */}
          <ul className="fade-up mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium" style={{ "--d": "0.35s" }}>
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href={site.clutchUrl} target="_blank" rel="noopener noreferrer"
            aria-label="Reviewed on Clutch, 5.0 rating"
            className="fade-up mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-sm shadow-lg shadow-ink/5 ring-1 ring-line transition hover:-translate-y-0.5"
            style={{ "--d": "0.4s" }}
          >
            <span className="text-soft">Reviewed on</span>
            <strong className="font-display text-xl">Clutch</strong>
            <span aria-hidden="true" className="tracking-widest text-red-500">★★★★★</span>
            <span className="text-soft">5.0 rating</span>
          </a>
        </div>

        {/* RIGHT: form + chart */}
        <div className="fade-up relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-none" style={{ "--d": "0.15s" }}>
          {/* Soft gradient panel behind the form so it stands out */}
          <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/15 via-transparent to-leaf/20" />

          <LeadForm />

          {/* min-h reserves the space so the page doesn't jump when the chart arrives */}
          <div className="mt-5 min-h-[200px]">
            <Suspense fallback={null}><GrowthChart /></Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}