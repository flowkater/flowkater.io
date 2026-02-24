# flowkater.io 블로그 카테고리 리뉴얼 기획안

> **작성일**: 2026-02-24
> **상태**: 기획 완료, 구현 대기
> **스택**: Astro 5 + Tailwind CSS 4 + MDX

---

## 1. 현황 분석

### 1.1 현재 구조
- **총 글 수**: 60개
- **분류 체계**: `tags` (다중 태그) + `featured` (boolean)만 존재
- **메인 페이지**: Hero → Featured (리스트) → Recent Posts (리스트) → All Posts 링크
- **레이아웃**: 단일 컬럼, 카드 리스트 나열
- **문제점**:
  - 성격이 전혀 다른 글(소설, 회고, 기술글)이 시간순으로만 섞여 있음
  - 방문자가 관심 분야의 글을 찾기 어려움
  - Featured 외에 큐레이션 기능 없음

### 1.2 기술 스택
| 항목 | 현재 |
|------|------|
| 프레임워크 | Astro 5.13 |
| 스타일 | Tailwind CSS 4.1 |
| 콘텐츠 | `src/data/blog/*.md` (glob loader) |
| 스키마 | `content.config.ts` (Zod) |
| 폰트 | Pretendard Variable |
| 테마 | Light/Dark 지원 |
| 최대 너비 | `max-w-4xl xl:max-w-5xl` |

### 1.3 현재 Featured 글 (8개)
1. 비전공 통계학 입문자들을 위한 스터디 교재 & 교양 서적 추천
2. 15년차 CTO가 바이브 코딩하는 방법
3. 승리하지 못하는 조직에게 미래는 없다
4. Claude Code에 날개를 달아줘라! - Superpowers 소개
5. AI 에이전트 자비스, 내 두 번째 두뇌가 되기까지 — OpenClaw 실전 활용기
6. (픽션) 허공을 미는 사람들 - 에피소드 3, 균열 - 1
7. 코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가

---

## 2. 카테고리 정의

### 2.1 카테고리 목록 (5개)

| ID | 이름 | 영문 slug | 설명 | 아이콘 |
|----|------|-----------|------|--------|
| 1 | 에세이 | `essay` | 생각, 의견, 리더십, AI 시대론 | ✍️ |
| 2 | 리뷰 | `review` | 독서, 영상, 컨퍼런스, 서비스 후기 | 📖 |
| 3 | 픽션 | `fiction` | 허공을 미는 사람들 (판교 소설) | 📕 |
| 4 | 회고 | `retrospect` | 월간/연간/프로젝트 회고 | 🔄 |
| 5 | 스터디 | `study` | 기술 아티클, 튜토리얼, 학습 정리 | 🔬 |

### 2.2 카테고리 분류 기준

**Essay** — "나의 생각/의견이 중심"
- 리더십론, AI 시대 오피니언, 일하는 방식, 에세이
- 예: 코드를 읽지 않는 시대, 승리하지 못하는 조직, AI는 당신만큼만 똑똑하다, LLM 200줄~에이전트

**Review** — "다른 콘텐츠를 읽고/보고 후기"
- 독서 후기, 영상 후기, 컨퍼런스 후기, 서비스/도구 리뷰
- 예: 돌파력을 읽고, 고퍼콘 후기, 피땀픽셀

**Fiction** — "창작 픽션"
- 허공을 미는 사람들 시리즈
- 예: EP1, EP2-1, EP2-2, EP3-1

**Retrospect** — "지나간 시간을 돌아봄"
- 월간/연간/기간/프로젝트 회고
- 예: 2023년 회고, Scrumble 프로젝트 회고, 4년간의 IHFB 회고

**Study** — "학습하고 정리한 것"
- 기술 튜토리얼, 프레임워크 정리, 데이터 분석, 프로덕트 방법론
- 예: React TS 세팅, Continuous Discovery 시리즈, 통계학 교재 추천, 기술 아티클 읽는 법

### 2.3 경계 케이스 판단 룰
- **"내 생각 > 50%"** → Essay
- **"남의 콘텐츠 요약/감상 > 50%"** → Review
- **"따라하기/정리"** → Study
- **"과거 기록"** → Retrospect
- **Scrumble 기술 회고**: 프로젝트회고지만 기술 내용 중심 → Study (기술 회고 시리즈)
- **태그와의 관계**: category는 1개(대분류), tags는 다중(세부 분류) — 공존

---

## 3. 스키마 변경

### 3.1 content.config.ts 수정

```typescript
// 추가
const categoryEnum = z.enum([
  "essay",
  "review", 
  "fiction",
  "retrospect",
  "study",
]);

const blog = defineCollection({
  // ...기존 유지
  schema: ({ image }) =>
    z.object({
      // ...기존 필드 유지
      category: categoryEnum.default("essay"), // 신규 추가
    }),
});
```

### 3.2 Frontmatter 예시

```yaml
---
title: "코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가"
pubDatetime: 2026-02-19T09:00:00+09:00
category: essay          # ← 신규
tags: ["AI코딩", "에세이", "생산성"]
featured: true
description: "..."
---
```

---

## 4. 메인 페이지 레이아웃

### 4.1 Desktop (md 이상, ≥768px)

```
┌──────────────────────────────────────────────────────┐
│  Header / Nav (기존 유지)                             │
├──────────────────────────────────────────────────────┤
│  Hero (기존 유지)                                     │
│  Tony Cho + 소개글 + Social Links                     │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ★ Featured  ──────────────────────────────────────  │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │ ✍️ Essay             │  │ 📕 Fiction           │   │
│  │ Featured Card #1    │  │ Featured Card #2    │   │
│  │ title / desc / date │  │ title / desc / date │   │
│  └─────────────────────┘  └─────────────────────┘   │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │ 🔬 Study            │  │ 🔄 Retrospect       │   │
│  │ Featured Card #3    │  │ Featured Card #4    │   │
│  │ title / desc / date │  │ title / desc / date │   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌──── ✍️ Essay ───────┐  ┌──── 📖 Review ──────┐   │
│  │                     │  │                     │   │
│  │ • 제목              │  │ • 제목              │   │
│  │   2026-02-24        │  │   2026-02-03        │   │
│  │                     │  │                     │   │
│  │ • 제목              │  │ • 제목              │   │
│  │   2026-02-19        │  │   2025-12-11        │   │
│  │                     │  │                     │   │
│  │ • 제목              │  │ • 제목              │   │
│  │   2026-01-25        │  │   2024-03-xx        │   │
│  │                     │  │                     │   │
│  │ → Essay 전체보기     │  │ → Review 전체보기    │   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
│  ┌──── 📕 Fiction ─────┐  ┌──── 🔄 Retrospect ──┐   │
│  │                     │  │                     │   │
│  │ • EP3-1 균열        │  │ • Scrumble 회고     │   │
│  │   2026-02-18        │  │   2025-09-xx        │   │
│  │                     │  │                     │   │
│  │ • EP2-2 허무한 성공 │  │ • 4년간의 IHFB      │   │
│  │   2026-02-08        │  │   2025-04-xx        │   │
│  │                     │  │                     │   │
│  │ • EP2-1 허무한 성공 │  │ • 피, 땀 서운함     │   │
│  │   2026-01-25        │  │   2024-09-xx        │   │
│  │                     │  │                     │   │
│  │ → Fiction 전체보기   │  │ → Retrospect 전체보기│   │
│  └─────────────────────┘  └─────────────────────┘   │
│                                                      │
│  ┌──── 🔬 Study ───────┐                            │
│  │                     │                            │
│  │ • Anthropic CodePath│                            │
│  │   2026-02-24        │                            │
│  │                     │                            │
│  │ • 기술 아티클 읽기  │                            │
│  │   2026-02-10        │                            │
│  │                     │                            │
│  │ • Superpowers 소개  │                            │
│  │   2026-02-08        │                            │
│  │                     │                            │
│  │ → Study 전체보기     │                            │
│  └─────────────────────┘                            │
│                                                      │
│  ────────────────────────────────────────────        │
│                  [ All Posts → ]                      │
│                                                      │
├──────────────────────────────────────────────────────┤
│  Footer (기존 유지)                                   │
└──────────────────────────────────────────────────────┘
```

### 4.2 Mobile (sm, <768px)

```
┌───────────────────────┐
│ Header / Nav           │
├───────────────────────┤
│ Hero (기존 유지)       │
├───────────────────────┤
│                       │
│ ★ Featured            │
│ ┌───────────────────┐ │
│ │ Card #1           │ │
│ │ title / desc      │ │
│ │ date              │ │
│ ├───────────────────┤ │
│ │ Card #2           │ │
│ ├───────────────────┤ │
│ │ Card #3           │ │
│ ├───────────────────┤ │
│ │ Card #4           │ │
│ └───────────────────┘ │
│ ────────────────────  │
│                       │
│ ✍️ Essay               │
│ • 제목 1              │
│   2026-02-24          │
│ • 제목 2              │
│   2026-02-19          │
│ • 제목 3              │
│   2026-01-25          │
│ → Essay 전체보기       │
│ ────────────────────  │
│                       │
│ 📖 Review              │
│ • 제목 1              │
│ • 제목 2              │
│ • 제목 3              │
│ → Review 전체보기      │
│ ────────────────────  │
│                       │
│ 📕 Fiction             │
│ • 제목 1              │
│ • 제목 2              │
│ • 제목 3              │
│ → Fiction 전체보기     │
│ ────────────────────  │
│                       │
│ 🔄 Retrospect          │
│ • 제목 1              │
│ • 제목 2              │
│ • 제목 3              │
│ → Retrospect 전체보기  │
│ ────────────────────  │
│                       │
│ 🔬 Study               │
│ • 제목 1              │
│ • 제목 2              │
│ • 제목 3              │
│ → Study 전체보기       │
│                       │
│ [ All Posts → ]       │
├───────────────────────┤
│ Footer                │
└───────────────────────┘
```

---

## 5. 페이지 구조 & 라우팅

### 5.1 신규 페이지

| 경로 | 설명 | 비고 |
|------|------|------|
| `/` | 메인 (리뉴얼) | Featured + 카테고리별 최신 3개 |
| `/posts/` | 전체 글 목록 (기존 유지) | 페이지네이션 |
| `/categories/[category]/` | 카테고리별 글 목록 | **신규** |
| `/categories/` | 카테고리 인덱스 | **신규** (선택) |
| `/tags/[tag]/` | 태그별 글 목록 (기존 유지) | |
| `/posts/[slug]/` | 글 상세 (기존 유지) | |

### 5.2 카테고리 페이지 레이아웃

```
┌──────────────────────────────────────┐
│ Header                               │
├──────────────────────────────────────┤
│                                      │
│ ✍️ Essay                              │
│ "생각, 의견, 리더십, AI 시대론"       │
│                                      │
│ • 제목 1 ─── 2026-02-24              │
│ • 제목 2 ─── 2026-02-19              │
│ • 제목 3 ─── 2026-01-25              │
│ • 제목 4 ─── 2026-01-20              │
│ ...                                  │
│                                      │
│ [1] [2] [3] →                        │
│                                      │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

- 기존 `/posts/` 레이아웃과 동일한 구조, 제목+설명만 카테고리 정보로 변경
- 페이지네이션: `SITE.postPerPage` (10개) 동일 적용

---

## 6. 네비게이션 변경

### 6.1 현재 Nav

```
[Home] [Posts] [Tags] [About] [Search] [🌙]
```

### 6.2 변경안

```
[Home] [Posts] [Categories ▾] [Tags] [About] [Search] [🌙]
```

**Categories 드롭다운** (hover/click):
- ✍️ Essay
- 📖 Review
- 📕 Fiction
- 🔄 Retrospect
- 🔬 Study

**대안 (심플)**: 드롭다운 없이 `/categories/` 인덱스 페이지로 이동

→ **1차 구현은 심플 버전 권장** (드롭다운은 추후)

---

## 7. 컴포넌트 설계

### 7.1 신규 컴포넌트

| 컴포넌트 | 용도 | Props |
|---------|------|-------|
| `CategorySection.astro` | 메인 페이지 카테고리 블록 | `category`, `posts`, `icon`, `label` |
| `CategoryCard.astro` | 카테고리 내 글 아이템 | `post` (제목+날짜, 간결) |
| `FeaturedGrid.astro` | Featured 2-col 그리드 | `posts` |

### 7.2 CategorySection 구조

```astro
<!-- CategorySection.astro -->
<section class="pt-6 pb-4">
  <h2 class="text-xl font-semibold tracking-wide mb-4">
    {icon} {label}
  </h2>
  <ul class="space-y-3">
    {posts.slice(0, 3).map(post => (
      <CategoryCard post={post} />
    ))}
  </ul>
  <div class="mt-3">
    <LinkButton href={`/categories/${slug}/`}>
      → {label} 전체보기
    </LinkButton>
  </div>
</section>
```

### 7.3 FeaturedGrid 구조

```astro
<!-- FeaturedGrid.astro -->
<section id="featured" class="pt-12 pb-6">
  <h2 class="text-2xl font-semibold tracking-wide mb-6">★ Featured</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {posts.map(post => (
      <FeaturedCard post={post} />
    ))}
  </div>
</section>
```

### 7.4 Featured 카드 디자인

```
┌─────────────────────────────┐
│ ✍️ Essay                     │  ← 카테고리 배지 (작은 텍스트)
│                             │
│ 코드를 읽지 않는 시대,       │  ← 제목 (font-medium)
│ 엔지니어는 무엇을 읽어야    │
│ 하는가                      │
│                             │
│ AI가 코드를 작성하는 시대... │  ← description (1-2줄, truncate)
│                             │
│ 2026-02-19                  │  ← 날짜
└─────────────────────────────┘
```

- 배경: `var(--tony-surface)` 또는 투명 + border
- Hover: 살짝 elevation 또는 accent border
- 기존 Card.astro 스타일과 톤 통일

---

## 8. 반응형 브레이크포인트

| 화면 | 너비 | Featured | 카테고리 섹션 |
|------|------|----------|---------------|
| Mobile | < 768px | 1-col 리스트 | 1-col, 순차 나열 |
| Tablet | 768~1023px | 2-col 그리드 | 2-col 그리드 |
| Desktop | ≥ 1024px | 2-col 그리드 | 2-col 그리드 |

Tailwind 클래스:
- Featured: `grid grid-cols-1 md:grid-cols-2 gap-4`
- 카테고리: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`
- Study (홀수): `md:col-span-1` (한쪽만 차지, 빈 공간 자연스럽게)

---

## 9. 인터랙션 & 전환

### 9.1 페이지 전환
- Astro View Transitions 기존 적용 상태 유지
- 카테고리 → 글 상세: 기존 `viewTransitionName: slugifyStr(title)` 동일 적용
- 메인 → 카테고리 페이지: 기본 fade transition

### 9.2 카테고리 섹션 호버
- 카테고리 블록: hover 시 border-accent 또는 shadow 미세 변화
- 글 아이템: 기존 Card의 `decoration-dashed hover:underline` 스타일 유지

### 9.3 "전체보기" 링크
- 기존 `LinkButton` 컴포넌트 재사용
- 아이콘: `IconArrowRight` (기존 All Posts 버튼과 동일)

### 9.4 Dark Mode
- 기존 Light/Dark 토글 유지
- 카테고리 배지 색상: CSS 변수 기반으로 테마 자동 대응
- Featured 카드 배경: `bg-[var(--tony-surface)]` → Dark에서도 자연스럽게

---

## 10. 글 상세 페이지 변경

### 10.1 카테고리 표시 추가

```
┌──────────────────────────────────────┐
│ ← Back                               │
│                                      │
│ ✍️ Essay                  ← 카테고리  │
│                                      │
│ 코드를 읽지 않는 시대,               │
│ 엔지니어는 무엇을 읽어야 하는가      │
│                                      │
│ 2026-02-19 · 8 min read             │
│ Tags: AI코딩, 에세이, 생산성         │
│                                      │
│ ─────────────────────────────        │
│ (본문)                               │
└──────────────────────────────────────┘
```

- 제목 위에 카테고리 배지 (링크 → `/categories/{slug}/`)
- 클릭하면 해당 카테고리 글 목록으로 이동

### 10.2 글 하단 "같은 카테고리 글"

```
│ ─────────────────────────────        │
│                                      │
│ ✍️ Essay의 다른 글                    │
│ • 이전글 제목        2026-02-19      │
│ • 다음글 제목        2026-01-25      │
│                                      │
└──────────────────────────────────────┘
```

- 같은 카테고리에서 이전/다음 글 2개 표시
- **선택사항** (1차에서 빠져도 됨)

---

## 11. 구현 순서 (우선순위)

### Phase 1: 코어 (필수)
1. `content.config.ts`에 `category` enum 추가
2. 기존 60개 글에 `category` frontmatter 일괄 추가
3. `index.astro` 리뉴얼 (Featured 그리드 + 카테고리 섹션)
4. `CategorySection.astro`, `FeaturedGrid.astro` 컴포넌트 생성
5. `/categories/[category]/` 페이지 생성 (페이지네이션)

### Phase 2: 보완
6. Nav에 Categories 링크 추가
7. 글 상세 페이지에 카테고리 배지 표시
8. 카테고리 인덱스 페이지 (`/categories/`)

### Phase 3: 폴리시
9. 글 하단 "같은 카테고리 글" 추천
10. Categories 드롭다운 네비게이션
11. OG 이미지에 카테고리 표시
12. RSS 피드 카테고리별 분리 (선택)

---

## 12. 카테고리 분류 초안 (60개 글)

### ✍️ Essay (16개)
| 파일 | 제목 |
|------|------|
| 2019-11-restart-blogging.md | 블로깅 다시 시작하기 |
| 2019-12-lean-customer-questions.md | 린 고객 개발을 위한 고객 인터뷰 기본 질문 5가지 |
| 2024-02-be-curious.md | 호기심을 가져라, 판단하지 말고 |
| 2024-10-winning-mentality.md | 팀에 Winning Mentality를 불어넣는 리더십 스킬 |
| 2025-03-continuous-discovery-why.md | Continuous Discovery란 무엇이고 왜 필요한가 |
| 2025-03-continuous-discovery-framework.md | Continuous Discovery를 위한 프레임워크 |
| 2025-03-continuous-discovery-outcomes.md | 산출물이 아닌 성과에 집중하기 |
| 2025-12-06-what-should-junior-developers-learn-in-the-ai-era.md | AI 시대에 신입,주니어 개발자는 무엇을 학습해야하는가? |
| 2026-01-09-15-year-cto-vibe-coding.md | 15년차 CTO가 바이브 코딩하는 방법 |
| 2026-01-09-f1-leadership-james-vowles.md | F1 리더십, 제임스 바울스는 무엇을 했나? |
| 2026-01-20-ai-mvp-linear-lessons.md | AI 시대의 MVP - Linear에서 배운 제품 개발의 원칙 |
| 2026-01-25-no-victory-no-future.md | 승리하지 못하는 조직에게 미래는 없다 |
| 2026-02-10-reading-tech-articles-three-pass-method.md | 기술 아티클 읽는 법 — 3단계 접근법 |
| 2026-02-19-code-reading-era.md | 코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가 |
| 2026-02-24-ai-as-smart-as-you.md | AI는 당신만큼만 똑똑하다 |
| 2026-02-24-llm-from-200-lines-to-agents.md | LLM 학습의 본질 - 200줄 코드에서 AI 에이전트까지 |

### 📖 Review (10개)
| 파일 | 제목 |
|------|------|
| 2013-08-fermat-last-theorem.md | 페르마의 마지막 정리 |
| 2019-03-blood-sweat-pixels.md | 피, 땀, 픽셀 |
| 2019-09-amazon-sells-everything.md | 아마존, 세상의 모든 것을 팝니다 |
| 2019-10-harvard-top-one-percent.md | 하버드 상위1퍼센트의 비밀 |
| 2019-11-lol-legend-starts.md | 리그 오브 레전드, 전설의 시작 |
| 2019-12-ai-quant-invasion.md | 인공지능 투자가 퀀트 |
| 2020-05-navyseal-winning.md | 네이비씰 승리의 기술 |
| 2024-03-reading-elon-musk.md | 일론 머스크를 읽고 |
| 2025-12-11-2025-gophercon-korea-review.md | 2025 고퍼콘 코리아 후기 |
| 2026-02-03-book-review-the-obstacle-is-the-way.md | "돌파력"을 읽고 |

### 📕 Fiction (5개)
| 파일 | 제목 |
|------|------|
| 2026-01-19-pangyo-it-episode-1.md | 허공을 미는 사람들 - EP1 |
| 2026-01-25-pangyo-it-episode-2-1.md | 허공을 미는 사람들 - EP2-1 |
| 2026-02-08-pangyo-it-episode-2-2.md | 허공을 미는 사람들 - EP2-2 |
| 2026-02-18-pangyo-it-episode-3-1.md | 허공을 미는 사람들 - EP3-1 |
| 2026-02-24-anthropic-codepath-curriculum.md | ❓ Anthropic CodePath 커리큘럼 → **Essay로 재분류** |

### 📕 Fiction (수정: 4개)
| 파일 | 제목 |
|------|------|
| 2026-01-19-pangyo-it-episode-1.md | 허공을 미는 사람들 - EP1 |
| 2026-01-25-pangyo-it-episode-2-1.md | 허공을 미는 사람들 - EP2-1 |
| 2026-02-08-pangyo-it-episode-2-2.md | 허공을 미는 사람들 - EP2-2 |
| 2026-02-18-pangyo-it-episode-3-1.md | 허공을 미는 사람들 - EP3-1 |

### 🔄 Retrospect (16개)
| 파일 | 제목 |
|------|------|
| 2020-12-2020-work-retro.md | 2020년 회고 |
| 2021-12-2021-year-log.md | 2021년의 기록 |
| 2024-01-2023-retro.md | 2023년 회고 |
| 2024-02-2024-jan-retro.md | 2024년 1월 회고 |
| 2024-02-2024-content-log.md | ~2024년 콘텐츠 기록 |
| 2024-04-2024-feb-mar-retro.md | 2024년 2, 3월 기록 |
| 2024-05-2024-apr-retro.md | 2024년 4월 회고 |
| 2024-06-2024-may-retro.md | 2024년 5월 회고 |
| 2024-07-2024-jun-retro.md | 2024년 6월 회고 |
| 2024-09-blood-sweat-melancholy.md | 피, 땀 그리고 서운함 |
| 2025-04-ihfb-four-year-retro.md | 4년간의 IHFB 회고 |
| 2025-04-last-seven-months.md | 지난 7개월의 기록 |
| 2025-09-scrumble-project-retro.md | Scrumble 프로젝트 회고 |
| 2025-09-24-obsidian-publish-migrate-to-astro.md | 블로그 이전 |
| 2023-12-blog-migration-obsidian.md | 블로그 이전 (Gatsby → Obsidian) |
| 2026-01-08-claude-opus-free-opencode-antigravity.md | Opencode + Antigravity (기록성) |

### 🔬 Study (14개)
| 파일 | 제목 |
|------|------|
| 2019-11-react-ts-apollo-setup.md | React TS Apollo 세팅 |
| 2019-11-stats-study-kit.md | 비전공 통계학 교재 추천 |
| 2019-12-react-ts-styled-components.md | React TS Styled Components |
| 2020-03-datacolon-retro-intro.md | DataColon 개발 후기 |
| 2020-12-data-adoption-intro.md | 사내 조직에 데이터 도입하기 |
| 2020-12-twil-week-2.md | tWIL 12월 2째주 |
| 2020-12-twil-week-3.md | tWIL 12월 3째주 |
| 2025-03-continuous-discovery-notes.md | Continuous Discovery 정리 (WIP) |
| 2025-09-scrumble-tech-retro-intro.md | Scrumble 기술 회고 0. 들어가며 |
| 2025-09-scrumble-tech-retro-backend.md | Scrumble 기술 회고 1. 백엔드 |
| 2025-10-03-scrumble-tech-retro-frontend-with-vibe-coding.md | Scrumble 기술 회고 2. 프론트엔드 |
| 2025-09-25-scrumble-project-team-interview.mdx | Scrumble 팀 인터뷰 |
| 2026-02-08-superpowers-introduction.md | Superpowers 소개 |
| 2026-02-15-ai-jarvis-openclaw.md | AI 에이전트 자비스 OpenClaw 활용기 |
| 2026-02-24-anthropic-codepath-curriculum.md | Anthropic CodePath 커리큘럼 리뷰 |

> ⚠️ **경계 케이스 메모**:
> - Continuous Discovery 시리즈: why/framework/outcomes는 Essay(의견 중심), notes(WIP)는 Study
> - Scrumble 기술 회고: 프로젝트 회고가 아닌 기술 정리 → Study
> - OpenClaw 활용기: 도구 사용법 정리 → Study
> - Anthropic CodePath: 커리큘럼 리뷰 → Study (남의 콘텐츠 분석)
> - Opencode + Antigravity: 도구 사용 기록 → Retrospect (기록성)
> - 블로그 이전 2편: 기술 기록이지만 회고 성격 → Retrospect

---

## 13. 미결 사항

| # | 항목 | 의사결정 필요 |
|---|------|--------------|
| 1 | Featured 최대 개수 | 현재 8개 → 4~6개로 줄일지? (2-col에 4개가 깔끔) |
| 2 | 카테고리 순서 | Essay → Review → Fiction → Retrospect → Study 이 순서? |
| 3 | 카테고리 비어있을 때 | 글이 0개인 카테고리는 메인에서 숨길지? |
| 4 | Nav 드롭다운 | 1차에서 구현할지, `/categories/` 링크로 갈지? |
| 5 | 경계 케이스 글 | 위 분류 초안에서 재분류 필요한 글 확인 |
| 6 | 카테고리별 색상 | 아이콘만으로 충분한지, 배지 배경색 필요한지 |

---

## 🔗 메타데이터

- **주제**: #블로그 #기획 #UI #카테고리
- **타입**: #기획안
- **프로젝트**: [[flowkater.io]]
- **관련**: [[블로그 이전 (Obsidian Publish → Astro)]]
