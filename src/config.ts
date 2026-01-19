export const SITE = {
  website: "https://flowkater.io",
  author: "Tony Cho",
  profile: "https://flowkater.io",
  desc: "Dev retros & notes by Tony",
  title: "Flowkater.io",
  ogImage: undefined, // 동적 OG 이미지만 사용 (desk-og.jpg 제거)
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
