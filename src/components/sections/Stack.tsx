import { skills } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// stack</p>
        <h2 className="font-sans font-bold text-3xl mb-10" style={{ color: "var(--ink)" }}>Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="p-5 rounded-lg border" style={{ background: "var(--bg-raised)", borderColor: "var(--line)" }}>
              <h3 className="font-mono text-sm mb-4" style={{ color: "var(--accent)" }}>// {group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm px-3 py-1 border" style={{ borderColor: "var(--line)", color: "var(--muted)", borderRadius: "3px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}