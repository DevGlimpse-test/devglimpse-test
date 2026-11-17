import type { Todo } from "@/lib/todos";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p className="py-6 text-center text-sm opacity-60">No todos yet.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
      {todos.map((todo) => (
        <li key={todo.id} className="px-3 py-2">
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
