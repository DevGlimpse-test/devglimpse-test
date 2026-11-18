"use client";

import { useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import {
  clearCompleted,
  createTodo,
  toggleTodo,
  type Priority,
  type Todo,
} from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string, priority: Priority) {
    setTodos((prev) => [...prev, createTodo(text, priority)]);
  }

  function toggle(id: string) {
    setTodos((prev) => toggleTodo(prev, id));
  }

  function clearDone() {
    setTodos((prev) => clearCompleted(prev));
  }

  const doneCount = todos.filter((t) => t.completed).length;

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggle} />
      {doneCount > 0 && (
        <button
          type="button"
          onClick={clearDone}
          className="text-sm text-red-600 hover:underline"
        >
          Clear completed ({doneCount})
        </button>
      )}
    </div>
  );
}
