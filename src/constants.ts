import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconThreads from "@/assets/icons/IconThreads.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/flowkater",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@flowkater",
    linkTitle: `${SITE.title} on Threads`,
    icon: IconThreads,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jaewoo-cho-6a943750/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:chjw102@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/intent/post?text=",
    linkTitle: `Share this post on Threads`,
    icon: IconThreads,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;

// ── Categories ──────────────────────────────────
export type CategorySlug =
  | "essay"
  | "review"
  | "fiction"
  | "retrospect"
  | "study";

export interface CategoryConfig {
  slug: CategorySlug;
  label: string;
  icon: string;
  description: string;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    slug: "essay",
    label: "에세이",
    icon: "✍️",
    description: "생각, 의견, 리더십, AI 시대론",
  },
  {
    slug: "review",
    label: "리뷰",
    icon: "📖",
    description: "독서, 영상, 컨퍼런스, 서비스 후기",
  },
  {
    slug: "fiction",
    label: "픽션",
    icon: "📕",
    description: "허공을 미는 사람들 (판교 소설)",
  },
  {
    slug: "retrospect",
    label: "회고",
    icon: "🔄",
    description: "월간/연간/프로젝트 회고",
  },
  {
    slug: "study",
    label: "스터디",
    icon: "🔬",
    description: "기술 아티클, 튜토리얼, 학습 정리",
  },
];

export function getCategoryConfig(
  slug: CategorySlug
): CategoryConfig | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
