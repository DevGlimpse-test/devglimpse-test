"use client";

import { useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import FilterBar from "@/components/FilterBar";
import TodoList from "@/components/TodoList";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  createTodo,
  deleteTodo,
  filterTodos,
  toggleTodo,
  type Filter,
  type Todo,
} from "@/lib/todos";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<Filter>("all");

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="mt-8 space-y-4">
      <AddTodoForm
        onAdd={(text) => setTodos((prev) => [...prev, createTodo(text)])}
      />
      <FilterBar
        filter={filter}
        onChange={setFilter}
        activeCount={activeCount}
      />
      <TodoList
        todos={filterTodos(todos, filter)}
        onToggle={(id) => setTodos((prev) => toggleTodo(prev, id))}
        onDelete={(id) => setTodos((prev) => deleteTodo(prev, id))}
      />
    </div>
  );
}
