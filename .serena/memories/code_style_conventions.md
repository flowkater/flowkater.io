# Code Style & Conventions

## File Naming
- **Components**: `PascalCase.astro` or `.tsx` (e.g., `Card.astro`, `Header.astro`)
- **Utilities**: `kebab-case.ts` (e.g., `date-utils.ts`)
- **Blog posts**: `YYYY-MM-DD-slug.md` (e.g., `2024-01-15-my-post.md`)

## Prettier Configuration
- **Indentation**: 2 spaces
- **Print width**: 80 characters
- **Quotes**: Double quotes (`"`)
- **Semicolons**: Required
- **Trailing commas**: ES5 style
- **Arrow parens**: Avoid when possible
- **End of line**: LF

## ESLint Rules
- `no-console: "error"` - Console statements are prohibited
- TypeScript strict mode enforced
- Astro-specific rules via `eslint-plugin-astro`

## TypeScript
- Use strict typing; avoid `any`
- Prefer typed helpers in `src/utils` over inline casting
- Run `pnpm run sync` after content schema changes

## Tailwind CSS
- Use Tailwind utility classes
- Global styles in `src/styles/global.css`
- Typography plugin for prose content

## Component Patterns
- Astro components for static content
- Props should be typed
- Use Astro's built-in slot mechanism for composition

## Content Front Matter
Required fields for blog posts:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDatetime: 2024-01-15T12:00:00Z
tags: ["tag1", "tag2"]
draft: false
featured: false
ogImage: "/assets/og-image.png"  # optional
---
```
