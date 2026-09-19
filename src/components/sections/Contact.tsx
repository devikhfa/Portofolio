import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// contact</p>
        <h2 className="font-sans font-bold text-3xl mb-6" style={{ color: "var(--ink)" }}>Get In Touch</h2>
        <div className="flex flex-col gap-3">
          <a href={`mailto:${siteConfig.email}`} className="font-mono text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--accent)" }}>
            {siteConfig.email}
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--muted)" }}>
            GitHub →
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--muted)" }}>
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
