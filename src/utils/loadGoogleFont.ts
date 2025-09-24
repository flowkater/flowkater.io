import fs from "node:fs/promises";
import path from "node:path";

async function loadLocalFont(filepath: string): Promise<Uint8Array | null> {
  try {
    const absolutePath = path.isAbsolute(filepath)
      ? filepath
      : path.join(process.cwd(), filepath);
    const data = await fs.readFile(absolutePath);
    return new Uint8Array(
      data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
    );
  } catch (error) {
    console.warn(`Failed to load local font at ${filepath}:`, error);
    return null;
  }
}

async function loadGoogleFont(
  font: string,
  text: string,
  weight: number,
  subset?: string
): Promise<Uint8Array | null> {
  const params = new URLSearchParams({
    family: `${font}:wght@${weight}`,
  });

  // Only ask for specific text when running locally to reduce payload.
  // In non-network environments (e.g. CI/CD) this can cause missing glyphs,
  // so we skip it to let Google serve the full font subset.
  if (typeof process !== "undefined" && process.env.NETWORK_FETCH === "true") {
    params.set("text", text);
  }

  if (subset) {
    params.append("subset", subset);
  }

  const API = `https://fonts.googleapis.com/css2?${params.toString()}`;

  let css: string;
  try {
    css = await (
      await fetch(API, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
        },
      })
    ).text();
  } catch (error) {
    console.warn(
      `Failed to request Google Fonts CSS for ${font}@${weight}:`,
      error
    );
    return null;
  }

  const resource = css.match(
    /src:\s*url\((.+?)\)\s*format\('(opentype|truetype|woff2|woff)'\)/
  );

  if (!resource) {
    console.warn(`Failed to locate font source for ${font}@${weight}`);
    return null;
  }

  try {
    const res = await fetch(resource[1]);

    if (!res.ok) {
      throw new Error("Failed to download dynamic font. Status: " + res.status);
    }

    const arrayBuffer = await res.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  } catch (error) {
    console.warn(
      `Failed to download font file for ${font}@${weight}:`,
      error
    );
    return null;
  }
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: Uint8Array; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 400,
      style: "normal",
      subset: "latin",
      src: "public/fonts/IBMPlexMono-Regular.ttf",
    },
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 700,
      style: "bold",
      subset: "latin",
      src: "public/fonts/IBMPlexMono-Bold.ttf",
    },
    {
      name: "Noto Sans KR",
      font: "Noto+Sans+KR",
      weight: 500,
      style: "normal",
      subset: "korean",
      src: "public/fonts/NotoSansKR-Medium.ttf",
    },
    {
      name: "Noto Sans KR",
      font: "Noto+Sans+KR",
      weight: 700,
      style: "bold",
      subset: "korean",
      src: "public/fonts/NotoSansKR-Bold.ttf",
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style, subset, src }) => {
      let data: Uint8Array | null = null;

      if (src) {
        data = await loadLocalFont(src);
      }

      if (!data) {
        data = await loadGoogleFont(font, text, weight, subset);
      }

      if (!data) return null;
      return { name, data, weight, style };
    })
  );

  return fonts.filter(Boolean) as Array<{
    name: string;
    data: Uint8Array;
    weight: number;
    style: string;
  }>;
}

export default loadGoogleFonts;
