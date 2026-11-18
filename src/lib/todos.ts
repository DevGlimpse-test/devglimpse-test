export type Priority = "low" | "medium" | "high";

export const PRIORITIES: readonly Priority[] = ["low", "medium", "high"];

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
};

export function createTodo(text: string, priority: Priority = "medium"): Todo {
  return {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    priority,
  };
}

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}

export function clearCompleted(todos: Todo[]): Todo[] {
  return todos.filter((t) => !t.completed);
}
