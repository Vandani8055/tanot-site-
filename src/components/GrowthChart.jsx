import { m } from "framer-motion";
import CountUp from "./CountUp";
import { caseStudy } from "../data";

// Small line chart that draws itself — uses the real "0 → 6,200 visitors" case study numbers.
export default function GrowthChart() {
  const data = caseStudy.chart;
  const W = 420, H = 150, PAD = 14;
  const max = Math.max(...data);
  const pts = data.map((v, i) => [PAD + (i * (W - PAD * 2)) / (data.length - 1), H - PAD - (v / max) * (H - PAD * 2)]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${W - PAD} ${H - PAD} L${PAD} ${H - PAD} Z`;
  const [ex, ey] = pts[pts.length - 1];

  return (
    <figure className="rounded-2xl bg-white/80 p-5 shadow-xl shadow-ink/5 ring-1 ring-line backdrop-blur">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-soft">Monthly visitors, HR company client</p>
          <p className="font-display text-4xl font-extrabold"><CountUp to={6200} /></p>
        </div>
        <p className="rounded-full bg-leaf/15 px-3 py-1 text-sm font-bold text-leaf">8 months</p>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full overflow-visible" role="img"
        aria-label="Line chart: monthly visitors grew from 0 to 6,200 in 8 months">
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4fae3b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4fae3b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <m.path d={area} fill="url(#fill)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8 }} />
        <m.path d={line} fill="none" stroke="#4fae3b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }} />
        <circle cx={ex} cy={ey} r="6" fill="#1488cc" />
        <m.circle cx={ex} cy={ey} fill="#1488cc" initial={{ r: 6, opacity: 0.5 }}
          animate={{ r: 16, opacity: 0 }} transition={{ duration: 1.8, repeat: Infinity, delay: 2.3 }} />
      </svg>
    </figure>
  );
}
