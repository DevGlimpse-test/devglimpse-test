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
