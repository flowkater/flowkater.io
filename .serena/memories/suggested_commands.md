# Suggested Commands

## Development
| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start dev server at localhost:4321 |
| `pnpm run build` | Full production build (type check + Astro build + Pagefind) |
| `pnpm run preview` | Preview production build locally |
| `pnpm run sync` | Refresh Astro/TypeScript types after schema changes |

## Code Quality
| Command | Description |
|---------|-------------|
| `pnpm run lint` | Run ESLint |
| `pnpm run format:check` | Check Prettier formatting |
| `pnpm run format` | Apply Prettier formatting |

## Content Creation
| Command | Description |
|---------|-------------|
| `pnpm run new:post "Title"` | Generate a new draft post with dated slug |

## System Commands (macOS/Darwin)
| Command | Description |
|---------|-------------|
| `git status` | Check git status |
| `git add -A && git commit -m "message"` | Stage and commit |
| `ls -la` | List files (including hidden) |
| `find . -name "*.md"` | Find markdown files |
| `grep -r "pattern" src/` | Search in source files |

## Important Notes
- Port 4321 is used for dev server
- `pnpm run build` includes type checking via `astro check`
- Pagefind search index is generated during build
- Always run lint and format:check before committing
