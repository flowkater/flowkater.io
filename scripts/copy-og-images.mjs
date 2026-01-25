#!/usr/bin/env node
import { copyFile, mkdir, readdir, readFile } from "node:fs/promises";
import { resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const projectRoot = resolve(__dirname, "..");
const blogDir = resolve(projectRoot, "src/data/blog");
const distPostsDir = resolve(projectRoot, "dist/posts");
const publicOgDir = resolve(projectRoot, "public/og");

/**
 * Simple frontmatter parser (extracts slug field only)
 */
function extractSlug(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = match[1];
  const slugMatch = frontmatter.match(/^slug:\s*["']?([^"'\n]+)["']?/m);
  return slugMatch ? slugMatch[1].trim() : null;
}

/**
 * Build a mapping from URL slug to original filename (post.id)
 * This handles cases where frontmatter has a custom `slug` field
 */
async function buildSlugToIdMap() {
  const slugToId = new Map();

  const files = await readdir(blogDir);

  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

    const filepath = resolve(blogDir, file);
    const content = await readFile(filepath, "utf-8");

    // post.id is the filename without extension
    const postId = file.replace(/\.(md|mdx)$/, "");

    // URL slug is either from frontmatter or defaults to filename
    const frontmatterSlug = extractSlug(content);
    const urlSlug = frontmatterSlug || postId;

    slugToId.set(urlSlug, postId);
  }

  return slugToId;
}

async function copyOgImages() {
  console.log("📁 Copying generated OG images to public/og...");

  try {
    // Build slug → post.id mapping
    const slugToId = await buildSlugToIdMap();

    // public/og 디렉토리 생성
    await mkdir(publicOgDir, { recursive: true });

    // dist/posts 순회
    const entries = await readdir(distPostsDir, { withFileTypes: true });

    let copied = 0;
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const indexPngPath = resolve(distPostsDir, entry.name, "index.png");

      // Use the original post.id (filename) for OG image, not URL slug
      const postId = slugToId.get(entry.name) || entry.name;
      const destPath = resolve(publicOgDir, `${postId}.png`);

      try {
        await copyFile(indexPngPath, destPath);
        if (postId !== entry.name) {
          console.log(`  ✓ ${entry.name} → ${postId}.png`);
        } else {
          console.log(`  ✓ ${postId}.png`);
        }
        copied++;
      } catch (error) {
        // index.png가 없을 수 있음 (에러 무시)
      }
    }

    console.log(`✅ Copied ${copied} OG images to /public/og`);
  } catch (error) {
    console.error("❌ Failed to copy OG images:", error);
    process.exit(1);
  }
}

await copyOgImages();
