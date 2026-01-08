---
title: "Opencode + Google Antigravity로 Claude Opus 4.5 무료로 사용하기"
description: "Opencode에서 Google Antigravity를 통해 Claude Opus 4.5를 무료로 사용하는 방법을 소개합니다. 인증부터 모델 설정까지 단계별로 안내합니다."
summary: "Opencode에서 쿼터 부족 현상을 겪고 있다면, Google Antigravity를 통해 Claude Opus 4.5를 무료로 사용하는 방법을 알아보세요."
pubDatetime: 2026-01-08T16:55:47+09:00
modDatetime: 2026-01-08T16:55:47+09:00
updatedDatetime: 2026-01-08T16:55:47+09:00
canonicalURL: "https://flowkater.io/posts/2026-01-08-claude-opus-free-opencode-antigravity/"
tags:
  - "개발"
  - "AI"
  - "기록"
# ogImage: "/assets/og/sample.png" # (선택) 커스텀 OG 이미지 경로. 사용하지 않으면 이 줄을 삭제하세요.
featured: false
draft: false
slug: "claude-opus-free-opencode-antigravity"
keywords:
  - "Opencode"
  - "Claude Opus 4.5"
  - "Google Antigravity"
  - "AI 도구"
  - "무료 API"
  - "oh-my-opencode"
timezone: "Asia/Seoul"
---

최근에 유행하는 OpenCode (+ oh-my-opencode)를 열심히 사용하는데, Claude 가 새해되면서 사용량(쿼터)가 이전보다 줄었다는 버그인지 그들의 의도인지, 아니면 연말 2배 사용량을 사용하다가 상대적으로 적게 느껴지는건지 모르겠으나 쿼터 부족 현상도 덩달아 발생하여, 스레드를 살펴보니 Opencode 에서 Claude Opus 4.5 를 무료로 사용할 수 있다는 얘기가 있어, "스하리!"를 남겼으나 답변이 없어 해당 방법을 직접 찾아보았다.

답변을 받지 않아, 내가 찾은 방법이 스레드에서 말하는 방법인지는 확인할 길이 없다.

해당 글은 이미 OpenCode (+ oh-my-opencode)가 이미 설치된 것을 가정한다.

## 방법

### 1. Google 인증

터미널에서 (Opencode 내부가 아닌) 다음 명령어를 실행한다.

```bash
opencode auth login
```

화살표 키로 "Google - OAuth with Google (AntiGravity)"를 선택한다. Project ID는 비워두고 Enter. 브라우저가 열리면 Antigravity 접근 권한이 있는 구글 계정으로 로그인한다. 토큰 갱신은 플러그인이 자동으로 처리한다.

### 2. 모델 설정 (핵심)

여기가 핵심인데, 기본은 Gemini 모델만 세팅이 되는데, 아래 설정을 해주면 추가 모델들이 세팅된다.

`~/.config/opencode/opencode.json`에 Claude Opus 4.5 모델을 추가한다.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-antigravity-auth@1.2.7"],
  "provider": {
    "google": {
      "models": {
        "antigravity-claude-opus-4-5-thinking-low": {
          "name": "Claude Opus 4.5 Low (AntiGravity)",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        },
        "antigravity-claude-opus-4-5-thinking-medium": {
          "name": "Claude Opus 4.5 Medium (AntiGravity)",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        },
        "antigravity-claude-opus-4-5-thinking-high": {
          "name": "Claude Opus 4.5 High (AntiGravity)",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        }
      }
    }
  }
}
```

thinking 레벨별로 토큰 예산이 다르다. low는 8K, medium은 16K, high는 32K 토큰을 추론에 할당한다.

### 3. 동작 확인

```bash
opencode
/models
```

opencode 를 하고 /models 에서 해당 모델이 추가된 걸 확인할 수 있다.

## 사용 가능한 모델

- antigravity-claude-opus-4-5-thinking-low
- antigravity-claude-opus-4-5-thinking-medium
- antigravity-claude-opus-4-5-thinking-high
- antigravity-claude-sonnet-4-5

## 주의

요즈음 Opencode ToS 위반이니 어쩌니 말이 많은데, 해당 사용에 대한 책임은 전적으로 본인 판단에 있으니 잘 판단해서 사용하자. Antigravity 에서는 Google 의 자본력과 마케팅 전략 때문인지 기본적으로 claude opus 4.5 를 무료로 제공해주고 있어서 언제 막힐지 모르겠지만, Antigravity 를 직접 받아서 기본적인 작업을 하는 것도 방법일듯 싶다. 이건 합법(?)적인 방법이니..

## 직접 사용후기

나도 200$ 모델을 쓰는데로 쿼터가 바닥나서 해당 모델을 사용해봤으나, 분명히 opus-4.5 모델을 세팅해서 쓰는 것 같고, 동작은 잘되는 것 같은데 속도가 실제 모델보다 확실히 느리고, Google Antigravity 에서 제공되는 모델을 사용하니 rate limit 가 있는지 응답이 굉장히 느리거나 capacity 오류로 끊기는 경우가 있다. 그래서 쿼터 찰때까지 다른 업무를 진행하거나 위에서 말한것처럼 다른 툴을 활용하고, 쿼터 비워지면 그냥 본래 껄 쓰자..

---
