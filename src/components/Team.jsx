import Title from "./Title";
import Reveal from "./Reveal";
import Avatar from "./Avatar";
import { team } from "../data";

// To show photos, set `image` for each person in data.js
export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="section bg-mist">
      <div className="wrap">
        <Title center id="team-title" title="The team behind your results" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal key={p.name} as="li" delay={i * 0.1}
              className="group rounded-3xl bg-white p-3 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/10">
              <div className="overflow-hidden rounded-2xl">
                <Avatar src={p.image} name={p.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="mb-3 text-sm text-soft">{p.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
