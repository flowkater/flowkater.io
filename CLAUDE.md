# CLAUDE

## engram (Cross-Agent Memory)

세션 시작 시 반드시 engram memory.context를 호출해서 이 프로젝트의 최근 메모리를 로드할 것.
작업 중 중요한 결정/발견/버그 원인은 memory.add로 저장할 것.
관련 컨텍스트가 필요하면 memory.search로 검색할 것.
