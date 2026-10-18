import Title from "./Title";
import Reveal from "./Reveal";
import { featuredOn } from "../data";

export default function FeaturedOn() {
  return (
    <section aria-labelledby="featured-title" className="section !py-16 lg:!py-20">
      <div className="wrap">
        <Title center id="featured-title" title="As featured on" />
        <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {featuredOn.map((name, i) => (
            <Reveal key={name} as="li" delay={i * 0.08}
              className="font-display text-3xl font-extrabold text-soft/70 transition hover:text-ink sm:text-4xl">
              {name}
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-soft">and many more.</p>
      </div>
    </section>
  );
}
