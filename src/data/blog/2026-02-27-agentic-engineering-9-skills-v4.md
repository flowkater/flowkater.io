---
title: "바이브 코딩 시대 종료? 에이전틱 엔지니어링 시대의 생존 스킬 9가지"
description: "Karpathy가 바이브 코딩의 후속 개념으로 에이전틱 엔지니어링을 제시했다. 에이전트에게 일을 시키는 시대, 엔지니어가 키워야 할 9가지 능력과 각각을 어떻게 키울 수 있는지 정리했다."
summary: "Karpathy는 '코드를 직접 타이핑하던 시대는 끝났다'고 선언하며 에이전틱 엔지니어링이라는 이름을 붙였다. 하지만 끝난 건 타이핑이지 엔지니어링이 아니다. 분해 능력, 컨텍스트 설계, 완료 정의, 실패 복구, 관찰 가능성, 메모리 설계, 병렬 관리, 추상화 계층, 감각 — 에이전트 시대에 엔지니어가 갖춰야 할 9가지 능력을 경험과 함께 풀어본다."
pubDatetime: 2026-02-27T09:00:00+09:00
tags: ["에세이", "AI코딩", "생산성"]
category: "essay"
featured: false
draft: true
references:
  - title: "Andrej Karpathy — Agentic Engineering (X 원문)"
    url: "https://x.com/i/status/2026731645169185220"
  - title: "Armin Ronacher — Agentic Coding Recommendations"
    url: "https://lucumr.pocoo.org/2025/6/12/agentic-coding/"
  - title: "IndyDevDan — Top 2% Agentic Engineering"
    url: "https://agenticengineer.com/top-2-percent-agentic-engineering"
  - title: "Boris Cherny — Claude Code Creator Workflow (Threads)"
    url: "https://www.threads.com/@boris_cherny/post/DUMZr4VElyb/"
  - title: "WenHao Yu — Agentic Coding: One Year from Vibes to Agentic Engineering"
    url: "https://yu-wenhao.com/en/blog/agentic-coding/"
  - title: "Sean Goedecke — AI Agents and Code Review"
    url: "https://www.seangoedecke.com/ai-agents-and-code-review/"
  - title: "Mihel — The AI-Native Software Engineer (Stanford)"
    url: "https://www.youtube.com/watch?v=wEsjK3Smovw"
  - title: "Superset.sh — Run 10+ Parallel Coding Agents"
    url: "https://superset.sh"
  - title: "oh-my-codex (omx) — Multi-Agent Orchestration for Codex CLI"
    url: "https://github.com/Yeachan-Heo/oh-my-codex"
  - title: "Dex Horthy — 12-Factor Agents"
    url: "https://github.com/humanlayer/12-factor-agents"
  - title: "GitHub Engineering — Multi-Agent Workflows"
    url: "https://github.blog/ai-and-ml/generative-ai/multi-agent-workflows-often-fail-heres-how-to-engineer-ones-that-dont/"
  - title: "HumanLayer — Writing a Good CLAUDE.md"
    url: "https://www.humanlayer.dev/blog/writing-a-good-claude-md"
  - title: "Geoffrey Huntley — Ralph Loop"
    url: "https://ghuntley.com/ralph/"
  - title: "supermemory.ai — AI Memory Layer"
    url: "https://supermemory.ai"
  - title: "Andrej Karpathy — No Skill, No Taste"
    url: "https://blog.kinglycrow.com/no-skill-no-taste/"
  - title: "Elvis (@elvissun) — 94 Commits/Day with AI Agents"
    url: "https://x.com/elvissun/status/2025920521871716562"
faq:
  - question: "에이전틱 엔지니어링이란 무엇인가요?"
    answer: "Karpathy가 바이브 코딩의 후속 개념으로 제시한 용어입니다. 코드를 직접 작성하는 대신 AI 에이전트에게 작업을 지시하고, 병렬로 관리하며, 결과를 검토하는 방식의 엔지니어링을 말합니다."
  - question: "바이브 코딩과 에이전틱 엔지니어링의 차이는?"
    answer: "바이브 코딩은 AI에게 맡기고 결과만 확인하는 방식이라면, 에이전틱 엔지니어링은 올바른 도구·메모리·지시를 설계하고 여러 에이전트를 오케스트레이션하는 전문 기술입니다."
  - question: "에이전틱 엔지니어링 시대에 가장 중요한 능력은?"
    answer: "분해 능력, 컨텍스트 설계, 완료 정의, 실패 복구, 관찰 가능성, 메모리 설계, 병렬 관리, 추상화 계층 설계, 감각(Taste) 등 9가지 능력이 핵심이며, 이들은 결국 '에이전트가 잘 작동하는 조건을 만드는 능력'으로 수렴합니다."
keywords:
  [
    "에이전틱 엔지니어링",
    "Agentic Engineering",
    "바이브 코딩",
    "Karpathy",
    "AI 코딩",
    "에이전트 오케스트레이션",
    "생존 스킬",
    "AI 시대 엔지니어",
  ]
---

## 들어가며

바이브 코딩이라는 단어를 만든 Karpathy가 X에 선언했다 — 바이브 코딩의 시대는 끝났고, 에이전틱 엔지니어링의 시대가 왔다고. 작년 4월부터 열심히 바이브 코딩을 했고 특히 지난 2, 3달은 정말 격변의 시기를 겪었다. 내 글 '[코드를 읽지 않는 시대, 엔지니어는 무엇을 읽어야 하는가](https://flowkater.io/posts/2026-02-19-code-reading-era/)'가 폭발적인 조회수를 기록한 것도 그에 대한 반작용이라고 생각한다.

이 글은 Karpathy의 원문을 뼈대로, 내가 실제로 겪은 시행착오와 Armin Ronacher, Boris Cherny, WenHao Yu, IndyDevDan 같은 실전 사례를 엮어 9가지 핵심 능력으로 정리한 것이다. 각 능력마다 Before/After 에피소드를 넣은 이유도 그거다 — 이론이 아니라 경험에서 나온 이야기를 하고 싶었다.

---

Karpathy가 주말에 집 카메라용 대시보드를 만들고 싶었다고 한다. 에이전트에게 DGX Spark의 IP, 사용자명, 비밀번호, 그리고 목표를 줬다. SSH 키 설정부터 vLLM 구성, 모델 다운로드와 벤치마크, 비디오 추론 서버 구축, 웹 UI 대시보드, systemd 서비스 설정, 메모리 노트 기록과 마크다운 리포트 작성까지 — 전부를 한 번에 지시했다. 30분 후 전부 완성됐다.

> "I didn't touch anything myself. This was a weekend project just 3 months ago. Now it was 30 minutes of just forgetting about it."
>
> "불과 3개월 전만 해도 주말 전체가 필요한 프로젝트였지만, 이제는 30분 동안 잊고 기다리면 완료되는 작업이 됐다."

나도 비슷한 경험을 하고 있다. [AI 에이전트 시스템을 구축](https://flowkater.io/posts/2026-02-15-ai-jarvis-openclaw/)한 이후, 텔레그램 메시지 하나로 기능 구현을 지시하고, 다른 일을 하다 보면 PR이 올라와 있다. 처음엔 신기했는데, 이제는 그게 일상이다. 문제는 이 일상이 생각보다 쉽지 않다는 거다.

Karpathy는 이 새로운 방식에 이름을 붙였다. **에이전틱 엔지니어링(Agentic Engineering)**.

> "'Agentic' because 99% of the time you are no longer writing code directly, you are commanding and supervising agents. 'Engineering' because there is art, science, and skill to it."
>
> "'에이전틱'인 이유는 99%의 경우 더 이상 코드를 직접 작성하지 않고 에이전트에게 명령하고 감독하기 때문이다. '엔지니어링'인 이유는 여기에 기예, 과학, 전문 기술이 있기 때문이다."

프롬프트 몇 줄에 앱이 뚝딱 나오는 시대를 지나, 이제는 **에이전트가 잘 작동하는 조건을 설계하는 능력** 이 핵심이 됐다.

변화는 빠른데, 실제 적응은 느리다. 대부분의 개발자는 아직 따라잡지 못하고 있다.

그런데 이 변화의 속도가 예사롭지 않다.

> "It is hard to put into words how much programming has changed in just the last ~2 months. This was not a 'business as usual' kind of incremental progress."
>
> "지난 약 2개월간 프로그래밍이 얼마나 변했는지 말로 전달하기가 어렵다. 이것은 '늘 있던 방식의 발전'처럼 점진적으로 변한 게 아니다."

개발자 대부분이 AI를 사용하고 있지만, 실제로 에이전트에게 작업을 온전히 위임하는 비율은 여전히 낮다. 2026 Agentic Coding Trends Report에 따르면 개발자의 60%가 AI를 사용하지만 완전 위임은 0-20%에 불과하다 — 이른바 **위임 패러독스(Delegation Paradox)**. AI가 코드를 써주는 건 익숙해졌는데, 에이전트에게 일을 맡기고 손을 떼는 건 전혀 다른 차원의 이야기다.

IndyDevDan은 이 간극을 한 문장으로 요약했다.

> "Do you trust your agents?"
>
> "당신은 에이전트를 신뢰하는가?"

대부분의 개발자가 "아니오"라고 답한다. 나도 처음에는 그랬다. 에이전트가 만들어준 코드를 전부 검토했고, 직접 짜는 것보다 더 오래 걸리는 경우도 있었다. 어떻게 달라졌는지는 아래에서 풀겠다.

그래서 이 시대에 엔지니어가 키워야 할 능력은 뭔가? 앞서 언급했듯이 9가지로 정리해봤다. Karpathy의 원문에서 핵심 키워드를 뽑고, 내가 실제로 겪은 문제들을 대입해봤다. "이 문제는 어떤 능력이 부족해서 생긴 거지?" — 이런 식으로 역추적하다 보니 9가지 정도로 정리되는 것 같다. 하나씩 파고들어보자.

---

## ① 분해 능력 (Decomposition)

에이전트에게 "회원가입 기능 만들어줘"라고 하면 뭔가 나오긴 나온다. 문제는 그게 내가 원하던 게 아닐 확률이 높다는 거다. 이메일 인증은 빠져 있고, 비밀번호 규칙은 내 기준과 다르고, UI는 상상도 못한 방향으로 가 있다.

에이전트에게 일을 시키는 건 결국 **"무엇을 만들지"를 정하는 일** 이다. 고객이 뭘 원하는지, 유저가 뭘 필요로 하는지, 우선순위가 뭔지 — 이건 내가 정확히 해야 한다. 에이전트가 대신해줄 수 없는 영역이다.

> "The key is to develop the intuition to decompose tasks appropriately, delegating to agents where they work well and providing human help where needed."
>
> "핵심은 작업을 적절히 분해하여 잘 작동하는 부분은 에이전트에 위임하고 나머지 부분에서 인간이 도움을 주는 직관을 기르는 것이다."

이게 말은 쉬운데, 실제로 해보면 까다롭다. "잘 작동하는 부분"과 "인간이 도움을 줘야 하는 부분"의 경계가 매번 다르기 때문이다. 어떤 작업은 에이전트가 원샷으로 끝내고, 어떤 작업은 세 번을 돌려도 핵심을 놓친다. 그 차이를 체감으로 익히는 게 분해 능력이다. Karpathy가 분해의 조건도 꽤 명확하게 짚어줬다.

> "It works especially well in some scenarios, especially where the task is well-specified and the functionality can be verified/tested."
>
> "일부 시나리오에서 특히 잘 작동하며, 특히 작업 명세가 명확하고 기능을 검증·테스트할 수 있는 경우에 효과적이다."

뒤집어 말하면, 명세가 모호하고 검증 기준이 없는 작업에서는 에이전트도 헤맨다. 내가 할 일은 모호한 요구사항을 명확한 작업 단위로 바꿔주는 것이다.

[이전에 Claude Code로 TDD 워크플로우를 구축](https://flowkater.io/posts/2026-01-09-15-year-cto-vibe-coding/)하면서 느낀 건, 원샷으로 70-80%는 구현되지만 나머지 20%가 진짜 일이라는 거였다. 초기 요구사항을 얼마나 잘 정의했느냐에 따라 그 20%의 크기가 극적으로 달라진다.

### Before: AddPlan 화면, 808줄의 늪

iOS 앱에 계획 생성 화면(AddPlanView)을 만들어야 했다. 5단계 입력 플로우 — 이름 입력, 분량 설정, 기간 선택, 요일 지정, 요약 확인. 피그마 디자인이 있었고, 세세한 기획안(PRD)도 작성해서 제공했다. "이 정도면 에이전트가 한 번에 만들겠지."

그게 안일한 기대였다.

에이전트가 첫 버전을 내놨는데, 얼핏 보면 구조는 맞았다. 그런데 디테일에서 계속 어긋났다. 디자인 시스템에 정의되지 않은 컬러와 폰트를 마음대로 가져다 쓰고 있었다. 한 번 수정할 때마다 다른 게 밀려났다. 특히 Pulsing Dot 위치와 CustomNumberPad 레이아웃이 끈질기게 반복 실패했다. 에이전트한테 스크린샷을 보여주고, 피그마 좌표를 알려주고, 구체적인 수치를 줘도 — 다음 수정에서 또 밀려났다. 세 번째 반복쯤 "이거 그냥 내가 짜는 게 낫지 않나" 싶었다.

문제의 핵심은 808줄짜리 단일 파일에 View, 상태 관리, 애니메이션 로직, 계산 로직이 전부 들어가 있다는 거였다. 에이전트가 한 곳을 건드리면 다른 곳이 꼬였다. 뷰+뷰모델+API 연동까지 통합된 요구사항을 한 번에 줬다는 것도 문제였다. 거대한 요구사항, 거대한 파일, 거대한 혼란.

### After: 뷰/스타일 분리 + UI_REQUIREMENTS.md

808줄 단일 파일을 18개 파일로 리팩토링했다. View와 Style을 분리하고, 상태 관리는 별도 ViewModel로, 애니메이션은 Modifier로, 계산은 유틸리티로 빼냈다. 관심사가 분리되니 에이전트가 건드릴 범위가 명확해졌다.

그리고 UI_REQUIREMENTS.md를 만들었다. "디자인대로 만들어줘"는 너무 모호했다. 대신 픽셀 단위로 상세 스펙을 적었다. "Pulsing Dot: 중앙 정렬, 하단 마진 12pt, 지름 8pt, 색상 #FF6B35, 애니메이션 주기 1.2초." 이렇게 적어주니 에이전트가 원샷으로 맞추는 비율이 확 올라갔다.

요구사항을 뷰 단위로 쪼개는 것도 큰 변화였다. "AddPlan 전체를 만들어줘" 대신 "Step1NameInputView를 만들어줘" — 5단계를 각각 독립된 태스크로 분리해서 지시하니, 각 단계의 원샷 퀄리티가 확연히 달라졌다. 808줄 → 18개 파일. 기술적으로는 리팩토링이지만, 진짜 바뀐 건 일을 쪼개는 방식이었다.

### 이렇게 연습한다

구현 전에 요구사항 문서를 먼저 작성하는 습관이 첫걸음이다. 거창할 필요 없다. "이 기능은 무엇을 하고, 완성 기준이 뭔지"를 텍스트로 적어보는 것만으로도 빈틈이 보인다. 나는 요즘 모든 기능 구현 전에 간단한 spec.md를 먼저 만든다.

큰 작업을 "에이전트 한 턴에 완료 가능한 크기"로 쪼개는 연습도 의식적으로 해야 한다. 대략 파일 3-5개 수정, 15-30분 내 완료 가능한 범위. 이보다 크면 쪼개고, 이보다 작으면 합친다. 에이전트에게 10번쯤 작업을 시켜보면 그 체감이 생긴다. 그 체감 자체가 분해 능력이다.

---

## ② 컨텍스트 설계 (Context Architecture)

Karpathy의 DGX Spark 예시를 다시 보자. 그가 에이전트에게 준 건 딱 네 가지였다 — IP, 사용자명, 비밀번호, 목표. 군더더기 없이 필요한 것만. 이게 컨텍스트 설계의 이상향이다.

그런데 실제 프로덕션 환경에서는 이렇게 단순하지 않다. 프로젝트에는 수십 개의 파일이 있고, 비즈니스 로직이 있고, 코딩 컨벤션이 있고, 과거에 내린 아키텍처 결정이 있다. 이 모든 맥락을 에이전트에게 어떻게 전달하느냐가 결과의 품질을 결정한다. Karpathy의 말을 빌리자면, 이제 코드 대신 자연어가 인터페이스다.

> "Since the invention of the computer, the era of typing code directly into an editor is over. Now you run AI agents, direct their tasks in English, and manage and review their work in parallel."
>
> "컴퓨터가 발명된 이래 에디터에 코드를 직접 타이핑하던 시대는 끝났다. 이제는 AI 에이전트를 실행하고, 영어로 작업을 지시하고, 그 작업들을 병렬로 관리하고 검토하는 시대다."

"영어로 작업을 지시한다"는 말이 가볍게 들릴 수 있지만, 자연어의 품질이 곧 결과물의 품질이 된다는 뜻이다. AGENTS.md를 잘 쓰는 것도 중요하지만, 그게 전부는 아니다. **코드 아키텍처 자체가 잘 설계되어 있으면 에이전트가 컨텍스트를 파악하는 속도가 완전히 다르다.**

역설적이지만 결국 코드를 잘 짜야 한다.

디렉토리 구조가 명확하고, 네이밍이 일관되고, 관심사가 분리되어 있으면 에이전트가 빠르게 이해한다. 반대로 스파게티 코드에 문서만 아무리 잘 써놔도, 에이전트는 빙빙 돌 확률이 커진다. [코드를 읽지 않는 시대](https://flowkater.io/posts/2026-02-19-code-reading-era/)라고 해서 코드의 품질이 덜 중요해진 게 아니다. 오히려 더 중요해졌다.

### 에이전트 친화적 코드베이스라는 발상

Flask의 창시자 Armin Ronacher가 흥미로운 관점을 제시했다. 에이전트와의 협업에서 **프로그래밍 언어 선택** 자체가 컨텍스트 설계의 일부라고 말한다. 그의 결론은 예상 밖이었다 — Go가 에이전트 친화적 언어라는 거다.

> "Go is sloppy: Rob Pike famously described Go as suitable for developers who aren't equipped to handle a complex language. Substitute 'developers' with 'agents.'"
>
> "Go는 느슨하다. Rob Pike가 Go를 '복잡한 언어를 다룰 준비가 안 된 개발자에게 적합하다'고 했는데, '개발자'를 '에이전트'로 바꿔도 성립한다."

내 경우엔 Swift지만, 원리는 같다. 언어가 뭐든 에이전트가 실수할 여지를 줄이는 구조가 중요하다.

예를 들어 Ronacher는 도구 설계에 대해서도 날카롭다.

> "Tools need to be protected against an LLM chaos monkey using them completely wrong."
>
> "도구는 LLM이라는 카오스 원숭이가 완전히 잘못 쓰는 것에 대비해서 보호해야 한다."

Makefile에 프로세스 매니저 이중 실행 방지(pidfile)와 포트 충돌 예방을 넣어둔다는 거다. 에이전트는 같은 서버를 두 번 띄우거나, 이미 사용 중인 포트에 바인딩하려는 실수를 자주 한다. 도구 레벨에서 막아놓으면 에이전트가 삽질할 여지 자체가 줄어든다.

### Before: 플랫 디렉토리에서 에이전트가 헤매다

iOS 앱 초기에는 디렉토리 구조가 사실상 플랫이었다. Views 폴더 안에 화면 30개가 뒤섞여 있고, 모델과 뷰모델이 같은 레벨에 나열되어 있었다. 네이밍 컨벤션도 파일마다 달랐다 — 어떤 건 PascalCase로 `PlanListView`, 어떤 건 snake_case로 `daily_tasks`, 어떤 건 그냥 `Summary`. 사람이 봐도 "이 파일이 어디에 속하는 건지" 파악하는 데 시간이 걸리는 구조였다.

매번 에이전트에게 "이 폴더 말고 저 폴더야"라고 설명하는 데 지쳤다. 에이전트에게 "설정 화면 수정해줘"라고 하면, 관련 없는 파일까지 건드리는 경우가 잦았다. 설정 화면의 뷰모델을 수정하는데 메인 화면의 모델을 import해서 쓰고 있었다 — 디렉토리 구조가 관심사를 분리해주지 않으니 에이전트도 경계를 모르는 거다. 컨텍스트 윈도우에 불필요한 파일이 잔뜩 올라가면서 정확도가 떨어졌다.

### After: Feature 단위 디렉토리 + 역할별 분리

디렉토리를 Feature 단위로 재구성했다. `Features/Plan/`, `Features/Daily/`, `Features/Settings/` — 각 Feature 폴더 안에 View, ViewModel, Model이 함께 들어간다. 공유 컴포넌트는 `Shared/Components/`, 공통 모델은 `Shared/Models/`로 분리했다.

네이밍도 통일했다. `{Feature}{Role}` 패턴 — `PlanListView`, `PlanListViewModel`, `PlanModel`. 파일 이름만 보면 이 파일이 뭐하는 건지, 어디에 속하는 건지 바로 알 수 있다.

변화는 즉각적이었다. "Settings 화면에 다크모드 토글 추가해줘"라고 하면 에이전트가 `Features/Settings/` 안에서만 작업한다. 다른 Feature를 건드릴 이유 자체가 없어진 거다. **코드 구조가 곧 컨텍스트의 경계가 된다.** 에이전트에게 "이 폴더만 봐"라고 따로 말할 필요도 없다 — 구조 자체가 범위를 알려준다.

HumanLayer 팀의 분석도 같은 결론이다. CLAUDE.md(또는 AGENTS.md)에 지침이 150-200개를 넘으면 따르는 비율이 급락한다는 거다. task-specific한 지시는 별도 파일로 분리해야 한다. 문서 10페이지보다 잘 구조화된 디렉토리 하나가 에이전트에게 더 많은 정보를 준다.

### 이렇게 연습한다

클린 아키텍처를 의식적으로 연습하는 게 출발점이다. "에이전트가 읽기 쉬운 코드"와 "사람이 읽기 쉬운 코드"는 놀랍도록 일치한다. 새 프로젝트를 시작할 때 가장 먼저 디렉토리 구조를 잡고, 각 디렉토리의 역할을 README에 적는다. 사람을 위해서이기도 하고, 에이전트를 위해서이기도 하다.

AGENTS.md에는 아키텍처 결정 이유(ADR), 코딩 컨벤션, 도메인 용어 사전 정도만 넣는다. 나머지는 코드 자체가 말하게 한다. 타입 정의가 정확하고, 함수 이름이 의미를 담고 있고, 테스트가 스펙 문서 역할을 하면 — 그게 최고의 AGENTS.md다.

컨텍스트 분리 설계도 시도해볼 만하다. 나는 처음에 JARVIS 하나에 개발, 일정 관리, 뉴스레터, 블로그 편집을 전부 맡겼다. 한 달쯤 지나니까 AGENTS.md가 A4 10장 분량이 됐고, 에이전트 정확도가 눈에 띄게 떨어졌다. JARVIS(개발/일상)와 EDITH(콘텐츠)를 분리한 이후로 깔끔하게 해소됐다. 역할별로 에이전트를 나누고 각각에게 필요한 컨텍스트만 제공하는 구조 — 처음엔 오버킬처럼 느껴지지만, 작업이 복잡해질수록 이 분리가 빛을 발한다.

---

## ③ 완료 정의 (Definition of Done)

에이전트한테 밤새 작업을 돌려놓고 아침에 확인하는 건 꽤 짜릿한 경험이다. 그런데 그 짜릿함이 허무함으로 바뀌는 순간이 있다. "작업 완료됐습니다"라고 리포트가 와 있는데, 막상 보면 문서만 업데이트됐거나, 기본 스텁과 인터페이스 구성만 해놓고 끝난 경우. 돌아가는 코드가 아니라 돌아갈 것 같은 코드만 있는 거다.

> "Of course this is not yet perfect. Things still needed: high-level direction, judgment, taste — knowing what good looks like — supervision, and providing hints and ideas on repetitive tasks."
>
> "물론 아직 완벽하지는 않다. 여전히 필요한 것들: 고수준 방향 설정, 판단력, 감각(taste) — 무엇이 좋은지 아는 안목 — 감독, 그리고 반복 작업에서 힌트와 아이디어 제공."

에이전트에겐 결국 감독이 필요하다. 그리고 감독의 시작이 바로 완료 정의다. "이 작업이 끝났다"는 게 무슨 뜻인지를 명확하게 정의하지 않으면, 에이전트는 자기 나름의 기준으로 "끝났다"고 보고한다. 그리고 그 기준은 십중팔구 내 기준과 다르다.

### Before: 개발 자동화 CLI, 밤새 돌렸더니 빈 껍데기

Codex App Server 기반 워크플로우 자동화 CLI를 만들려고 했다. `propose → plan → run → verify → archive` 루프를 자동으로 돌리는 도구. 전체 아키텍처, 모듈 구조, API 설계까지 다 담은 계획서를 준비했다. 병렬 에이전트 실행도 계획했다. Stream A는 코어 로직, Stream B는 CLI 인터페이스, Stream C는 테스트.

에이전트를 밤새 돌렸다. 아침에 확인했더니 **1시간 만에 종료**되어 있었다. 에이전트가 스스로 "더 이상 할 게 없다"고 판단하고 멈춘 거다. 파일 구조는 깔끔했다. 하지만 전부 스텁뿐이었다. `func Propose() error { return nil }`. 깔끔하게 정돈된 빈 집을 넘겨받은 기분이었다.

**내가 문서를 제대로 안 읽었다.** 계획서를 내가 직접 썼으면서도, 그 안에 어떤 복잡도가 숨어 있는지 파악하지 않았다. "문서가 있으니까 에이전트가 알아서 읽고 구현하겠지" — 이게 가장 위험한 안티패턴이다.

### After: DoD + 분해 기반 문서 쪼개기

이후로 다시 시도할 때는 완전히 다른 접근을 했다. 먼저 계획서를 Stream 단위로 쪼갰다. Stream A의 DoD: "propose 명령어가 실제로 API를 호출하고, 응답을 파싱해서 JSON 파일로 저장한다. 새 통합 테스트 3개를 추가한다." — 이 수준으로 구체적으로.

그리고 결정적으로: "파일 생성" ≠ "동작하는 코드"라는 걸 DoD에 명시했다. "`return nil` 같은 스텁은 완료로 인정하지 않음." 에이전트가 스텁으로 도망갈 수 없게 만든 거다.

이건 나만의 교훈이 아니었다. GitHub Engineering 팀도 비슷한 패턴을 쓴다. 멀티 에이전트 시스템에서 typed schemas로 에이전트 간 메시지를 강제하고, 에이전트가 할 수 있는 행동을 명시적으로 제한한다.

> "Most multi-agent workflow failures come down to missing structure, not model capability."
>
> "대부분의 멀티에이전트 워크플로우 실패는 모델 능력 부족이 아니라 구조 부재에서 온다."

CLI가 실패한 것도 모델이 멍청해서가 아니라, 내가 구조를 안 잡아줬기 때문이다. 완료 정의가 명확하면 확인 비용이 극적으로 줄어든다. "통합 테스트 통과, 기존 테스트 미수정, E2E 루프 1회 실행 로그 제출" — 이 세 가지만 확인하면 5분이면 된다. 그 정도 확인 비용이면 기꺼이 위임할 수 있다.

### 이렇게 연습한다

모든 작업 지시에 DoD 체크리스트를 포함하는 것부터 시작하면 된다. "테스트 통과 + 기존 테스트 미수정 + 리포트 제출" — 이 세 줄이 기본이다. 장시간 작업에는 중간 체크포인트를 반드시 넣자. "1단계 끝나면 보고, 2단계 끝나면 보고." 빈 껍데기만 찍고 있다는 걸 1시간 시점에서 캐치할 수 있다. 분해 능력(①)과 완료 정의(③)는 결국 한 쌍이다. 잘 분해된 작업은 완료 기준도 명확해진다.

---

## ④ 실패 복구 (Failure Recovery Loop)

에이전트와 일하면 실패가 일상이다. 어제 잘 되던 워크플로우가 오늘은 안 된다. 새 모델이 나오면 기존 프롬프트가 다르게 동작한다.

> "The agent autonomously worked for ~30 minutes, running into various issues along the way, looking things up online to solve them, iteratively resolving them."
>
> "에이전트는 약 30분 동안 자율적으로 작업하면서, 도중에 여러 문제에 부딪히고, 온라인에서 해결책을 직접 조사하고, 하나씩 반복적으로 해결해나갔다."

에이전트 자체가 실패와 복구의 루프로 작동한다. 하지만 항상 이렇게 깔끔하게 되지는 않는다. 그런데 에이전트의 자체 복구 능력에도 한계가 있다. 에이전트가 스스로 해결 못하는 실패를 만났을 때, 인간이 어떻게 개입하느냐가 핵심이다.

### Before: 재분배 엔진, A↔B 무한루프

iOS 앱의 핵심 기능 중 하나가 학습 분량 재분배 엔진이다. "오늘 못 했으니 내일 더 할게" — 이 간단한 로직을 자동화한 기능인데, 남은 분량을 재계산해서 배분한다. 버그는 단순해 보였다. 재분배 API를 호출하면 미래 날짜의 기존 데이터가 사라지는 문제. 50개 중 47개가 손실됐다.

원인은 두 군데에 있었다. 삭제 함수가 날짜 조건 없이 전체를 삭제하고 있었고, 미완료 데이터 추출 함수가 미래 데이터를 제외하고 있었다.

문제를 알았으니 고치면 되잖아? 그런데 여기서부터 지옥이 시작됐다. 시나리오 테스트 5개가 **전부 PASS** 였다. 들여다보니 테스트가 "데이터 > 0" 수준의 검증이었다. 50개가 3개로 줄어도 PASS. (이건 에이전트 잘못이 아니라 내 잘못이다.)

진짜 문제는 그 다음이었다. 특정 파라미터의 의미가 함수마다 달랐다. `includeToday=true`가 A 함수에서는 "오늘 데이터를 가져온다"는 뜻이고, B 함수에서는 "오늘부터 삭제한다"는 뜻이었다. 같은 파라미터인데 시맨틱이 완전히 달랐다. **A를 고치면 B가 깨졌다. B를 고치면 A가 깨졌다.** 에이전트가 자기 루프에 빠져서 fix → break → fix → break를 반복했다.

### After: 격리 테스트 + Must NOT Have 가드레일

결국 나는 코드를 좁혔다. 전체 API 흐름을 테스트하는 대신, 문제가 되는 함수만 **격리해서 단독 테스트** 했다. 통합 테스트에서는 안 보이던 게 격리하니 바로 보였다. 그 다음, 기존 코드에 영향을 주지 않는 독립된 경로를 새로 만들었다. 각 함수의 시맨틱을 독립적으로 정의하고 재구현했다.

핵심은 **"Must NOT Have" 가드레일**이었다. "이 파일은 수정하지 마. API 응답 계약을 변경하지 마. 기존 통합 테스트를 수정하지 마." 이 세 가지 금지 조건이 에이전트의 A↔B 무한루프를 끊었다.

이 경험이 Dex Horthy의 [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) Factor 9와 정확히 맞닿는다 — 에러를 컨텍스트에 압축해서 에이전트가 self-heal 할 수 있게 만들어라. 단순히 "다시 해봐"가 아니라, 에러의 원인과 맥락을 주입해서 같은 실수를 반복하지 않게 하는 거다.

### 같은 프롬프트로 재시도하지 않기

실패를 세 가지로 분류하면 처방이 명확해진다.

**유형 1: 컨텍스트 부족.** 에이전트가 필요한 정보를 모르는 경우. 처방: 빠진 정보를 추가.

**유형 2: 방향 오류.** 요구사항 자체를 잘못 이해한 경우. 처방: 요구사항을 더 명확하게 재정의.

**유형 3: 구조적 충돌.** 코드 구조 자체에 문제가 있는 경우. 처방: 코드를 좁혀서 격리하고, 가드레일을 설정하고, 구조를 바꿔서 재시도.

재분배 엔진은 유형 3이었다. "다시 해봐"가 아니라 "이 파일만 격리해서 테스트하고, 이 파일은 건드리지 마"라는 구조적 처방이 필요했다. 실패 앞에서 "다시 해봐"를 누르는 대신 "이건 어떤 유형이지?"를 먼저 생각하는 것만으로도 복구 속도가 체감될 정도로 빨라진다.

### 이렇게 연습한다

실패할 때마다 짧게라도 기록하는 습관이 시작이다. 나는 `failure-log` 태그로 실패 사례를 기록한다. "컨텍스트 놓침", "요구사항 다르게 해석", "A↔B 무한루프 진입" — 이런 짧은 메모가 쌓이면 패턴이 보인다. 같은 유형이 3번 반복되면 시스템을 바꿀 때라는 신호다.

프로젝트별로 `KNOWN_ISSUES.md`를 만드는 것도 효과적이다. "이 프로젝트에서 에이전트가 자주 하는 실수"를 기록해두면 — 같은 실패가 반복되는 빈도가 확실히 줄어든다. 실패 기록이 메모리가 되고, 메모리가 시스템이 된다.

새로운 접근을 시도할 때는 "30분 룰"을 쓴다. 30분 안에 의미 있는 진전이 없으면 다른 방법을 찾는다. 30분 안에 뭔가 되면 거기서부터 깊게 판다. 실패 자체는 괜찮다. 같은 실패를 반복하는 건 괜찮지 않다.

---

## ⑤ 관찰 가능성 (Observability)

에이전트에게 큰 작업을 통째로 맡기면 편하긴 한데, 문제가 생겼을 때 어디서 잘못됐는지 파악하기가 어렵다. "어느 시점에 내가 결과를 확인할 것인가" — 이 질문이 관찰 가능성의 핵심이다.

> "Looking forward to 2026, the real show is just getting started with the evolution of both the models and the agents."
>
> "2026년을 내다보면, 모델과 에이전트 양쪽의 진화와 함께 진짜 쇼는 이제 막 시작됐다."

진짜 쇼가 시작됐다는 건, 무대 위에서 뭐가 벌어지는지 볼 수 있어야 한다는 뜻이기도 하다. 모델과 에이전트가 더 강력해질수록, 관찰 가능성의 중요성도 커진다. 에이전트가 할 수 있는 일이 많아질수록 잘못될 수 있는 방향도 많아지기 때문이다.

### Before: liquidglass, "이상한데 그냥 두자"의 대가

iOS 26이 발표되고 liquidglass를 처음 적용해보려고 했다. 새로운 디자인 언어를 우리 앱에 시도해보고 싶었다. 에이전트에게 맡기면 알아서 업데이트될 거라 기대했다. (그게 안일한 기대였다는 건 이쯤 되면 패턴이 보일 거다.)

에이전트가 작업하는 걸 보고 있었다. 처음 몇 파일은 괜찮아 보였는데, 4-5번째 파일쯤부터 뭔가 이상했다. 건드리는 파일 범위가 예상보다 넓었다. 색깔이 원래 의도와 다르게 바뀌는 것 같았다. 하위호환성을 위한 분기가 점점 복잡해지고 있었다.

**"이상한데... 그냥 두자."** 이 한 마디가 가장 비싼 판단이었다.

결과물을 확인해보니 UI가 전부 깨져 있었다. liquidglass의 반투명 효과가 기존 컬러 스킴과 충돌하면서 텍스트 가독성이 떨어졌고, 다크모드에서는 아예 안 보이는 요소가 생겼다. 최악은 **단계별 커밋이 없었다는 거다.** 부분적으로 롤백할 수가 없었다. 전부 버리든 전부 살리든 양자택일.

4-5번째 파일에서 멈추고 확인했으면, 최악의 경우에도 5개 파일만 롤백하면 됐다. 끝까지 방치한 결과, 20개 넘는 파일이 엉킨 상태에서 수습해야 했다.

### After: 예광탄 전략 + 단계별 커밋

이 경험 이후로 새로운 기술을 적용할 때는 반드시 **예광탄(tracer bullet) 전략** 을 쓴다. 전체를 한 번에 적용하는 대신, 가장 단순한 화면 하나에 먼저 적용해보는 거다. 작게 쏘고 빠르게 확인. 괜찮으면 다음 화면으로 넓힌다.

단계별 커밋도 필수가 됐다. "화면 A 적용" → 커밋 → "화면 B 적용" → 커밋. 이렇게 하면 화면 C에서 문제가 생겨도 롤백 포인트가 확보되어 있다. "3개 파일 수정할 때마다 커밋해줘"라고 지시하면 된다. 간단하지만 이 한 마디가 수정 비용을 극적으로 줄여준다.

관찰 가능성이 높아질수록 위임의 범위도 넓어진다. 처음에 나는 함수 하나를 맡기는 것도 불안해서 전부 검토했다. 하지만 예광탄 전략과 단계별 커밋이 자리 잡으면서, 이제는 모듈 단위의 작업도 안심하고 맡긴다. 관찰 가능성이 신뢰를 만들고, 신뢰가 위임을 가능하게 만든다. "Do you trust your agents?"에 대한 내 대답이 "점점 더 그렇다"로 바뀌고 있는 건, 에이전트가 더 똑똑해져서가 아니라 내 관찰 시스템이 더 정교해져서다.

### 이렇게 연습한다

작업 단위를 적절한 크기로 쪼개는 감각을 키우자. 경험적 기준: PR 하나를 리뷰하는 데 10분 이내면 적절한 크기, 30분 이상이면 너무 크다.

작업 시작 전에 "대충 이렇게 가겠지" 하는 블루프린트를 머릿속으로 그리는 습관도 필수다. 이게 관찰 가능성의 전제 조건이다. 에이전트가 어디로 가야 하는지 내가 모르면, 에이전트가 이탈했는지도 모른다. Elvis의 10분 크론잡 모니터링은 이 블루프린트 비교를 자동화한 거라고 볼 수 있다 — 에이전트 상태를 미리 정의된 기대 상태와 비교하고, 벗어나면 알림이 오는 구조다.

"이상한데 그냥 두자"가 얼마나 비싼 판단인지 — 한 번만 겪으면 절대 잊을 수 없다.

---

## ⑥ 메모리 설계 (Memory Architecture)

AI와 긴 작업을 하다 보면 반드시 부딪히는 벽이 있다. 세션이 길어지면 앞에서 한 이야기를 잊어버린다. 세션 컴팩션(context compaction)이라고 하는데, 맥락이 너무 많이 축소되어 연속 작업에서 특히 문제가 된다.

Karpathy의 에이전트 지시에는 마지막에 반드시 **"메모리 노트 기록, 마크다운 리포트 작성까지"** 가 포함되어 있었다. 작업한 내용을 기록으로 남기라는 거다.

> "maintaining a set of memory notes across sessions"
>
> "세션을 넘나들며 메모리 노트를 유지하는 것"

메모리가 없는 오케스트레이터는 매 세션이 첫 만남이다.

### Before: 매일 아침 15분씩 맥락 설명

나도 3일 연속 인증 리팩토링을 할 때 매일 아침 "어제 JWT 구조를 바꿨는데..."부터 시작하는 자신이 한심했다. dev.to의 @suede가 공유한 경험이 정확히 같은 상황이었다. 연속 작업을 하는데 매일 아침 새 세션을 열 때마다 어제 한 일을 처음부터 설명해야 했다. "어제 이 구조를 바꿨는데, 왜 바꿨는지부터 설명할게..." 15-20분이 날아간다. 3일 연속이면 거의 1시간이다. 그리고 구두로 설명한 맥락은 완벽하지 않다 — 내가 놓치거나 잘못 기억한 부분이 있을 수밖에 없다.

### After: Hooks로 자동 메모리 — MEMORY.md 하나로 5초 복원

@suede의 해결책이 우아했다. Claude Code의 hooks 기능을 활용해서, 세션이 끝날 때마다 자동으로 "기억"을 추출해서 CLAUDE.md에 기록하는 시스템을 만든 거다.

> "Session 1: Claude works → hooks silently extract memories → saved. Session 2: Claude starts → reads CLAUDE.md → instantly knows everything."
>
> "세션 1: Claude가 작업 → hooks가 조용히 기억을 추출 → 저장. 세션 2: Claude 시작 → CLAUDE.md를 읽음 → 즉시 모든 것을 앎."

"기록하라고 지시할 필요가 없다"는 게 핵심이다. hooks가 세션 종료 시 자동으로 작업 내용을 요약해서 append한다. 다음 세션이 시작되면 자동으로 읽는다. 맥락 복원에 걸리는 시간: 5초. 15분에서 5초로. 이 차이를 체감하면 돌아갈 수 없다.

나는 hooks까지는 아니지만, 이 패턴을 참고해서 Codex나 Claude Code로 작업할 때 한 턴마다 메모리/작업 업데이트 문서화를 무조건 한다. MEMORY.md에 "오늘 무엇을 했고, 어떤 결정을 내렸고, 다음에 이어서 할 것"을 기록한다.

Boris Cherny 팀의 사례가 이 메모리의 팀 레벨 확장을 보여준다. Claude Code 팀은 단일 CLAUDE.md를 git에 체크인해서 팀 전체가 공유한다. Claude가 뭔가를 잘못하면 즉시 CLAUDE.md에 추가한다 — "다음엔 이렇게 하지 마." 코드 리뷰 중에도 `@.claude`를 태깅해서 PR의 일부로 업데이트한다. 개인의 기억이 아니라 팀의 기억이 에이전트에게 전달되는 구조.

요즘 이 방향으로 도구들이 쏟아지고 있다. Claude Code의 built-in memory, [supermemory.ai](https://supermemory.ai) 같은 AI 메모리 레이어 — 메모리 인프라가 성숙해지면서 "매 세션이 첫 만남"이라는 근본 문제가 해결되는 방향으로 가고 있다.

### 이렇게 연습한다

매 작업 턴마다 문서화하는 습관이 메모리 설계의 전부라고 해도 과언이 아니다. MEMORY.md 하나 만들어서 매일 기록하는 것부터 시작하면 된다. 오늘 내린 결정과 그 이유, 다음에 할 일, 남은 이슈 — 이 세 가지만 적어도 충분하다.

한 가지 팁: 메모리의 구조를 일관되게 유지하는 것도 중요하다. 나는 MEMORY.md를 날짜순으로 기록하되, 각 항목에 `[결정]`, `[작업]`, `[이슈]` 태그를 붙인다. 나중에 "지난달에 내린 아키텍처 결정이 뭐였지?"를 찾을 때 `[결정]` 태그로 검색하면 10초 안에 나온다. 이런 작은 구조화가 메모리의 검색 가능성을 극적으로 높여준다.

프로젝트가 길어지면 검색 가능한 시스템(Obsidian, Notion 등)을 도입하면 된다. 핵심은 "검색 가능한 기록"이다. 3개월 전에 내린 아키텍처 결정을 찾을 수 없으면, 같은 논의를 다시 하게 된다. 메모리가 이 반복을 끊어준다.

---

## ⑦ 병렬 관리 (Parallel Orchestration)

Karpathy가 말한 핵심 중 하나가 이거다.

> "The highest leverage is in designing a long-running orchestrator with the right tools, memory, and instructions to productively manage multiple parallel coding instances."
>
> "가장 큰 보상은 올바른 도구·메모리·지시를 갖춘 장기 실행 오케스트레이터가 여러 병렬 코드 인스턴스를 생산적으로 관리하도록 설계하는 것이다."

여러 워크트리에서 서로 다른 기능을 동시에 개발하는 건 기술적으로는 가능하다. 하지만 실제로 해보면 관리가 만만치 않다. 에이전트 A가 인증 모듈을, 에이전트 B가 결제 기능을 만들고 있는데 둘 다 같은 유저 모델을 건드리면 충돌이 난다.

앞서 소개한 Boris Cherny부터 하루 94커밋의 [Elvis(@elvissun)](https://x.com/elvissun/status/2025920521871716562)까지 — 방향은 모두 같다. **한 명의 엔지니어가 여러 에이전트를 오케스트레이션해서 팀 단위의 생산성을 내는 것.** Karpathy가 "에이전틱 엔지니어링"이라고 이름을 붙인 이유가 정확히 여기에 있다.

Boris Cherny — Claude Code를 만든 사람이다 — 의 사례가 이 방향의 극단을 보여준다. 로컬 터미널에서 5개의 Claude Code를 병렬로 돌리고, claude.ai/code에서 추가로 5-10개를 동시에 실행한다. 총 10-15개의 병렬 세션. 각 에이전트의 컨텍스트를 철저하게 분리했기 때문에 가능한 구조다. [Superset.sh](https://superset.sh)나 [oh-my-codex(omx)](https://github.com/Yeachan-Heo/oh-my-codex) 같은 도구들도 이 방향으로 나오고 있다.

### CTO 시절과 닮은 점

이 경험을 하면서 자꾸 CTO 시절이 떠올랐다. 스쿼드 6개를 매니징하던 시절. 하루에 6개 팀과 회의하면서 각 팀의 상태를 파악하고, 블로커를 해결해주고, 전체 방향이 어긋나지 않게 조율하는 일. 에이전트 병렬 관리가 그때와 놀라울 만큼 비슷하다.

6개 스쿼드를 관리할 때 가장 중요했던 건 각 팀의 상태를 파악하고, 블로커를 해결하고, 방향을 맞추는 능력이었다. 에이전트 병렬 관리의 핵심도 결국 같다 — 코드를 직접 짜는 게 아니라 전체를 조율하는 것이다.

사람 매니징과 에이전트 매니징 사이에 한 가지 결정적인 차이가 있긴 하다. 사람은 질문을 한다. 에이전트는 묻지 않고 자기 판단으로 진행한다. 그래서 에이전트 매니징에서는 사전 설계가 더 중요하다. "이런 상황에서는 이렇게 해"를 미리 정해줘야 한다.

### 이렇게 연습한다

작게 시작하자. 처음부터 에이전트 5개를 동시에 돌리면 혼돈에 빠진다. 에이전트 2개를 동시에 돌리는 것부터.

나의 경험을 공유하자면, 에이전트 2개를 동시에 돌린 첫 날은 꽤 혼란스러웠다. A의 결과를 확인하다가 B의 진행 상황을 놓쳤고, B를 확인하러 갔더니 A가 기다리고 있었다. 두 번째 날부터는 타이머를 맞추기 시작했다. 25분 에이전트 A 모니터링, 5분 휴식, 25분 에이전트 B — 뽀모도로 비슷한 방식이다. 이 루틴이 자리 잡히니 두 에이전트가 안정적으로 돌아갔다. 일주일 후에 세 번째를 추가했다. 2개가 안정되면 3개, 3개가 안정되면 5개. CTO나 팀 리드 경험이 있는 사람은 이 과정이 훨씬 빠를 거다.

병렬 작업 간 의존성을 미리 파악하고 충돌 방지를 설계하는 것도 필수다. git worktree를 활용하면 물리적으로 분리된다. 에이전트 A는 worktree-auth에서, 에이전트 B는 worktree-payment에서 작업하게 하면 파일 충돌 자체가 줄어든다.

---

## ⑧ 추상화 계층 설계 (Abstraction Layering)

에이전틱 엔지니어링에도 레벨이 있다고 본다. 나는 이걸 체감으로 구분한다.

- **Level 0**: 직접 코딩 — 에디터에서 한 줄 한 줄 타이핑
- **Level 1**: 에이전트 지시 — Claude Code나 Codex에 작업을 요청
- **Level 2**: 오케스트레이터 — 여러 에이전트를 관리하는 시스템 설계
- **Level 3**: 메타 설계 — 오케스트레이터 자체를 만드는 도구 구축

나는 현재 Level 2에서 Level 3을 트라이하는 단계다. 스킬을 만들고, 워크플로우를 자동화하고, 에이전트가 에이전트를 관리하는 구조를 실험하고 있다.

### Before: 매번 같은 지시를 반복하던 시절

Level 1 시절, 매일 아침 같은 루틴을 수동으로 반복했다. "어제 머지된 PR 확인" → "변경사항 요약" → "남은 이슈 정리" → "우선순위 제안". 매번 이 네 가지를 순서대로. 하루에 20분. 한 달이면 7시간. 지시 내용이 매번 거의 동일하다는 걸 깨달은 건 3주째쯤이었다.

### After: 스킬 하나로 "이번 주 정리해줘"

이 루틴을 스킬로 만들었다. "이번 주 정리해줘" 한 마디로 실행한다. 20분짜리 루틴이 2분으로 줄었다. 그런데 시간 절약보다 더 큰 변화가 있었다. 이 스킬을 만들면서 "내가 매일 하는 판단의 패턴"을 명시적으로 정리하게 된 거다. 그 과정 자체가 추상화 계층을 올리는 연습이었다.

스킬을 하나씩 만들 때마다 느꼈던 게 있다. 나는 이걸 **컴파운딩 엔지니어링**이라고 부른다. 첫 번째 스킬을 만드는 데 2시간이 걸렸다. 두 번째는 첫 번째의 구조를 참고해서 1시간. 세 번째는 앞의 두 스킬을 조합해서 30분. 스킬이 스킬의 기반이 되는 복리 효과.

> "The biggest payoff is in raising the abstraction layer ever higher."
>
> "가장 큰 보상은 추상화 계층을 계속 높여가는 것이다."

Karpathy가 말한 "보상"이란 단순히 시간 절약이 아니다. 한 단계 올라갈 때마다 시야가 넓어지고, 더 큰 문제를 다룰 수 있게 된다는 뜻이다. 코드를 직접 짜던 시대(Level 0)에서 에이전트에게 영어로 지시하는 시대(Level 1-2)로, 그리고 에이전트를 관리하는 오케스트레이터를 설계하는 시대(Level 2-3)로. 추상화 계층이 올라갈 때마다 인간이 할 수 있는 일의 범위가 극적으로 넓어진다.

### 추상화가 올라가면 인간의 역할이 바뀐다

에이전트가 일하는 동안 인간이 노는 게 아니다. 코드를 타이핑하는 대신 시스템을 설계한다. 에이전트에게 지시하는 대신 에이전트가 잘 작동하는 환경을 만든다.

> "High-level direction, judgment, taste — knowing what good looks like — supervision, and providing hints and ideas on repetitive tasks."
>
> "고수준 방향 설정, 판단력, 감각(taste) — 무엇이 좋은지 아는 안목 — 감독, 그리고 반복 작업에서 힌트와 아이디어를 제공하는 것."

코드를 직접 짜는 시간이 줄어든 만큼, 방향을 잡고 판단을 내리고 품질을 감독하는 시간이 늘어난다. 이게 추상화 계층이 올라간다는 말의 실질적 의미다.

### 이렇게 연습한다

현재 내가 어느 레벨에 있는지 솔직하게 인식하는 것부터. 아직 에이전트에게 작업을 지시하는 것 자체가 어색하다면 Level 1이다. 괜찮다. 거기서부터 시작하면 된다.

나는 Level 1에서 Level 2로 넘어가는 데 약 2개월이 걸렸다. 에이전트 하나에 완전히 익숙해지기 전에 병렬 관리를 시도하면 두 마리 토끼를 다 놓친다. Level 1에서 "에이전트가 내 의도대로 움직이는 감각"이 충분히 쌓인 다음에 2번째를 추가하는 게 맞다.

반복되는 작업이 보이면 자동화 대상으로 올리자. "매번 이 지시를 반복하네" 하는 패턴이 보이면 스킬이나 템플릿으로 만드는 거다. 이런 작은 자동화가 쌓이면서 추상화 계층이 자연스럽게 올라간다. 복리다.

---

## ⑨ 감각 (Taste)

마지막은 가장 측정하기 어렵지만, 어쩌면 가장 중요한 능력이다.

> "Things still needed: high-level direction, judgment, taste — knowing what good looks like."
>
> "여전히 필요한 것들: 고수준 방향 설정, 판단력, 감각(taste) — 무엇이 좋은지 아는 안목."

에이전트가 만든 결과물을 보고 "이건 괜찮다"와 "이건 뭔가 아닌데"를 구분하는 감각. 기술적으로 동작하는데 왜 불편한지, 코드가 돌아가는데 왜 마음에 안 드는지 — 느끼는 건 가능하다. 아니, 느낄 수 있어야 한다.

> "'Engineering' because there is art, science, and skill to it."
>
> "'엔지니어링'인 이유는 여기에 기예(art), 과학(science), 전문 기술이 있기 때문이다."

기예, 과학, 전문 기술 — 감각은 이 세 가지가 뒤섞인 영역이다. 타고나는 게 아니라, 깊이 파고 축적하는 것이다.

### AI가 만든 프로토타입, 파트너(디자이너 Ellie)의 반응

iOS 앱을 함께 개발하는 파트너(디자이너 Ellie)가 있다. A 화면을 AI로 빠르게 만들어서 보여줬을 때, 처음엔 반감이 있었다고 한다. 논의 없이 정리된 결과물이 나오니 자기 역할이 뭔지 모르겠다는 거였다.

하지만 대화를 충분히 나눈 뒤 B 화면을 같은 방식으로 정리해서 줬을 때는 달랐다. 그때쯤에는 내가 의도하는 방향이 뭔지 알게 됐다고 한다. **구체적으로 동작하는 프로토타입**을 기준으로 빠진 게 뭔지, 더 다듬어야 할 게 뭔지가 비로소 보이기 시작했다.

### AI 디자인은 무난하다

메인 리스트도 그랬다. 우리 앱은 단순한 투두 앱이 아닌데, AI는 계속 투두 앱의 보통 디자인만 인식해서 내놨다. 우리만의 고유한 도메인이 있는 건데.

내가 처음에 "이 정도면 직관적이지 않나" 하고 줬던 건 솔직히 60-70점짜리였다. 실제로 Ellie가 디자인한 걸 봤을 때 — AI로는 절대 나올 수 없는 것들이 있었다. AI 결과물을 볼 때는 확신이 없었는데, Ellie의 디자인이 들어오는 순간 "아, 이거 된다"는 감각이 왔다.

AI가 만드는 결과물 대부분은 보통 수준이다. 골조와 구성 요소를 잡는 데는 큰 의미가 있다. 하지만 취향, 질감, 포인트를 주는 건 — 여전히 사람의 영역이다.

### Do work → Good → Great

AI는 놀라운 성능 향상을 가져다준다. 하지만 지금 AI가 도달하는 건 솔직히 **80%** 수준이다. 80%도 대단한 거다, 옛날에 비하면.

문제는 나머지 20%다. 그 20%에서 각 1%의 격차가 이전의 10%보다 더 크다. 어떤 제품, 식당, 작품을 봤을 때 — 진짜 2%가 더 들어갔을 때의 감동. 명장, 명인, 명감독의 결과물에서 오는 그 감동은 "보통"의 범위 밖에 있다.

80%의 제품이 범람하면 → 나머지 20%에서 사람들은 더 좋은 걸 찾을 거고 → **그 20%는 결국 사람의 실력, 역량이 차별화 포인트가 된다.**

Thread에서도 비슷한 경험을 했다. Claude Code가 뽑아준 정보 정리 포스트 — 짜임새 있고 합리적이고 깔끔하다. 그런데 내가 충동적으로 쓴 "옵시디언 온톨로지 구축 완료. 내 AI agent 자비스는 이제 나의 제 2의 두뇌를 가지게 되었다"라는 한 줄 자랑글이 조회수 3만, 좋아요 200+를 찍었다. AI가 만든 "무난한" 콘텐츠보다 사람의 진짜 감정이 담긴 한 줄이 훨씬 강력했다.

LLM도 결국 통계 모델이다. 모형(model)이라는 단어 자체가 "실세계의 근사치"라는 뜻이다. LLM이 학습한 건 인터넷에 있는 텍스트의 패턴이다. "좋은 디자인"의 보통, "좋은 코드"의 보통. 보통은 안전하지만, 탁월하지는 않다. 탁월함은 보통에서 벗어나는 데서 온다.

**여러분의 직관을 잃지 마라.**

Sean Goedecke의 말이 이 맥락에서 핵심을 찌른다.

> "About once an hour I notice that the agent is doing something that looks suspicious, and when I dig deeper I'm able to set it on the right track and save hours of wasted effort... This is why I think pure 'vibe coding' hasn't produced an explosion of useful apps."
>
> "대략 한 시간에 한 번쯤 에이전트가 수상하게 보이는 작업을 하고 있다는 걸 발견하고, 더 깊이 파보면 올바른 방향으로 돌려놓을 수 있어서 몇 시간의 낭비를 막는다... 이것이 순수한 '바이브 코딩'이 유용한 앱의 폭발을 만들어내지 못한 이유라고 본다."

이 "수상하게 보이는 작업을 발견하는 능력"이 바로 감각이다. 에이전트가 간단한 비동기 요청으로 충분한 걸 전체 백그라운드 잡 인프라를 구축하려고 할 때, "잠깐, 이건 오버엔지니어링이야"라고 멈추는 판단. 구조적 판단력이 곧 감각이다.

### "동작한다"와 "좋다"는 다른 차원

이게 이 글에서 가장 하고 싶었던 이야기다. **Do work → Good → Great.** 이 세 단계의 격차.

AI는 "Do work"을 놀랍도록 빠르게 해준다. 어떤 경우에는 "Good"까지도 간다. 하지만 "Great"으로 가는 마지막 20%는 — AI 평균 80%에 만족하면 절대 도달할 수 없는 영역이다. 고객은 마지막 2%에 감동을 느낀다. 평균적인 결과물에는 아무도 감동하지 않는다.

AI로 모든 일이 편해지고 있다면 의심해봐라 — 내 결과물들이 평균에 머무는 것은 아닌지. 80%가 범람하는 시대에 차별화는 나머지 20%에서 나온다. 그리고 그 20%는 기술이 아니라 감각의 영역이다.

Karpathy가 말한 **"No Skill, No Taste"** — 스킬 없이는 감각도 없다. 감각은 경험과 학습이 축적된 결과다. 좋은 코드를 많이 봐야 나쁜 코드가 보이고, 좋은 설계를 경험해야 나쁜 설계를 감지할 수 있다. AI가 아무리 발전해도, 그 감각을 키우는 건 여전히 나의 몫이다.

### 이렇게 연습한다

감각을 키우는 가장 확실한 방법은 좋은 것을 많이 보고, 만들고, 사용하는 거다. 기술 블로그만 읽지 말고, 디자인도 보고, 비즈니스 사례도 보고, 소설도 읽자. 박물관도 가자. (솔직히 서울 살면서 국립중앙박물관 안 간 게 좀... 이건 반성이다.)

에이전트의 결과물을 그대로 수용하지 않는 습관이 감각의 출발점이다. "정말 이게 최선인가?" 항상 질문하기. "이게 왜 좋지?", "이건 왜 불편하지?" — 이 질문을 반복하면 감각이 날카로워진다.

감각은 혼자 키우기 어렵다. 다른 사람의 코드를 리뷰하고, 유저의 반응을 관찰하고, 파트너의 피드백을 듣는 것. 에이전트 시대에 감각은 더 중요해졌지만, 감각을 키우는 방법은 여전히 아날로그다. 사람과 대화하고, 세상을 관찰하고, 좋은 것을 경험하는 것. 그건 AI가 대신해줄 수 없다.

---

## 나가며

> "Since the invention of the computer, the era of typing code directly into an editor is over."
>
> "컴퓨터가 발명된 이래 에디터에 코드를 직접 타이핑하던 시대는 끝났다."

맞는 말이다. 하지만 끝난 건 타이핑이지, 엔지니어링이 아니다.

분해 능력, 컨텍스트 설계, 완료 정의, 실패 복구, 관찰 가능성, 메모리 설계, 병렬 관리, 추상화 계층, 감각 — 이 9가지를 가만히 들여다보면, 사실 AI 시대 이전에도 좋은 엔지니어가 갖추고 있던 것들이다. 에이전틱 엔지니어링은 이 능력들의 확장이고 증폭이다. 새로운 게 아니라, 원래 중요했던 것들이 더 중요해진 거다.

다만 한 가지 달라진 게 있다면, 이 능력들의 효과가 극적으로 증폭됐다는 거다. 예전에는 분해 능력이 조금 부족해도 직접 코드를 짜면서 보정할 수 있었다. 하지만 에이전트에게 일을 맡기는 시대에는, 분해가 잘못되면 그 잘못이 에이전트의 속도만큼 빠르게 증폭된다. 좋은 설계의 레버리지도 커졌지만, 나쁜 설계의 피해도 커진 거다.

Stanford에서 AI-native 엔지니어링을 가르치는 Mihel Tulloch의 조언이 실용적이다 — **점진적으로 추가하라.** 한 에이전트 워크플로우를 정말 잘 해내는 것부터 시작. 에이전트 하나로 복잡한 소프트웨어를 만들 수 있을 때, 그때 두 번째를 붙인다. 한 번에 10개가 아니라 한 걸음씩.

Mihel은 또 하나 중요한 점을 짚었다. 멀티 에이전트를 잘 다루는 사람들을 관찰했더니, **실제로 인간 개발자들을 관리해본 경험이 있는 사람들** 이었다고. CTO 시절 스쿼드 6개를 관리하던 내 경험이 에이전트 관리에 직접적으로 도움이 된 것도 같은 맥락이다.

나도 아직 갈 길이 멀다. 어떤 날은 에이전트와 찰떡처럼 호흡이 맞아서 "이게 미래구나" 하고 감탄하고, 다음 날은 에이전트가 삽질하는 걸 보면서 "내가 직접 짜는 게 빠르겠다"고 투덜거린다.

하지만 방향은 보인다. 그리고 그 방향은 "더 좋은 프롬프트를 쓰는 것"이 아니라, **"에이전트가 잘 작동하는 환경을 설계하는 것"** 이다. 프롬프트는 도구고, 환경 설계가 본질이다.

> "The key is to develop the intuition to decompose tasks appropriately, delegating to agents where they work well and providing human help where needed."
>
> "핵심은 작업을 적절히 분해하여 잘 작동하는 부분은 에이전트에 위임하고 나머지 부분에서 인간이 도움을 주는 직관을 기르는 것이다."

직관. 결국 이건 감각과 경험의 문제다. 도구는 바뀌어도 본질은 남는다. 좋은 엔지니어가 에이전트를 만나면 위대한 엔지니어가 된다. 나쁜 설계가 에이전트를 만나면 나쁜 결과물이 빠르게 쏟아진다.

이 9가지 능력은 별개가 아니라 서로 연결되어 있다. 분해를 잘 하면 완료 정의가 명확해지고, 컨텍스트를 잘 설계하면 실패 복구가 쉬워지고, 메모리가 쌓이면 관찰 가능성이 높아지고, 병렬 관리 경험이 추상화 계층을 올리게 만들고, 이 모든 것의 바탕에 감각이 있다. 하나씩 키우다 보면 나머지도 따라온다. 어디서 시작하든 상관없다. 중요한 건 시작하는 거다.

Mihel이 학생들에게 강조한 것처럼 — **실험이 AI 네이티브 소프트웨어 개발자가 되는 핵심이다.** 결국 스스로 벽에 머리를 조금 찧어봐야 한다. 이 글에서 내가 공유한 AddPlan의 808줄, CLI의 빈 껍데기, 재분배 엔진의 무한루프, liquidglass의 "이상한데 그냥 두자" — 전부 벽에 머리를 찧은 결과물이다. 그 찧음 없이는 9가지 능력도 체화되지 않는다.

> "It is a deep, improvable skill."
>
> "깊고 개선 가능한 스킬이다."

매일 조금씩 나아지면 된다. 완벽할 필요 없다. 방향만 맞으면 된다.

6개월 전의 나에게 "너의 AI 에이전트가 밤새 코드를 짜고, 아침에 PR 리뷰만 하면 돼"라고 말했으면 웃었을 거다. 지금은 그게 일상이다. 6개월 후에는 또 어떤 일상이 펼쳐질지 상상이 안 된다. 하지만 한 가지는 확신한다 — 그때도 분해 능력은 필요하고, 컨텍스트 설계는 중요하고, 감각은 대체 불가능할 거다.

그 쇼의 주인공은 AI가 아니라, AI를 잘 다루는 엔지니어다.

---

## References

- [Andrej Karpathy — Agentic Engineering (X 원문)](https://x.com/i/status/2026731645169185220)
- [Armin Ronacher — Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/)
- [IndyDevDan — Top 2% Agentic Engineering](https://agenticengineer.com/top-2-percent-agentic-engineering)
- [Boris Cherny — Claude Code Creator Workflow (Threads)](https://www.threads.com/@boris_cherny/post/DUMZr4VElyb/)
- [WenHao Yu — Agentic Coding: One Year from Vibes to Agentic Engineering](https://yu-wenhao.com/en/blog/agentic-coding/)
- [Sean Goedecke — AI Agents and Code Review](https://www.seangoedecke.com/ai-agents-and-code-review/)
- [Mihel — The AI-Native Software Engineer (Stanford)](https://www.youtube.com/watch?v=wEsjK3Smovw)
- [Superset.sh — Run 10+ Parallel Coding Agents](https://superset.sh)
- [oh-my-codex (omx) — Multi-Agent Orchestration for Codex CLI](https://github.com/Yeachan-Heo/oh-my-codex)
- [Dex Horthy — 12-Factor Agents](https://github.com/humanlayer/12-factor-agents)
- [GitHub Engineering — Multi-Agent Workflows](https://github.blog/ai-and-ml/generative-ai/multi-agent-workflows-often-fail-heres-how-to-engineer-ones-that-dont/)
- [HumanLayer — Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [Geoffrey Huntley — Ralph Loop](https://ghuntley.com/ralph/)
- [dev.to/@suede — Persistent Memory for Claude Code](https://dev.to/suede/the-architecture-of-persistent-memory-for-claude-code-17d)
- [supermemory.ai — AI Memory Layer](https://supermemory.ai)
- [Elvis (@elvissun) — 94 Commits/Day with AI Agents](https://x.com/elvissun/status/2025920521871716562)
- [2026 Agentic Coding Trends Report (Anthropic)](https://resources.anthropic.com/2026-agentic-coding-trends-report)
