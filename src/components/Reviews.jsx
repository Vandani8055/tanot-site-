import { useState } from "react";
import { Play, Star } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import Button from "./Button";
import { reviews, site } from "../data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  );
}

// Video "facade": poster image + play button. The player only loads on click,
// which keeps the page fast.
function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false);
  const src = v.videoId
    ? `https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0`
    : "";

  return (
    // h-full + flex-col: the card stretches to match the right column's height
    <figure className="m-0 flex h-full flex-col rounded-3xl bg-mist p-3">
      {/* Mobile: normal 16:9. Desktop: fills all remaining height */}
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-[#1d3557] lg:aspect-auto lg:min-h-[320px] lg:flex-1">
        {playing && src ? (
          <iframe
            src={src}
            title={`Video review from ${v.name}`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            disabled={!src}
            onClick={() => setPlaying(true)}
            aria-label={src ? `Play video review from ${v.name}` : "Video review coming soon"}
            className="group absolute inset-0 grid place-items-center text-white disabled:cursor-default"
          >
            {v.poster && (
              <img
                src={v.poster}
                alt=""
                loading="lazy"
                width="1280"
                height="720"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-brand shadow-lg shadow-brand/40 transition group-hover:scale-110">
              <Play fill="currentColor" aria-hidden="true" />
            </span>
            {!src && (
              <span className="absolute bottom-4 text-sm text-slate-300">
                Video review coming soon
              </span>
            )}
          </button>
        )}
      </div>

      <figcaption className="px-2 pb-1 pt-4 text-center">
        <strong>{v.name}</strong>, {v.role}
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section">
      <div className="wrap">
        <Title
          id="reviews-title"
          title="Reviews from businesses we've helped grow"
          text="Don't take our word for it. Here's what clients say about working with Tanot Solutions."
        />

        {/* items-stretch: both columns get the same height */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <VideoCard v={reviews.featured} />
          </Reveal>

          {/* lg:grid-rows-3 → three equal-height cards that fill the column */}
          <div className="grid gap-5 lg:grid-rows-3">
            {reviews.list.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 0.12}
                as="blockquote"
                className="m-0 flex flex-col rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <Stars />
                <p className="mt-3 text-[15px] leading-relaxed">{r.quote}</p>
                {/* mt-auto pushes the author to the bottom so all cards align */}
                <footer className="mt-auto grid border-t border-line pt-4">
                  <strong>{r.name}</strong>
                  <span className="text-sm text-soft">{r.role}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Button href="#reviews" arrow>View all client reviews</Button>
          <Button href={site.clutchUrl} variant="light" target="_blank" rel="noopener noreferrer">
            See us on Clutch
          </Button>
        </Reveal>
      </div>
    </section>
  );
}