# 당신의 Claude Code 에게 날개를 펼쳐줘요! - Superpowers 소개 

> RedBull give you wings!
> **레드불, 날개를 펼쳐줘요!** 
> 출처: 레드불 광고

완전히 처음에 아이디어를 테스트해보거나 바이브 코딩을 잠깐 '우와'하고 쓰고 말 것이 아니라면, 꽤 많은 경우 context 를 구체화하고 정확한 프롬프트를 전달하고 Spec 문서를 먼저 작성하는 스펙 주도 개발 등 여러 방법을 사용한다. 
그런데 어떤 방식으로 정의하고 전달해도, 자기가 마음대로 판단하고 의도하지 않은 방향으로 작업이 진행되는 경우가 잦다. 특히, 프로젝트가 점점 복잡해지고 커지면서 더 그런데, 그래서 내가 도입한 커맨드 하나는 interview 커맨드인데 프론트 매터 설명은 대략 이렇다. 

```
---
    description: Deep interview for feature ideas. Explores technical implementation,
    UI/UX, edge cases, and tradeoffs. Creates implementation plan upon completion.
    argument-hint: [feature description or path/to/spec.md]
    allowed-tools: Read, Grep, Glob, Write, AskUserQuestion
    ---

    # Feature Deep Interview

    ## Mode Detection
```

요약하면, "니가 판단하지 말고, 애매한게 명확해질 때까지 나한테 계속 질문해라." 정도이다. 그러면 자기 마음대로 판단하지 않고 AskUserQuestions 을 이용해서 세부 정책이나 현재 구현 방법 또는 요구 사항에 대해서 명확하게 나를 대상으로 인터뷰가 진행된다. 특히 우리가 기획 내용이나 요구사항을 전달했을때 "언어"라는 본질을 흐리는 표상의 원죄로 아무리 명확히 작성해도 AI는 잘못이해한다. (사람도 마찬가지) 그리고 사실 내가 요구사항을 던지면서도 세부 정책은 생각하지 않고 막 던지는 경우도 많고.

그래서 Codex 나 Claude Code 에서 plan mode 를 키고 인터뷰 커맨드를 실행하면 굉장히 구체화된 요구사항과 구현 계획이 세워지게 된다. 처음 기능을 구현할때도, 버그를 고칠때도 여러모로 전부 쓸모가 있다. 

그리고 내 이전 글 [15년차 CTO가 바이브 코딩하는 법](https://flowkater.io/posts/2026-01-09-15-year-cto-vibe-coding/) 에서 얘기한 TDD Planning 을 마치고 작업을 들어가면, 아주 구체적이고 단계별로 나뉘어진 계획을 따르게 된다. 
하지만, 작업을 병렬적으로 하다보면 이 커맨드 실행을 까먹을때도 있고, TDD Planning 특성상 언어나 프레임워크 마다 사용 포맷이 좀 다르다보니 그때마다 맞춤형 SKILL 을 세팅하는게 번거로워서 클라이언트에서는 스킵되는 경우가 많았다. 인터뷰 또한 구체적으로 물어보는 건 좋으나 또 어느정도는 알잘딱이 되었으면 했고.. (사람 마음이란..)

그럼에도 불구하고 잘 사용하던 와중에 내가 직접 만들고 사용하고 있던 모든 커맨드와 스킬을 통합하고 **로버트 치알디니**의 **설득의 심리학** 을 기반으로 LLM에 적용한 스킬 이름 그대로 우리 코드 에이전트(Claude Code, Codex  등)에게 슈퍼파워를 달아주는 스킬을 발견했다.

치알디니 본인이 공동 저자로 참여한 학술 연구를 통해 설득 원칙이 LLM에도 통한다는 것이 과학적으로 증명되었다.
        
**설득의 심리학 3가지 원칙 적용**
1. **권위의 원칙**: 스킬 파일에 해당 스킬이 필수임을 명시하여, Claude(또는 Codex)가 반드시 따라야 한다고 인식하게 한다.
2. **일관성의 원칙**: Claude(또는 Codex)에게 특정 스킬을 따르겠다고 선언하게 만들어, 선언한 내용을 지키도록 유도한다.
3. **사회적 증거**: 다른 스킬들도 모두 이 방식을 따른다고 알려주어, Claude(또는 Codex)가 이를 표준으로 인식하게 한다

Claude Code에서는 설치도 간단하다. 마켓플레이스에서 plugin 을 바로 받아주면 된다. 난 간단한 작업이나 빠르게 치는 작업은 Claude Code, 프로덕션 레벨은 보통 Codex 를 많이 쓰는데, Superpowers 는 둘 다에서 아주 유용하게 사용된다. 

특히 내가 적극 활용하는 인터뷰나 TDD 워크 플로우 모두를 반영하면서도, 코드 리뷰나 검증 등의 추가 보완 스킬을 모두 반영한 스킬이니 여기서 소개를 해보려고 한다.

### (추가 작성 필요)
- 기본 간단 사용법 using-superpowers
- 개발 워크플로우 구성
- Writing Skills 라는 메타 스킬의 활용
- 어떻게 더 잘 동작하나?
- 요약


## References
[https://news.hada.io/topic?id=23620](https://news.hada.io/topic?id=23620)  
[https://blog.fsck.com/2025/10/09/superpowers/](https://blog.fsck.com/2025/10/09/superpowers/)  
[https://github.com/obra/superpowers](https://github.com/obra/superpowers)