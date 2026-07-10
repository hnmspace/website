# HNM SPACE Copywriting Renewal — Revision 1

## 반영 내용
- 전체 카피라이팅을 홀딩스/그룹 관점으로 재작성
- 내비게이션 섹션명 변경: About / Business / Contact
- Hero 문구 변경: Marketing. Commerce. Distribution.
- Who we are 섹션 및 그룹 운영 기준 정리
- Our businesses 섹션에 마케팅·커머스·유통 사업 설명 반영
- How we operate 섹션으로 그룹 운영 방식 정리
- Contact 문구를 중립적인 기업 문의 표현으로 변경
- SEO 메타데이터 개선
  - metadataBase 및 canonical 추가
  - 한국어 description/keywords 적용
  - Open Graph 및 Twitter Card 정리
  - robots 설정 추가

## 검증
- `npm ci` 후 `npm run build` 실행
- Next.js 프로덕션 빌드 및 TypeScript 검사 통과

## 배포 방법
기존 GitHub 저장소의 파일을 이 프로젝트 내용으로 교체한 뒤 커밋/푸시하면 Vercel 자동 배포가 진행됩니다.
`.git` 폴더와 Vercel 환경변수는 기존 저장소 설정을 유지하세요.
