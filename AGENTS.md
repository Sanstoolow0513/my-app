# AGENTS

## Purpose
- This file orients coding agents to this repo's stack, commands, and conventions.
- Follow existing patterns in `app/`, `components/`, and `lib/` before inventing new ones.
- Keep changes focused; do not reformat unrelated code.

## Stack at a glance
- Framework: Next.js App Router (Next 16.1.6) with React 19.2.3.
- Language: TypeScript 5, strict mode enabled.
- Styling: Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css`.
- Linting: ESLint flat config with `eslint-config-next` core-web-vitals + TS.
- Package manager: pnpm (see `pnpm-lock.yaml`).
- Path alias: `@/*` maps to repo root (see `tsconfig.json`).
- Fonts: `next/font` (see `app/layout.tsx`).

## Project structure
- `app/` contains routes and layouts (App Router).
- `app/blog/` contains list and detail routes.
- `components/` holds shared UI components like `site-header`.
- `lib/` holds shared utilities and data (`posts.ts`).
- `public/` contains static assets.
- `app/globals.css` contains design tokens, shared classes, and keyframes.

## Repository AI rules
- No Cursor rules found in `.cursor/rules/` or `.cursorrules`.
- No Copilot instructions found in `.github/copilot-instructions.md`.

## Commands

### Install
- `pnpm install`

### Dev
- `pnpm dev` (runs `next dev`)
- Default dev URL: `http://localhost:3000`

### Build and start
- `pnpm build` (runs `next build`)
- `pnpm start` (runs `next start` after build)

### Lint
- `pnpm lint` (runs ESLint with Next core-web-vitals + TS rules)
- `pnpm lint -- --fix` (optional autofix)

### Tests
- No `test` script and no test runner config in this repo.
- No project tests are present outside `node_modules/`.
- Single-test run: not applicable until a test runner is added.

### Typecheck (optional)
- `pnpm exec tsc --noEmit` (uses `tsconfig.json`)
- If `.next` types are missing, run `pnpm dev` or `pnpm build` once.

## Code style and conventions

### Imports
- Use `import type` for type-only imports.
- Keep type-only imports first, then external modules, then `@/` aliases.
- Put relative imports after `@/` imports.
- Put style imports (like `./globals.css`) last.

### Formatting
- Indent with 2 spaces.
- Use semicolons.
- Use double quotes for strings.
- Wrap long JSX props across lines as in `app/page.tsx`.
- Keep className strings readable; do not split unless needed.
- Prefer trailing commas in multiline objects and arrays.

### TypeScript
- Strict mode is on; avoid `any`.
- Prefer `type` aliases for shared shapes (see `lib/posts.ts`).
- Use typed props objects: `type Props = { ... }`.
- Favor `const` and pure functions for helpers.
- Keep helpers synchronous unless async is required.

### React and Next.js
- App Router uses server components by default.
- Add `"use client"` only when hooks, state, or browser APIs are required.
- Use `next/link` for internal navigation.
- Use plain `<a>` for external or `mailto:` links.
- Use `generateStaticParams` for static routes where applicable.
- Use `generateMetadata` to set per-page metadata.
- Use `notFound()` when required data is missing.
- Keep global fonts in `app/layout.tsx` and global CSS in `app/globals.css`.

### Routing and layout
- Top-level layout uses `RootLayout` in `app/layout.tsx`.
- Pages are default exports in `app/**/page.tsx`.
- Dynamic segments live in folders like `app/blog/[slug]/`.
- Keep route params typed in a `Props` type.
- Prefer `generateStaticParams` when data is static.

### Naming
- Component files use kebab-case (example: `site-header.tsx`).
- React component functions use PascalCase.
- Utility functions use camelCase.
- Types use PascalCase.
- Blog post dates use `YYYY-MM-DD` strings.

### Styling
- Prefer Tailwind utilities and the custom classes defined in `globals.css`.
- Use design tokens from `:root` and `@theme inline`.
- Favor existing utility patterns: `surface`, `chip`, `btn-primary`, `btn-secondary`.
- Use `animate-rise` and `delay-*` for reveal motion when appropriate.
- Respect `prefers-reduced-motion` rules already defined.
- Keep layout widths consistent with `max-w-*` patterns already used.

### Performance and assets
- Prefer `next/image` for new local images.
- Keep static assets in `public/` and reference with absolute paths.
- Avoid adding `use client` at the top level unless required.
- Keep CSS imports limited to global files only.

### Data and content
- Blog content is static in `lib/posts.ts`.
- `getAllPosts` returns posts sorted by date.
- `getPostBySlug` can return `undefined`; guard before use.
- `formatDate` uses `Intl.DateTimeFormat` for display.
- Keep excerpts and titles short to match existing layout.

### Error handling
- Guard missing data early with simple checks.
- Use `notFound()` for missing route data (see `app/blog/[slug]/page.tsx`).
- Provide a fallback metadata title when a post is missing.

### Accessibility
- Prefer semantic elements (`header`, `nav`, `main`, `article`, `footer`).
- Keep link text meaningful; avoid generic labels.
- Preserve focus and hover states from Tailwind classes.

### Linting expectations
- ESLint uses Next.js recommended rules for React, hooks, and a11y.
- Fix lint issues before merging or handing off.

### Content tone
- Existing copy is calm and minimal; keep new copy concise.
- Avoid marketing or loud phrasing unless requested.

### Files to avoid editing
- Do not edit generated output in `.next/`.
- Do not edit `node_modules/`.

## If you add a test runner in the future
- Add a `test` script to `package.json`.
- Add a runner config file (jest, vitest, or playwright).
- Document the single-test command here (file path and test name filters).
- Prefer colocated tests near `app/` or `lib/` sources.
- Keep test files named `*.test.ts` or `*.test.tsx`.
