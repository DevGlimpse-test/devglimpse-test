# devglimpse-test

[![CI](https://github.com/kiran13010/devglimpse-test/actions/workflows/ci.yml/badge.svg)](https://github.com/kiran13010/devglimpse-test/actions/workflows/ci.yml)

A small Next.js todo app, built across 5 PRs.

## Features

- Add todos
- Mark todos as done, or delete them
- Filter by All, Active or Completed
- Todos are saved in your browser's localStorage, so they survive a refresh

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the tests once |
| `npm run test:watch` | Run the tests in watch mode |

## CI

GitHub Actions runs lint, type checking, tests and a production build on every pull request and on every push to `main`.
