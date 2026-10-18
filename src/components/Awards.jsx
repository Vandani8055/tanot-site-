import { Award } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import { awards } from "../data";

// To show real award photos, set `image` for each award in data.js
export default function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="section bg-mist">
      <div className="wrap">
        <Title center id="awards-title" title="The industry's top-rated SEO agency" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} as="li" delay={(i % 3) * 0.1}
              className="flex items-center gap-5 rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              {a.image ? (
                <img src={a.image} alt={a.title} loading="lazy" width="80" height="80" className="h-20 w-20 flex-none rounded-xl object-cover" />
              ) : (
                <span className="grid h-16 w-16 flex-none place-items-center rounded-full bg-mist text-brand"><Award aria-hidden="true" /></span>
              )}
              <h3 className="text-lg font-bold leading-snug">{a.title}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
