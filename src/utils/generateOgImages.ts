import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import type { Buffer } from "node:buffer";
import { SITE } from "@/config";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export interface OgImageResult {
  buffer: Uint8Array;
  contentType: string;
}

function pngBufferToResult(buffer: Uint8Array | Buffer): OgImageResult {
  const normalizedBuffer = Uint8Array.from(buffer);
  return {
    buffer: normalizedBuffer,
    contentType: "image/png",
  };
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  try {
    const svg = await postOgImage(post);
    return pngBufferToResult(svgBufferToPngBuffer(svg));
  } catch (error) {
    console.error("Failed to generate post OG image", error);
    return getFallbackOgImageBuffer();
  }
}

export async function generateOgImageForSite() {
  try {
    const svg = await siteOgImage();
    return pngBufferToResult(svgBufferToPngBuffer(svg));
  } catch (error) {
    console.error("Failed to generate site OG image", error);
    return getFallbackOgImageBuffer();
  }
}

async function getFallbackOgImageBuffer(): Promise<OgImageResult> {
  const fallbackFile = SITE.ogImage ?? "og.png";
  const fallbackPath = new URL(`../../public/${fallbackFile}`, import.meta.url);
  const data = await readFile(fallbackPath);
  const lower = fallbackFile.toLowerCase();
  const contentType = lower.endsWith(".png")
    ? "image/png"
    : lower.endsWith(".jpg") || lower.endsWith(".jpeg")
      ? "image/jpeg"
      : "application/octet-stream";
  return {
    buffer: new Uint8Array(data),
    contentType,
  };
}
