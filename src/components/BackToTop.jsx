import { useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Round button that pops in after you scroll down a bit
export default function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 800));

  return (
    <AnimatePresence>
      {show && (
        <m.a href="#top" aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:bg-brand">
          <ArrowUp size={20} />
        </m.a>
      )}
    </AnimatePresence>
  );
}
