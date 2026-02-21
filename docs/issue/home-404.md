진단 결과

  /home 경로로 접근하면 404가 뜨는 원인은 두 가지가 결합된 문제입니다.

  1. /home 페이지가 존재하지 않음

  프로젝트의 페이지 구조를 보면:

  src/pages/
  ├── index.astro        → /     (루트)
  ├── 404.astro          → /404
  ├── search.astro       → /search
  ├── posts/             → /posts
  ├── tags/              → /tags
  └── archives/          → /archives


  src/pages/home.astro가 없습니다. 홈페이지는 index.astro로 / 경로에서만 서빙됩니다. /home이라는 경로는
   Astro가 생성하지 않으므로 dist/home/ 디렉토리 자체가 빌드 결과물에 존재하지 않습니다.

  2. Nginx 기본 설정에 fallback이 없음

  Dockerfile:15-17을 보면:

  FROM nginx:mainline-alpine-slim AS runtime
  COPY --from=base /app/dist /usr/share/nginx/html
  EXPOSE 80

  커스텀 nginx.conf가 없이 기본 Nginx 설정을 사용하고 있습니다. 기본 Nginx는:
  - dist/ 안에 파일/디렉토리가 있는 경로만 서빙
  - 없는 경로 → Nginx 기본 404 반환 (Astro의 커스텀 404.html이 아님)
  - try_files fallback이 없음

  ★ Insight ─────────────────────────────────────
  Astro <ClientRouter />와 Hard Refresh의 관계: Layout.astro:186에서 <ClientRouter />를 사용하고 있어,
  일반 링크 클릭 시에는 클라이언트 사이드 네비게이션이 동작합니다. 하지만 **강력
  새로고침(Ctrl+Shift+R)**은 ClientRouter를 완전히 우회하여 서버에 직접 HTTP 요청을 보냅니다. 이때
  Nginx가 해당 경로에 대한 정적 파일을 찾지 못하면 404를 반환합니다.

  SSG vs SPA 라우팅: Astro는 SSG(Static Site Generation)이므로 각 페이지마다 index.html이 생성됩니다.
  SPA와 달리 모든 경로를 하나의 index.html로 fallback할 필요는 없지만, 존재하지 않는 경로에 대한 커스텀
   404 처리는 별도로 설정해야 합니다.
  ─────────────────────────────────────────────────

  /home이 어디서 오는지?

  코드 내에 /home으로 리다이렉트하는 로직은 전혀 없습니다. /home 접근이 발생하는 원인은 다음 중 하나일
  수 있습니다:

  1. 외부 링크/북마크에서 /home으로 잘못 링크된 경우
  2. CDN/리버스 프록시 (Cloudflare 등)에 / → /home 리다이렉트 규칙이 있는 경우
  3. 사용자가 브라우저 주소창에 직접 /home을 입력한 경우

  해결 방안

  어떤 방향으로 해결하시겠습니까?

  1. Nginx에 커스텀 설정 추가 — /home → / 리다이렉트 + 커스텀 404 페이지 적용
  2. Astro에 /home 리다이렉트 페이지 추가 — src/pages/home.astro에서 /로 리다이렉트
  3. 먼저 배포 환경 (CDN/프록시 설정) 을 확인하여 /home이 어디서 발생하는지 추적

  어떤 배포 환경(Cloudflare, AWS 등)을 사용하고 계신지 알려주시면 더 정확한 원인을 찾을 수 있습니다.