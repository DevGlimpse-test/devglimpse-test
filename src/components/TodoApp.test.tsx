import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import TodoApp from "./TodoApp";

async function addTodo(text: string) {
  await userEvent.type(screen.getByLabelText("New todo"), text);
  await userEvent.click(screen.getByRole("button", { name: "Add" }));
}

describe("TodoApp", () => {
  it("shows an empty state", () => {
    render(<TodoApp />);
    expect(screen.getByText("No todos yet.")).toBeInTheDocument();
  });

  it("adds a todo and clears the input", async () => {
    render(<TodoApp />);
    await addTodo("Buy milk");
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByLabelText("New todo")).toHaveValue("");
  });

  it("ignores blank todos", async () => {
    render(<TodoApp />);
    await addTodo("   ");
    expect(screen.getByText("No todos yet.")).toBeInTheDocument();
  });

  it("completes and deletes a todo", async () => {
    render(<TodoApp />);
    await addTodo("Buy milk");
    await userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
    expect(screen.getByText("0 items left")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: 'Delete "Buy milk"' }));
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
  });

  it("filters active and completed todos", async () => {
    render(<TodoApp />);
    await addTodo("Buy milk");
    await addTodo("Walk dog");
    await userEvent.click(screen.getByRole("checkbox", { name: /Walk dog/ }));

    await userEvent.click(screen.getByRole("button", { name: "Active" }));
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.queryByText("Walk dog")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Completed" }));
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
    expect(screen.getByText("Walk dog")).toBeInTheDocument();
  });

  it("restores todos from localStorage", async () => {
    window.localStorage.setItem(
      "todos",
      JSON.stringify([{ id: "1", text: "Saved todo", completed: false }]),
    );
    render(<TodoApp />);
    expect(await screen.findByText("Saved todo")).toBeInTheDocument();
  });
});
