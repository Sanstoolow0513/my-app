# Harbor Notes

A calm, minimalist personal blog built with Next.js App Router. The site includes a landing page, an about section, and a blog driven by static content stored in TypeScript.

**Features**
- Home page with hero, now, about, and featured posts sections.
- Blog index and detail pages rendered from `lib/posts.ts`.
- Tailwind CSS v4 design tokens and shared utilities in `app/globals.css`.

**Tech Stack**
- Next.js 16 App Router
- React 19
- TypeScript 5 (strict)
- Tailwind CSS v4
- ESLint (Next core-web-vitals + TypeScript)

**Getting Started**
1. Install dependencies:

```bash
pnpm install
```

2. Run the dev server:

```bash
pnpm dev
```

3. Open `http://localhost:3000`.

**Scripts**
- `pnpm dev` starts the development server.
- `pnpm build` creates a production build.
- `pnpm start` starts the production server (after build).
- `pnpm lint` runs ESLint.
- `pnpm exec tsc --noEmit` runs a typecheck.

**Project Map**
- `app/page.tsx` home page.
- `app/blog/page.tsx` blog list.
- `app/blog/[slug]/page.tsx` blog detail route.
- `lib/posts.ts` blog content, metadata, and helpers.
- `components/site-header.tsx` and `components/site-footer.tsx` shared layout.
- `app/layout.tsx` root layout and fonts.
- `app/globals.css` global styles, tokens, and animations.

**Content Updates**
- Add or edit posts in `lib/posts.ts`.
- Keep post dates in `YYYY-MM-DD` format.
- Use `getAllPosts` and `getPostBySlug` for data access.
