import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import Title from "./Title";
import Button from "./Button";
import Reveal from "./Reveal";
import { services, site } from "../data";

// Tabs: choose a service on the left, details animate in on the right.
export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId);

  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="wrap">
        <Title
          id="services-title"
          title="SEO services built around revenue, not vanity metrics."
          text="Pick one service or combine them. Every campaign targets authority, high-intent traffic and conversions."
        />

        {/* items-stretch: both columns always have the same height */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          {/* Tab list */}
          <Reveal className="h-full">
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Services"
              className="grid h-full auto-rows-fr gap-3"
            >
              {services.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={`relative flex items-center justify-between rounded-2xl border-[1.5px] px-6 py-5 text-left font-display text-lg font-bold transition-colors ${
                      isActive ? "border-brand text-white" : "border-line bg-white hover:border-brand"
                    }`}
                  >
                    {/* the blue pill slides between tabs */}
                    {isActive && (
                      <m.span
                        layoutId="service-pill"
                        className="absolute inset-0 rounded-2xl bg-brand"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{s.title}</span>
                    <ChevronRight className="relative z-10" size={20} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel */}
          <Reveal delay={0.1} className="h-full">
            <AnimatePresence mode="wait">
              <m.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.3 }}
                // h-full + flex-col: fills the column, so every service has the same panel size
                className="flex h-full flex-col rounded-3xl bg-mist p-7 sm:p-11"
              >
                <h3 className="text-3xl font-bold sm:text-4xl">{active.title}</h3>
                <p className="mt-4 max-w-xl text-lg text-soft">{active.text}</p>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {active.points.map((p, i) => (
                    <m.li
                      key={p}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-brand/15 text-brand">
                        <Check size={14} />
                      </span>
                      {p}
                    </m.li>
                  ))}
                </ul>

                {/* mt-auto pushes the buttons to the bottom of the panel */}
                <div className="mt-auto flex flex-wrap gap-3 pt-9">
                  <Button href={site.bookingUrl}>{active.cta}</Button>
                  <Button href="#services" variant="light">Learn about {active.title}</Button>
                </div>
              </m.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}