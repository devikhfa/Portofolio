import { siteConfig, heroTags, heroStats, tickerItems } from "@/lib/data";

export default function Hero() {
  return (
    <>
      <section id="hero" className="pt-32 pb-16" style={{ background: "var(--bg)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">

          {/* ── LEFT ── */}
          <div>

            {/* Name */}
            <h1 className="font-sans font-extrabold text-5xl lg:text-6xl leading-tight tracking-tight mb-4" style={{ color: "var(--ink)" }}>
              Hi, I&apos;m {siteConfig.name}
            </h1>

            {/* Role */}
            <p className="font-mono text-lg mb-5" style={{ color: "var(--accent)" }}>
              {siteConfig.role}
            </p>

            {/* Desc */}
            <p className="text-base mb-6 max-w-[50ch]" style={{ color: "var(--muted)", lineHeight: "1.7" }}>
              {siteConfig.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {heroTags.map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 border" style={{ borderColor: "var(--line)", background: "var(--bg-raised)", color: "var(--ink)", borderRadius: "3px" }}>
                  <span style={{ color: "var(--amber)", marginRight: "6px" }}>▸</span>{t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a href="#projects" className="text-sm font-semibold px-6 py-3" style={{ background: "var(--accent)", color: "#06110f", borderRadius: "3px" }}>
                See My Projects
              </a>
              <a href="#contact" className="font-mono text-sm px-6 py-3 border" style={{ borderColor: "var(--line)", color: "var(--ink)", borderRadius: "3px" }}> Contact Me
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "gh", href: siteConfig.github   },
                { label: "in", href: siteConfig.linkedin  },
                { label: "@",  href: `mailto:${siteConfig.email}` },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-icon w-9 h-9 flex items-center justify-center border font-mono text-xs rounded-full transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        
          <div
            className="animate-float rounded-lg -translate-y-27">
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="w-120 h-150 object-cover"/>
          </div>

        </div>
      </section>

      {/* ── TICKER ── */}
      <div
        className="overflow-hidden whitespace-nowrap py-3 border-y"
        style={{ background: "var(--accent)", borderColor: "var(--line)" }}
      >
        <div className="animate-ticker inline-block">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-mono font-semibold text-sm mx-7" style={{ color: "#06110f" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}