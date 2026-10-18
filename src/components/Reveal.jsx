import { m } from "framer-motion";

// Wrap anything in <Reveal> and it softly slides in when scrolled into view.
// delay = seconds to wait (use it to stagger cards), y = start offset in px
export default function Reveal({ children, delay = 0, y = 32, as = "div", className = "" }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
