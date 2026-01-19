import type { AstroIntegration } from "astro";

// OG 이미지는 빌드 후 scripts/copy-og-images.mjs에서 복사됨
// 이 파일은 placeholder로 유지하기만 함
export function generateOgImagesIntegration(): AstroIntegration {
  return {
    name: "generate-og-images",
    hooks: {},
  };
}
