const navLinks = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Stack",     href: "#stack"     },
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 w-full z-50 border-b"
      style={{ background: "rgba(10,14,19,0.88)", backdropFilter: "blur(8px)", borderColor: "var(--line)" }}
    >
      <nav className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src="assets/profile.png"
            alt="Ikhfa"
            width={32}
            height={32}
            className="rounded-full object-cover"
            style={{ border: "2px solid var(--accent)", width: 32, height: 32 }}
          />
          <span className="font-mono font-semibold text-sm" style={{ color: "var(--ink)" }}>
            <span style={{ color: "var(--accent)" }}>Ikhfa Risyah Aprilia</span>
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm" style={{ color: "var(--muted)" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            className="text-sm font-semibold px-4 py-2"
            style={{ background: "var(--accent)", color: "#06110f", borderRadius: "3px" }}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}