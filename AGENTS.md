# Repository Guidelines

## Project Structure & Module Organization
- `src/pages` defines routes; shared UI lives in `src/components` and layout shells in `src/layouts`.
- Content configs and site metadata sit in `src/config.ts`, `src/constants.ts`, and `src/content.config.ts`.
- Blog posts reside in `src/data/blog`; assets that should ship as-is go under `public/assets`.
- Utility helpers are grouped in `src/utils`, while shared styling lives in `src/styles`.
- Automation and one-off helpers (for example, the post generator) are under `scripts/`.

## Build, Test, and Development Commands
- `pnpm run dev` launches the Astro dev server at `localhost:4321` with hot reload.
- `pnpm run build` runs `astro check`, builds to `dist/`, and post-processes search data with Pagefind.
- `pnpm run preview` serves the production build locally; use it before shipping layout changes.
- `pnpm run lint` and `pnpm run format:check` enforce ESLint and Prettier rules; pair them before committing.
- `pnpm run sync` refreshes generated Astro/TypeScript types after content schema tweaks.
- `pnpm run new:post "My Title"` scaffolds a draft markdown file with dated slug metadata.

## Coding Style & Naming Conventions
- Prettier enforces 2-space indentation, 80-character line length, and double quotes; let it format Astro and Tailwind classes via bundled plugins.
- Follow TypeScript strictness; favour typed helpers in `src/utils` over inline any-casting.
- Component filenames use `PascalCase.astro` or `.tsx`; utility modules prefer `kebab-case.ts`.
- ESLint blocks `console` usage; rely on logging utilities or remove diagnostics before merging.

## Testing Guidelines
- Treat `pnpm run build` as the primary regression gate because it bundles `astro check` and static analysis.
- Run `pnpm run preview` to sanity-check routing, OG images, and Pagefind search generation.
- Manual content tests: ensure new posts render, OG images exist under `public/assets`, and drafts remain flagged `draft: true` until ready.
- Document visual diffs (screenshots or recordings) inside PRs when adjusting layouts or styles.

## Commit & Pull Request Guidelines
- Use Conventional Commit prefixes when possible (for example, `feat: add hero CTA` or `fix: correct mobile nav`); `cz.yaml` configures Commitizen for assistance.
- Keep commits focused; update content and design assets in separate commits from code changes.
- Before opening a PR, run linting and a full build, then summarize the results in the description.
- Reference related issues, list manual verification steps, and attach UI captures for visual updates.

## Communication & Language
- Provide issue comments, PR replies, and any agent-generated responses in Korean (한국어) to match the team's collaboration norms.

## Content Workflow Tips
- Prefer the generator script to avoid slug collisions; hand-written files should follow `YYYY-MM-DD-slug.md`.
- Populate front matter fields (`description`, `pubDatetime`, `tags`, `featured`, `draft`) to match theme expectations.
- Store large media in `public/assets/...` and reference via absolute `/assets/` paths inside markdown.
- After content edits, reload `pnpm run dev` so Astro refreshes generated type definitions.
