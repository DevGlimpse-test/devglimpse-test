"use client";

import { useState } from "react";
import { usePersistedTodos } from "@/hooks/usePersistedTodos";
import SearchBox from "@/components/SearchBox";
import FilterBar from "@/components/FilterBar";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import {
  clearCompleted,
  createTodo,
  deleteTodo,
  filterTodos,
  searchTodos,
  toggleTodo,
  updateTodoText,
  type Filter,
  type Priority,
} from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = usePersistedTodos();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  function addTodo(text: string, priority: Priority, dueDate: string | null) {
    setTodos((prev) => [...prev, createTodo(text, priority, dueDate)]);
  }

  function toggle(id: string) {
    setTodos((prev) => toggleTodo(prev, id));
  }

  function edit(id: string, text: string) {
    setTodos((prev) => updateTodoText(prev, id, text));
  }

  function remove(id: string) {
    setTodos((prev) => deleteTodo(prev, id));
  }

  function clearDone() {
    setTodos((prev) => clearCompleted(prev));
  }

  const doneCount = todos.filter((t) => t.completed).length;
  const visible = searchTodos(filterTodos(todos, filter), query);

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm onAdd={addTodo} />
      <SearchBox value={query} onChange={setQuery} />
      <FilterBar value={filter} onChange={setFilter} />
      <TodoList todos={visible} onToggle={toggle} onEdit={edit} onDelete={remove} />
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
