# Project Overview: Squealing-Spiral (Flowkater.io Blog)

## Purpose
Personal blog for Tony Cho (Flowkater) built with Astro. Contains thought experiments, retrospectives, continuous discovery notes, project reviews, book reviews, and work logs. Primary language is Korean.

- **Blog URL**: https://flowkater.io
- **Author**: Tony Cho (chjw102@gmail.com)

## Tech Stack
- **Framework**: Astro 5.x (static site generator)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.x with Typography plugin
- **Build Tools**: pnpm, Pagefind (search indexing), Sharp (image processing)
- **Code Quality**: ESLint, Prettier (with Astro & Tailwind plugins)
- **OG Image Generation**: Satori + resvg-js

## Project Structure
```
src/
├── pages/          # Route definitions (index, posts, tags, archives, search)
├── components/     # Reusable UI components (Card, Header, Footer, etc.)
├── layouts/        # Page layout shells
├── data/blog/      # Blog post content (markdown files)
├── utils/          # Utility helpers
├── styles/         # Global CSS and Tailwind config
├── config.ts       # Site configuration (author, title, OG settings)
├── constants.ts    # Site-wide constants
└── content.config.ts # Content collection schemas

public/assets/      # Static assets (images, OG images)
scripts/            # Automation scripts (e.g., new-post.mjs)
```

## Content Conventions
- Blog posts in `src/data/blog/` with `YYYY-MM-DD-slug.md` naming
- Front matter fields: `description`, `pubDatetime`, `tags`, `draft`, `featured`, `ogImage`
- Assets referenced via absolute `/assets/...` paths
- Generate new posts with `pnpm run new:post "Title"`

## Communication Language
- All code comments, PR descriptions, and agent responses should be in **Korean (한국어)**
