import fs from "node:fs";
import path from "node:path";

const POSTS = fs.existsSync("src/content/blog")
  ? "src/content/blog"
  : "src/data/blog";

const title = process.argv.slice(2).join(" ").trim() || "untitled-post";
const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-");
const now = new Date();
const tz = "+09:00";
const iso = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 19) + tz;
const datePrefix = now.toISOString().slice(0, 10);

const file = path.join(POSTS, `${datePrefix}-${slug}.md`);
const fm = `---\ntitle: "${title}"\ndescription: ""\npubDatetime: ${iso}\nupdatedDatetime: ${iso}\ntags: []\nfeatured: false\ndraft: true\nslug: "${slug}"\n---\n\n`;

fs.mkdirSync(POSTS, { recursive: true });
fs.writeFileSync(file, fm);
console.log("Created:", file);
