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
