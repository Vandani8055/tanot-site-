import { CheckCircle2 } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import Button from "./Button";
import { whyUs, site } from "../data";

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="why-title" className="section">
      <div className="wrap">
        {/* Same heading style as the Reviews and Services sections */}
        <Title id="why-title" title={whyUs.title} text={whyUs.text} />

        {/* 1 column on mobile, 2 on tablet, 3 on desktop. Rows are always equal height */}
        <ul className="m-0 grid list-none auto-rows-fr gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 0.1}
              className="group h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl hover:shadow-brand/10"
            >
              {/* Icon sits in a soft square that fills with the brand color on hover */}
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                <CheckCircle2 size={24} aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-soft">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button href={site.bookingUrl} arrow>Talk to our team</Button>
        </Reveal>
      </div>
    </section>
  );
}