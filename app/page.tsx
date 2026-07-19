import RevealController from './reveal'

const businesses = [
  {
    number: '01',
    title: 'Marketing',
    label: 'Signal',
    text: '시장의 움직임을 읽고, 브랜드가 향할 방향을 정리합니다.',
    points: ['Market', 'Brand', 'Communication'],
  },
  {
    number: '02',
    title: 'Commerce',
    label: 'Experience',
    text: '상품과 운영, 구매 경험이 하나의 구조로 이어지는 영역입니다.',
    points: ['Product', 'Operation', 'Experience'],
  },
  {
    number: '03',
    title: 'Distribution',
    label: 'Reach',
    text: '상품과 채널, 시장의 접점을 넓히는 기반을 만듭니다.',
    points: ['Channel', 'Supply', 'Market'],
  },
]

const operatingPrinciples = [
  { title: 'Intent', text: '명확한 의도에서 시작합니다.' },
  { title: 'Discipline', text: '오래 지속될 기준을 지킵니다.' },
  { title: 'Structure', text: '각 사업은 독립적으로, 하나의 구조 안에서 움직입니다.' },
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
          <a href="#about">About</a>
          <a href="#business">Business</a>
          <a href="#standard">Standard</a>
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

      <section id="about" className="statement-section" data-section="light">
        <div className="statement-head">
          <p className="section-kicker" data-reveal>01 / About HNM SPACE</p>
          <h1 data-reveal>Long-term<br />by design.</h1>
        </div>
        <div className="standard-principles" data-reveal>
          <article className="standard-item">
            <span>01</span>
            <strong>Perspective.</strong>
            <p>단기적 흐름보다 오래 지속될 방향을 봅니다.</p>
          </article>
          <article className="standard-item">
            <span>02</span>
            <strong>Independence.</strong>
            <p>각 사업은 고유한 전문성과 판단으로 운영됩니다.</p>
          </article>
          <article className="standard-item">
            <span>03</span>
            <strong>Standard.</strong>
            <p>서로 다른 사업은 하나의 기준으로 연결됩니다.</p>
          </article>
          <article className="standard-item">
            <span>04</span>
            <strong>Endurance.</strong>
            <p>오래 남는 가치를 중심에 둡니다.</p>
          </article>
        </div>
      </section>

      <section id="business" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>02 / Our Businesses</p>
          <div className="work-title-block">
            <h2 data-reveal>Beyond categories.</h2>
            <p className="work-lead" data-reveal>
              Marketing. Commerce. Distribution.<br />
              서로 다른 영역은 하나의 기준 안에서 움직입니다.
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
              <p>{item.text}</p>
              <ul aria-label={`${item.title} scope`}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="standard" className="field-section" data-section="light">
        <p className="section-kicker" data-reveal>03 / Our Standard</p>
        <div className="field-lines" data-reveal>
          {operatingPrinciples.map((principle) => (
            <div key={principle.title} className="field-row">
              <strong>{principle.title}</strong>
              <span>{principle.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          Quiet confidence.<br />Clear standards.
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>04 / Contact</p>
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
