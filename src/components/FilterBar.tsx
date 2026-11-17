import { FILTERS, type Filter } from "@/lib/todos";

type Props = {
  filter: Filter;
  onChange: (filter: Filter) => void;
  activeCount: number;
};

const LABELS: Record<Filter, string> = {
  all: "All",
  active: "Active",
  completed: "Completed",
};

export default function FilterBar({ filter, onChange, activeCount }: Props) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="opacity-70">
        {activeCount} {activeCount === 1 ? "item" : "items"} left
      </span>
      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onChange(f)}
            aria-pressed={filter === f}
            className={`rounded px-2 py-1 ${
              filter === f ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {LABELS[f]}
          </button>
        ))}
      </div>
    </div>
  );
}
