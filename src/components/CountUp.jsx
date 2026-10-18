import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// Counts from 0 up to `to` when it scrolls into view. e.g. <CountUp to={150} suffix="+" />
export default function CountUp({ to, suffix = "", decimals = 0, duration = 2.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals, duration]);

  return <span ref={ref}>{0}{suffix}</span>;
}
