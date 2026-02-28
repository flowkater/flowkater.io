---
title: "AI는 당신만큼만 똑똑하다"
description: "같은 AI를 쓰는데 왜 격차가 벌어질까? Stripe 3,000명 데이터, MIT 뇌파 연구가 가리키는 답. 결국 AI의 아웃풋은 당신의 인풋으로 결정된다."
summary: "Stripe는 시니어가 더 큰 가치를 얻었고, MIT는 AI를 많이 쓸수록 뇌가 약해진다는 걸 밝혔다. AI는 강한 자를 더 강하게, 약한 자를 더 약하게 만든다. 프롬프트가 아니라 인풋의 두께, 도메인 전문성, 그리고 AI에게 답을 구하지 않는 자세가 차이를 만든다."
pubDatetime: 2026-02-28T15:00:00+09:00
tags: ["에세이", "AI코딩", "생산성"]
category: "essay"
featured: false
draft: false
faq:
  - question: "AI를 쓰면 시니어가 더 유리한가요?"
    answer: "Stripe 3,000명 데이터에 따르면 그렇습니다. 경험이 많은 엔지니어가 AI에서 더 큰 가치를 얻었습니다. AI는 기존 전문성을 증폭시키는 도구이기 때문입니다."
  - question: "AI 시대에 프롬프트 엔지니어링이 핵심인가요?"
    answer: "프롬프트보다 중요한 건 인풋의 두께입니다. 도메인 지식, 시스템 이해, 비판적 사고력이 AI 활용 품질을 결정합니다."
  - question: "AI가 주니어와 시니어의 격차를 줄여주나요?"
    answer: "단기적으로는 생산성 격차를 줄여주지만, 장기적으로는 벌립니다. MIT 연구에 따르면 AI에 의존할수록 인지 능력이 약해지고, 결과물의 완성도는 결국 사람의 도메인 전문성과 꼼꼼함으로 귀결됩니다."
keywords:
  [
    "AI 생산성",
    "시니어 개발자",
    "Stripe AI",
    "MIT 뇌파 연구",
    "인풋의 두께",
    "AI 코딩 격차",
    "도메인 전문성",
  ]
---

# AI는 당신만큼만 똑똑하다

["코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가"](https://flowkater.io/posts/2026-02-19-code-reading-era/)를 올리고 예상보다 많은 분들이 읽어주셨다. 그 글에서 미처 다 못한 이야기를 조금 더 풀어보고 싶어졌다. AI 시대에도 끊임없이 성장을 고민하는 엔지니어들에게, 내가 최근 겪은 경험과 몇 가지 사례를 함께 나눠보려 한다.

## 같은 AI, 다른 결과

Stripe가 3,000명 엔지니어에게 Cursor를 배포했다. 개발 인프라 총괄인 Scott MacVicar는 주니어가 가장 큰 이득을 볼 거라 예상했다. 경험 부족을 AI가 메워줄 거라는 합리적인 가정이었다. 결과는 반대였다.

> "He expected junior engineers to benefit most, using AI to compensate for limited experience. Instead, he's seen the [tenure advantage] — more experienced engineers get even more value."
>
> "그는 주니어 엔지니어가 가장 많은 혜택을 받을 거라 예상했다. 경험 부족을 AI로 보완할 수 있을 거라고. 하지만 실제로는 [재직 기간 우위] — 경험 많은 엔지니어가 더 큰 가치를 얻었다."
>
> — Scott MacVicar, Head of Developer Infrastructure, Stripe

비슷한 시기에 MIT Media Lab에서 나온 연구는 더 흥미로웠다. EEG로 뇌파를 직접 측정한 연구인데, AI를 많이 쓸수록 뇌의 신경 연결이 **체계적으로 약화됐다**. LLM을 활용한 그룹은 자기가 쓴 글조차 제대로 인용하지 못했다. 4개월간 모든 지표에서 Brain-only 그룹보다 열등했다.

> "Brain connectivity systematically scaled down with the amount of external support."
>
> "뇌의 연결성은 외부 지원의 양에 비례해 체계적으로 약화되었다."

그런데 여기서 잠깐, 반론이 있다. GitHub Copilot 연구에서는 정반대 결과가 나왔다. 프로그래밍 경험이 **적은** 개발자가 Copilot으로 더 큰 생산성 향상을 보였다.

> "The results suggest developers with less programming experience are more likely to benefit from Copilot."
>
> "결과는 프로그래밍 경험이 적은 개발자가 Copilot으로 더 큰 혜택을 받을 가능성이 높다고 시사한다."

그런데 Stripe 데이터는 정반대다. 왜? 측정하는 것이 다르기 때문이다. Copilot 연구는 **생산성** — 얼마나 빨리 코드를 완성하느냐 —을 측정했다. Stripe는 **가치** — 얼마나 의미 있는 결과를 만들어내느냐 —를 봤다. 주니어는 AI로 속도를 높일 수 있다. 하지만 속도와 가치는 다른 차원의 문제다. 빠르게 잘못된 방향으로 달리는 것은 가치가 아니다.

이 두 데이터를 나란히 놓으면 불편한 그림이 나온다. AI는 강한 자를 더 강하게, 약한 자를 더 약하게 만들고 있다. 같은 도구인데 격차가 벌어진다. 왜?

[이전 글](https://flowkater.io/posts/2026-02-19-code-reading-era/)에서 나는 "AI는 거울이다"라고 썼다. 거울에 비출 게 있는 사람이 되는 것이 핵심이라고. 그런데 그 글을 쓰고 나서 계속 붙잡고 있던 질문이 있다. **그 "비출 것"은 대체 어떻게 만들어지는 건가?** 프롬프트를 잘 쓰면 되는 건가? 아니었다.

---

## 인풋이 없으면 아웃풋도 없다

솔직히 고백하자면, 나도 한때 프롬프트 엔지니어링에 꽂혔던 적이 있다. 프롬프트 템플릿을 모으고, 구조화된 지시문을 다듬으면 AI를 더 잘 쓸 수 있을 거라 믿었다. (지금 생각하면 민망하다.)

그런데 돌아보니 내가 AI를 잘 쓰게 된 시점은 프롬프트를 잘 쓰게 된 시점이 아니었다. **내 도메인의 깊이가 어느 임계점을 넘은 시점**이었다. TDD를 10년 넘게 해왔으니까 AI에게 테스트 먼저 작성하라고 지시할 수 있었다. DDD를 꽤 오래 고민해왔으니까 바운디드 컨텍스트를 먼저 정의하자고 말할 수 있었다. 프롬프트가 좋았던 게 아니라, 내 머릿속에 쌓인 맥락이 자연스럽게 좋은 지시로 흘러나온 것뿐이다.

최근에 이걸 뼛속까지 느낀 경험이 있다. UI 서버 연동 작업을 하면서, AI가 작성한 구현 계획을 20번 넘게 반복 검증했다. 계획 문서 자체는 꽤 완성도가 높았다. 그런데 실제로 돌려보니 제대로 된 값이 안 나왔다. 오류도 뜨지 않았다. 폴백값이 조용히 내려오고 있었기 때문이다. 도메인 요구사항의 의도와는 다른 값이 내려오고 있었지만, 시스템적으로는 정상 동작하는 것처럼 보였다.

개발하는 서비스의 비즈니스 로직이 점점 복잡해지면 AI는 맥락을 잃고 헤매기 시작한다. 문제를 좁히고, 오류의 범위를 좁히고, AI에게 나눠서 문제를 풀게 던져주는 역할은 여전히 사람의 몫이다. 결과물에 대한 검증, 테스트, 그 꼼꼼함도 마찬가지다. AI는 계획대로 구현했다. 하지만 그 계획이 요구사항과 맞는지 확인하는 건 결국 내 손으로 해야 했다.

AI는 엄청나게 발전한 것도 맞고, 생산성을 어마어마하게 올려준 것도 맞다. 하지만 결과물의 완성도와 퀄리티는 결국 도메인 전문성과 꼼꼼함 — AI 시대 이전에도 필요했던 능력 —으로 귀결된다.

[예전에 쓴 글](https://flowkater.io/posts/2025-12-06-what-should-junior-developers-learn-in-the-ai-era/)에서 나는 주니어 개발자들에게 이렇게 말했다. "책 많이 읽고 내 생각을 정리해라. 그게 문해력이고, AI 시대에 가장 중요한 경쟁력이다." 하지만 이건 주니어만을 위한 조언은 아니다. AI 시대에 살아남기 위한 나를 포함한 우리 모두를 위한 다짐이다.

나도 요즘 더 많은 (기술 책이 아닌) 책을 읽으려고 노력한다. 예전에는 속도가 느려 미루기만 했던 원서나 해외 아티클도 [자비스](https://flowkater.io/posts/2026-02-15-ai-jarvis-openclaw/) 덕분에 몇 배는 더 소화해내고 있다. 블로그 글 쓰기를 통해, 소비자 입장에서 글을 어떻게 읽고 소화해 내 생각으로 엮을지 계속 연습하는 것도 AI 활용에 훨씬 도움이 된다. ([3단계 접근법](https://flowkater.io/posts/reading-tech-articles-three-pass-method) 글을 썼던 이유도 그거다. 그냥 "읽었다"고 치고 넘어가면 한 달 뒤에 아무것도 남지 않는다.)

Wharton의 Ethan Mollick 교수가 재밌는 실험을 했다. Executive MBA 학생들에게 AI로 프로토타입을 만들게 했는데, 코딩 경험이 전혀 없는 사람들이 4일 만에 완성했다. 성공의 열쇠는 뭐였을까?

> "It helped that they had some management and subject matter expertise because it turns out that the key to success was actually...telling the AI what you want."
>
> "경영과 해당 분야 전문성이 도움이 됐다. 왜냐하면 성공의 열쇠는 결국... AI에게 뭘 원하는지 말하는 것이었기 때문이다."
>
> — Ethan Mollick

"뭘 원하는지 안다"는 것 자체가 전문성이다. 프롬프트 템플릿을 외워서 되는 게 아니라, 도메인을 이해하는 사람이 자연스럽게 좋은 지시를 내리는 거다. 순서가 반대다.

결국 AI를 잘 쓰려면 AI에 대해 배우는 게 아니라, **내 도메인의 깊이를 키워야 한다.** 인풋의 질이 아웃풋의 질을 결정한다. Simon Willison이 말한 것처럼, 새 코드를 만드는 비용은 거의 공짜에 가까워졌지만 좋은 코드를 만드는 비용은 여전히 비싸다. 그 비용은 프롬프트가 아니라 사람의 두께에서 나온다.

[No Skill. No Taste](https://blog.kinglycrow.com/no-skill-no-taste/) 글에서도 재밌는 주장이 있다. 지금 개발자·비개발자들이 열심히 만드는 바이브 코딩 앱들은 대부분 Skill과 Taste 4분면의 최하위 영역에 위치한다는 것. (Todo 생산성 앱 같은.) 반면 같은 Todo App이더라도 감각적인 디자인, 기존의 기대치를 넘어서는 완성도가 있다면 CRUD 앱이라도 인기 앱이 될 수 있다는 주장이다. Skill은 AI가 대체할 수 있지만 Taste — 즉 도메인에 대한 감각과 안목 —는 결국 사람에게서 나온다. (개발자들이여, 고개를 들어 주위를 돌아보아라!)

---

## AI에게 답을 구하지 않는다

새 기능을 구현할 때를 생각해보자. 대부분의 사람이 AI에게 "이 기능 만들어줘"라고 한다. 키워드를 입력하고 답을 기대한다. 하지만 LLM은 검색 엔진이 아니다. 대화 상대다.

나는 작업 전에 항상 **interview**라는 스킬을 쓴다. 새 기능이든 아키텍처 설계든, 내가 문서를 사전에 얼마나 꼼꼼하게 작성했어도 AI가 바로 코드를 쓰지 않는다. 대신 AI가 나에게 질문을 던진다. "이 기능의 핵심 유저 시나리오가 뭔가?", "기존 모듈과 경계는 어떻게 나눌 건가?", "실패 시 폴백 전략은?", "성능 요구사항이 있나?" — 이런 질문들을 통해 내가 놓치고 있던 엣지 케이스와 설계 결정을 먼저 끌어낸다.

최근에 재분배 엔진을 작업하면서 이 인터뷰의 가치를 확실히 체감했다. 엔진에서 처리하는 타입이 두 종류인데, 각각 정책이 다르다. 나는 A 타입만 생각하고 기획안을 업데이트했다. 나름 꼼꼼하게 작성했고, AI에게 피드백까지 받았다. 그런데 실제로 돌려보니 B 타입까지 같이 오버라이드되면서 한참을 헤맸다. 인터뷰 스킬에서는 이런 걸 놓치지 않는다. "B 타입은 어떻게 처리하나요?"라고 AI가 먼저 물어보기 때문이다.

인터뷰는 "AI가 모호하거나 애매한 부분을 무조건 해소"하는 과정이다. 기능이 복잡해질수록 점점 유용해진다. 복잡한 엔진 알고리즘을 구현하거나 UI 디테일을 잡을 때, 기획안의 허점을 찾고 엣지 케이스를 모두 문서에 올린 뒤 실행하면, 원샷에 나오는 결과물의 퀄리티가 이전과는 확실히 달랐다.

이 패턴이 왜 강력한가? 생각해보면 좋은 멘토가 하는 것도 정확히 이거다. 답을 주지 않는다. 대신 "왜 그렇게 생각해?", "그 가정이 틀리면 어떻게 되지?", "구체적인 사례가 있어?" 같은 질문으로 내 사고를 확장시킨다.

Jeremy Utley가 추천하는 프롬프트가 있다.

> "당신은 AI 전문가입니다. 제 워크플로우와 책임 범위, KPI, 목표에 대해 충분한 맥락을 파악할 때까지 한 번에 하나씩 질문해 주세요."

**AI에게 질문하지 말고 AI가 나에게 질문하게 하라.** 이 전환이 AI 활용의 가장 큰 레버리지 포인트라고 본다.

pandas 창시자 Wes McKinney의 태도도 같은 맥락이다.

> "I don't describe the way I work now as 'vibe coding'—I've been building tools to bring rigor and continuous supervision to my parallel agent sessions, and to heavily scrutinize the work that my agents are doing."
>
> "지금 내 작업 방식을 '바이브 코딩'이라고 부르지 않는다. 병렬 에이전트 세션에 엄밀함과 지속적 감독을 가져오는 도구를 만들고 있고, 에이전트가 하는 작업을 철저히 검토하고 있다."

맥락이 두꺼운 사람은 AI를 "쓰는" 게 아니라 AI를 "관리"한다. AI에게 답을 구하는 게 아니라, AI를 통해 내 생각을 검증하고 구조화하는 것. 그게 같은 도구를 쓰면서도 다른 결과를 만드는 방법이다.

---

## 격차는 벌어지고 있다

개인의 이야기를 했으니, 조직 차원으로 시야를 넓혀보자.

Stripe가 만든 Minions 시스템이 좋은 사례다. 3,000명에게 Cursor를 배포한 것에서 한 발 더 나아가, 매주 1,000개 이상의 PR을 자동 생성하는 시스템을 구축했다. 하지만 모든 PR은 인간이 리뷰한다.

> "Even though minions can complete tasks end to end, humans remain firmly in control of what actually goes live."
>
> "미니언이 작업을 처음부터 끝까지 완료할 수 있지만, 실제로 라이브에 나가는 것에 대한 통제는 인간이 확고히 쥐고 있다."

그리고 그 인간 리뷰에서 시니어가 더 큰 가치를 만들어냈다. AI가 코드를 생성하는 속도는 모두에게 똑같았지만, 그 코드를 평가하고 방향을 잡는 능력은 경험에 비례했다.

McKinsey가 2,000개 조직을 조사한 결과도 같은 패턴을 보여준다. 80%가 AI를 도입했지만, 실질적 가치를 창출하고 있는 곳은 고작 5%에 불과했다. BCG의 1,250개 기업 분석에서도 거의 동일한 숫자가 나왔다.

왜 95%는 효과를 보지 못했을까. 생각해보면 답은 단순하다. AI를 도구로써 기존 방식 위에 얹기만 하면, 원래 병목이 일어나던 곳에서 여전히 막힌다. 코드 작성이 느려서 병목이었던 곳은 AI로 해결된다. 하지만 진짜 병목이 의사결정 구조나 조직 문화에 있었다면, AI를 아무리 도입해도 그 병목은 그대로다.

> "High performers are nearly 3x more likely to have fundamentally redesigned workflows as part of their AI efforts."
>
> "고성과 기업은 AI 도입의 일환으로 워크플로우를 근본적으로 재설계한 비율이 3배 높다."

5%의 기업들이 다른 건 AI를 잘 도입해서가 아니다. AI 도입 이전에 기존의 관행과 시스템을 혁신했기 때문이다. 순서가 반대다.

[이전 글에서 다뤘던 F1 윌리엄스 — 제임스 바울스의 리더십](https://flowkater.io/posts/2026-01-09-f1-leadership-james-vowles/)도 같은 맥락이다. 바울스가 윌리엄스에서 한 일은 새로운 도구를 도입한 게 아니었다. 엑셀 시트로 F1 머신을 관리하던 시스템을 조직 문화와 프로세스부터 뜯어고쳤다. 도구를 도입하는 것보다 그에 맞춰 기존 시스템을 개혁하는 게 훨씬 힘들지만, 그만큼 가치 있는 일이다. 그리고 이건 단순히 시스템과 관행의 문제가 아니라, 조직 문화와 리더십까지 엮여 있는 문제다.

Shopify CEO Tobi Lütke가 전 직원에게 "AI 사용은 기본 기대치"라고 선언하면서, 새 인력 채용 전에 "이걸 AI로 안 되는 이유"를 먼저 증명하라고 요구한 것도 결국 같은 결이다. 도구를 쓰라는 게 아니라, 일하는 방식 자체를 바꾸라는 거다.

결국 사람이 문제다. AI를 기존 프로세스 위에 얹는 건 95%의 방법이다. 5%는 프로세스 자체를, 조직 문화 자체를, 사람이 일하는 방식 자체를 다시 설계한다.

당신은 AI를 기존 방식에 "추가"하고 있는가, 아니면 방식 자체를 다시 설계하고 있는가?

---

## 나가며

도구는 모두에게 같다. 차이를 만드는 건 도구 앞에 서는 사람의 두께다.

하네스 엔지니어링을 하고 워크플로우를 만드는 것. 이걸 도입했을 때 마치 남들보다 앞서는 것처럼 느낀다. 그리고 새로운 도구가 뉴스에 나오면 우리 모두 FOMO를 느끼며 쫓아가기 바쁜 시기다. 하지만 결국 어느 시점에 엔지니어링 워크플로우는 상향 평준화되고 보급화될 것이다. 그때에도 살아남는 엔지니어가 되려면 우리는 무엇을 준비해야 할까. 내 생각에는 본질은 변하지 않을 것이라고 생각한다.

코드만 잘 쓰면 된다고 믿었던 시절이 있었다. 나도 그랬다. 그런데 AI가 코드를 대신 써주는 시대가 오니까, 정작 남는 건 코드 바깥에 있던 것들이었다. 도메인을 이해하는 깊이, 요구사항을 검증하는 꼼꼼함, 엣지케이스를 미리 떠올리는 경험, 방향을 잡는 판단력. 결국 AI 시대 이전에도 중요했던 것들이 AI 시대에 더 중요해졌다.

> "If you've never articulated what makes your work yours, AI will give you average. But if you've done the work to know yourself as a creative? AI becomes an extension of your voice, not a replacement for it."
>
> "자기 일의 고유함을 정의해본 적이 없다면, AI는 평균을 줄 것이다. 하지만 창작자로서 자신을 아는 작업을 해왔다면? AI는 목소리의 대체가 아니라 확장이 된다."
>
> — Jeremy Utley, Stanford d.school

AI는 당신의 목소리를 대체하지 않는다. 증폭할 뿐이다. 증폭할 목소리가 있는가, 그게 질문이다.

---

## References

- [Stripe — AI-assisted engineering at scale (Cursor Blog)](https://cursor.com/blog/stripe)
- [MIT Media Lab — Your Brain on ChatGPT (arXiv)](https://arxiv.org/abs/2506.08872)
- [GitHub Copilot 생산성 연구 (arXiv)](https://arxiv.org/abs/2302.06590)
- [Ethan Mollick — Management as AI Superpower (One Useful Thing)](https://www.oneusefulthing.org/p/management-as-ai-superpower)
- [Jeremy Utley — AI Productivity Guide (Stanford d.school / TechXplore)](https://techxplore.com/news/2026-02-thinker-ai-creativity.html)
- [Simon Willison — Code is Cheap (Agentic Engineering Patterns)](https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/)
- [Wes McKinney — The Mythical Agent-Month](https://wesmckinney.com/blog/mythical-agent-month/)
- [Stripe Minions — One-Shot End-to-End Coding Agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
- [McKinsey — The State of AI in 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- [BCG — The Widening AI Value Gap 2025](https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap)
- [Shopify Tobi Lütke — AI Memo](https://x.com/tobi/status/1909251946235437514)
- [No Skill. No Taste](https://blog.kinglycrow.com/no-skill-no-taste/)
- 이전 글: [코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가](https://flowkater.io/posts/2026-02-19-code-reading-era/)
- 이전 글: [AI 시대에 신입, 주니어 개발자는 무엇을 학습해야 하는가?](https://flowkater.io/posts/2025-12-06-what-should-junior-developers-learn-in-the-ai-era/)
- 이전 글: [F1 윌리엄스 — 제임스 바울스의 리더십](https://flowkater.io/posts/2026-01-09-f1-leadership-james-vowles/)
- 이전 글: [AI 에이전트 자비스 OpenClaw 활용기](https://flowkater.io/posts/2026-02-15-ai-jarvis-openclaw/)
- 이전 글: [기술 아티클 읽는 법 — 3단계 접근법](https://flowkater.io/posts/reading-tech-articles-three-pass-method/)
