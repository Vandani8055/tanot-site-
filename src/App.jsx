// App.jsx — the whole page is just these sections in order.
// Header + Hero load first. Everything else is "lazy": downloaded as separate small files,
// so the first screen appears fast (this is what Lighthouse measures).
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Stats = lazy(() => import("./components/Stats"));
const Clients = lazy(() => import("./components/Clients"));
const Reviews = lazy(() => import("./components/Reviews"));
const Services = lazy(() => import("./components/Services"));
const CaseStudy = lazy(() => import("./components/CaseStudy"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const Awards = lazy(() => import("./components/Awards"));
const Founder = lazy(() => import("./components/Founder"));
const Team = lazy(() => import("./components/Team"));
const FeaturedOn = lazy(() => import("./components/FeaturedOn"));
const Faq = lazy(() => import("./components/Faq"));
const Blog = lazy(() => import("./components/Blog"));
const Cta = lazy(() => import("./components/Cta"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));

export default function App() {
  // Smooth scrolling (Lenis) — also loaded lazily
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis, frame, cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.15, anchors: { offset: -80 } });
      const loop = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return (
    <div id="top">
      <a href="#main" className="fixed left-3 top-[-60px] z-[100] rounded-lg bg-ink px-4 py-2 text-white focus:top-3">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Suspense fallback={null}>
          <Stats />
          <Clients />
          <Reviews />
          <Services />
          <CaseStudy />
          <WhyUs />
          <Awards />
          <Founder />
          <Team />
          <FeaturedOn />
          <Faq />
          <Blog />
          <Cta />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}
