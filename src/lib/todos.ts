export type Priority = "low" | "medium" | "high";

export const PRIORITIES: readonly Priority[] = ["low", "medium", "high"];

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null; // ISO date (YYYY-MM-DD)
};

export function createTodo(
  text: string,
  priority: Priority = "medium",
  dueDate: string | null = null,
): Todo {
  return {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    priority,
    dueDate,
  };
}

export function isOverdue(todo: Todo, today: Date = new Date()): boolean {
  if (!todo.dueDate || todo.completed) return false;
  const todayIso = today.toISOString().slice(0, 10);
  return todo.dueDate < todayIso;
}

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}

export function clearCompleted(todos: Todo[]): Todo[] {
  return todos.filter((t) => !t.completed);
}
