# Task Completion Checklist

## Before Committing Code

### 1. Code Quality Checks
- [ ] Run `pnpm run lint` - fix any ESLint errors
- [ ] Run `pnpm run format:check` - ensure Prettier formatting
- [ ] Remove any `console.log` statements (ESLint will catch these)

### 2. Build Verification
- [ ] Run `pnpm run build` - full production build must pass
  - This includes `astro check` (type checking)
  - This generates Pagefind search index
  - This copies OG images

### 3. Visual Verification
- [ ] Run `pnpm run preview` to check:
  - Page routing works correctly
  - OG images render properly
  - Pagefind search functions
  - Layouts display correctly

## For Content Changes

### 4. Content-Specific Checks
- [ ] Front matter is complete (title, description, pubDatetime, tags)
- [ ] `draft: true` for work-in-progress posts
- [ ] Images are in `public/assets/` with correct paths
- [ ] OG image exists if specified

## Commit & PR Guidelines

### 5. Commit Message Format
Use Conventional Commits (configured via `cz.yaml`):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting changes
- `refactor:` - Code refactoring
- `content:` - Blog content changes

### 6. PR Description
- Summarize changes in Korean (한국어)
- Include test results from build/preview
- Attach screenshots for UI changes
- Reference related issues

## Post-Deploy Verification
- [ ] Check live site renders correctly
- [ ] Verify new content appears in search
- [ ] Test OG image preview (use social media debuggers)
