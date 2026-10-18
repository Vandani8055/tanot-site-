import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import Avatar from "./Avatar";
import Button from "./Button";
import Reveal from "./Reveal";
import { founder, site } from "../data";

export default function Founder() {
  // Parallax: the photo moves slightly slower than the page inside its frame
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section aria-labelledby="founder-title" className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div ref={ref} className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl bg-mist">
            <m.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%]">
              <Avatar src={founder.image} name={founder.name} className="h-full w-full object-cover" />
            </m.div>
          </div>
        </Reveal>

        <div>
          <Reveal><h2 id="founder-title" className="text-4xl font-bold sm:text-5xl">{founder.title}</h2></Reveal>
          {founder.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}><p className="mt-5 max-w-2xl text-lg text-soft">{p}</p></Reveal>
          ))}
          <Reveal delay={0.3} className="mt-8">
            <p><strong>{founder.name}</strong><br /><span className="text-soft">{founder.role}</span></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.bookingUrl} arrow>Book a call with Renu</Button>
              <Button href={founder.linkedin} variant="light" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
