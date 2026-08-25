import RevealController from './reveal'

const businesses = [
  {
    number: '01',
    title: 'Marketing',
    label: '마케팅 사업',
    headline: <>브랜드<br />커뮤니케이션</>,
    points: ['브랜드', '콘텐츠', '캠페인'],
  },
  {
    number: '02',
    title: 'Commerce',
    label: '커머스 사업',
    headline: <>상품 판매<br />운영</>,
    points: ['상품', '판매', '운영'],
  },
  {
    number: '03',
    title: 'Distribution',
    label: '유통 사업',
    headline: <>공급 유통<br />채널</>,
    points: ['공급', '유통', '채널'],
  },
]

const companyFacts = [
  { title: 'Slogan', text: 'Built to Endure.' },
  { title: 'Base', text: 'Republic of Korea' },
  { title: 'Website', text: 'hnmspace.com' },
]

export default function Home() {
  return (
    <main>
      <RevealController />
      <div className="ambient-layer" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM SPACE 홈">
          <img src="/hnm-logo-horizontal-black.png" alt="HNM SPACE" width={1275} height={185} />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#business">Business</a>
          <a href="#standard">HNM SPACE</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" data-section="light">
        <div className="hero-mark" data-reveal="hero">
          <img src="/hnm-logo-primary-black.png" alt="HNM SPACE" width={746} height={287} />
        </div>
        <p className="hero-line" data-reveal>Built to Endure.</p>
        <div className="hero-rule" data-line aria-hidden="true" />
        <div className="scroll-indicator" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section id="business" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>01 / Business</p>
          <div className="work-title-block">
            <h2 data-reveal>Beyond categories.</h2>
            <p className="work-lead" data-reveal>
              Marketing. Commerce. Distribution.
            </p>
          </div>
        </div>
        <div className="business-grid">
          {businesses.map((item) => (
            <article key={item.title} className="business-card" data-reveal>
              <div className="business-card-top">
                <span>{item.number}</span>
                <em>{item.label}</em>
              </div>
              <h3>{item.title}</h3>
              <strong className="business-card-headline">{item.headline}</strong>
              <ul aria-label={`${item.title} 영역`}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="standard" className="field-section" data-section="light">
        <p className="section-kicker" data-reveal>02 / HNM SPACE</p>
        <div className="field-lines" data-reveal>
          {companyFacts.map((principle) => (
            <div key={principle.title} className="field-row">
              <strong>{principle.title}</strong>
              <span>{principle.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          HNM SPACE
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>03 / Contact</p>
        <h2 data-reveal>For what comes next.</h2>
        <div className="contact-links" data-reveal>
          <a href="mailto:contact@hnmspace.com"><span>contact@hnmspace.com</span></a>
          <a href="https://hnmspace.com"><span>hnmspace.com</span></a>
        </div>
      </section>

      <footer className="site-footer" data-section="dark">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/hnm-symbol-white.png" alt="HNM SPACE 심볼" width={746} height={183} />
            <p>Built to Endure.</p>
          </div>

          <div className="footer-content">
            <nav className="footer-policy" aria-label="정책 링크">
              <a href="/terms">이용약관</a>
              <a href="/privacy">개인정보처리방침</a>
            </nav>

            <div className="footer-info" aria-label="회사 문의 정보">
              <p>
                <strong>대표자</strong>
                <span>김현호</span>
              </p>
              <p>
                <strong>사업 문의</strong>
                <a href="mailto:contact@hnmspace.com">contact@hnmspace.com</a>
              </p>
              <p>
                <strong>협업·제안 문의</strong>
                <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
              </p>
              <p>
                <strong>웹사이트</strong>
                <a href="https://hnmspace.com">hnmspace.com</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 HNM SPACE. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
