type Props = {
  value: string;
  onChange: (next: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search todos…"
      aria-label="Search todos"
      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
    />
  );
}
