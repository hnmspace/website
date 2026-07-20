# HNM SPACE Brand Voice Renewal — Revision 2

## 핵심 방향
- HNM SPACE의 공식 슬로건을 `Built to Endure.`로 반영
- 홈페이지 전체 톤을 서비스 홍보형이 아닌 그룹 소개형으로 재정리
- 설명보다 선언에 가까운 문장 구조 적용
- 애플/노션식의 짧고 절제된 브랜드 언어에 맞춰 전체 카피 조정

## 반영 내용
- Hero 문구 변경: `Built to Endure.`
- About 섹션 메인 카피 변경: `Long-term by design.`
- Business 섹션 메인 카피 변경: `Beyond categories.`
- Business 설명을 마케팅·커머스·유통 사업부 소개형 문장으로 정리
- How we operate 성격의 섹션을 `Our Standard`로 정리
- 운영 원칙을 `Intent / Discipline / Structure`로 변경
- Contact 문구 변경: `New connections. / Thoughtful conversations.`
- 내비게이션에 `Standard` 추가
- SEO title, description, keywords, Open Graph, Twitter Card에 슬로건 반영
- 큰 제목에 `word-break: keep-all`을 적용해 부자연스러운 줄바꿈 가능성 완화

## 배포 방법
기존 GitHub 저장소의 `.git` 폴더는 유지하고, 이 프로젝트 파일로 교체한 뒤 커밋/푸시하면 Vercel 자동 배포가 진행됩니다.

```bash
git add .
git commit -m "Apply Built to Endure brand copy"
git push
```


## v2.1 one-line heading adjustment
- Changed Business headline to `Beyond categories.` on one line.
- Simplified Contact headline to `New connections.` on one line.
- Added desktop heading rules to prevent unintended line breaks while keeping mobile responsive.

## v2.2 favicon / symbol refinement
- Rebuilt the browser tab icon from the supplied HNM symbol as square favicon assets.
- Preserved the original symbol ratio by placing the mark proportionally inside a square canvas instead of forcing the horizontal PNG into a square slot.
- Added favicon.ico, 16/32/48px favicon PNGs, Apple touch icon, and app icons.
- Updated Next.js metadata to reference the new square icon assets.

## v2.4 Header refinement
- Refined fixed header proportions for a cleaner, more premium appearance.
- Reduced header height and adjusted left/right spacing on desktop and mobile.
- Reduced header logo height while preserving the official logo ratio.
- Added optical alignment and hover opacity for the header brand mark.
- Softened header backdrop and border for both light and dark sections.
- Tuned navigation spacing, letter spacing, and baseline alignment.
- Verified production build with `npm run build`.


## v3 UX / Detail Refinement

- Contact headline changed to `For what comes next.` for a quieter corporate tone.
- Desktop display headlines refined to preserve intentional one-line layouts.
- Header spacing, logo scale, typography rhythm, section padding, and hover motion refined.
- Reveal motion softened with less blur and smaller movement.
- Mobile typography and contact buttons adjusted for cleaner responsive layouts.
- Open Graph image added at `/public/og-image.png`.


## v4 — Scroll flow, business cards, OG image

- Refined the business section rhythm with a headline block, supporting lead copy, and card-based layout.
- Reworked business text to differentiate Marketing, Commerce, and Distribution without shifting into service-promotion tone.
- Added compact scope chips for each business area.
- Adjusted section padding and reveal motion for a slower, more deliberate scroll flow.
- Rebuilt `public/og-image.png` with the final slogan and business pillars.


## v5 — Quieter business system and declarative copy

- Reduced the visual weight of the Business cards.
- Rewrote business copy as declarative English statements with brief Korean support lines.
- Simplified the Business section lead to `One standard.`
- Shortened Standard principle descriptions.
- Tuned mobile card height, spacing, and type hierarchy.
- Rebuilt `public/og-image.png` as a quieter black-based sharing image.
