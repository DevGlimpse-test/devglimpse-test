import type { Todo } from "@/lib/todos";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
};

export default function TodoList({ todos, onToggle }: Props) {
  if (todos.length === 0) {
    return <p className="py-6 text-center text-sm opacity-60">No todos yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            aria-label={`Mark "${todo.text}" as done`}
          />
          <span className={todo.completed ? "line-through opacity-50" : ""}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
