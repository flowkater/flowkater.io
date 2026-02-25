---
title: "AI는 당신만큼만 똑똑하다"
description: "같은 AI를 쓰는데 왜 격차가 벌어질까? Stripe 3,000명 데이터, MIT 뇌파 연구, McKinsey 2,000개 조직 분석이 가리키는 답. AI는 당신만큼만 똑똑하다."
summary: "Stripe는 시니어가 더 큰 가치를 얻었고, MIT는 AI를 많이 쓸수록 뇌가 약해진다는 걸 밝혔다. AI는 강한 자를 더 강하게, 약한 자를 더 약하게 만든다. 프롬프트가 아니라 인풋의 두께, 하네스 설계, 소크라틱 대화가 차이를 만든다."
pubDatetime: 2026-02-24T15:00:00+09:00
tags: ["에세이", "AI코딩", "생산성"]
category: "essay"
featured: false
draft: true
faq:
  - question: "AI를 쓰면 시니어가 더 유리한가요?"
    answer: "Stripe 3,000명 데이터에 따르면 그렇습니다. 경험이 많은 엔지니어가 AI에서 더 큰 가치를 얻었습니다. AI는 기존 전문성을 증폭시키는 도구이기 때문입니다."
  - question: "AI 시대에 프롬프트 엔지니어링이 핵심인가요?"
    answer: "프롬프트보다 중요한 건 인풋의 두께입니다. 도메인 지식, 시스템 이해, 비판적 사고력이 AI 활용 품질을 결정합니다. 프롬프트는 표면이고, 진짜 차이는 하네스 설계에서 나옵니다."
  - question: "AI가 주니어와 시니어의 격차를 줄여주나요?"
    answer: "단기적으로는 생산성 격차를 줄여주지만, 장기적으로는 벌립니다. MIT 연구에 따르면 AI에 의존할수록 인지 능력이 약해지고, McKinsey 조사에서도 전문성 기반 활용이 조직 성과와 직결됩니다."
keywords: ["AI 생산성", "시니어 개발자", "Stripe AI", "MIT 뇌파 연구", "하네스 엔지니어링", "인풋의 두께", "McKinsey AI"]
---

# AI는 당신만큼만 똑똑하다

## 불편한 데이터 두 개

Stripe가 3,000명 엔지니어에게 Cursor를 배포했다. 개발 인프라 총괄인 Scott MacVicar는 주니어가 가장 큰 이득을 볼 거라 예상했다. 경험 부족을 AI가 메워줄 거라는 합리적인 가정이었다. 결과는 반대였다.

> "He expected junior engineers to benefit most, using AI to compensate for limited experience. Instead, he's seen the [tenure advantage] — more experienced engineers get even more value."
>
> "그는 주니어 엔지니어가 가장 많은 혜택을 받을 거라 예상했다. 경험 부족을 AI로 보완할 수 있을 거라고. 하지만 실제로는 [재직 기간 우위] — 경험 많은 엔지니어가 더 큰 가치를 얻었다."
>
> — Scott MacVicar, Head of Developer Infrastructure, Stripe

비슷한 시기에 MIT Media Lab에서 나온 연구는 더 불편했다. EEG로 뇌파를 직접 측정한 연구인데, AI를 많이 쓸수록 뇌의 신경 연결이 **체계적으로 약화** 됐다. LLM을 활용한 그룹은 자기가 쓴 글조차 제대로 인용하지 못했고, 4개월간 모든 지표에서 Brain-only 그룹보다 열등했다.

> "Brain connectivity systematically scaled down with the amount of external support."
>
> "뇌의 연결성은 외부 지원의 양에 비례해 체계적으로 약화되었다."

그런데 여기서 잠깐, 반론이 있다. GitHub Copilot 연구에서는 정반대 결과가 나왔다. 프로그래밍 경험이 **적은** 개발자가 Copilot으로 더 큰 생산성 향상을 보였다.

> "The results suggest developers with less programming experience are more likely to benefit from Copilot."
>
> "결과는 프로그래밍 경험이 적은 개발자가 Copilot으로 더 큰 혜택을 받을 가능성이 높다고 시사한다."

그런데 Stripe 데이터는 정반대다. 왜? 측정하는 것이 다르기 때문이다. Copilot 연구는 **생산성** — 얼마나 빨리 코드를 완성하느냐 — 을 측정했다. Stripe는 **가치** — 얼마나 의미 있는 결과를 만들어내느냐 — 를 봤다. 주니어는 AI로 속도를 높일 수 있다. 하지만 속도와 가치는 다른 차원의 문제다. 빠르게 잘못된 방향으로 달리는 것은 가치가 아니다.

이 두 데이터를 나란히 놓으면 불편한 그림이 나온다. AI는 강한 자를 더 강하게, 약한 자를 더 약하게 만들고 있다. 같은 도구인데 격차가 벌어진다. 왜?

[이전 글](https://flowkater.io/posts/2026-02-19-code-reading-era/)에서 나는 "AI는 거울이다"라고 썼다. 거울에 비출 게 있는 사람이 되는 것이 핵심이라고. 그런데 그 글을 쓰고 나서 계속 붙잡고 있던 질문이 있다. **그 "비출 것"은 대체 어떻게 만들어지는 건가?** 프롬프트를 잘 쓰면 되는 건가? 아니었다.

---

## 인풋이 없으면 아웃풋도 없다

솔직히 고백하자면, 나도 한때 프롬프트 엔지니어링에 꽂혔던 적이 있다. 프롬프트 템플릿을 모으고, 구조화된 지시문을 다듬으면 AI를 더 잘 쓸 수 있을 거라 믿었다. (지금 생각하면 민망하다.)

그런데 돌아보니 내가 AI를 잘 쓰게 된 시점은 프롬프트를 잘 쓰게 된 시점이 아니었다. **내 도메인의 깊이가 어느 임계점을 넘은 시점** 이었다. TDD를 10년 넘게 해왔으니까 AI에게 테스트 먼저 작성하라고 지시할 수 있었다. DDD를 꽤 오래 고민해왔으니까 바운디드 컨텍스트를 먼저 정의하자고 말할 수 있었다. 프롬프트가 좋았던 게 아니라, 내 머릿속에 쌓인 맥락이 자연스럽게 좋은 지시로 흘러나온 것뿐이다.

[예전에 쓴 글](https://flowkater.io/posts/2025-12-06-what-should-junior-developers-learn-in-the-ai-era/)에서 나는 주니어 개발자들에게 이렇게 말했다. "책 많이 읽고 내 생각을 정리해라. 그게 문해력이고, AI 시대에 가장 중요한 경쟁력이다." 그때는 주니어들을 위한 조언이라고 생각했는데, 지금 보니 나한테도 그대로 적용되는 이야기였다.

나는 매일 아침 기술 글을 읽는다. 크론잡으로 Hacker News 핫 토픽을 수집하고, 뉴스레터를 번역해서 텔레그램으로 받아본다. AI가 번역하고 요약해주지만, 읽고 소화하는 건 온전히 나다. [3단계 접근법](https://flowkater.io/posts/reading-tech-articles-three-pass-method)을 쓰는 이유도 그거다. 그냥 "읽었다"고 치고 넘어가면 한 달 뒤에 아무것도 남지 않는다.

Wharton의 Ethan Mollick 교수가 재밌는 실험을 했다. Executive MBA 학생들에게 AI로 프로토타입을 만들게 했는데, 코딩 경험이 전혀 없는 사람들이 4일 만에 완성했다. 성공의 열쇠는 뭐였을까?

> "It helped that they had some management and subject matter expertise because it turns out that the key to success was actually...telling the AI what you want."
>
> "경영과 해당 분야 전문성이 도움이 됐다. 왜냐하면 성공의 열쇠는 결국... AI에게 뭘 원하는지 말하는 것이었기 때문이다."
>
> — Ethan Mollick

"뭘 원하는지 안다"는 것 자체가 전문성이다. 프롬프트 템플릿을 외워서 되는 게 아니라, 도메인을 이해하는 사람이 자연스럽게 좋은 지시를 내리는 거다. 순서가 반대다.

Stanford d.school에서 16년간 창의성을 가르쳐 온 Jeremy Utley 교수는 더 직접적으로 말한다.

> "If you've never articulated what makes your work yours, AI will give you average. But if you've done the work to know yourself as a creative? AI becomes an extension of your voice, not a replacement for it."
>
> "자기 일의 고유함을 정의해본 적이 없다면, AI는 평균을 줄 것이다. 하지만 창작자로서 자신을 아는 작업을 해왔다면? AI는 목소리의 대체가 아니라 확장이 된다."

결국 AI를 잘 쓰려면 AI에 대해 배우는 게 아니라, **내 도메인의 깊이를 키워야 한다.** 인풋의 질이 아웃풋의 질을 결정한다. Simon Willison이 말한 것처럼, 새 코드를 만드는 비용은 거의 공짜에 가까워졌지만 좋은 코드를 만드는 비용은 여전히 비싸다. 그 비용은 프롬프트가 아니라 사람의 두께에서 나온다.

그런데 맥락을 쌓는 것(인풋)과 그 맥락을 AI에게 전달하는 것은 동전의 양면이다. 아무리 두꺼운 맥락을 가지고 있어도 AI가 그걸 읽을 수 없으면 소용없다. 인풋이 원재료라면, 그 원재료를 AI가 소화할 수 있는 구조로 만드는 것 — 이게 하네스다.

---

## 도구가 아니라 하네스가 핵심이다

Anthropic이 Claude Code 공식 가이드에서 밝힌 문장이 하나 있다.

> "Claude performs dramatically better when it can verify its own work."
>
> "Claude는 자기 작업을 검증할 수 있을 때 극적으로 더 나은 성능을 보인다."

AI에게 검증 수단을 주는 것이 단일 최고 레버리지 액션이라는 거다. 테스트, 린터, 타입 시스템 — 이것들이 AI에게 "잘했는지 스스로 확인해" 라고 말하는 장치다. 이걸 만들어놓으면 도구를 바꿔도 그대로 작동한다.

OpenAI Codex 팀 이야기가 인상적이었다. 40명 규모 팀에 PM이 1명이다. 한 명. 그런데 그 PM이 Codex를 써서 자신을 100배로 확장했다.

> "The Codex team essentially runs with a single PM. That PM has used Codex to make himself a 100× PM. Watching him work is unbelievable. It's a totally different level."
>
> "Codex 팀은 사실상 PM 한 명으로 운영된다. 그 PM은 Codex를 써서 자신을 100배 PM으로 만들었다. 그의 작업을 보는 건 믿기 어려운 경험이다. 완전히 다른 차원이다."
>
> — Thibault Sottiaux, Engineering Lead, OpenAI Codex Team

이 PM이 "프롬프트를 잘 써서" 100배가 된 게 아니다. 제품의 맥락을, 팀의 맥락을, 사용자의 맥락을 두껍게 가지고 있었고, AI는 그 두께를 증폭한 것뿐이다.

ESLint 창시자 Nicholas Zakas의 말이 이 방향을 정확히 짚는다.

> "The software engineering job of the future won't involve writing code; it will involve orchestrating AI agents to write code for you."
>
> "미래의 소프트웨어 엔지니어링 직업은 코드를 작성하는 것이 아니라, AI 에이전트를 조율해 코드를 작성하게 하는 것이다."

프롬프트 엔지니어링에서 에이전트 오케스트레이션으로. 이미 넘어갔다. 프롬프트를 고민하는 단계는 지난 이야기다.

나도 비슷한 여정을 겪었다. 지난 1년간 코딩 도구를 세 번 바꿨다. oh-my-opencode에서 Claude Code로, 다시 Codex로. 도구를 바꿀 때마다 깨달은 게 있다. 도구를 바꾸는 건 쉽다. 하루면 충분하다. 진짜 가치는 도구가 아니라 **도구 위에 올라가는 하네스** — AGENTS.md, 테스트 인프라, 린터, 커스텀 스킬 — 에 있었다. 이건 도구를 바꿔도 그대로 남는다.

[tdd-go-loop](https://flowkater.io/posts/2026-01-09-15-year-cto-vibe-coding)이 그 예다. 테스트는 내가 설계하고 구현은 AI가 한다. 작은 단위로 Red-Green-Refactor를 돌리면서 검증하는 구조다. [Superpowers](https://flowkater.io/posts/2026-02-08-superpowers-introduction)는 그걸 더 자동화한 버전이고. 핵심은 같다. **AI가 자유롭게 코드를 쓰되, 매번 검증을 거치게 만드는 것.**

이게 oh-my-opencode에서도 먹혔고, Claude Code에서도 먹혔고, 지금 Codex에서도 먹힌다. 도구가 바뀌어도 하네스는 남는다. 이게 프롬프트 엔지니어링과 하네스 엔지니어링의 결정적 차이다. 프롬프트는 도구에 종속되지만, 하네스는 도구를 초월한다.

---

## 생각의 하네스 — AI에게 답을 구하지 않는다

코드의 하네스가 tdd-go-loop이라면, 생각의 하네스는 소크라틱 대화다.

새 기능을 구현할 때를 생각해보자. 대부분의 사람이 AI에게 "이 기능 만들어줘"라고 한다. 키워드를 입력하고 답을 기대한다. 하지만 LLM은 검색 엔진이 아니다. 대화 상대다.

나는 [JARVIS/EDITH 시스템](https://flowkater.io/posts/2026-02-15-ai-jarvis-openclaw)에서 **interview** 라는 스킬을 쓴다. 새 기능이든 아키텍처 설계든, AI가 바로 코드를 쓰지 않는다. 대신 나에게 질문을 던진다. "이 기능의 핵심 유저 시나리오가 뭔가?", "기존 모듈과 경계는 어떻게 나눌 건가?", "실패 시 폴백 전략은?", "성능 요구사항이 있나?" — 이런 질문들을 통해 내가 놓치고 있던 엣지 케이스와 설계 결정을 먼저 끌어낸다.

이 패턴이 왜 강력한가. 생각해보면 좋은 멘토가 하는 것도 정확히 이거다. 답을 주지 않는다. 대신 "왜 그렇게 생각해?", "그 가정이 틀리면 어떻게 되지?", "구체적인 사례가 있어?" 같은 질문으로 내 사고를 확장시킨다. 내가 멘토링할 때 쓰는 Think-Through 모드도 같은 원리다 — 부드럽게 가정에 도전하고, 구체적 시나리오로 질문하고, 이전 답변을 참조하여 깊이 파기.

코드의 하네스(tdd-go-loop)가 "AI의 코드를 검증하는 구조"라면, 생각의 하네스(소크라틱 대화)는 "AI를 통해 내 생각을 검증하는 구조"다. 둘 다 결국 **자기 워크플로우를 구축하는 것** 이다. 도구를 쓰는 게 아니라, 도구 위에 올라가는 나만의 시스템을 만드는 것.

Jeremy Utley가 추천하는 프롬프트가 있다.

> "당신은 AI 전문가입니다. 제 워크플로우와 책임 범위, KPI, 목표에 대해 충분한 맥락을 파악할 때까지 한 번에 하나씩 질문해 주세요."

**AI에게 질문하지 말고 AI가 나에게 질문하게 하라.** 이 전환이 AI 활용의 가장 큰 레버리지 포인트라고 본다.

pandas 창시자 Wes McKinney의 태도도 같은 맥락이다.

> "I don't describe the way I work now as 'vibe coding'—I've been building tools to bring rigor and continuous supervision to my parallel agent sessions, and to heavily scrutinize the work that my agents are doing."
>
> "지금 내 작업 방식을 '바이브 코딩'이라고 부르지 않는다. 병렬 에이전트 세션에 엄밀함과 지속적 감독을 가져오는 도구를 만들고 있고, 에이전트가 하는 작업을 철저히 검토하고 있다."

맥락이 두꺼운 사람은 AI를 "쓰는" 게 아니라 AI를 "관리"한다. Pieter Levels가 게임 개발 경험 제로에서 Cursor로 3시간 만에 비행 시뮬레이터를 만들어 20일 만에 $87K MRR을 찍은 것도, 코딩 맥락은 없었지만 제품 맥락은 두꺼웠기 때문이다. 맥락의 종류가 달랐을 뿐, 두께 자체는 있었다.

---

## 격차는 벌어지고 있다

개인의 이야기를 했으니, 조직 차원의 데이터를 보자. McKinsey가 2,000개 조직을 조사했다. 80%가 AI를 도입했다. 하지만 실질적 가치를 창출하고 있는 곳은 5.5%에 불과했다.

> "High performers are nearly 3x more likely to have fundamentally redesigned workflows as part of their AI efforts."
>
> "고성과 기업은 AI 도입의 일환으로 워크플로우를 근본적으로 재설계한 비율이 3배 높다."

BCG가 1,250개 기업을 분석한 결과도 거의 동일하다. 5%만 대규모 가치를 창출하고, 60%는 투자에도 불구하고 가치 전무.

> "5% of businesses derive value on a large scale, 60% derive none."
>
> "5%의 기업만이 대규모 가치를 창출하고, 60%는 아무 가치도 얻지 못한다."

5.5%와 5%. 두 곳에서 나온 숫자가 거의 같다는 게 섬뜩하다.

Shopify CEO Tobi Lütke가 전 직원에게 보낸 내부 메모도 이 맥락에서 읽힌다. "AI 사용은 기본 기대치"라고 선언하면서, 새 인력 채용 전에 "이걸 AI로 안 되는 이유"를 먼저 증명하라고 요구했다.

> "I've seen many of these people approach implausible tasks, ones we wouldn't even have chosen to tackle before, with reflexive and brilliant usage of AI to get 100X the work done."
>
> "이전이라면 시도조차 하지 않았을 불가능해 보이는 과제를, 반사적이고 영리한 AI 활용으로 100배의 결과를 내는 사람들을 봐왔다."

생각해보면 Tobi가 말하는 "반사적 사용"이란 결국 자기 일의 맥락 안에서 AI를 자연스럽게 끌어들이는 능력이다. 프롬프트를 고민하는 단계를 넘어선 거다.

개인도 마찬가지라고 본다. AI를 기존 워크플로우에 "붙여넣기"하면 제자리다. 기존에 하던 코딩 방식에 ChatGPT 창을 하나 더 띄워놓는 것. 그건 80%에 속하는 방법이다. 격차를 벌리는 건, **워크플로우 자체를 다시 설계하는 것** 이다.

Stripe가 만든 Minions 시스템이 좋은 사례다. 매주 1,000개 이상의 PR을 자동 생성한다. 하지만 모든 PR은 인간이 리뷰한다.

> "Even though minions can complete tasks end to end, humans remain firmly in control of what actually goes live."
>
> "미니언이 작업을 처음부터 끝까지 완료할 수 있지만, 실제로 라이브에 나가는 것에 대한 통제는 인간이 확고히 쥐고 있다."

Stripe가 3,000명에게 Cursor를 배포하고도 시니어가 더 큰 가치를 얻은 이유, Shopify가 "AI 사용은 기본 기대치"라고 선언한 이유, Minions가 매주 1,000개 PR을 만들면서도 인간 리뷰를 고수하는 이유 — 전부 같은 지점을 가리킨다. AI를 기존 프로세스 위에 얹는 건 80%의 방법이다. 5%는 **프로세스 자체를 다시 설계** 한다. 도구가 아니라 일하는 방식이 경쟁력이 되는 시대다.

당신은 AI를 기존 방식에 "추가"하고 있는가, 아니면 방식 자체를 다시 설계하고 있는가?

---

## 나가며

정리하자면 이렇다. 프롬프트를 잘 쓰는 건 지난 이야기다. 지금 필요한 건 세 가지다.

첫째, **인풋을 키워라.** 책을 읽고, 기술 글을 읽고, 내 생각을 정리해라. AI를 잘 쓰려면 AI에 대해 배우는 게 아니라 내 도메인의 깊이를 키워야 한다.

둘째, **하네스를 만들어라.** AGENTS.md, 테스트 인프라, 린터, 검증 루프. 도구를 바꿔도 남는 구조를 설계해라. 프롬프트는 도구에 종속되지만, 하네스는 도구를 초월한다.

셋째, **AI에게 답을 구하지 마라.** AI를 통해 내 생각을 구조화해라. 질문을 던지는 게 아니라, 질문을 받아라. 소크라틱 대화가 검색보다 강력하다.

도구는 모두에게 같다. 차이를 만드는 건 도구 앞에 서는 사람의 두께다. 그 두께는 프롬프트 강의를 들어서 생기지 않는다.

> "AI amplifies your underlying humanity."
>
> "AI는 당신의 근본적인 인간성을 증폭한다."
>
> — Jeremy Utley, Stanford d.school

---

## References

- [Stripe — AI-assisted engineering at scale (Cursor Blog)](https://cursor.com/blog/stripe)
- [MIT Media Lab — Your Brain on ChatGPT (arXiv)](https://arxiv.org/abs/2506.08872)
- [GitHub Copilot 생산성 연구 (arXiv)](https://arxiv.org/abs/2302.06590)
- [Ethan Mollick — Management as AI Superpower (One Useful Thing)](https://www.oneusefulthing.org/p/management-as-ai-superpower)
- [Jeremy Utley — AI Productivity Guide (Stanford d.school / TechXplore)](https://techxplore.com/news/2026-02-thinker-ai-creativity.html)
- [Simon Willison — Code is Cheap (Agentic Engineering Patterns)](https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/)
- [OpenAI Codex Team Deep Dive (Eng Leadership Newsletter)](https://newsletter.eng-leadership.com/p/how-openais-codex-team-works-and)
- [Shopify Tobi Lütke — AI Memo](https://x.com/tobi/status/1909251946235437514)
- [Shopify AI Memo (The Verge 보도)](https://www.theverge.com/news/644943/shopify-ceo-memo-ai-hires-job)
- [Wes McKinney — The Mythical Agent-Month](https://wesmckinney.com/blog/mythical-agent-month/)
- [Nicholas Zakas — From Coder to Orchestrator](https://humanwhocodes.com/blog/2026/01/coder-orchestrator-future-software-engineering/)
- [Stripe Minions — One-Shot End-to-End Coding Agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
- [Anthropic — Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices)
- [McKinsey — The State of AI in 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- [BCG — The Widening AI Value Gap 2025](https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap)
- [Pieter Levels — fly.pieter.com](https://fly.pieter.com)
- 이전 글: [코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가](https://flowkater.io/posts/2026-02-19-code-reading-era/)
- 이전 글: [AI 시대에 신입,주니어 개발자는 무엇을 학습해야하는가?](https://flowkater.io/posts/2025-12-06-what-should-junior-developers-learn-in-the-ai-era/)
- 이전 글: [15년차 CTO가 바이브 코딩하는 방법](https://flowkater.io/posts/2026-01-09-15-year-cto-vibe-coding)
- 이전 글: [Superpowers 소개](https://flowkater.io/posts/2026-02-08-superpowers-introduction)
- 이전 글: [AI 에이전트 자비스 OpenClaw 활용기](https://flowkater.io/posts/2026-02-15-ai-jarvis-openclaw)
