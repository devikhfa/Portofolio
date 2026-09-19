import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t" style={{ borderColor: "var(--line)", paddingLeft: "var(--section-px)", paddingRight: "var(--section-px)" }}>
      <div className="w-full">
        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// projects</p>
        <h2 className="font-sans font-bold text-3xl mb-10" style={{ color: "var(--ink)" }}>Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div key={project.title} className="p-6 rounded-lg border transition-colors project-card" style={{ background: "var(--bg-raised)", borderColor: "var(--line)" }}>
              <h3 className="font-sans font-semibold text-lg mb-2" style={{ color: "var(--ink)" }}>{project.title}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted)", lineHeight: "1.7" }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 border" style={{ borderColor: "var(--line)", color: "var(--muted)", borderRadius: "3px" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-mono">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "var(--accent)" }}>
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: "var(--muted)" }}>
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}