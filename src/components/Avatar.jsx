import { useState } from "react";

// Shows the photo if it loads, otherwise a tidy initials tile (never a broken image icon).
export default function Avatar({ src, name, className = "" }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  if (src && !failed) {
    return <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} className={className} />;
  }
  return (
    <div role="img" aria-label={name}
      className={`grid place-items-center bg-gradient-to-br from-brand/20 to-leaf/20 font-display text-5xl font-bold text-brand-dark ${className}`}>
      {initials}
    </div>
  );
}
