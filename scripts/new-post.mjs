import fs from "node:fs";
import path from "node:path";

const CONFIG_PATH = "src/config.ts";

const POSTS = fs.existsSync("src/content/blog")
  ? "src/content/blog"
  : "src/data/blog";

const title = process.argv.slice(2).join(" ").trim() || "untitled-post";
const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-");

const configSource = fs.existsSync(CONFIG_PATH)
  ? fs.readFileSync(CONFIG_PATH, "utf8")
  : "";

const siteUrl = extractConfigValue(configSource, "website") ?? "https://flowkater.io";
const siteTimezone =
  extractConfigValue(configSource, "timezone") ?? "Asia/Seoul";

const now = new Date();
const iso = formatDatetimeWithTimezone(now, siteTimezone);
const datePrefix = iso.slice(0, 10);

const canonicalURL = buildCanonicalUrl(siteUrl, `posts/${datePrefix}-${slug}/`);
const targetDirectory = path.join(process.cwd(), POSTS);
const file = path.join(targetDirectory, `${datePrefix}-${slug}.md`);

const sanitizedTitle = title.replace(/"/g, "\\\"");

const fm = `---\n` +
  `title: "${sanitizedTitle}"\n` +
  `description: "TODO: 155자 이내 설명"\n` +
  `summary: "TODO: 1-2문장 미리보기"\n` +
  `pubDatetime: ${iso}\n` +
  `modDatetime: ${iso}\n` +
  `updatedDatetime: ${iso}\n` +
  `canonicalURL: "${canonicalURL}"\n` +
  `tags:\n` +
  `  - "others"\n` +
  `# ogImage: "/assets/og/sample.png" # (선택) 커스텀 OG 이미지 경로. 사용하지 않으면 이 줄을 삭제하세요.\n` +
  `featured: false\n` +
  `draft: true\n` +
  `slug: "${slug}"\n` +
  `keywords:\n` +
  `  - "TODO: 주요 키워드"\n` +
  `timezone: "${siteTimezone}"\n` +
  `---\n\n`;

fs.mkdirSync(targetDirectory, { recursive: true });

if (fs.existsSync(file)) {
  console.error(`⚠️  이미 존재하는 파일입니다: ${file}`);
  process.exit(1);
}

fs.writeFileSync(file, fm, "utf8");
console.log("Created:", file);

function extractConfigValue(source, key) {
  if (!source) return undefined;
  const regex = new RegExp(`${key}\\s*:\\s*"([^"\\n]+)"`);
  const match = source.match(regex);
  return match ? match[1] : undefined;
}

function formatDatetimeWithTimezone(date, timeZone) {
  if (!timeZone) {
    return date.toISOString();
  }

  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const parts = formatter.formatToParts(date);
    const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
    const isoDateTime = `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}`;

    const offsetMatch = values.timeZoneName?.match(/GMT([+-]?\d{1,2})(?::?(\d{2}))?/);

    if (!offsetMatch) {
      return `${isoDateTime}${formatOffsetFromMinutes(-date.getTimezoneOffset())}`;
    }

    const hourOffset = parseInt(offsetMatch[1], 10) || 0;
    const minuteOffset = offsetMatch[2] ? parseInt(offsetMatch[2], 10) : 0;
    const totalMinutes = hourOffset * 60 + (hourOffset >= 0 ? minuteOffset : -minuteOffset);

    return `${isoDateTime}${formatOffsetFromMinutes(totalMinutes)}`;
  } catch (
    error
  ) {
    return `${date.toISOString().slice(0, 19)}${formatOffsetFromMinutes(-date.getTimezoneOffset())}`;
  }
}

function formatOffsetFromMinutes(totalMinutes) {
  const sign = totalMinutes >= 0 ? "+" : "-";
  const absolute = Math.abs(totalMinutes);
  const hours = String(Math.trunc(absolute / 60)).padStart(2, "0");
  const minutes = String(absolute % 60).padStart(2, "0");
  return `${sign}${hours}:${minutes}`;
}

function buildCanonicalUrl(baseUrl, pathname) {
  try {
    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return new URL(pathname, normalizedBase).toString();
  } catch (error) {
    return `https://flowkater.io/${pathname.replace(/^\//, "")}`;
  }
}
