import EditableText from "@/components/EditableText";
import PriorityBadge from "@/components/PriorityBadge";
import { isOverdue, type Todo } from "@/lib/todos";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onEdit, onDelete }: Props) {
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
          <EditableText
            value={todo.text}
            onSave={(next) => onEdit(todo.id, next)}
            className={`flex-1 ${todo.completed ? "line-through opacity-50" : ""}`}
          />
          {todo.dueDate && (
            <span
              className={`text-xs ${isOverdue(todo) ? "font-semibold text-red-600" : "opacity-60"}`}
            >
              {isOverdue(todo) ? "Overdue · " : "Due "}
              {todo.dueDate}
            </span>
          )}
          <PriorityBadge priority={todo.priority} />
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label={`Delete "${todo.text}"`}
            className="text-gray-400 hover:text-red-600"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
