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
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}

export function deleteTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}
