import RevealController from './reveal'

const process = [
  {
    number: '01',
    title: 'Understand',
    text: '브랜드의 현재 위치와 움직일 수 있는 방향을 먼저 봅니다.',
  },
  {
    number: '02',
    title: 'Shape',
    text: '마케팅, 커머스, 유통이 하나의 구조로 작동하도록 정리합니다.',
  },
  {
    number: '03',
    title: 'Execute',
    text: '말보다 실행을 기준으로 움직이고, 결과로 다음 판단을 만듭니다.',
  },
]

const fields = [
  { title: 'Marketing', text: 'Performance · Content · Brand' },
  { title: 'Commerce', text: 'Strategy · Operation · Growth' },
  { title: 'Distribution', text: 'Network · Expansion · Partnership' },
]

export default function Home() {
  return (
    <main>
      <RevealController />
      <div className="ambient-layer" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM Space home">
          <img src="/hnm-logo-horizontal-black.png" alt="HNM Space" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#standard">Standard</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" data-section="light">
        <div className="hero-mark" data-reveal="hero">
          <img src="/hnm-logo-primary-black.png" alt="HNM Space" />
        </div>
        <p className="hero-line" data-reveal>Less noise. More execution.</p>
        <div className="hero-rule" data-line aria-hidden="true" />
        <div className="scroll-indicator" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section id="standard" className="statement-section" data-section="light">
        <div className="statement-head">
          <p className="section-kicker" data-reveal>01 / Standard</p>
          <h1 data-reveal>좋은 결과는<br />기준에서<br />시작됩니다.</h1>
        </div>
        <div className="standard-principles" data-reveal>
          <article className="standard-item">
            <span>01</span>
            <strong>Execution First.</strong>
            <p>말보다 실행을 우선합니다.</p>
          </article>
          <article className="standard-item">
            <span>02</span>
            <strong>Clarity Over Complexity.</strong>
            <p>복잡함보다 명확함을 선택합니다.</p>
          </article>
          <article className="standard-item">
            <span>03</span>
            <strong>Built to Last.</strong>
            <p>오래가는 결과를 만듭니다.</p>
          </article>
          <article className="standard-item">
            <span>04</span>
            <strong>Details Matter.</strong>
            <p>작은 디테일이 신뢰를 만듭니다.</p>
          </article>
        </div>
      </section>

      <section id="work" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>02 / How we work</p>
          <h2 data-reveal>Structure<br />before noise.</h2>
        </div>
        <div className="work-list">
          {process.map((item) => (
            <article key={item.title} className="work-item" data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section" data-section="light">
        <p className="section-kicker" data-reveal>03 / Fields</p>
        <div className="field-lines" data-reveal>
          {fields.map((field) => (
            <div key={field.title} className="field-row">
              <strong>{field.title}</strong>
              <span>{field.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          Designed to work independently.<br />Built to work together.
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>04 / Contact</p>
        <h2 data-reveal>한번 맡겨보고 싶다면.</h2>
        <div className="contact-links" data-reveal>
          <a href="mailto:henry@hnmspace.com"><span>henry@hnmspace.com</span></a>
          <a href="https://hnmspace.com"><span>hnmspace.com</span></a>
        </div>
      </section>

      <footer data-section="light">
        <img src="/hnm-symbol-black.png" alt="HNM" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
