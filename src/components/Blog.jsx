import Title from "./Title";
import Reveal from "./Reveal";
import { posts } from "../data";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

// Cover image: set `image` in data.js (e.g. "/images/blog/geo-agencies.webp").
// No image = a gradient cover is shown.
export default function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-title" className="section">
      <div className="wrap">
        <Title center id="blog-title" title="Latest SEO and link building insights" />
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} as="article" delay={i * 0.12}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand to-leaf">
                {p.image && (
                  <img src={p.image} alt="" loading="lazy" width="600" height="320"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                )}
                <span className="absolute right-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-bold text-white">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug">
                  {/* the ::after makes the whole card clickable */}
                  <a href={p.href} className="text-brand-dark after:absolute after:inset-0">{p.title}</a>
                </h3>
                <p className="mt-4 text-sm text-soft">
                  {p.author} · <time dateTime={p.date}>{formatDate(p.date)}</time>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
