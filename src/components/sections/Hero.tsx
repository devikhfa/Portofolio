import { siteConfig, heroTags, heroStats, tickerItems } from "@/lib/data";

export default function Hero() {
  return (
    <>
      <section id="hero" className="pt-32 pb-16" style={{ background: "var(--bg)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">

          {/* ── LEFT ── */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <img src="/assets/uty.png" alt="UTY" className="object-contain" style={{ height: "50px", width: "auto" }} />
            </div>

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
              <a href="#contact" className="font-mono text-sm px-6 py-3 border" style={{ borderColor: "var(--line)", color: "var(--ink)", borderRadius: "3px" }}>
                &gt;_ Contact Me
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

          {/* ── RIGHT — Terminal Card ── */}
          <div className="animate-float rounded-lg overflow-hidden border" style={{ background: "var(--bg-raised)", borderColor: "var(--line)" }}>
            {/* Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--line)" }}>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: "#2a333c" }} />)}
              </div>
              <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>profile.ts</span>
              <div />
            </div>

            {/* Code */}
            <div className="px-5 py-6 font-mono text-[13px] leading-7">
              <span style={{ color: "#57697a" }}>// profile.ts — Developer Identity</span><br />
              <span style={{ color: "#c586c0" }}>const</span>{" "}
              <span style={{ color: "#7fd0ff" }}>profile</span>{" = "}
              <span style={{ color: "#4ec9b0" }}>{"{"}</span><br />
              &nbsp;&nbsp;<span style={{ color: "var(--ink)" }}>name</span>{": "}
              <span style={{ color: "var(--amber)" }}>&quot;{siteConfig.name}&quot;</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "var(--ink)" }}>role</span>{": "}
              <span style={{ color: "var(--amber)" }}>&quot;{siteConfig.role}&quot;</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "var(--ink)" }}>stack</span>{": "}
              <span style={{ color: "#4ec9b0" }}>[</span>
              {siteConfig.terminalStack.map((s, i) => (
                <span key={s}>
                  <span style={{ color: "var(--amber)" }}>&quot;{s}&quot;</span>
                  {i < siteConfig.terminalStack.length - 1 ? ", " : ""}
                </span>
              ))}
              <span style={{ color: "#4ec9b0" }}>]</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "var(--ink)" }}>openToWork</span>{": "}
              <span style={{ color: "#c586c0" }}>true</span>,<br />
              <span style={{ color: "#4ec9b0" }}>{"}"}</span><br /><br />
              <span style={{ color: "#57697a" }}>// ready to ship</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 border-t" style={{ borderColor: "var(--line)" }}>
              {heroStats.map((s) => (
                <div key={s.label} className="py-4 text-center border-r last:border-r-0" style={{ borderColor: "var(--line)" }}>
                  <b className="block font-mono text-lg" style={{ color: "var(--accent)" }}>{s.value}</b>
                  <span className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>{s.label}</span>
                </div>
              ))}
            </div>
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