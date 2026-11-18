"use client";

import { useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { createTodo, type Priority, type Todo } from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string, priority: Priority) {
    setTodos((prev) => [...prev, createTodo(text, priority)]);
  }

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
