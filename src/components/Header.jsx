import { useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import { navLinks, site } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);       // mobile menu
  const [hidden, setHidden] = useState(false);   // hide header while scrolling down
  const [scrolled, setScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 }); // smooth progress bar

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 240);  // scrolling down => hide, up => show
    setScrolled(y > 20);
  });

  return (
    <m.header
      animate={{ y: hidden && !open ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-white/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center gap-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-extrabold leading-none" aria-label="Tanot Solutions home">
          <svg width="38" height="26" viewBox="0 0 38 26" aria-hidden="true">
            <path d="M4 18c6-14 12 6 17-6s9-8 13-8" fill="none" stroke="#4fae3b" strokeWidth="5" strokeLinecap="round" />
            <circle cx="33" cy="4" r="3" fill="#1488cc" />
          </svg>
          <span>Tanot<br /><span className="text-brand">Solutions</span></span>
        </a>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((item) => (
              <li key={item.label} className="group relative">
                <a href={item.href} className="flex items-center gap-1 rounded-lg px-3 py-2 font-medium transition hover:bg-mist">
                  {item.label}
                  {item.children && <ChevronDown size={16} className="transition group-hover:rotate-180" aria-hidden="true" />}
                </a>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-56 translate-y-2 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} className="block rounded-lg px-3 py-2 transition hover:bg-mist hover:text-brand-dark">{c.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button href={site.bookingUrl} variant="dark" arrow className="hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Book a free call
          </Button>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <m.div style={{ scaleX: progress }} className="h-[3px] origin-left bg-gradient-to-r from-brand to-leaf" />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="wrap max-h-[75vh] overflow-y-auto py-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-lg font-bold">{item.label}</a>
                  {item.children && (
                    <ul className="mb-2 ml-4 border-l-2 border-line pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} onClick={() => setOpen(false)} className="block py-2 text-soft">{c.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-3"><Button href={site.bookingUrl} variant="dark" arrow className="w-full">Book a free call</Button></li>
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </m.header>
  );
}
