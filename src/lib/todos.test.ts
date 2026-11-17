import { describe, expect, it } from "vitest";
import { createTodo, deleteTodo, filterTodos, toggleTodo, type Todo } from "./todos";

const sample: Todo[] = [
  { id: "1", text: "Buy milk", completed: false },
  { id: "2", text: "Walk dog", completed: true },
];

describe("todos", () => {
  it("createTodo trims text and starts incomplete", () => {
    const todo = createTodo("  Read a book  ");
    expect(todo.text).toBe("Read a book");
    expect(todo.completed).toBe(false);
    expect(todo.id).toBeTruthy();
  });

  it("toggleTodo flips only the matching todo", () => {
    const result = toggleTodo(sample, "1");
    expect(result[0].completed).toBe(true);
    expect(result[1].completed).toBe(true);
    expect(sample[0].completed).toBe(false);
  });

  it("deleteTodo removes the matching todo", () => {
    expect(deleteTodo(sample, "1").map((t) => t.id)).toEqual(["2"]);
  });

  it("filterTodos returns the right subset", () => {
    expect(filterTodos(sample, "all")).toHaveLength(2);
    expect(filterTodos(sample, "active").map((t) => t.id)).toEqual(["1"]);
    expect(filterTodos(sample, "completed").map((t) => t.id)).toEqual(["2"]);
  });
});
