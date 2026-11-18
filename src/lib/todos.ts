export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export function createTodo(text: string): Todo {
  return {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
  };
}

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}

export function clearCompleted(todos: Todo[]): Todo[] {
  return todos.filter((t) => !t.completed);
}
