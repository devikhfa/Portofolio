import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--line)" }}>
      <div className="w-full px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs uppercase" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} {siteConfig.name.toUpperCase()}
        </p>
        <p className="font-mono text-xs uppercase" style={{ color: "var(--muted)" }}>
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}