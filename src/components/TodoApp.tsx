"use client";

import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import {
  clearCompleted,
  createTodo,
  filterTodos,
  toggleTodo,
  updateTodoText,
  type Filter,
  type Priority,
  type Todo,
} from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  function addTodo(text: string, priority: Priority, dueDate: string | null) {
    setTodos((prev) => [...prev, createTodo(text, priority, dueDate)]);
  }

  function toggle(id: string) {
    setTodos((prev) => toggleTodo(prev, id));
  }

  function edit(id: string, text: string) {
    setTodos((prev) => updateTodoText(prev, id, text));
  }

  function clearDone() {
    setTodos((prev) => clearCompleted(prev));
  }

  const doneCount = todos.filter((t) => t.completed).length;
  const visible = filterTodos(todos, filter);

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm onAdd={addTodo} />
      <FilterBar value={filter} onChange={setFilter} />
      <TodoList todos={visible} onToggle={toggle} onEdit={edit} />
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
