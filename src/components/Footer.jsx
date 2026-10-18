import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { footer, site } from "../data";

// In-page links where a section exists; other links become /page-name (create those pages later)
const anchors = { Home: "#top", "About Us": "#about", Blog: "#blog", "Case Studies": "#case-study", "Client Reviews": "#reviews", Contact: "#contact", "Link Building": "#services" };
const hrefFor = (label) => anchors[label] || "/" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-ink pt-20 text-slate-300">
      <div className="wrap grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl font-extrabold text-white">Tanot <span className="text-brand">Solutions</span></p>
          <p className="mt-4 max-w-xs">{footer.about}</p>
          <div className="mt-6 flex gap-3">
            {[[Linkedin, "LinkedIn"], [Facebook, "Facebook"], [Instagram, "Instagram"]].map(([Icon, label]) => (
              <a key={label} href="#" aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 transition hover:border-brand hover:bg-brand hover:text-white">
                <Icon size={18} />
              </a>
            ))}
            <a href={`mailto:${site.email}`} aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 transition hover:border-brand hover:bg-brand hover:text-white">
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-6 text-white">Sales inquiry</p>
          <a href={`mailto:${site.email}`} className="font-bold text-white hover:underline">{site.email}</a>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-4 text-base font-bold text-white">{col.title}</h3>
            <ul className="grid gap-3">
              {col.links.map((l) => (
                <li key={l}><a href={hrefFor(l)} className="transition hover:text-white hover:underline">{l}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" /> {site.location}</p>
          <p className="flex gap-5"><a href="#" className="hover:text-white">Privacy Policy</a><a href="#" className="hover:text-white">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
