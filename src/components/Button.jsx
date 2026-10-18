import { ArrowRight } from "lucide-react";

const styles = {
  primary: "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark",
  light: "bg-white text-ink ring-1 ring-line hover:ring-brand",
  dark: "bg-ink text-white hover:bg-brand",
};

// variant: "primary" | "light" | "dark"   arrow: show the → icon
export default function Button({ href = "#", variant = "primary", arrow = false, className = "", children, ...rest }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </a>
  );
}
