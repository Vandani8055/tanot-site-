import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats } from "../data";

export default function Stats() {
  return (
    <section aria-label="Our numbers" className="bg-ink py-14 text-white">
      <dl className="wrap grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="flex flex-col-reverse border-l-4 border-leaf pl-5">
            <dt className="mt-1 text-slate-300">{s.label}</dt>
            <dd className="font-display text-5xl font-extrabold sm:text-6xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
