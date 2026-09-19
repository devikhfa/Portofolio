import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// education</p>
        <h2 className="font-sans font-bold text-3xl mb-10" style={{ color: "var(--ink)" }}>Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div key={edu.school} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-lg border" style={{ background: "var(--bg-raised)", borderColor: "var(--line)" }}>
              <div>
                <h3 className="font-sans font-semibold text-base" style={{ color: "var(--ink)" }}>{edu.school}</h3>
                <p className="font-mono text-sm mt-1" style={{ color: "var(--muted)" }}>{edu.degree}</p>
              </div>
              <span className="font-mono text-sm mt-3 sm:mt-0" style={{ color: "var(--accent)" }}>{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}