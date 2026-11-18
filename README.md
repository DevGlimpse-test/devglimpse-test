# DevGlimpse Todo

A small Next.js (TypeScript + Tailwind) todo app used to generate real GitHub
activity for [DevGlimpse](https://devglimpse.com) to measure.

## Features

- Add todos with a priority (low / medium / high) and an optional due date
- Overdue todos are highlighted
- Mark done, edit in place (double-click), clear completed
- Filter (all / active / completed) and search
- Persisted in `localStorage`

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm test` | Vitest unit tests |
| `npm run build` | Production build |

## Layout

- `src/lib` — pure todo logic and storage helpers (unit tested)
- `src/components` — UI components
- `src/hooks` — `usePersistedTodos`

CI runs lint, typecheck, tests and build on every PR.
