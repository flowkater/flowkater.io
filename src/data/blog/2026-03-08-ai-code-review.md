---
title: "AI 시대에 코드 리뷰, 어떻게 해야할까?"
description: "CTO 시절 코드 리뷰의 현실부터 AI 시대의 담론까지. Simon Willison, Kent Beck, Bryan Finster, StrongDM, Salesforce, latent.space — 코드 리뷰를 둘러싼 스펙트럼을 정리하고, 결국 무엇을 리뷰해야 하는지 묻는다."
summary: "코드 리뷰는 항상 문제였다. 시간이 없어서, 사람이 없어서, 프로세스가 없어서. AI가 코드 생산량을 3배로 늘렸지만 리뷰 역량은 그대로다. 코드 리뷰를 없애자는 사람, 재설계하자는 사람, 절대 유지해야 한다는 사람 — 각 진영의 논거를 정리하고, AI 시대에 우리가 진짜 리뷰해야 할 것이 무엇인지 묻는다."
pubDatetime: 2026-03-08T12:00:00+09:00
tags: ["AI코딩", "에세이", "코드리뷰"]
category: "essay"
featured: true
draft: false
references:
  - title: "Simon Willison — Agentic Engineering Anti-patterns"
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/"
  - title: "Bryan Finster — AI Broke Your Code Review"
    url: "https://bryanfinster.substack.com/p/ai-broke-your-code-review-heres-how"
  - title: "latent.space — How to Kill the Code Review"
    url: "https://www.latent.space/p/reviews-dead"
  - title: "StrongDM — The Software Factory"
    url: "https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai"
  - title: "Salesforce — Scaling Code Reviews"
    url: "https://engineering.salesforce.com/scaling-code-reviews-adapting-to-a-surge-in-ai-generated-code/"
  - title: "Qodo — 5 AI Code Review Pattern Predictions in 2026"
    url: "https://www.qodo.ai/blog/5-ai-code-review-pattern-predictions-in-2026/"
  - title: "Stanford CodeX — Built by Agents, Tested by Agents, Trusted by Whom?"
    url: "https://law.stanford.edu/2026/02/08/built-by-agents-tested-by-agents-trusted-by-whom/"
  - title: "Addy Osmani — Verification as the New Frontier"
    url: "https://x.com/addyosmani/status/2027662887897149801"
  - title: "SmartBear — Best Practices for Peer Code Review"
    url: "https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/"
  - title: "Dave Farley — AI Coding and the Nyquist Theorem"
    url: "https://www.youtube.com/watch?v=XavrebMKH2A"
---

## 들어가며

CTO로 일하면서 가장 먼저 없어진 "공식 업무" 중 하나가 코드 리뷰였다. 팀이 충분히 커지기 전에는 백엔드 팀 코드 리뷰를 진행했었지만 CTO이자 팀원이 20명이 넘어가면서 상황이 달라졌다. CTO라는 업무적 직함보다 R&D 본부장이라는 지위적 직함이 우선시되며 내 관리는 코드에서 사람으로 넘어갔다.

하지만 그 이후에도 코드 리뷰를 하지 않았던 건 아니다. 다소 소규모였던 데이터 엔지니어 팀은 리드가 부재하여 내가 직접 1년여가 넘게 코드 리뷰부터 스터디까지 하였고 막 들어온 주니어 개발자들과는 포지션을 막론하고 함께 스터디하고 코드 리뷰했다. 과중한 업무에 바쁜 선임 개발자들이 챙기기 어려운 부분이었다. 때론 코드 작성에 어려움을 겪고 있는 주니어와 1 on 1으로 몇 주에 걸쳐 리뷰하고 피드백하기도 했다. 다만, "공식 업무"에서 배제되었기 때문에 이러한 업무는 나의 업무 시간 내에 소화하기에는 어려움이 있었다.

사실 "공식 업무"로 불리기 어려운 부분도 있는데 특히, 코드 리뷰를 어떻게 할 것인가가 프로세스로 정립되지 않았었고 그 부분은 아직까지도 어려운 부분이다. 당시 코드 리뷰를 개발자들이 서로 돌아가며 하는 문화를 정착시키려고 노력했으나 어떤 사람은 본인의 업무가 아닌 코드 리뷰를 왜 해야 하는지 필요성을 느끼지 못하고 있는 반면 어떤 사람은 너무나 열성적이었지만, 공격적으로 진행하여 그 사람의 열정에도 불구하고 주위의 눈살을 찌푸리는 일들이 빈번히 일어났다.

코드 리뷰 방식도 제각각이었다. 백엔드(또는 데이터나 프론트엔드도 마찬가지)의 경우 나는 Application Layer를 중심으로 코드 아키텍처와 코드가 충분히 Human Readable인지 기존에 조직 내에서 정하고 있는 규칙을 범하고 있지는 않은지를 주로 살펴보았고 특히 더 좋은 코드를 작성하는 방법을 피드백했고 불필요한 중복이나 트레이드 오프가 발생하는 설계 이슈에서 가이드라인을 제시해주는 방향으로 진행했다. 하지만 또 다른 팀장님의 경우에는 코드 브랜치를 직접 받아 실행까지 해보고 최종 퀄리티까지 리뷰를 하기도 했다. (이건 클라이언트쪽이다.) 시간이 여유롭다면 대부분의 경우 후자가 더 좋은 리뷰가 되겠지만 결국 그만큼 시간 비용이 많이 들기 때문에 일이 많아지면 제대로 리뷰하기 어려워졌다.

문제는 결국 시간이었다. 좋은 리뷰 프로세스를 가진 회사도 많이 보았지만 생존과 매일이 데드라인인 IT스타트업 특성상 오늘 작업하고 오늘 배포하는 일이 빈번했고 코드 리뷰가 가능한 (그리고 마음씨 좋은) 실력 있는 개발자는 소수였으며 결국 누락된 PR이 일정이라는 어쩔 수 없는 이유로 머지되면서 아직 코드 아키텍처의 멘탈 모델이 약한 주니어 개발자들 또는 일정이라는 괴물에게 자신의 코드 퀄리티를 내준 시니어들까지 — 점점 코드베이스 또한 괴물이 되어갔다.

문제는 결국 사람이었다.

---

AI 에이전틱 엔지니어링 또는 [코드를 읽지 않는 시대](/posts/2026-02-19-code-reading-era)에 이전 시대의 문제를 해결할 도구가 대거 등장했다. 처음엔 CodeRabbit으로 시작해서 Codex나 Claude Code로도 PR 메시지와 라인바이라인으로 코멘트가 가능해졌다. 즉, 사람에 의존하지 않고 코드 리뷰가 가능해진 것이다.

다만, 그렇게 올라오는 PR도 사람에 의존하지 않고 작성한 코드들이라는 것이다.

잘 모르는 주니어 개발자가 AI를 써서 막 올렸다가 시니어 개발자가 하나씩 모두 손보면서 밤을 샜다는 괴담은 실제인지 모르겠으나 종종 들려오는 괴담이다. 이건 AI에 대한 불신처럼 들리지만 사실 잘 모르고 쓰는 주니어에 대한 불신에 더 가깝다. 원래 실력은 파이어볼 정도 쓰는 마법 지망생이 아무런 경험과 마법적 지식 없이 무한한 마력의 원천(AI)을 얻어 헬파이어를 써대며 일종의 주화입마에 빠지는 것이다.

어찌됐든 이런 얘기가 계속 나오는 건 코드에 대한 개인 책임이 있는 조직에서는 AI로 코드를 생산해도 결국 그 코드에 대한 책임이 본인에게 있기에 많은 조직들에서 이 문제에 대해 아주 골머리를 앓고 있는 게 분명하다. AI로 개인의 생산성은 대폭 증폭되었는데 팀 성과나 회사의 성과가 눈에 띄게 증폭되는 사례가 그렇게 많지 않은 것도 결국 그런 이유 중 하나일 것이다. 팀 협업은 결국 책임의 문제일 수도 있다.

재미있는 데이터가 있다. [1만 명 이상의 개발자를 조사한 결과](https://www.latent.space/p/reviews-dead), AI 도입률이 높은 팀은 PR을 98% 더 많이 머지하지만 리뷰 시간은 91% 늘어났다. 개인은 빨라졌는데, 팀은 느려진 것이다. 코드 리뷰라는 병목이 사라진 게 아니라 그냥 더 커졌다.

결국 남은 질문은 하나다. AI 시대에 코드 리뷰, 어떻게 해야할까?

---

## 인간이 리뷰하지 않은 코드는 여전히 신뢰하지 않는다

먼저 가장 직관적인 입장부터 살펴보자. "아무리 AI가 좋아졌어도, 인간이 안 본 코드는 믿을 수 없다."

[Simon Willison](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)은 최근 에이전틱 엔지니어링 안티패턴을 정리하면서 첫 번째로 꼽은 것이 바로 이것이었다. "검토하지 않은 코드를 협업자에게 떠넘기지 마라." 에이전트가 수백, 수천 줄의 코드를 만들어줬다고 해서 그걸 그대로 PR로 올리는 건 실제 작업을 팀원에게 떠넘기는 것이다. 그는 이렇게 말한다. "그들도 에이전트에게 프롬프트를 날리면 되는데. 그렇다면 당신이 제공하는 가치는 대체 무엇인가?"

날카로운 질문이다. 그리고 나는 이 말에 꽤 공감한다. CTO 시절 가장 답답했던 순간은 PR이 올라왔는데 올린 사람이 자기 코드를 설명하지 못할 때였다. AI 시대에도 이건 마찬가지다. 아니, AI 시대이기 때문에 더하다. 에이전트가 그럴듯한 PR 설명까지 작성해주니까. 에이전트가 쓴 PR 설명을 본인도 안 읽고 올리는 사람이 있다면 (나도 가끔 그러고 싶은 유혹을 느끼지만) 그건 리뷰어에 대한 예의가 아니다.

내가 가장 존경하는 엔지니어 중 한 명인 Kent Beck도 비슷한 입장이다. 이전에 [15년차 CTO가 바이브 코딩하는 방법](/posts/2026-01-09-15-year-cto-vibe-coding)에서 그의 증강형 코딩(Augmented Coding) 철학을 소개한 적이 있는데, 핵심은 같다. AI가 코드를 생성하는 속도가 빨라질수록 테스트와 리뷰의 중요성은 줄어드는 게 아니라 오히려 커진다는 것이다. 생성 비용이 0에 가까워질수록, 가치의 원천은 생성이 아니라 검증으로 이동한다.

[Addy Osmani](https://x.com/addyosmani/status/2027662887897149801)도 이 점을 정확히 짚었다. "해결되지 않은 문제는 생성(generation)이 아니라 검증(verification)이다. 바로 거기서 엔지니어링 판단력이 당신의 가장 높은 레버리지 스킬이 된다." 코드를 만드는 건 AI가 잘한다. 그런데 그 코드가 맞는지, 우리 시스템에 맞는지, 6개월 뒤에도 유지보수 가능한지를 판단하는 건 여전히 사람의 몫이다. 적어도 지금은.

이 입장의 핵심은 명확하다. AI가 아무리 코드를 잘 생성해도, 그 코드에 대한 책임은 결국 사람에게 있다. 책임이 있다면 검증해야 하고, 검증한다면 리뷰해야 한다. 논리적으로 완벽하다.

다만, 여기서 한 가지 불편한 진실이 있다. 그 "리뷰"를 할 시간과 역량이 있는 사람이 충분한가? CTO 시절의 내가 그랬듯이, 코드 리뷰가 공식 업무에서 밀려나는 건 의지의 문제가 아니라 현실의 문제였다. AI가 코드 생산량을 3배로 늘렸는데, 리뷰 역량은 그대로라면? 이 입장은 옳지만, 현실적으로 지속 가능한지는 다른 문제다.

---

## 더 이상 사람이 코드 리뷰하는 시대는 지났다

반대편에는 훨씬 과격한 주장이 있다. "사람이 코드를 리뷰하는 시대는 끝났다. 아니, 끝내야 한다."

[Bryan Finster](https://bryanfinster.substack.com/p/ai-broke-your-code-review-heres-how)는 최근 이 문제에 나이퀴스트-섀넌 표본화 정리(Nyquist-Shannon Sampling Theorem)를 적용했는데, 이 비유가 꽤 설득력이 있다. 신호를 정확하게 복원하려면 최고 주파수의 2배 이상으로 샘플링해야 한다는 통신 이론인데, 소프트웨어에 적용하면 이렇다. 결함 감지 속도가 코드 생산 속도를 따라가지 못하면, 문제를 이따금 놓치는 게 아니라 체계적으로 놓치게 된다.

AI는 높은 주파수로 코드를 생산한다. 수동 코드 리뷰는 저주파 샘플링 메커니즘이다. 피드백 주파수를 높이지 않고 생산 주파수만 높인 것이다. 이건 언더샘플링의 정의이고, 언더샘플링은 문제를 놓친다는 뜻이다. 이따금이 아니라, 확실하게.

[SmartBear가 시스코 시스템즈 팀을 분석한 데이터](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)도 이를 뒷받침한다. 인간 리뷰어의 결함 감지율은 400줄을 넘어가면 급격히 떨어진다. 그런데 AI 한 번 프롬프트로 600줄이 나온다. 400줄 넘는 PR은 리뷰가 아니라 도장이다. Rubber stamp. 내가 CTO 시절 경험한 것과 정확히 일치한다. 일정에 쫓기면 PR 리뷰는 형식이 되었고, 실력 있는 개발자조차 "대충 훑어보고 LGTM" 하는 상황이 빈번했다. AI 시대에는 이게 더 심해졌을 뿐이다.

[StrongDM](https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai)이라는 회사는 이 논리를 극단까지 밀어붙였다. 그들의 "소프트웨어 팩토리(Software Factory)"에서는 인간이 코드를 쓰지 않고, 인간이 코드를 리뷰하지 않는다. 인간이 하는 일은 의도(intent)를 정의하고, 시나리오를 큐레이션하고, 제약 조건을 설정하는 것이다. 그 이후는 에이전트가 전부 한다. 코드를 생성하고, 디지털 트윈 유니버스(Digital Twin Universe)라는 서드파티 서비스의 행동 클론 환경에서 시나리오를 검증하고, 통과할 때까지 반복한다. 검증(validation)이 코드 리뷰를 대체한 것이다.

솔직히 처음 이 사례를 봤을 때는 "이게 되나?" 싶었다. 하지만 [Simon Willison이 이 팀의 시연을 직접 보고 블로그에 올렸고](https://simonwillison.net/2026/Feb/7/software-factory/), Wharton의 Ethan Mollick 교수와 Y Combinator의 Garry Tan도 이 접근 방식에 주목했다. [Stanford Law School의 CodeX](https://law.stanford.edu/2026/02/08/built-by-agents-tested-by-agents-trusted-by-whom/)에서는 "Built by Agents, Tested by Agents, Trusted by Whom?"이라는 분석 글까지 나왔다. 제목부터 직설적이다. 에이전트가 만들고, 에이전트가 테스트하면, 그걸 누가 믿을 수 있는가? 같은 종류의 AI가 코드를 쓰고 같은 종류의 AI가 테스트하면, 둘 다 같은 걸 놓길 수 있다. 그리고 이렇게 만들어진 소프트웨어가 프로덕션에서 터졌을 때, 코드를 쓴 사람이 없으니 책임은 누구에게 있는가? 이 질문에 아직 아무도 답하지 못했다. 그런데도 StrongDM은 이 방식을 프로덕션에 쓰고 있다 — 보안 인프라를 만드는 회사가. 그게 이 실험을 무시할 수 없는 이유다.

StrongDM이 극단이라면, [Salesforce는 현실적인 중간지대를 택했다](https://engineering.salesforce.com/scaling-code-reviews-adapting-to-a-surge-in-ai-generated-code/). AI 보조 코딩 도입 후 코드 양이 약 30% 증가했고, PR은 파일 20개, 변경 라인 1,000줄을 넘는 일이 다반사가 됐다. 더 우려스러운 건, 가장 큰 PR에 대한 리뷰 시간이 오히려 줄어들기 시작했다는 것이다. 리뷰어들이 변경 사항과 의미 있게 씨름하지 않고 있다는 신호였다. Salesforce는 Prizm이라는 시스템을 만들어 리뷰 프로세스 자체를 재아키텍팅했다. 단순히 "AI 리뷰어를 추가하자"가 아니라, diff 중심의 리뷰 모델 자체가 AI 시대에 작동하지 않는다는 것을 인정하고 의도 재구성(Intent Reconstruction)이라는 새로운 접근법을 도입한 것이다.

이 입장의 사람들이 공통적으로 하는 말이 있다. "AI가 안전망을 제거한 게 아니다. AI는 안전망이 처음부터 사람의 영웅적 행위에 의존하고 있었다는 것을 드러냈을 뿐이다." Bryan Finster의 표현인데, 이게 참 아프다. CTO 시절 코드 리뷰를 공식 업무에서 빠뜨렸던 것, 열성적인 리뷰어 한 명에게 의존했던 것, 일정에 밀려 그냥 머지했던 것 — 모두 "안전망이 사실은 영웅에게 의존하고 있었다"는 증거였다.

---

## 그럼 무엇을 리뷰해야할까?

"코드 리뷰를 유지해야 한다"도 맞고, "사람이 다 리뷰할 수는 없다"도 맞다. 그럼 도대체 뭘 어쩌란 말인가?

[latent.space의 Ankit Jain](https://www.latent.space/p/reviews-dead)은 이 질문에 가장 명쾌한 프레임을 제시했다. 코드 리뷰에서 의도 리뷰(Intent Review)로 전환하라는 것이다. 500줄짜리 diff를 한 줄 한 줄 읽는 게 아니라, 스펙(spec)과 수용 기준(acceptance criteria)과 제약 조건(constraints)을 리뷰하라.

이 프레임에서 스펙이 진실의 원천(source of truth)이 되고, 코드는 스펙의 산출물(artifact)이 된다. 인간의 역할은 "이것을 올바르게 작성했는가?"에서 "올바른 제약으로 올바른 문제를 해결하고 있는가?"로 이동한다. 가장 가치 있는 인간의 판단은 코드가 생성된 후가 아니라, 생성되기 전에 발휘된다.

솔직히 이건 새로운 개념이 아니다. 행동 주도 개발(BDD, Behavior-Driven Development)이 수년간 주장해온 것과 같다. 코딩 전에 팀이 모여서 "이 기능이 어떻게 동작해야 하는가"를 실행 가능한 시나리오로 정의하고, 그 시나리오가 곧 인수 테스트가 된다. 다만 예전에는 스펙을 작성하는 것 자체가 추가 작업처럼 느껴져서 완전히 보편화되지 못했다. 에이전트와 함께라면 방정식이 뒤집힌다. 스펙이 추가 작업이 아니라 기본 산출물이 되는 것이다.

Ankit Jain은 신뢰를 레이어로 쌓아야 한다고 말한다. 스위스 치즈 모델처럼 — 단일 게이트가 모든 것을 잡지 못하니까, 불완전한 필터를 겹겹이 쌓아 구멍이 정렬되지 않도록 하는 것이다. 여러 에이전트에게 다른 방식으로 시도하게 하고 최선을 선택하는 것이 첫 번째 레이어고, 테스트와 타입 검사 같은 결정론적 가드레일이 두 번째, 인간이 수용 기준을 사전에 정의하는 것이 세 번째다. 여기에 에이전트의 권한 세분화와 적대적 검증 — 한 에이전트가 만들고, 다른 에이전트가 부수려 시도하는 — 까지 쌓으면 다섯 겹의 필터가 완성된다.

실전적인 관점에서는 [Qodo가 제시한 2026년 AI 코드 리뷰 패턴](https://www.qodo.ai/blog/5-ai-code-review-pattern-predictions-in-2026/)이 눈여겨볼 만하다.

첫째, 컨텍스트 우선 리뷰(Context-First Review). diff를 열기 전에 크로스 레포 사용 현황, 이력 PR, 아키텍처 문서를 자동으로 모아서 컨텍스트를 필수 입력으로 취급한다. CTO 시절 리뷰에서 가장 어려웠던 것이 바로 컨텍스트였다. "이 코드가 왜 이렇게 되어 있지?"를 파악하는 데 리뷰 시간의 절반을 쓴 적도 있었다.

둘째, 심각도 기반 리뷰(Severity-Driven Review). 발견사항을 조치 필요/권장/사소한 제안으로 분류한다. 봇이 프로덕션을 다운시킬 null 체크는 놓치면서 공백에 관한 37개의 코멘트를 쏟아내는 경험을 해본 적이 있다면, 이것이 왜 필요한지 바로 이해할 것이다.

셋째, 전문가 에이전트 리뷰(Specialist-Agent Review). 하나의 제너럴리스트 모델에게 보안 전문가, 성능 엔지니어, 스태프 SWE를 동시에 해달라고 하는 건 무리다. 보안 에이전트, 성능 에이전트, 정확성 에이전트를 따로 두고 각각의 전문 영역에서 분석한 뒤 코디네이터가 통합 리포트를 만든다. 이건 [에이전틱 엔지니어링 9가지 스킬](/posts/2026-03-01-agentic-engineering-9-skills)에서 다룬 "분해 능력"과도 직결된다. 하나의 거대한 태스크를 전문 영역별로 쪼개는 것.

[Bryan Finster](https://bryanfinster.substack.com/p/ai-broke-your-code-review-heres-how)도 비슷한 결론에 도달했다. 자동화가 모든 것을 처리한 후, 진정으로 인간이 머지를 블로킹해야 할 목록은 딱 두 가지뿐이라고.

하나는 부족 지식(tribal knowledge)이다. 통합 특이점, 역사적 결정, "우리가 그걸 시도했는데 결제를 망가뜨렸다"는 맥락 — 사람들의 머릿속에만 있고 어디에도 문서화되지 않은 것들. 장기적으로는 이것도 문서와 아키텍처 결정 기록(ADR)에 담아 도구로 강제해야 한다. 하지만 단기적으로는 "어디에 시체가 묻혀 있는지 아는 사람"이 필요하고, 그 사람의 역할은 구문 리뷰가 아니라 맥락 리뷰다.

다른 하나는 규제 경로(regulated paths)다. 직무 분리가 컴플라이언스 요건인 환경에서는 민감한 영역에 대한 변경을 두 번째 인간이 승인해야 한다. 이건 협상할 수 없다. 하지만 그렇다고 모든 PR에 같은 기준을 적용할 이유도 없다.

도구 측면에서도 변화가 일어나고 있다. [CodeRabbit](https://coderabbit.ai/)은 GitHub, GitLab, Bitbucket, Azure까지 멀티 플랫폼을 지원하며 접근성을 넓혔고, [Greptile](https://greptile.com/)은 전체 코드베이스를 인덱싱해서 가장 깊은 수준의 버그 탐지를 시도하고 있다. [GitHub Copilot 코드 리뷰](https://github.blog/changelog/2024-10-29-github-copilot-code-review-in-github-com-public-preview/)는 출시 한 달 만에 100만 사용자를 달성했다. 이미 Copilot을 쓰고 있다면 마찰이 거의 없다는 장점이 있지만, diff 기반이라 아키텍처 수준의 문제는 놓치기 쉽다. 어떤 도구를 쓰든 핵심은 같다. AI가 잡을 수 있는 것(구문, 스타일, 단순 로직 버그, 보안 패턴)은 AI에게 맡기고, 인간은 AI가 절대 잡을 수 없는 것(의도, 맥락, 비즈니스 판단, 부족 지식)에 집중하라.

결국 "무엇을 리뷰해야 하는가"에 대한 답은 이렇게 정리된다. 코드가 아니라 의도를 리뷰하라. diff가 아니라 스펙을 리뷰하라. 구문이 아니라 맥락을 리뷰하라.

---

## 나가며

솔직히 말하면, 나는 지금 내가 AI로 작성한 코드를 직접 리뷰하지 않는다.

대신 QA의 역할을 한다. 실제로 의도한 대로 동작하는지를 위주로 테스트하고, 문제가 생기는 경우에만 코드를 들여다본다. 직접 수동 QA 테스트를 진행하고 만약 이게 코드로도 재현 가능한 로직이라면 케이스를 증폭시켜 통합 테스트 케이스를 만들어서 다음번에 반복하지 않도록 작업한다. API 시나리오 테스트나 외부 연동 그리고 UX 테스트는 여전히 한계가 있기 때문에 내가 얼마나 부지런히 손을 태웠느냐에 따라 퀄리티가 달라지는 게 사실이다.

앞에서 살펴본 것처럼, 코드를 한 줄 한 줄 읽는 시대는 이미 지났다. 하지만 코드에 대한 책임까지 사라진 건 아니다. 오히려 책임의 형태가 바뀐 것이다. 코드를 쓰는 사람에서 코드가 의도대로 작동하는지 확인하는 사람으로. 리뷰어에서 검증자로.

그렇다면 이 "검증자"의 역할은 구체적으로 뭘까?

현시대의 AI 네이티브 엔지니어 또는 풀스택 빌더는 어쩌면 이전 시대의 PM 역할을 스스로 할 수 있어야 한다고 생각한다. 특히 제품 퀄리티 면에서. 요구사항을 정의하고, 수용 기준을 설정하고, 에이전트에게 구현을 맡기고, 결과를 검증하고, 프로덕션에서 모니터링한다. 이건 전통적인 개발자의 역할과는 확실히 다르다. [에이전틱 엔지니어링 9가지 스킬](/posts/2026-03-01-agentic-engineering-9-skills)에서 "완료 정의"와 "관찰 가능성"을 강조한 것도 결국 이 맥락이다.

사실 이건 완전히 새로운 이야기도 아니다. 이전 시대에도 두 종류의 개발자가 있었다. 코드가 머지되면 업무를 끝내는 개발자와, 머지된 후에도 배포하고 모니터링하고 프로덕션에서 본인의 손으로 직접 테스트하는 개발자. 후자가 훨씬 잘하는 개발자였고, 무엇보다 책임 있는 개발자였다.

시대가 바뀌며 코드를 생산하는 비용은 거의 0에 가까워졌다. 에이전트가 한 시간에 세 가지 버전의 기능을 만들어낼 수 있는 세상에서, "코드를 잘 쓰는 능력"만으로는 더 이상 차별화되지 않는다. 차별화되는 건 그 코드가 진짜 문제를 해결하는지 판단하는 능력, 프로덕션에서 문제가 생겼을 때 대응하는 능력, 그리고 무엇보다 — 자기 이름으로 나간 코드에 끝까지 책임지는 태도다.

당신은 당신의 코드에 책임을 질 수 있는가?

## References

- [Simon Willison — Agentic Engineering Anti-patterns](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)
- [Bryan Finster — AI Broke Your Code Review](https://bryanfinster.substack.com/p/ai-broke-your-code-review-heres-how)
- [latent.space — How to Kill the Code Review](https://www.latent.space/p/reviews-dead)
- [StrongDM — The Software Factory](https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai)
- [Stanford CodeX — Built by Agents, Tested by Agents, Trusted by Whom?](https://law.stanford.edu/2026/02/08/built-by-agents-tested-by-agents-trusted-by-whom/)
- [Salesforce — Scaling Code Reviews](https://engineering.salesforce.com/scaling-code-reviews-adapting-to-a-surge-in-ai-generated-code/)
- [Qodo — 5 AI Code Review Pattern Predictions in 2026](https://www.qodo.ai/blog/5-ai-code-review-pattern-predictions-in-2026/)
- [Addy Osmani — Verification as the New Frontier](https://x.com/addyosmani/status/2027662887897149801)
- [SmartBear — Best Practices for Peer Code Review](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)
- [Dave Farley — AI Coding and the Nyquist Theorem](https://www.youtube.com/watch?v=XavrebMKH2A)
