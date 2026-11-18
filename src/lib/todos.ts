export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  dueDate: string | null; // ISO date (YYYY-MM-DD)
};

export function createTodo(text: string, dueDate: string | null = null): Todo {
  return {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    dueDate,
  };
}

export function isOverdue(todo: Todo, today: Date = new Date()): boolean {
  if (!todo.dueDate || todo.completed) return false;
  const todayIso = today.toISOString().slice(0, 10);
  return todo.dueDate < todayIso;
}
