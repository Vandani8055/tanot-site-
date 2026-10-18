import { m } from "framer-motion";
import Reveal from "./Reveal";
import Button from "./Button";
import CountUp from "./CountUp";
import { caseStudy } from "../data";

export default function CaseStudy() {
  const max = Math.max(...caseStudy.chart);

  return (
    <section id="case-study" aria-labelledby="case-title" className="section bg-mist">
      <div className="wrap">
        <Reveal>
          <h2 id="case-title" className="mb-12 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h2>
        </Reveal>

        {/* items-stretch: chart card and right column always end at the same height */}
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Bars grow upward one after another.
              h-80 -> min-h-72: a minimum on mobile, but on desktop the card
              stretches to the height of the right column. */}
          <div
            role="img"
            aria-label="Bar chart of monthly visitors rising from 0 to 6,200 over 8 months"
            className="flex min-h-72 items-end gap-2 rounded-3xl bg-white p-6 shadow-xl shadow-ink/5 sm:gap-4 sm:p-8"
          >
            {caseStudy.chart.map((v, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <m.div
                  className="w-full rounded-t-lg bg-gradient-to-t from-brand to-leaf"
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${Math.max((v / max) * 88, 3)}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-xs text-soft">M{i + 1}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <Reveal><p className="text-lg text-soft">{caseStudy.text}</p></Reveal>

            <dl className="my-6 grid gap-3">
              {caseStudy.metrics.map((metric, i) => (
                <Reveal
                  key={metric.label}
                  delay={i * 0.1}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4"
                >
                  <dt className="text-soft">{metric.label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-brand">
                    0 → <CountUp to={metric.to} suffix={metric.suffix} decimals={metric.decimals} />
                  </dd>
                </Reveal>
              ))}
            </dl>

            {/* mt-auto keeps the buttons at the bottom edge, in line with the chart's bottom */}
            <Reveal className="mt-auto flex flex-wrap gap-3">
              <Button href="#case-study">Read full case study</Button>
              <Button href="#case-study" variant="light">All case studies</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}