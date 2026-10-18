import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "website", label: "Website URL", type: "url", autoComplete: "url", placeholder: "https://" },
  { name: "message", label: "How can we help?", type: "text" },
];

const inputClass =
  "w-full rounded-xl border-[1.5px] border-line bg-white px-4 py-3 font-normal outline-none transition placeholder:text-soft/50 focus:border-brand focus:ring-4 focus:ring-brand/15";

export default function LeadForm() {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace this fake delay with a real call, e.g.
    // await fetch("/api/lead", { method: "POST", body: JSON.stringify(values) })
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-ink/10 ring-1 ring-line sm:p-9">
      {status === "done" ? (
        <div role="status" className="fade-up py-14 text-center">
          <CheckCircle2 size={56} className="mx-auto text-leaf" />
          <h2 className="mt-4 text-3xl font-bold">Thanks, we've got it.</h2>
          <p className="mt-2 text-soft">We'll review your site and email your free SEO strategy within 2 working days.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <h2 className="text-3xl font-bold">Get your free SEO strategy</h2>
          <p className="text-soft">Tell us about your goals and we'll show you where your organic growth can improve.</p>

          {fields.map((f) => (
            <label key={f.name} className="grid gap-1.5 text-sm font-bold">
              <span>{f.label} <span className="text-red-500" aria-hidden="true">*</span></span>
              <input required name={f.name} type={f.type} autoComplete={f.autoComplete}
                placeholder={f.placeholder} value={values[f.name] || ""} onChange={onChange} className={inputClass} />
            </label>
          ))}

          <button disabled={status === "sending"}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark active:scale-[0.98] disabled:opacity-70">
            {status === "sending" ? <><Loader2 className="animate-spin" size={20} /> Sending…</> : "Get my free strategy"}
          </button>
        </form>
      )}
    </div>
  );
}
