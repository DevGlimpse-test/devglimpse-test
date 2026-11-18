import EditableText from "@/components/EditableText";
import PriorityBadge from "@/components/PriorityBadge";
import { isOverdue, type Todo } from "@/lib/todos";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onEdit, onDelete }: Props) {
  const overdue = isOverdue(todo);

  return (
    <li className="flex items-center gap-2 px-3 py-2">
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
        <span className={`text-xs ${overdue ? "font-semibold text-red-600" : "opacity-60"}`}>
          {overdue ? "Overdue · " : "Due "}
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
  );
}
