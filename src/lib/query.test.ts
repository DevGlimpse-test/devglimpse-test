import { describe, expect, it } from "vitest";
import { createTodo, filterTodos, searchTodos } from "@/lib/todos";

const todos = [
  createTodo("Write report"),
  { ...createTodo("Buy milk"), completed: true },
  createTodo("Book flights"),
];

describe("filterTodos", () => {
  it("returns all, active, or completed", () => {
    expect(filterTodos(todos, "all")).toHaveLength(3);
    expect(filterTodos(todos, "active").map((t) => t.text)).toEqual([
      "Write report",
      "Book flights",
    ]);
    expect(filterTodos(todos, "completed").map((t) => t.text)).toEqual(["Buy milk"]);
  });
});

describe("searchTodos", () => {
  it("matches case-insensitively", () => {
    expect(searchTodos(todos, "BO").map((t) => t.text)).toEqual(["Book flights"]);
  });
  it("returns everything for a blank query", () => {
    expect(searchTodos(todos, "   ")).toHaveLength(3);
  });
  it("returns nothing when no match", () => {
    expect(searchTodos(todos, "zzz")).toEqual([]);
  });
});
