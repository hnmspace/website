import RevealController from './reveal'

const businesses = [
  {
    number: '01',
    title: 'Marketing',
    text: '브랜드와 시장을 이해하고, 전략과 콘텐츠를 통해 지속 가능한 성장을 설계합니다.',
  },
  {
    number: '02',
    title: 'Commerce',
    text: '상품의 기획부터 운영과 성장까지, 커머스 비즈니스의 전 과정을 구축합니다.',
  },
  {
    number: '03',
    title: 'Distribution',
    text: '시장과 상품을 연결하는 유통 구조를 만들고, 새로운 기회와 확장을 이어갑니다.',
  },
]

const operatingPrinciples = [
  { title: 'Independent', text: '각 사업은 고유한 전문성과 독립성을 바탕으로 운영됩니다.' },
  { title: 'Connected', text: '그룹의 기준과 역량을 공유하며 유기적으로 연결됩니다.' },
  { title: 'Long-term', text: '단기적인 성과보다 지속 가능한 가치와 성장을 지향합니다.' },
]

export default function Home() {
  return (
    <main>
      <RevealController />
      <div className="ambient-layer" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM SPACE 홈">
          <img src="/hnm-logo-horizontal-black.png" alt="HNM SPACE" />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">About</a>
          <a href="#business">Business</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" data-section="light">
        <div className="hero-mark" data-reveal="hero">
          <img src="/hnm-logo-primary-black.png" alt="HNM SPACE" />
        </div>
        <p className="hero-line" data-reveal>Marketing. Commerce. Distribution.</p>
        <div className="hero-rule" data-line aria-hidden="true" />
        <div className="scroll-indicator" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section id="about" className="statement-section" data-section="light">
        <div className="statement-head">
          <p className="section-kicker" data-reveal>01 / Who we are</p>
          <h1 data-reveal>서로 다른 사업을<br />하나의 기준으로<br />운영합니다.</h1>
        </div>
        <div className="standard-principles" data-reveal>
          <article className="standard-item">
            <span>01</span>
            <strong>Long-term Perspective.</strong>
            <p>지속 가능한 성장을 기준으로 판단합니다.</p>
          </article>
          <article className="standard-item">
            <span>02</span>
            <strong>Independent Operation.</strong>
            <p>각 사업의 전문성과 독립성을 존중합니다.</p>
          </article>
          <article className="standard-item">
            <span>03</span>
            <strong>Shared Standards.</strong>
            <p>하나의 기준과 방향 아래 움직입니다.</p>
          </article>
          <article className="standard-item">
            <span>04</span>
            <strong>Meaningful Growth.</strong>
            <p>규모보다 본질적인 성장을 추구합니다.</p>
          </article>
        </div>
      </section>

      <section id="business" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>02 / Our businesses</p>
          <h2 data-reveal>Three businesses.<br />One direction.</h2>
        </div>
        <div className="work-list">
          {businesses.map((item) => (
            <article key={item.title} className="work-item" data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section" data-section="light">
        <p className="section-kicker" data-reveal>03 / How we operate</p>
        <div className="field-lines" data-reveal>
          {operatingPrinciples.map((principle) => (
            <div key={principle.title} className="field-row">
              <strong>{principle.title}</strong>
              <span>{principle.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          Independent businesses.<br />One shared standard.
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>04 / Contact</p>
        <h2 data-reveal>HNM SPACE에 관한 문의.</h2>
        <div className="contact-links" data-reveal>
          <a href="mailto:henry@hnmspace.com"><span>henry@hnmspace.com</span></a>
          <a href="https://hnmspace.com"><span>hnmspace.com</span></a>
        </div>
      </section>

      <footer data-section="light">
        <img src="/hnm-symbol-black.png" alt="HNM SPACE 심볼" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
