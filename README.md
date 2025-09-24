# Flowkater.io 블로그

## 소개
 Tony Cho(플로케이터)의 사고 실험과 회고를 기록하는 개인 블로그입니다. 연속적인 발견(Continuous Discovery) 실험 노트, 프로젝트 회고, 책과 툴 리뷰, 개인 업무 로그를 한 곳에서 정리합니다. 모든 문서는 Astro 기반으로 빌드되어 정적 페이지로 배포되며, 한국어를 기본 언어로 제공합니다.

- 블로그 홈: [https://flowkater.io](https://flowkater.io)

## 핵심 콘텐츠 아카이브
- **연간·월간 회고**: `2023-retro`, `2024-jan-retro`, `2024-jun-retro` 등 지속적인 성찰 기록.
- **프로덕트 & 팀 실험**: `continuous-discovery-*.md` 4부작, `scrumble-*` 프로젝트 회고, `ihfb-four-year-retro` 등 조직/프로젝트 운영 메모.
- **학습 노트 & 리뷰**: `blood-sweat-pixels`, `reading-elon-musk`, `fermat-last-theorem`과 같은 책·콘텐츠 요약.
- **블로그 운영 기록**: `obsidian-publish-migrate-to-astro`, `blog-migration-obsidian` 등 블로그 이전과 워크플로우 개선 과정.

모든 글은 `src/data/blog`에 날짜 프리픽스(`YYYY-MM-...`)와 영어 슬러그를 사용해 배치하며, OG 이미지 및 첨부 자산은 `public/assets`에 저장합니다.

## 로컬 개발 & 배포
- 의존성 설치: `pnpm install`
- 개발 서버: `pnpm run dev` → `http://localhost:4321`
- 정적 빌드: `pnpm run build` (타입 검사 + Pagefind 검색 인덱스 생성 포함)
- 프로덕션 미리보기: `pnpm run preview`
- 코드 품질 점검: `pnpm run lint`, `pnpm run format:check`

Cloudflare Pages 같은 정적 호스팅에 `dist/`를 그대로 업로드하면 배포가 완료됩니다.

## 콘텐츠 작성 가이드
1. **초안 생성**: 스크립트 `pnpm run new:post "글 제목"`으로 날짜/슬러그가 포함된 드래프트 파일을 자동 생성합니다 (`scripts/new-post.mjs`).
2. **프론트매터 채우기**: `description`, `pubDatetime`, `tags`, `draft`, `featured`, `ogImage` 등을 채워 테마에 맞는 메타데이터를 유지합니다.
3. **본문 작성**: 마크다운 문법을 사용하고, 이미지 경로는 `/assets/...` 형태로 절대 경로를 지정합니다.
4. **검수**: `pnpm run build`와 `pnpm run preview`로 레이아웃, OG 이미지, Pagefind 검색 결과를 확인합니다.
5. **배포 전 기록**: PR 설명에 테스트 결과와 주요 변경점(콘텐츠 요약, 스크린샷 등)을 남기는 것을 권장합니다.

## 워크플로우 원칙
- 콘텐츠는 기본적으로 한국어로 작성하지만, 필요한 경우 영어 단락을 병기합니다.
- 콘솔 로깅은 ESLint 규칙에 따라 금지되어 있으니 디버깅 후 제거합니다.
- TailwindCSS와 Prettier 포맷팅 플러그인을 활용해 스타일과 마크업 일관성을 유지합니다.
- 새 기능이나 레이아웃 조정 시에는 Pagefind 검색 인덱스가 정상 생성되는지 반드시 확인합니다.

## 문의 & 업데이트
새 게시글 제안이나 피드백은 GitHub Issues 또는 이메일 `chjw102@gmail.com`을 통해 전달해주세요. 실시간 업데이트와 실험 로그는 Threads `@flowkater`와 GitHub `flowkater` 리포지토리에서 확인할 수 있습니다.
