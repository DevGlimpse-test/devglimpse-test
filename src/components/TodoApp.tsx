"use client";

import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createTodo, deleteTodo, toggleTodo, type Todo } from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm
        onAdd={(text) => setTodos((prev) => [...prev, createTodo(text)])}
      />
      <TodoList
        todos={todos}
        onToggle={(id) => setTodos((prev) => toggleTodo(prev, id))}
        onDelete={(id) => setTodos((prev) => deleteTodo(prev, id))}
      />
    </div>
  );
}
