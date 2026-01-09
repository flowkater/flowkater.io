---
title: "Opencode + Google Antigravity로 Claude Opus 4.5 무료로 사용하기 + 오픈 코드에서 Claude Code 계속 사용하는 방법"
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

## !오픈 코드에서 클로드 코드 계속 사용하는 방법 - ((1월 9일 (추가)))

출처: https://github.com/anomalyco/opencode-anthropic-auth/pull/10

PR은 Anthropic OAuth(Claude Code) 환경에서 툴 이름 문제로 인해 요청이 제대로 안 가는 버그를 플러그인으로 우회하는 패치다.
코멘트의 “override the plugin via config”는 opencode 코어를 수정하지 말고 opencode.json의 plugins 배열에 "opencode-anthropic-auth"를 추가해서 이 로직을 켜라는 의미다.
따라서, 지금 사용하는 프로젝트(또는 글로벌 설정)에 위처럼 plugins 설정만 추가하면 된다.

```sh
npm install opencode-anthropic-auth
```

`~/.config/opencode/opencode.json`에 해당 플러그인 추가

```json
{
  "plugin": [
    "기존-플러그인-이름들",
    "opencode-anthropic-auth" // -> 이걸 추가해준다.
  ],

  //....
```

```sh
opencode login auth
```

opencode 로 다시 anthropic Oauth 로그인 후, opencode 실행하면 에러가 사라지고 다시 사용 가능

# 이전 글

최근에 유행하는 OpenCode (+ oh-my-opencode)를 열심히 사용하고 있다. 그런데 새해가 되면서 Claude 사용량(쿼터)이 이전보다 확 줄어든 느낌이다. 버그인지(reddit에 꽤 보고가 올라오고 있다), 의도된 변경인지, 아니면 연말 2배 사용량에 익숙해져서 상대적으로 적게 느껴지는 건지 모르겠다. 아무튼 쿼터 부족 현상이 덩달아 발생해서 스레드를 살펴보니, OpenCode에서 Claude Opus 4.5를 무료로 사용할 수 있다는 얘기가 있었다. "스하리!"를 남겼으나 답변이 없어서 직접 방법을 찾아보았다.

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

요즈음 Opencode ToS 위반이니 어쩌니 말이 많은데, 해당 사용에 대한 책임은 전적으로 본인 판단에 있으니 잘 판단해서 사용하자. Antigravity 에서는 Google 의 자본력과 마케팅 전략 때문인지 기본적으로 claude opus 4.5 를 무료로 제공해주고 있어서 언제 막힐지 모르겠지만, Antigravity 를 직접 받아서 기본적인 작업을 하는 것도 방법일듯 싶다.

## 직접 사용후기

나도 200$ 모델을 쓰는데.. 쿼터가 바닥나서 해당 모델을 사용해봤으나, 분명히 opus-4.5 모델을 세팅해서 쓰는 것 같고, 동작은 잘되는 것 같은데 속도가 실제 모델보다 확실히 느리고, Google Antigravity 에서 제공되는 모델을 사용하니 rate limit 가 있는지 응답이 굉장히 느리거나 capacity 오류로 끊기는 경우가 있다. 그래서 쿼터 찰때까지 다른 업무를 진행하거나 위에서 말한것처럼 다른 툴을 활용하고, 쿼터 비워지면 그냥 본래 클로드 계정을 쓰는게 맞을 것 같다.

바이브코딩을 어떻게 하는지 한번 블로그 포스팅을 하려는데 매일매일 새로운게 나오니 한번 정리하면 그 방법이 바로 outdated 되어버려서 글을 계속 버리고 있다. 전략을 바꿔서 서비스 배포 기점으로 "배포하면서 사용한 방법" 정도로 정해서 작성하는 것을 목표로 해보아야겠다.
