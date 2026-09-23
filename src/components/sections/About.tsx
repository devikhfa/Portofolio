import { about } from "@/lib/about";

export default function About() {
  return (
    <section id="about" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// about</p>
        <h2 className="font-sans font-bold text-3xl mb-8" style={{ color: "var(--ink)" }}>
          {about.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base max-w-[65ch]" style={{ color: "var(--muted)", lineHeight: "1.8" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((highlight, index) => (
              <div key={index} className="border p-5 rounded-sm transition-all duration-300 hover:-translate-y-1" style={{ borderColor: "var(--line)", backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
                <p className="font-mono text-lg font-bold mb-2" style={{ color: "var(--accent)" }}>
                  {highlight.value}
                </p>

                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
