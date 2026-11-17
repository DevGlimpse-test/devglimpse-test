import type { Todo } from "@/lib/todos";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <p className="py-6 text-center text-sm opacity-60">No todos yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-3 px-3 py-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            aria-label={`Mark "${todo.text}" as ${todo.completed ? "not done" : "done"}`}
            className="h-4 w-4"
          />
          <span
            className={`flex-1 ${todo.completed ? "line-through opacity-50" : ""}`}
          >
            {todo.text}
          </span>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label={`Delete "${todo.text}"`}
            className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
