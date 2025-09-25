---
title: "Obsidian Publish -> Astro 블로그 마이그레이션"
description: "약 1년 반 정도 쓰던 Obsidian Publish 에서 Astro 기반 블로그로 마이그레이션 했습니다. Obsidian 은 훌륭하지만 Publish 는 아직 블로깅 툴로는 많이 부족한 것 같아요. 그리고 Astro 는 무료입니다."
summary: "약 1년 반 정도 쓰던 Obsidian Publish 에서 Astro 기반 블로그로 마이그레이션 했습니다. Obsidian 은 훌륭하지만 Publish 는 아직 블로깅 툴로는 많이 부족한 것 같아요. 그리고 Astro 는 무료입니다. Obsidian 은 개인 위키와 작성을 위해 굉장히..."
pubDatetime: 2025-09-24T14:18:38+09:00
updatedDatetime: 2025-09-24T14:18:38+09:00
tags: ["etc"]
featured: false
draft: false
slug: "obsidian-publish-migrate-to-astro"
---

Obsidian 은 개인 위키와 작성을 위해 굉장히 좋은 툴이고 제텔카스텐과 문서화에 관심이 많다면 요즈음 대부분 권하는 문서 에디터 툴이다. 나는 Notion 을 별로 좋아하지 않았고 Roam 리서치는 좀 어렵다는 느낌이 있었는데, Obsidian 이 약간 이쪽 문서툴에서 표준이 되어가는 느낌을 받으면서 Obsidian 으로 과감하게 옮겼고, 이전에 gatsbyjs 로 잘 사용하고 있던 블로그 플랫폼도 Obsidian Publish 를 결제해서 모두 마이그레이션 했다.

배포도 빠르고 사이트 디자인도 크게 나쁘지 않았고 글을 작성하기 편해서 23년 즈음 갈아타고 그 와중에 회고 글을 몇 개 썼으니 나름 선방했다고 볼 수 있다. 그러나 Obsidian Publish 를 블로깅으로 쓰기에는 여러가지 에러 상황이 많았다. 가장 큰 문제가 SEO 인데, gatsbyjs 시절 Organic 유입이 꽤 되던 내 블로그가 Obsidian Publish 로 옮기고 나서 유입이 확 줄어버렸고 내가 쓴 글을 누구에게 전달하려면 직접 링크를 전달하는게 최선이었다. 아무리 내가 그냥 끄적이고 싶어서 쓰는 블로그라고 해도 독자가 있는 것과 없는 것의 차이는 크니..

파일 베이스 기반이고 frontmatter 를 강제하지 않는다는 점, Obsidian sync/publish 까지 결제하면 가격도 좀 되고, Google adsense 나 이벤트 트래킹 같은 커스텀은 제공되지 않고 Obsidian 에서만 딱 제공하는 것들만 사용 가능하다. (like GA.) 특히, 댓글 기능이 없는게 가장 크다. 누가 댓글을 달겠냐만은 조금이나마 소통 본능이 있는 나에게는 조금 답답한 면이 계속 존재했다.
그럼에도 불구하고 콘텐츠 작성을 그렇게 자주하는게 아니고 Obsidian 이 나름 편해서 잘 사용하고 있었다. 그런데 이제 자유의 몸이 되었고 남는 건 기록이고 그 기록이 모두 콘텐츠라는 생각이 들어서 조금 더 제대로 해보고 싶어서 다시 Astro 기반의 블로그 플랫폼으로 변경했다.

이로서 [블로깅 다시 시작하기](/posts/2019-11-restart-blogging)가 19년도 11월, [블로그 이전 (Gatsbyjs -> Obsidian Publish)](/posts/2023-12-blog-migration-obsidian)가 23년도 12월 말이니 첫번째 글을 다시보니 제대로 블로깅한게 Octopress 부터니, 그 뒤에 jekyll, Gatsbyjs, Obsidian Publish, Astro 까지 5번째 플랫폼이다.

(나라는 사람이 공부하려면 공책과 펜부터 사고 운동하려면 장비부터 검색하는 사람이라서 항상 이렇게 의지를 표현하는게 요란하다.)

[astro](https://astro.build/)는 content-driven 웹사이트를 위한 웹프레임워크라고 소개하고 있는데, 블로깅 뿐만 아니라 e-commerce 등 다양한 사이트 제작에 활용되는 것 같다. 렌더링도 빠르고 SEO 도 설정할 수 있고 SSR 등등 여러가지 장점이 보였고 지금은 테마를 가져다 쓰지만 추후에 내가 직접 커스텀할 수 있겠다는 생각에 선택을 했다. 같이 검토했던 건 Golang 기반의 [Hugo](https://gohugo.io/)인데, 조금 더 확장성이 높은건 astro 라고 판단해서 astro 로 마이그레이션 했다.

옮기면서 제일 고생한 건 기존 Obsidian 의 폴더 트리 파일 기반 마크다운 파일들을 flat 한 형태로 옮기는 거 였는데, Codex 로 몇 가지 자동화해서 스크립트를 작성해서 옮겼고, 놀랍게도 Obsidian은 frontmatter(글의 메타데이터)가 없기 때문에, 예전에 썼던 글들의 파일 생성 날짜를 찾아가면서 하나하나 포맷에 맞춰서 교체해주었다. (사실 이게 제일 고생한 부분인듯.. 다행히(?)도 글이 몇 개 없어서 금방했다(..))

이번에 퇴사하면서 한동안 탈AWS 하느라 CloudFlare 를 쓰는데, CloudFlare Pages 에 Astro 전용 배포도 지원해서 배포도 거의 5분만에 했고, 스크립트로 여러가지 편의 기능도 추가했다.

#### 구성

- Astro
- CloudFlare Pages
- Github (+giscus 댓글)
- Decap CMS (아직 적용X. headless cms 에디팅 경험이 과연 좋을까? 그냥 마크다운 에디터로 작성하고 변환하는게 더 좋지 않을까)
- Google Analytics / Posthog (써보고 싶었는데 이번 기회에..)

요즈음 스레드도 조금씩 하고 있는데, 회고가 아닌 글들, 내 머릿 속에 계속 떠다니는 생각들을 꾸준히 끄적여보고 싶다.

화이팅(?)
