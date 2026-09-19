import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
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