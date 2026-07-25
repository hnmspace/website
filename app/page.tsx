import RevealController from './reveal'

const businesses = [
  {
    number: '01',
    title: 'Marketing',
    label: '시장 신호',
    headline: <>Market signal.<br />Brand direction.</>,
    points: ['시장', '브랜드', '커뮤니케이션'],
  },
  {
    number: '02',
    title: 'Commerce',
    label: '운영 경험',
    headline: <>Product structure.<br />Operating rhythm.</>,
    points: ['상품', '운영', '경험'],
  },
  {
    number: '03',
    title: 'Distribution',
    label: '시장 접점',
    headline: <>Channel reach.<br />Market access.</>,
    points: ['채널', '공급', '시장'],
  },
]

const operatingPrinciples = [
  { title: 'Intent', text: '시작부터 명확하게.' },
  { title: 'Discipline', text: '오래 지속되는 기준으로.' },
  { title: 'Structure', text: '독립적으로, 하나의 방향으로.' },
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
          <a href="#about">소개</a>
          <a href="#business">사업</a>
          <a href="#standard">기준</a>
          <a href="#contact">문의</a>
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

      <section id="about" className="statement-section" data-section="light">
        <div className="statement-head">
          <p className="section-kicker" data-reveal>01 / HNM SPACE 소개</p>
          <h1 data-reveal>Long-term<br />by design.</h1>
        </div>
        <div className="standard-principles" data-reveal>
          <article className="standard-item">
            <span>01</span>
            <strong>관점</strong>
            <p>단기적 흐름보다 오래 지속될 방향을 봅니다.</p>
          </article>
          <article className="standard-item">
            <span>02</span>
            <strong>독립성</strong>
            <p>각 사업은 고유한 전문성과 판단으로 운영됩니다.</p>
          </article>
          <article className="standard-item">
            <span>03</span>
            <strong>기준</strong>
            <p>서로 다른 사업은 하나의 기준으로 연결됩니다.</p>
          </article>
          <article className="standard-item">
            <span>04</span>
            <strong>지속성</strong>
            <p>오래 남는 가치를 중심에 둡니다.</p>
          </article>
        </div>
      </section>

      <section id="business" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>02 / 사업 영역</p>
          <div className="work-title-block">
            <h2 data-reveal>Beyond categories.</h2>
            <p className="work-lead" data-reveal>
              Marketing. Commerce. Distribution.<br />
              하나의 기준으로.
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
        <p className="section-kicker" data-reveal>03 / 운영 기준</p>
        <div className="field-lines" data-reveal>
          {operatingPrinciples.map((principle) => (
            <div key={principle.title} className="field-row">
              <strong>{principle.title}</strong>
              <span>{principle.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          조용한 자신감.<br />명확한 기준.
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>04 / 문의</p>
        <h2 data-reveal>For what comes next.</h2>
        <div className="contact-links" data-reveal>
          <a href="mailto:henry@hnmspace.com"><span>henry@hnmspace.com</span></a>
          <a href="https://hnmspace.com"><span>hnmspace.com</span></a>
        </div>
      </section>

      <footer data-section="light">
        <img src="/hnm-symbol-black.png" alt="HNM SPACE 심볼" width={746} height={183} />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
