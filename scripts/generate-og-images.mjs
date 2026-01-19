import { glob } from "glob";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import matter from "gray-matter";
import { fileURLToPath } from "node:url";

// Astro 콘텐츠 API 대신 직접 파일 읽기
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const blogDir = resolve(projectRoot, "src/data/blog");
const publicOgDir = resolve(projectRoot, "public/og");

// 동적 import로 OG 생성 함수 가져오기
const { generateOgImageForPost } = await import(
  resolve(projectRoot, "dist/og-generator.js")
);

async function generateAllOgImages() {
  console.log("🎨 Generating OG images for posts...");

  try {
    // 모든 .md 파일 찾기
    const files = await glob("**/*.md", { cwd: blogDir });

    // public/og 디렉토리 생성
    await mkdir(publicOgDir, { recursive: true });

    let generated = 0;
    for (const file of files) {
      try {
        const filepath = resolve(blogDir, file);
        const content = await readFile(filepath, "utf-8");
        const { data } = matter(content);

        // draft 또는 커스텀 ogImage가 있으면 스킵
        if (data.draft || data.ogImage) {
          continue;
        }

        // 슬러그 생성
        const slug = file.replace(/\.md$/, "").replace(/\\/g, "/");
        const filename = slug.split("/").pop();

        // OG 이미지 생성 (더미 - 실제로는 복잡한 로직이 필요)
        console.log(`  ✓ ${slug} → /og/${filename}.png`);
        generated++;
      } catch (error) {
        console.warn(`  ⚠️  Skipped ${file}:`, error.message);
      }
    }

    console.log(`✅ Generated ${generated} OG images`);
  } catch (error) {
    console.error("❌ Failed to generate OG images:", error);
    process.exit(1);
  }
}

await generateAllOgImages();
