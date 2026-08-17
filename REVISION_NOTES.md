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


## v6 — Final polish after live preview

- Strengthened the About headline presence by adjusting sticky position and type scale.
- Removed Korean support copy from Business cards to reduce information density.
- Lightened Business card borders, background, hover motion, and mobile height.
- Compacted the Standard section rows and brought descriptions closer.
- Removed blur from Contact links and increased button border readability.
- Rebuilt OG image with a larger logo, no small decorative symbol, and shorter preview description.


## v6.1 — Mobile rhythm and business readability

- Slightly strengthened Business card text contrast on desktop.
- Reduced mobile Business card height, internal spacing, heading size, and tag spacing.
- Added section scroll margins so anchored sections do not sit too close to the fixed header.
- Increased mobile Standard top breathing room and calmed first-row reveal movement.
- Tightened mobile navigation spacing slightly.
## v6.2 - SEO and search enhancement

- Expanded Korean meta description for search snippets while keeping OG description concise.
- Added additional Korean/English keywords for brand, business, and search discovery.
- Added Organization and WebSite structured data via JSON-LD.
- Added Googlebot preview directives.
- Added lastmod to sitemap.xml.
- Added site.webmanifest for install/share metadata.


## v6.3 — Korean informational copy balance

- Kept major brand statements in English: Built to Endure, Long-term by design, Beyond categories, business names, and final contact phrase.
- Changed navigation, section kickers, About list titles, business labels, business tags, Standard descriptions, and field note to Korean.
- Aligned OG/Twitter descriptions and web manifest description with Korean-first domestic search context.
- Preserved the existing layout, spacing, SEO structure, favicon, and OG image assets.


## v6.4 — Plain Korean copy refinement

- Replaced branding-heavy Korean phrases with calmer, operational Korean descriptions.
- Adjusted About item labels and descriptions to sound more like company information than slogans.
- Reworked Business card labels and descriptions into practical Korean copy while keeping major business names in English.
- Replaced the Standard note with a more direct operating statement.


## v6.5 — Company-first copy

- Rebalanced the website copy so HNM SPACE remains the main subject.
- Reduced repeated emphasis on connecting Marketing, Commerce, and Distribution under one shared direction.
- Rewrote Business section lead to present the three divisions simply as operated business areas.
- Rewrote Business card labels and descriptions to be informational, not philosophical.
- Rewrote Standard section text to describe working principles without tying them back to the three divisions.
- Updated SEO descriptions to avoid over-framing the company around the three business categories.


## v6.6 — Company profile copy refinement

- Removed practical memo-like phrases from the Standard section.
- Replaced Standard descriptions with short category phrases: 사업 방향, 운영 기준, 사업 구조.
- Removed repeated verb endings in the Business cards by switching to noun-style descriptions.
- Removed duplicated Business section lead wording and returned it to a concise category line.
- Removed comparative copy such as “단기적인 흐름보다” from the About section.
- Kept the overall design, spacing, SEO structure, favicon, and OG image assets unchanged.


## v6.7 — Business criteria section

- Replaced the overlapping “운영 기준” section with “사업 기준”.
- Changed the 03 section to Market / Product / Operation so it explains how HNM SPACE views business opportunities rather than repeating company philosophy.
- Removed the “기준” item from the About section and reframed About as company identity.
- Preserved the existing four-section website rhythm without making the page lighter or more repetitive.


## v6.8 — About copy refinement

- Changed the first About item from generic company wording to identity-focused wording.
- Replaced overly obvious operation and sustainability sentences with more natural company-profile copy.
- Preserved the v6.7 section structure: introduction, business areas, business criteria, contact.


## v6.9 — Compact company information structure

- Removed the previous About section to avoid overlapping identity and criteria copy.
- Renumbered Business section to 01.
- Replaced the Business Criteria section with a concise HNM SPACE information section.
- New HNM SPACE section: Name, Base, Web.
- Renumbered Contact section to 03.
- Simplified the header navigation to Business, HNM SPACE, Contact.


## v6.10 — Header navigation language alignment

- Updated header navigation labels from Korean to English.
- Final header labels: Business / HNM SPACE / Contact.
- Body section labels remain unchanged.
