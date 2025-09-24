import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  try {
    const svg = await postOgImage(post);
    return svgBufferToPngBuffer(svg);
  } catch (error) {
    console.error("Failed to generate post OG image", error);
    return getFallbackOgImageBuffer();
  }
}

export async function generateOgImageForSite() {
  try {
    const svg = await siteOgImage();
    return svgBufferToPngBuffer(svg);
  } catch (error) {
    console.error("Failed to generate site OG image", error);
    return getFallbackOgImageBuffer();
  }
}

async function getFallbackOgImageBuffer() {
  const fallbackPath = new URL("../../public/og.png", import.meta.url);
  return readFile(fallbackPath);
}
