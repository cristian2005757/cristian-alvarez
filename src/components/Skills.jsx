import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(skills).map(([group, items]) => (
        <div
          key={group}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
        >
          <h3 className="text-base font-semibold">{group}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
