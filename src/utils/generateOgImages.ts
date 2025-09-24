import { readFile } from "node:fs/promises";
import { extname } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import type { Buffer } from "node:buffer";
import { SITE } from "@/config";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";
import sharp from "sharp";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export interface OgImageResult {
  buffer: Uint8Array;
  contentType: string;
}

let cachedFallback: OgImageResult | null = null;

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
  if (cachedFallback) {
    return cachedFallback;
  }

  const fallbackFile = SITE.ogImage ?? "og.png";
  const fallbackPath = new URL(`../../public/${fallbackFile}`, import.meta.url);
  const data = await readFile(fallbackPath);
  const ext = extname(fallbackFile).toLowerCase();

  if (ext !== ".png") {
    try {
      const pngBuffer = await sharp(data).png().toBuffer();
      cachedFallback = {
        buffer: new Uint8Array(pngBuffer),
        contentType: "image/png",
      };
      return cachedFallback;
    } catch (error) {
      console.warn(
        `Failed to convert fallback OG image (${fallbackFile}) to PNG:`,
        error
      );
    }
  }

  const lower = fallbackFile.toLowerCase();
  const contentType = lower.endsWith(".png")
    ? "image/png"
    : lower.endsWith(".jpg") || lower.endsWith(".jpeg")
      ? "image/jpeg"
      : "application/octet-stream";
  cachedFallback = {
    buffer: new Uint8Array(data),
    contentType,
  };
  return cachedFallback;
}
