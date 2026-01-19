#!/usr/bin/env node
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distPostsDir = resolve(projectRoot, "dist/posts");
const publicOgDir = resolve(projectRoot, "public/og");

async function copyOgImages() {
  console.log("📁 Copying generated OG images to public/og...");

  try {
    // public/og 디렉토리 생성
    await mkdir(publicOgDir, { recursive: true });

    // dist/posts 순회
    const entries = await readdir(distPostsDir, { withFileTypes: true });

    let copied = 0;
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const indexPngPath = resolve(distPostsDir, entry.name, "index.png");
      const destPath = resolve(publicOgDir, `${entry.name}.png`);

      try {
        await copyFile(indexPngPath, destPath);
        console.log(`  ✓ ${entry.name}.png`);
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
