import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// about</p>
        <h2 className="font-sans font-bold text-3xl mb-6" style={{ color: "var(--ink)" }}>About Me</h2>
        <p className="text-base max-w-[60ch]" style={{ color: "var(--muted)", lineHeight: "1.8" }}>
          {siteConfig.desc}
        </p>
      </div>
    </section>
  );
}
