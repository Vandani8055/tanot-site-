import Title from "./Title";
import { clients } from "../data";

// Two rows that scroll sideways forever. The list is rendered twice so the loop has no gap.
// Logos: set `logo` in data.js (e.g. "/images/clients/kommo.svg"). No logo = the name shows as text.
function Row({ items, reverse = false }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className={`flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {[...items, ...items].map((c, i) => (
          <li key={i} aria-hidden={i >= items.length}
            className="grid h-20 min-w-48 place-items-center rounded-2xl bg-white px-8 font-display text-xl font-bold text-soft shadow-sm ring-1 ring-line">
            {c.logo ? (
              <img src={c.logo} alt={c.name} loading="lazy" width="140" height="40"
                className="h-9 w-auto max-w-[9rem] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
            ) : (
              c.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);
  return (
    <section aria-labelledby="clients-title" className="section bg-mist">
      <div className="wrap">
        <Title center id="clients-title" title="Trusted by 150+ brands across SaaS, healthcare, marketing and enterprise" />
      </div>
      <div className="grid gap-4">
        <Row items={clients.slice(0, half)} />
        <Row items={clients.slice(half)} reverse />
      </div>
      <p className="mt-8 text-center text-soft">and many more.</p>
    </section>
  );
}
