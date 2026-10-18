import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import Button from "./Button";
import { faqs, site } from "../data";

// Accordion: one answer open at a time, with smooth height animation.
export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section aria-labelledby="faq-title" className="section bg-mist">
      <div className="wrap">
        {/* Same heading style as Reviews, Services and Why Us */}
        <Title
          id="faq-title"
          title="Questions to ask before hiring an SEO agency"
          text="Can't find your answer? We're happy to walk you through it on a quick call."
        />

        {/* Single column: nothing to line up, so nothing looks uneven while items open */}
        <div className="grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={f.q}
                delay={i * 0.06}
                className={`rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-brand shadow-lg shadow-brand/10" : "border-line"
                }`}
              >
                <h3>
                  <button
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-bold"
                  >
                    {f.q}
                    <m.span animate={{ rotate: isOpen ? 180 : 0 }} className="flex-none text-brand">
                      <ChevronDown aria-hidden="true" />
                    </m.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-soft">{f.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        {/* CTA banner: text on the left, button on the right (stacked on mobile) */}
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-white sm:p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold sm:text-3xl">Still deciding?</h3>
            <p className="mt-3 text-slate-300">
              Get a free, no-obligation audit showing your website's current position and a
              step-by-step roadmap to 2X your traffic and leads.
            </p>
          </div>
          <Button href={site.bookingUrl} arrow className="flex-none">
            Claim your free SEO growth plan
          </Button>
        </Reveal>
      </div>
    </section>
  );
}