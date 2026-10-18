import Reveal from "./Reveal";

// Section heading + optional intro text. `id` connects it to the section for screen readers.
export default function Title({ id, title, text, center = false }) {
  return (
    <Reveal className={`mb-12 max-w-3xl lg:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <h2 id={id} className="text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-soft">{text}</p>}
    </Reveal>
  );
}
