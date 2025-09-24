import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@/utils/generateOgImages";

export const GET: APIRoute = async () => {
  const { buffer, contentType } = await generateOgImageForSite();
  return new Response(buffer, {
    headers: { "Content-Type": contentType },
  });
};
