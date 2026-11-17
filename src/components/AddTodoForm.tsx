"use client";

import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export default function AddTodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="New todo"
        className="flex-1 rounded-md border border-gray-300 bg-transparent px-3 py-2 outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
