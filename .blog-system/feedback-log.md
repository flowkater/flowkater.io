---
version: "1.0.0"
last_updated: "2026-01-09T10:00:00+09:00"
total_entries: 0
---

# 피드백 로그

사용자 피드백과 스타일 학습 기록을 저장합니다. Style Learner가 이 파일을 관리합니다.

---

## 피드백 형식

각 피드백은 다음 형식으로 기록됩니다:

```markdown
### [YYYY-MM-DD HH:mm] {LIKE|DISLIKE|INSTRUCTION}

**원본:**
> 피드백 대상 텍스트

**피드백:**
> 사용자 피드백 원문

**해석:**
- 유형: {feedback_type}
- 대상: {target_element}
- 조치: {action_taken}

**적용:** applied | pending | rejected

---
```

---

## 피드백 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| LIKE | 긍정적 피드백, 패턴 강화 | "이 표현 좋아!" |
| DISLIKE | 부정적 피드백, 패턴 제거/수정 | "이건 내 스타일 아니야" |
| INSTRUCTION | 구체적 지시, 규칙 추가 | "~체로 써줘" |

---

## 피드백 기록

(새로운 피드백이 아래에 추가됩니다)

---
